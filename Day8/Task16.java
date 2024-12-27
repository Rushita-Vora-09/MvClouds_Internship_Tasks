class Task16 {

    public static int countCases(int dice, int count) {

        if(dice==0) {
            return count == 0 ? 1: 0;
        }
        if (count < 0) {
            return 0;
        }

        int combinations = 0;
        for(int face=1; face<=6; face++) {
            combinations += countCases(dice-1, count-face);
        }
        return combinations;

    }
    public static void main(String args[]) {

        // System.out.println(countCases(-3,4)); // Output: 3
        // System.out.println(countCases(6,20)); // Output: 4221
        System.out.println(countCases(1500,200)); // Output: 4221


    }
}