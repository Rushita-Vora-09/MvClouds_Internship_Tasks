import java.util.Scanner;

public class Task14 {

    public static String encrypt(String message, int shift) {
        StringBuilder encrypted = new StringBuilder();
        shift = shift % 26; 

        for (char c : message.toCharArray()) {
            if (Character.isLetter(c)) {
                char base = Character.isLowerCase(c) ? 'a' : 'A';
                c = (char) ((c - base + shift) % 26 + base);
            }
            encrypted.append(c);
        }
        return encrypted.toString();
    }

    public static String decrypt(String encryptedMessage, int shift) {
        return encrypt(encryptedMessage, 26 - (shift % 26));
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the message:");
        String message = scanner.nextLine();

        System.out.println("Enter the shift value:");
        int shift = scanner.nextInt();


        String encryptedMessage = encrypt(message, shift);
        System.out.println("Encrypted Message: " + encryptedMessage);

        String decryptedMessage = decrypt(encryptedMessage, shift);
        System.out.println("Decrypted Message: " + decryptedMessage);

        scanner.close();
    }
}
