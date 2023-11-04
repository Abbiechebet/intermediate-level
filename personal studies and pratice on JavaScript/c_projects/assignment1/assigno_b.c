#include <stdio.h>

int main() {
    int choice;

    printf("Welcome to the Creative Music Player!\n");
    printf("Choose a song to play:\n");
    printf("1. Song A - 'Summer Vibes'\n");
    printf("2. Song B - 'Chill Beats'\n");
    printf("3. Song C - 'Rock On'\n");
    printf("4. Song D - 'Classical Symphony'\n");
    printf("5. Quit\n");

    while (1) {
        printf("Enter your choice (1-5): ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Now playing: 'Summer Vibes'\n");
                printf("Artist: Cool Artist\n");
                printf("Duration: 4:32\n");
                // Add playback code for 'Summer Vibes'
                break;
            case 2:
                printf("Now playing: 'Chill Beats'\n");
                printf("Artist: Groovy Musician\n");
                printf("Duration: 3:57\n");
                // Add playback code for 'Chill Beats'
                break;
            case 3:
                printf("Now playing: 'Rock On'\n");
                printf("Artist: Rockstar\n");
                printf("Duration: 5:14\n");
                // Add playback code for 'Rock On'
                break;
            case 4:
                printf("Now playing: 'Classical Symphony'\n");
                printf("Artist: Maestro\n");
                printf("Duration: 6:22\n");
                // Add playback code for 'Classical Symphony'
                break;
            case 5:
                printf("Exiting the Music Player. Thanks for listening!\n");
                return 0;
            default:
                printf("Invalid choice. Please select a valid option (1-5).\n");
        }
    }

    return 0;
}