import java.util.Scanner;

class Task14 {

    public static String encrypt(String msg, int shift) {

        String encrypted = "";
        shift = shift % 26;
        
        for (char c: msg.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isLowerCase(c) ? 'a' : 'A';
                c = (char) ((c - base + shift) % 26 + base);
            }
            encrypted += c;
        }
        return encrypted;
    }

    public static String decrypt(String msg, int shift) {
        return encrypt(msg,shift = 26 - shift % 26);
    }

    public static void main(String args[]) {

        Scanner sc=new Scanner(System.in);

        System.out.print("Enter msg: ");
        String msg=sc.nextLine();

        System.out.print("Enter shift: ");
        int shift=sc.nextInt();

        String encryptedMsg=encrypt(msg, shift);

        System.out.println("Encrypted msg: "+encryptedMsg);

        System.out.println("Decrypted msg: "+decrypt(encryptedMsg,shift));

    }
}