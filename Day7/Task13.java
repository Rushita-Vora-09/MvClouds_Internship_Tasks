class Task13 {
    public static void main(String args[]) {

        StringBuffer sb=new StringBuffer();
        sb.append("String");
        sb.append(" ");
        sb.append("Buffer");

        String s=sb.toString();
        System.out.println(s);

        sb.delete(0,13);
        System.out.println(sb+" StringBuffer Deleted");
    }
}