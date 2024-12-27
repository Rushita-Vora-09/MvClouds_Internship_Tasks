class Task1 {

    public static void main(String args[]) {

        String str="       WELCOME TO MV CLOUDS";
        String newStr="";
        int flag=0;
        int count=0;
        for (int i=0; i<str.length()-1; i++) {

            if (str.charAt(i)!=' ') {
                flag=1;
                newStr += str.charAt(i);
            }
            else if(flag==1) {
                if ((str.charAt(i)==' ') && (str.charAt(i+1)!=' ')) {
                    newStr += str.charAt(i);
                }
            }
        }
        
        if(str.charAt(str.length()-1)!=' ') {
            newStr += str.charAt(str.length()-1);
        }

        System.out.println(newStr);
    }
}