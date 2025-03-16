// Interfaces and Abstract Classes
interface Vehicle {
    void start();
}

abstract class Car implements Vehicle {
    abstract void fuelType();
}

class ElectricCar extends Car {
    @Override
    public void start() {
        System.out.println("Electric Car is starting...");
    }

    @Override
    public void fuelType() {
        System.out.println("This car runs on electricity.");
    }
}

class PetrolCar extends Car {
    @Override
    public void start() {
        System.out.println("Petrol Car is starting...");
    }

    @Override
    public void fuelType() {
        System.out.println("This car runs on petrol.");
    }
}
public class InterfaceAbstractClass {
    public static void main(String[] args) {
        Car myElectricCar = new ElectricCar();
        myElectricCar.start();
        myElectricCar.fuelType();
        
        Car myPetrolCar = new PetrolCar();
        myPetrolCar.start();
        myPetrolCar.fuelType();
    }
    
}
