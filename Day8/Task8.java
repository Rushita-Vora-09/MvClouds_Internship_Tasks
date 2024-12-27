import java.util.Scanner;
class Task8 {

    public static void main(String args[]) {

        Scanner sc=new Scanner(System.in);

        System.out.println("Enter number for iteration: ");
        int stop=sc.nextInt(); //9

        for (int i=0; i<=(stop-1)/2; i++) {

            for (int j=0; j<stop; j++) {


                if(i+j==(stop-1)/2 || j-i==(stop-1)/2 || (i==(stop-1)/2 && (j%2==0))) {
                    System.out.print("*");
                }
                else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}