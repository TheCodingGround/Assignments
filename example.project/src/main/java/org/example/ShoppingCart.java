package org.example;

import java.util.ArrayList;
import java.util.List;

public class ShoppingCart {
    private List<ShoppingCartItem> items = new ArrayList<>();

    public void addItem(String itemName, double cost) {
        items.add(new ShoppingCartItem(itemName, cost));
    }

    public List<ShoppingCartItem> getItems() {
        return items;
    }
}
