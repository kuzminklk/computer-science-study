#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main(int argc, string argv[])
{
    if (atoi(argv[1]) > 26 || atoi(argv[1]) < 0)
    {
        printf("Key (arg) must be from 0 to 26");
        return 1;
    }

    int key = atoi(argv[1]);
    string text = get_string("Plain text: ");
    int chars = strlen(text);

    for (int i = 0; i < chars; i++)
    {

    text[i] = tolower(text[i]);

    if (!(text[i] > 122 || text[i] < 97))
    {

    text[i] = (int) text[i] + key;

    if (text[i] > 122)
    {
        text[i] = text[i] - 25;
    }

    if (text[i] < 97)
    {
        text[i] = text[i] + 25;
    }

    }

    // 122 - 97 = 25 ASCII ...
    }

    printf("Ciphertext: %s\n", text);
}
