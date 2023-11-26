#include <stdio.h>
#include <ctype.h>
#include <string.h>

// Function to convert a string to uppercase
void convertToUppercase(char *str) {
    while (*str) {
        *str = toupper((unsigned char)*str);
        str++;
    }
}

int main() {
    // Declare a string to store the input
    char inputString[1000];

    // Input a string in lowercase
    printf("Input a string in lowercase: ");
    fgets(inputString, sizeof(inputString), stdin);

    // Remove newline character if present
    if (inputString[strlen(inputString) - 1] == '\n') {
        inputString[strlen(inputString) - 1] = '\0';
    }

    // Convert the string to uppercase
    convertToUppercase(inputString);

    // Display the result
    printf("\nHere is the above string in uppercase:\n%s\n", inputString);

    return 0;
}