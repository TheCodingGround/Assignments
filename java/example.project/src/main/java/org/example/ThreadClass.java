package org.example;


public class ThreadClass extends Thread {
    private HashmapVsHashTable a;
    private Integer i;

    public ThreadClass(HashmapVsHashTable a,Integer i) throws InterruptedException {
        this.a = a;
        this.i = i;
    }

    public void add(String key, String value){
        System.out.println("Adding " + key);
        a.addToHashMap(key, value);
    }

    public String read(String key){
        return a.readFromHashMap(key);
    }

    @Override
    public void run() {
        long sleepTime = Math.round(Math.random()*10);
        try {
            Thread.sleep(sleepTime);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        a.addToHashMap(Integer.toString(i), Integer.toString(i));
    }
}
