class Parent {

    String myName="Parent Class";
}
class Child1 extends Parent {

    public void child1() {
        System.out.println(myName);
    }
}
class Child2 extends Child1 {
    public void child2() {
        System.out.println(myName+" in Second Child");
    }
}


class Task6 {

    public static void main(String args[]) {
        System.out.println("Hello...");

        Child2 cld=new Child2();
        cld.child2();
    }
}