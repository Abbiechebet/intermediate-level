#include <stdio.h>

int main() {
    int rollNo;
    char name[50];
    int physicsMarks, chemistryMarks, computerMarks, totalMarks;

    // Input roll number
    printf("Input the roll number of the student: ");
    scanf("%d", &rollNo);

    // Clear the input buffer
    while (getchar() != '\n');

    // Input student name
    printf("Input the name of the student: ");
    scanf("%[^\n]", name);

    // Input marks for three subjects
    printf("Input the marks of physics, chemistry, and computer application: ");
    scanf("%d %d %d", &physicsMarks, &chemistryMarks, &computerMarks);

    // Calculate total marks
    totalMarks = physicsMarks + chemistryMarks + computerMarks;

    // Output the information
    printf("\nExpected output:\n");
    printf("roll no : %d\n", rollNo);
    printf("name of student: %s\n", name);
    printf("marks in physics: %d\n", physicsMarks);
    printf("marks in chemistry: %d\n", chemistryMarks);
    printf("marks in computer application: %d\n", computerMarks);
    printf("total marks : %d\n", totalMarks);

    return 0;
}