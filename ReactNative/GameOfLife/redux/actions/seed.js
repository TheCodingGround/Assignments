import actionTypes from '../actionTypes/grid'

var patterns = {
    'blinker': [{x:2,y:2}, {x:2,y:3}, {x:2, y:1}]
}

export const seedWithPattern = (pattern) => {
        var pattern = patterns[pattern];
        return { type: actionTypes.SET_GRID, value: pattern };
}