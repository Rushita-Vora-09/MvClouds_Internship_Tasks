import java.util.Scanner;
class Task7 {

    public static void main(String args[]) {

        Scanner sc=new Scanner(System.in);

        System.out.println("Enter number for iteration: ");
        int stop=sc.nextInt();
        while(stop<4) {
            System.out.println("Please Enter number greater than 3 for perfact output: ");
            stop=sc.nextInt();
        }

        for (int i=0; i<2*stop-1; i++) {

            for (int j=0; j<stop; j++) {

                if(((i==0 || i==stop-1 || i==(stop-1)*2) && (j!=0 && j!=stop-1)) || ((j==0 || j==stop-1) && (i!=0 && i!=stop-1 && i!=(stop-1)*2))) {
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