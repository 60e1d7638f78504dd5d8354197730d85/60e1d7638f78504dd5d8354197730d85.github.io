import java.io.*;
import java.util.Scanner;
public class TestClass {
	 public static void main(String[] args) { 
       int no; 
       Scanner s = new Scanner(System.in);
       no=s.nextInt();
       String aChar = new Character((char) no).toString();
       System.out.println(aChar);
       
		
	}
}