#include <stdio.h>

int main(void)
{
    char* str = "Hello World!";
    printf("%c\n", *str);
    printf("%c\n", *(str+1));
    printf("%c\n", *(str+2));
    // So on..
}
