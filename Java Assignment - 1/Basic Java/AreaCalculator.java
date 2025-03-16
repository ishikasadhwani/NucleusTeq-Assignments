import java.util.Scanner;

public class AreaCalculator {
     public static void main(String[] args) {
         try (Scanner sc = new Scanner(System.in)) {
             System.out.println("Choose shape one shape(circle, rectangle, triangle):");
             String shape = sc.next();
             switch (shape.toLowerCase()) {
                 case "circle" -> {
                     System.out.print("Enter radius: ");
                     double radius = sc.nextDouble();
                     System.out.println("Area: " + (Math.PI * radius * radius));
                 }
                 case "rectangle" -> {
                     System.out.print("Enter length and breadth: ");
                     double length = sc.nextDouble();
                     double breadth = sc.nextDouble();
                     System.out.println("Area: " + (length * breadth));
                 }
                 case "triangle" -> {
                     System.out.print("Enter base and height: ");
                     double base = sc.nextDouble();
                     double height = sc.nextDouble();
                     System.out.println("Area: " + (0.5 * base * height));
                 }
                 default -> System.out.println("Invalid shape");
             }}
    }
    
}
