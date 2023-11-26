#include <stdio.h>

// Function to calculate the area of a rectangle
float calculateArea(float length, float width) {
    return length * width;
}

// Function to calculate the perimeter of a rectangle
float calculatePerimeter(float length, float width) {
    return 2 * (length + width);
}

int main() {
    // Dimensions of the rectangle
    float length = 5.0;
    float width = 3.0;

    // Calculate and print the area
    float area = calculateArea(length, width);
    printf("Area of the rectangle: %.2f square units\n", area);

    // Calculate and print the perimeter
    float perimeter = calculatePerimeter(length, width);
    printf("Perimeter of the rectangle: %.2f units\n", perimeter);

    return 0;
}