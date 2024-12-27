import java.util.*;

class Task5 {

    public static void main(String args[]) {

        Scanner sc=new Scanner(System.in);

        System.out.println("Enter odd number for iteration: ");
        int stop=sc.nextInt();

        while(stop%2==0) {
            System.out.println("Please Enter Odd number for perfact Output: ");
            stop=sc.nextInt();
        }
        int mid = (stop-1)/2;

        for (int i=0; i<stop; i++) {

            for (int j=0; j<stop; j++) {


                if(i==mid ||j==mid || (j==0 && i<mid) || (j==stop-1 && i>mid) || (i==0 && j>mid) || (i==stop-1 && j<mid)) {
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