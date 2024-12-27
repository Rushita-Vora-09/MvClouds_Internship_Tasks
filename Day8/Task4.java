import java.util.Scanner;
class Task4 {

    public static void main(String args[]) {

        Scanner sc=new Scanner(System.in);

        System.out.println("Enter number for iteration: ");
        int stop=sc.nextInt();

        for (int i=0; i<stop; i++) {

            for (int j=0; j<=i; j++) {

                if(i==j||i==stop-1||j==0) {
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

import java.util.Scanner;
        Scanner sc=new Scanner(System.in);

        System.out.println("Enter number for iteration: ");
        int stop=sc.nextInt();