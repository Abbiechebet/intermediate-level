#include <stdio.h>

int main() {
    int customerId;
    char customerName[100];
    int unitConsumed;
    float amountCharged = 0.0;
    float surcharge = 0.0;
    float netAmount = 0.0;

    // Input customer details
    printf("Enter Customer ID: ");
    scanf("%d", &customerId);
    printf("Enter Customer Name: ");
    scanf("%s", customerName);
    printf("Enter Units Consumed: ");
    scanf("%d", &unitConsumed);

    // Calculate the amount charged based on the given conditions
    if (unitConsumed <= 199) {
        amountCharged = unitConsumed * 1.20;
    } else if (unitConsumed >= 200 && unitConsumed < 400) {
        amountCharged = unitConsumed * 1.50;
    } else if (unitConsumed >= 400 && unitConsumed < 600) {
        amountCharged = unitConsumed * 1.80;
    } else if (unitConsumed >= 600) {
        amountCharged = unitConsumed * 2.00;
    }

    // Check if the bill exceeds 400
    if (amountCharged > 400) {
        surcharge = 0.15 * amountCharged;  // 15% surcharge
    }

    // Calculate the net amount with surcharge and minimum bill
    netAmount = amountCharged + surcharge;
    if (netAmount < 100) {
        netAmount = 100;  // Minimum bill of Ksh. 100
    }

    // Output the results
    printf("Customer ID No: %d\n", customerId);
    printf("Customer Name: %s\n", customerName);
    printf("Units Consumed: %d\n", unitConsumed);
    printf("Amount Charged @Rs. %.2f per unit: %.2f\n", amountCharged, amountCharged);
    printf("Surcharge Amount: %.2f\n", surcharge);
    printf("Net Amount Paid by the Customer: %.2f\n", netAmount);

    return 0;
}