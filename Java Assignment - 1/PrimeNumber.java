import java.util.Scanner;

public class PrimeNumber {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.print("Enter a number: ");
            int num = sc.nextInt();
            boolean isPrime = num > 1;
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            System.out.println(num + " is " + (isPrime ? "Prime" : "Not Prime"));
            sc.close();
        }
    }
    
}
