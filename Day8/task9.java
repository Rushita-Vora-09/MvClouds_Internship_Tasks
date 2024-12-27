import java.util.Scanner;
class Task9 {

    public static void main(String args[]) {

        Scanner sc=new Scanner(System.in);

        System.out.println("Enter number for iteration: ");
        int stop=sc.nextInt();
        while(stop%2==0) {
            System.out.println("Please Enter Odd number for perfact Output: ");
            stop=sc.nextInt();
        }

        for (int i=0; i<stop; i++) {

            for (int j=0; j<stop; j++) {

                if(i==j || j==0 || j==stop-1 ||i+j==stop-1) {
                    System.out.print("* ");
                }
                else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
        
    }
}