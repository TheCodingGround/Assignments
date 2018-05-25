import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {seedWithPattern} from '../../redux/actions/seed'
import {tick} from '../../redux/actions/tick'

const cellState = {ALIVE: 'Alive', DEAD: 'Dead'}

class GameOfLife extends React.Component {
    componentWillMount(){
        this.props.seedWithPattern('blinker');
    }

    start(){
        this.interval = setInterval(() => {
            // if (!this.props.gameState.running){
            //     clearInterval(this.interval);
            //     return;
            // }

            this.props.tick(this.props.gameState.grid);
        }, 1000);
    }

    generateGridToDisplay(){
        const {grid} = this.props.gameState;

        if (grid.length == 0){
            return [
                {x:0, y:0, status:cellState.DEAD},
                {x:0, y:1, status:cellState.DEAD},
                {x:0, y:2, status:cellState.DEAD},
                {x:0, y:3, status:cellState.DEAD},
                {x:0, y:4, status:cellState.DEAD},
                {x:1, y:0, status:cellState.DEAD},
                {x:1, y:1, status:cellState.DEAD},
                {x:1, y:2, status:cellState.DEAD},
                {x:1, y:3, status:cellState.DEAD},
                {x:1, y:4, status:cellState.DEAD},
                {x:2, y:0, status:cellState.DEAD},
                {x:2, y:1, status:cellState.DEAD},
                {x:2, y:2, status:cellState.DEAD},
                {x:2, y:3, status:cellState.DEAD},
                {x:2, y:4, status:cellState.DEAD},
                {x:3, y:0, status:cellState.DEAD},
                {x:3, y:1, status:cellState.DEAD},
                {x:3, y:2, status:cellState.DEAD},
                {x:3, y:3, status:cellState.DEAD},
                {x:3, y:4, status:cellState.DEAD},
                {x:4, y:0, status:cellState.DEAD},
                {x:4, y:1, status:cellState.DEAD},
                {x:4, y:2, status:cellState.DEAD},
                {x:4, y:3, status:cellState.DEAD},
                {x:4, y:4, status:cellState.DEAD},
            ];
        }

        var lowestX = this.getLowest(grid, 'x');
        var highestX = this.getHighest(grid, 'x');
        var lowestY = this.getLowest(grid, 'y');
        var highestY = this.getHighest(grid, 'y');

        var lowest = Math.min(lowestX, lowestY) - 1;
        var highest = Math.max(highestX, highestY) + 1;

        const gridToDisplay = [];

        for (var x = highest; x >= lowest; x--){
            for (var y = lowest; y <= highest; y++){
                const index = grid.find(cell => cell.x == x && cell.y == y);
                const status = index ? cellState.ALIVE: cellState.DEAD;
                const cell = {x, y, status};
                gridToDisplay.push(cell);
            }
        }
        return gridToDisplay;
    }

    getLowest(cells, coordName){
        return cells.reduce((acc,value) => Math.min(acc, value[coordName]), Number.MAX_SAFE_INTEGER);
    }
    
    getHighest(cells, coordName){
        return cells.reduce((acc,value) => Math.max(acc, value[coordName]), Number.MIN_SAFE_INTEGER);
    }

    render(){
        const {running} = this.props.gameState;
        var gridToDisplay = this.generateGridToDisplay();

        return (<View style={{marginTop:50}}>
        <Text>Game Of Life, current state is: {running ? "Running" : "Stopped"} </Text>
        <Button onPress={() => this.start()} title="Start" />
        <View style={{flex:1, width: 250, flexDirection: 'row', flexWrap: 'wrap'}}>
        { gridToDisplay.map(cell => {return (<Text key={cell.x+','+cell.y} style={{width: 50, backgroundColor: cell.status == cellState.ALIVE ? "green" : "red" }}>{cell.status}</Text>); }) }
        
        </View>
        </View>);
    }
}

const mapStateToProps = state => {
    return {gameState: state.gameState}
}

const mapDispatchToProps = dispatch => {return bindActionCreators({ 
    seedWithPattern,
    tick
 }, dispatch)}


export default connect(mapStateToProps, mapDispatchToProps)(GameOfLife)