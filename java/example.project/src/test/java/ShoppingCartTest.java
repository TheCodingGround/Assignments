import org.example.*;
import org.junit.Assert;
import org.junit.Test;

import java.util.List;

import static junit.framework.TestCase.assertSame;
import static org.junit.Assert.assertEquals;


public class ShoppingCartTest {

    @Test
    public void CanAddAnItemToTheShoppingCart(){
        ShoppingCart cart = new ShoppingCart();

        cart.addItem("Coke", 100.10);

        List<ShoppingCartItem> items = cart.getItems();

        ShoppingCartItem firstItem = items.stream().findFirst().get();

        ShoppingCartItem coke = new ShoppingCartItem("Coke", 100.10);

        assertEquals(firstItem.getCost(), coke.getCost(), 0);
        assertEquals(firstItem.getItemName(), coke.getItemName());
    }


    @Test
    public void referenceExample(){
        ClassA classA = new ClassA();
        ClassB classB = new ClassB();
        ClassC classC = new ClassC();

        classA.hello();
        classB.hello();

        classA.helloYou("Theo");
        classB.helloYou("Theo");

        test(classA);
        test(classB);
        test(classC);
    }

    private void test(IBlah value){
        value.hello();
    }
}

