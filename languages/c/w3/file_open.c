#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <cs50.h>

int main(void) {
    FILE *f;
    f = fopen("file.txt", "r");
    char text[200];
    while (fgets(text, 200, f))
    {
    printf("%s", text);
    }
    fclose(f);
}
