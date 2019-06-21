package org.example;

public class Ref {

    private String name = "asdf";

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        return ((Ref)obj).getName() == this.getName();
    }
}
