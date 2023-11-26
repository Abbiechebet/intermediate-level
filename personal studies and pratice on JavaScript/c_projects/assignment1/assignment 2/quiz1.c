#include <stdio.h>

int main() {
    // Open the file for writing
    FILE *file = fopen("test.txt", "w");

    // Check if the file was opened successfully
    if (file == NULL) {
        printf("Unable to create the file.\n");
        return 1; // Return an error code
    }

    // Input a sentence from the user
    printf("Input a sentence for the file: ");
    
    // Assuming the sentence is not longer than 100 characters
    char sentence[100];
    fgets(sentence, sizeof(sentence), stdin);

    // Write the sentence to the file
    fprintf(file, "%s", sentence);

    // Close the file
    fclose(file);

    printf("The file test.txt created successfully...!\n");

    return 0; // Return success
}
