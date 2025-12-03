#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <stdbool.h>

const int BLOCKSIZE = 512;

int main(int argc, char *argv[])
{
    // Accept a single command-line argument
    if (argc != 2)
    {
        printf("Usage: ./recover FILE\n");
        return 1;
    }

    // Open the memory card
    FILE *infile = fopen(argv[1], "r");
    if(infile == NULL)
    {
        printf("Couldn't read the file\n");
        return 1;
    }

    uint8_t buffer[BLOCKSIZE]; // Buffer for 512 bytes
    // While there are still data to read

    int filecount = 0;
    char filename[8];
    FILE *outfile = NULL;

    while(fread(buffer, BLOCKSIZE, 1, infile) == 1)
    {
        // If there are jpeg header
        if(buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff)
        {
            if(outfile != NULL) // If there are jpeg finded before - close it
            {
                fclose(outfile);
            }

            // Count filenames
            sprintf(filename, "%03i.jpg", filecount++);

            //Open new file
            outfile = fopen(filename, "w");
        }

        if (outfile != NULL) // Keep writing if new jpeg is found
        {
            fwrite(buffer, BLOCKSIZE, 1, outfile);
        }
    }

    if (outfile != NULL) // Close last opened file
    {
        fclose(outfile);
    }

    fclose(infile);
}
