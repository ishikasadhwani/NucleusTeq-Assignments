
import java.util.Scanner;
public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Enter the element to be searched:");
            int key=sc.nextInt();
            int index = -1;
            
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] == key) {
                    index = i;
                    break;
                }
            }
            System.out.println("Element found at index: " + index);
        }

    }
    
}
