class Task3 {

    public static void main(String args[]) {

        char arr[] = {98,32,72,94,75,73,92,36,28,34};

        int biggest=0;
        int secondBiggest=0;

        for (int i: arr) {
            if (i > biggest) {
                secondBiggest = biggest;
                biggest = i;
            }
            else if (i<biggest && i>secondBiggest) {
                secondBiggest = i;
            }
        }
        System.out.println("Second Biggest number is: "+secondBiggest);
    }
}