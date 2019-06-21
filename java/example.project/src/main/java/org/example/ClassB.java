package org.example;


public class ClassB extends ClassA implements IBlah {
    @Override
    public void helloYou(String name) {
        System.out.println("Hello you " + name);
    }
}
