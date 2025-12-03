// Modifies volume of audio file

#include <stdio.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdint.h> // Header file for "uint8_t", "int16_t"

const int HEADER_SIZE = 44; // 44 bytes for header

typedef uint8_t BYTE;
typedef int16_t TWOBYTES;

int main(int argc, char *argv[])
{
    // Check comand-line arguments
    if (argc > 4)
    {
        printf("Usage: ./volume input.wav output.wav factor\n");
        return 1;
    }
    // Open files and determine scaling factor
    FILE *input = fopen(argv[1], "r");
    if(input == NULL)
    {
        printf("Couldn't open the input file\n");
        return 1;
    }

    // Create output file
    FILE *output = fopen(argv[2], "w");
    if (output == NULL)
    {
        printf("Couldn't create the output file\n");
        return 1;
    }

    float factor = atof(argv[3]);

    // Copying .wav header
    BYTE header[HEADER_SIZE];
    fread(header, HEADER_SIZE, 1, input);
    fwrite(header, HEADER_SIZE, 1, output);

    // Read, modyfying and write samples until they end
    TWOBYTES buffer;
    while(fread(&buffer, sizeof(TWOBYTES), 1, input) != 0)
    {
        buffer *= factor;
        fwrite(&buffer, sizeof(TWOBYTES), 1, output);
    }

    // Close files
    fclose(input);
    fclose(output);
}
