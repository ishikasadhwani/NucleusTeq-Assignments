import java.util.Scanner;

public class Fibonacci {
     public static void main(String[] args) {
         try (Scanner sc = new Scanner(System.in)) {
             System.out.print("Enter the number of terms in series: ");
             int n = sc.nextInt();
             int a = 0, b = 1;
             System.out.print("Fibonacci Sequence: " + a + " " + b);
             for (int i = 2; i < n; i++) {
                 int next = a + b;
                 System.out.print(" " + next);
                 a = b;
                 b = next;
             }}
    }
    
}
