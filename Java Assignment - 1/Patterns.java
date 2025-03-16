import java.util.Scanner;

public class Patterns {
    
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter size of pattern: ");
            int size = sc.nextInt();
            
            // Triangle pattern
            System.out.println("Triangle Pattern:");
            for (int i = 1; i <= size; i++) {
                for (int j = 1; j <= i; j++) {
                    System.out.print("* ");
                }
                System.out.println();
            }
            
            // Square pattern
            System.out.println("Square Pattern:");
            for (int i = 1; i <= size; i++) {
                for (int j = 1; j <= size; j++) {
                    System.out.print("* ");
                }
                System.out.println();
            }
            sc.close();
        }
    }
    
}
