class BankAccount {
    @SuppressWarnings("FieldMayBeFinal")
    private String accountHolder;
    private double balance;

    public BankAccount(String accountHolder, double balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    // Getter method
    public double getBalance() {
        return balance;
    }

    // Setter method
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: " + amount);
        } else {
            System.out.println("Invalid deposit amount.");
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Invalid withdrawal amount or insufficient funds.");
        }
    }

    public void displayAccountInfo() {
        System.out.println("Account Holder: " + accountHolder + ", Balance: " + balance);
    }
}
public class Encapsulation {
    public static void main(String[] args) {
        BankAccount myAccount = new BankAccount("John Doe", 5000);
        myAccount.displayAccountInfo();
        
        myAccount.deposit(1500);
        myAccount.withdraw(2000);
        myAccount.displayAccountInfo();
    }
    
}
