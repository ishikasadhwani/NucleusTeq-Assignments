class Student {
    String name;
    int rollNumber;
    double marks;

    public Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    public void displayDetails() {
        System.out.println("Name: " + name + ", Roll Number: " + rollNumber + ", Marks: " + marks);
    }
}

class GraduateStudent extends Student {
    String projectTopic;

    public GraduateStudent(String name, int rollNumber, double marks, String researchTopic) {
        super(name, rollNumber, marks);
        this.projectTopic = researchTopic;
    }

    @Override
    public void displayDetails() {
        super.displayDetails();
        System.out.println("Project Topic: " + projectTopic);
    }
}
public class OOP {
    public static void main(String[] args) {
        // Creating Student object
        Student student = new Student("John Doe", 101, 85.5);
        student.displayDetails();
        
        // Creating GraduateStudent object
        GraduateStudent gradStudent = new GraduateStudent("Alice Smith", 102, 90.0, "Machine Learning");
        gradStudent.displayDetails();
    }
    
}
