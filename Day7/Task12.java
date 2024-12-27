interface Parent1 {

    public void parent(); 
}
interface Parent2 {

    public void parent();
}
class Child implements Parent1,Parent2 {
    public void parent() {
        System.out.println("Parent");
    }
    public void child() {
        System.out.println("Child");
    }
}

class Task12  {

    public static void main(String args[]) {

        Child cld=new Child();
        cld.parent();
    }
}
