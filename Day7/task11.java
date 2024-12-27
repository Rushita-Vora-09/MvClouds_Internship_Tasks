class Task11 {

    public static void main(String args[]) {

        double n = 123.45;
        String s = n + "";
        String newStr = "";

        int dotPosition =0;
        for (int i = 0; i<s.length(); i++) {

            if (s.charAt(i)=='.') {
                dotPosition = i;
            }
            else {
                newStr = s.charAt(i) + newStr;
            }
        }
        String finalStr = newStr.substring(0,dotPosition);
        finalStr += '.'+newStr.substring(dotPosition,newStr.length());
    

        System.out.println("Reverse num is "+finalStr);

    }
}