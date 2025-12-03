#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <cs50.h>

int main(void) {
    FILE *f;
    f = fopen("file.txt", "a");
    fprintf(f,"Hello, file! \n");
    fclose(f);
}
