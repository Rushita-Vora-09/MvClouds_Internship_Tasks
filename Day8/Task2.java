class Task2 {

    public static void main(String args[]) {

        char arr[] = {'G','p','R','z','A','O'};

        for (int i=0; i<arr.length; i++) {

            for (int j=0; j<arr.length-1; j++) {

                if (arr[j] > arr[j+1]) {
                    char t=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=t;
                }
            }
        }
        System.out.println(arr);
    }
}