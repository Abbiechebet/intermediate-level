#include <stdio.h>

int main() {
    FILE *file;
    int numberOfLines, i;

    // Input the number of lines
    printf("Input the number of lines to be written: ");
    scanf("%d", &numberOfLines);

    // Open the file for writing
    file = fopen("test2.txt", "w");

    // Check if the file was opened successfully
    if (file == NULL) {
        printf("Unable to create the file.\n");
        return 1; // Return an error code
    }

    // Input and write each line to the file
    printf(":: The lines are ::\n");
    for (i = 0; i < numberOfLines; i++) {
        char line[100]; // Assuming each line is not longer than 100 characters

        // Input each line from the user
        printf("Enter line %d: ", i + 1);
        scanf(" %[^\n]", line);

        // Write the line to the file
        fprintf(file, "%s\n", line);
    }

    // Close the file
    fclose(file);

    printf("The content of the file test2.txt is:\n\n");

    // Open and display the content of the file
    file = fopen("test2.txt", "r");
    if (file == NULL) {
        printf("Unable to open the file for reading.\n");
        return 1; // Return an error code
    }

    char ch;
    while ((ch = fgetc(file)) != EOF) {
        putchar(ch);
    }

    // Close the file
    fclose(file);

    return 0; // Return success
}
