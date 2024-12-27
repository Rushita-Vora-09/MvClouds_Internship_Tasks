class OddEven {

    public void checkOddEven(int x[]) {
        int flag = 0;
        for (int i : x) {

            if( i%2==0) {
                System.out.println("Not Only Odd Numbers!");
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            System.out.println("Only Odd Numbers!");
        }    
    }
}

class Task8 {

    public static void main(String args[]) {

        int a[] = {3,4,5,12,54,67,33};
        int b[] = {3,7,5,13,57,69,33};
        
        OddEven check = new OddEven();
        check.checkOddEven(a);
        check.checkOddEven(b);
    }
}