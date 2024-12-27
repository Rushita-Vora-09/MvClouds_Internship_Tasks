// Permutations: (P(n,r)=n!/(n-r)!) 
// Combinations: (C(n,r)=n!/r!(n-r)!)
import java.util.Scanner;

class Task13 {

    public static int factorial(int n) {

        int num=1;
        for (int i=n; i>0 ;i--) {
            num *= i;
        }
        return num;
    }

    public static void main(String args[]) {

        Scanner sc=new Scanner(System.in);

            System.out.println("Enter n for Permutation: ");
            int n=sc.nextInt();

            System.out.println("Enter r for Permutation: ");
            int r=sc.nextInt();

            int factN1 = factorial(n);

            int facrR1 = factorial(r);

            int factNR = factorial(n-r);

            int permutation = factN1 / factNR ;
            int combination = factN1 / (facrR1 * factNR);

            System.out.println("Permutations: "+permutation);
            System.out.println("Combinations: "+combination);
            
    }
}