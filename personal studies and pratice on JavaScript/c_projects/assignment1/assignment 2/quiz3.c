#include <stdio.h>

void printNameRecursive(int n) {
    // Base case: stop recursion when n is 0
    if (n <= 0) {
        return;
    }

    // Print the name
    printf("Fay Barchok\n");

    // Recursive call with decreased n
    printNameRecursive(n - 1);
}

int main() {
    // Call the recursive function to print the name 10 times
    printNameRecursive(10);

    return 0;
}