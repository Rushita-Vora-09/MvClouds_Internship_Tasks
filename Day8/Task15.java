class Task15 {

    public static void main(String args[]) {

        int num=153;
        int n=num;
        int sum=0;
        int r;
        int count=0;

        while (n>0) {
            n/=10;
            count++;
        }
        n=num;
        while (n>0) {

            r = n%10;
            n = n/10;
            sum += Math.pow(r,count);
        }
        if (num==sum)
            System.out.println("ArmStrong Number");
        else
            System.out.println("Not an ArmStrong Number");

    }
}