class Task12 {

    public static void main(String args[]) {

        String str="My name is Khan";

        String newStr[]=str.split(" ");

        String finalStr="";
        for (String i: newStr) {
            finalStr = i +" "+ finalStr;
        }
        System.out.println(finalStr);
    }
}