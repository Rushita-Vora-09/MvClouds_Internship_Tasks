import java.util.Scanner;
class Task11 {

    public static void main(String args[]) {

        Scanner sc=new Scanner(System.in);

        System.out.println("Enter number for iteration: ");
        int stop=sc.nextInt(); //9

        while(stop%2==0) {
            System.out.println("Please Enter Odd number for perfact Output: ");
            stop=sc.nextInt();
        }

        for (int i=0; i<=(stop-1)/2; i++) {

            for (int j=0; j<stop; j++) {


                if(i+j>=(stop-1)/2 && j-i<=(stop-1)/2) {
                    if (i>0 && (i+j)%2!=0) {
                        System.out.print(i);
                    }
                    else {
                        System.out.print("·");
                    }
                }
                else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }

        for (int i=((stop-1)/2)-1; i>=0; i--) {

            for (int j=stop-1; j>0; j--) {
                
                if(i+j>=(stop-1)/2 && j-i<=(stop-1)/2) {
                    if ((i!=0) && (i+j)%2!=0) {
                        System.out.print(i);
                    }
                    else {
                        System.out.print("·");
                    }
                }
                else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}