package users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
public class UsersController {



    private ArrayList<User> users = new ArrayList<>();

    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> users() {
        return users;
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public User user(@RequestParam(value = "firstName") String firstName) {
        Optional<User> foundUser = users
                .stream()
                .filter(user -> user.getFirstName().toLowerCase().equals(firstName.toLowerCase())).findFirst();

        return foundUser.orElse(null);
    }

    @Autowired
    @PostMapping("/user")
    public void user(@RequestBody User user) {
        System.out.println(user.getFirstName());
        System.out.println(user.getLastName());
        users.add(user);
    }
}
