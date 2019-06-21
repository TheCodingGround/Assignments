package org.example;

import org.junit.Test;

import java.util.Map;

public class HashmapVsHashTableTest {
    public void increment(Ref r) {
        r.setName("blah");
    }

    @Test
    public void compare(){
        Ref r1 = new Ref();
        Ref r2 = new Ref();
        r1.setName("Theo");
        r2.setName("Theo");

        System.out.println(r1.equals(r2));
    }

    @Test
    public void boxing2() {
        Ref r = new Ref();

        r.setName("ffff");

        increment(r);

        System.out.println(r.getName());
    }

    public void increment(int i){
        i = 444;
    }


    @Test
    public void boxing(){
        int i = 123;
        increment(i);
        System.out.println(i);
    }


    @Test
    public void hashtable() throws InterruptedException {
        HashmapVsHashTable a = new HashmapVsHashTable();

        System.out.println("1");
        for (int i = 0; i < 1000; i++) {
            ThreadClass t = new ThreadClass(a, i);
            t.start();
        }

        System.out.println("2");
        for (int i = 1000; i < 2000; i++) {
            ThreadClass t = new ThreadClass(a, i);
            t.start();
        }

        for (int i = 2000; i < 3000; i++) {
            ThreadClass t = new ThreadClass(a, i);
            t.start();
        }

        for (int i = 3000; i < 4000; i++) {
            ThreadClass t = new ThreadClass(a, i);
            t.start();
        }

        Map<String,String> table = a.readAll();

        for (int i = 0; i < table.size(); i++) {
            System.out.println(table.get(Integer.toString(i)));
        }
    }
}