import java.util.Scanner;

public class TempConverter {
   
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Convert: (1) Celsius to Fahrenheit, (2) Fahrenheit to Celsius");
            int choice = sc.nextInt();
            
            switch (choice) {
                case 1:
                    {
                        System.out.print("Enter temperature in Celsius: ");
                        double celsius = sc.nextDouble();
                        double fahrenheit = (celsius * 9/5) + 32;
                        System.out.println("Fahrenheit: " + fahrenheit);
                        break;
                    }
                case 2:
                    {
                        System.out.print("Enter temperature in Fahrenheit: ");
                        double fahrenheit = sc.nextDouble();
                        double celsius = (fahrenheit - 32) * 5/9;
                        System.out.println("Celsius: " + celsius);
                        break;
                    }
                default:
                    System.out.println("Invalid choice");
                    break;
            }
            sc.close();
        }
    }
    
}
