package org.example;

public class ShoppingCartItem {
    private String itemName;
    private double cost;

    public ShoppingCartItem(String itemName, double cost){
        this.itemName = itemName;
        this.cost = cost;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }

    public boolean equals(Object anObject){
        if (anObject instanceof ShoppingCartItem) {
            boolean areEquals =  this.cost == ((ShoppingCartItem) anObject).cost
                    && this.itemName.equals(((ShoppingCartItem) anObject).itemName);

            return areEquals;
        } else return false;
    }
}
