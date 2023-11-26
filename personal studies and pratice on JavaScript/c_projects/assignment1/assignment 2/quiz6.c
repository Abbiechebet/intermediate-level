#include <stdio.h>
#include <time.h>

int main() {
    // Get the current time as a time_t object
    time_t currentTime;
    time(&currentTime);

    // Convert the time_t object to a local time structure
    struct tm *localTimeInfo = localtime(&currentTime);

    // Print the calendar time expressed as UTC
    printf("UTC: %s", asctime(gmtime(&currentTime)));

    // Print the calendar time expressed as local time
    printf("Local: %s", asctime(localTimeInfo));

    return 0;
}