package console;

// You need to import the HashMap type. How does that import statement look?

import java.util.Scanner;
import java.util.HashMap;
import java.util.ArrayList;

/* *************************************************************************** 
 *
 * To start, wrap your code in an infinite loop. What does this look like?
 *
 *****************************************************************************/

/* *************************************************************************** 
 *
 * Next, create a map to store student information. Put the key/value pairs
 *   as you collect information from the user.
 *
 *****************************************************************************/

public class ConsoleIO {

  public static void main(String[] args) {

    // Wrap everything you have in an infinite loop.
    
    /* ************************************************************************
     *
     * Initialize the Scanner we'll need. 
     *
     *   You'll also want to create your student HashMap here. What key/value 
     *   types do you use for it? 
     *
     *   Finally, initialize an ArrayList of students. Inside of the 
     *   <Type Brackets>, put the type of the HashMap you created. This isn't
     *   hard, but it will look weird--ask a TA to verify if your solution is 
     *   correct!
     *
     *************************************************************************/
    ArrayList<HashMap<String, String>> students = new ArrayList<HashMap<String, String>>();
    while (true) {
      HashMap<String, String> student = new HashMap<>();
        
      Scanner input = new Scanner(System.in);


      System.out.print("Please enter the student's first name. ");
      // String firstName = input.next();
      student.put("firstName", input.next());

      System.out.print("Please enter the student's last name. ");
      // String lastName = input.next();
      student.put("lastName", input.next());

      System.out.print("Please enter the student's middle initial. ");
      // String middleInitial = input.next();
      student.put("middleInitial", input.next());
      input.nextLine(); // Strip the newline.

      // ---- CONTACT INFORMATION ----
      
      System.out.print("Please enter the student's address. ");
      // String address = input.nextLine();
      student.put("address", input.nextLine());

      System.out.print("Please enter the student's email. ");
      // String email = input.next();
      student.put("email", input.next());

      System.out.print("Please enter the student's phone number. ");
      // String phoneNumber = input.next();
      student.put("phoneNumber", input.next());

      // ---- PRINT  ----
      student.forEach((k,v)-> System.out.println(String.format("%1$s: %2$s", k, v)));

      // Don't change this confirmation code just yet!
      System.out.print("Is this information correct?");
      String confirmation = input.next();
    }
  }

}
