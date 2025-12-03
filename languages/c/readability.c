#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void)
{
    string text = get_string("Write an text: ");
    int sentences = 0;
    int words = 0;
    int chars = strlen(text);
    float average_chars_per_word = 0;
    float average_word_per_sentence = 0;

    for (int i = 0; i < chars; i++) {
        if (text[i] == ' ')
        {
            words++;
            average_chars_per_word =  i / words;
        }
        if (text[i] == '.' || text[i] == '!' || text[i] == '?')
        {
            words++;
            average_chars_per_word =  i / words;

            sentences++;
            average_word_per_sentence = words / sentences;
        }
    }

    int index = (0.0588 * average_chars_per_word * 100) - (0.296 * sentences/words * 100) - 15.8;
    printf("Index is %i\n", index);
}
