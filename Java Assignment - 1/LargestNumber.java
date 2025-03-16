import java.util.Scanner;

public class LargestNumber {
     public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter three numbers: ");
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();
            int largest;
            
            if (a > b && a > c) {
                largest = a;
            } else if (b > c) {
                largest = b;
            } else {
                largest = c;
            }
            
            System.out.println("Largest number: " + largest);
            sc.close();
        }
    }
    
}
