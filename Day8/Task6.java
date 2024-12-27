import java.util.Scanner;
class Task6 {

    public static void main(String args[]) {

        Scanner sc=new Scanner(System.in);

        System.out.println("Enter number for iteration: ");
        int stop=sc.nextInt();

        int mid = (stop-1)/2;
        int count=mid;
        for (int i=0; i<=mid; i++) {

            for (int j=0; j<stop; j++) {


                if((i+j)==mid || (i+j)==stop-1 || (i==0 && (j>mid && j<stop-1)) ||(i==mid && (j>=0 && j<=mid))) {
                    System.out.print("* ");
                }
                else {
                    System.out.print("  ");
                }
            }
            count--;
            System.out.println();
        }
        
    }
}