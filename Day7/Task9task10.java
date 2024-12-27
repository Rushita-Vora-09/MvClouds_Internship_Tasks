class GetString {

    public String getString(String s, int n) {
        String arr[]=s.split(" "); 
        return arr[n-1];
    }
}

class Task9Task10 {

    public static void main(String args[]) {

        String s1 = "I Love Java";
        int num1 = 3;
        String s2 = "Hello My World";
        int num2 = 2;
        
        GetString check = new GetString();
        
        System.out.println("Output: "+check.getString(s1,num1));
        System.out.println("Output: "+check.getString(s2,num2));

    }
}