// Polymorphism: Method Overloading
class MathOperations {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}

// Polymorphism: Method Overriding
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows");
    }
}

public class OopPolymorphism{
    public static void main(String[] args) {
        // Method Overloading
        MathOperations math = new MathOperations();
        System.out.println("Sum (int, int): " + math.add(5, 10));
        System.out.println("Sum (double, double): " + math.add(5.5, 10.5));
        System.out.println("Sum (int, int, int): " + math.add(5, 10, 15));
        
        // Method Overriding
        Animal myAnimal = new Animal();
        myAnimal.makeSound();
        
        Animal myDog = new Dog();
        myDog.makeSound();
        
        Animal myCat = new Cat();
        myCat.makeSound();
    }

}
