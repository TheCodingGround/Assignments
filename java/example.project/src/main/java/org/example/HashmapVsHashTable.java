package org.example;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.Map;

public class HashmapVsHashTable {
    private Hashtable<String,String> hashtable = new Hashtable<>();
    private HashMap<String,String> hashmap = new HashMap<>();

    public void addToHashTable(String key, String value){
        hashtable.put(key, value);
    }

    public String readFromHashTable(String key){
        return getValue(hashtable, key);
    }

    public void addToHashMap(String key, String value){
        hashmap.put(key, value);
    }

    public String readFromHashMap(String key){
        return getValue(hashmap, key);
    }


//    public void hashtable(){
//        hashtable.put("theo", "60");
//
//        String value = getValue(hashtable, "theo");
//
//        System.out.println("I am " + value);
//
//        //Map<String, String> table = new Map()
//    }
//
//    public void hashmap(){
//        hashmap.put("theo", "60");
//
//        String value = getValue(hashmap, "theo");
//
//        System.out.println("I am " + value);
//
//        //Map<String, String> table = new Map()
//    }


    private String getValue(Map<String, String> items, String key){
        return items.get(key);
    }


    public Map<String, String> readAll() {
        return hashmap;
    }
}
