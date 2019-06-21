package org.example;

import com.sun.org.apache.bcel.internal.generic.NEW;

import java.util.ArrayList;
import java.util.List;

public class Main {
    private List<String> arguments;

    public static void main(String[] args){
        System.out.println(args);

        EnumExample currentState = EnumExample.NEW;

        if (currentState == EnumExample.NEW){
            //do this
        }


        ArrayList<String> str = new ArrayList<>();
        str.add("Hello");

        //OurList<String> ourList = new OurList();

        printList(str);
        //printList(ourList);
    }

    public static void printList(List<String> list){
        System.out.println(list);
    }


}
