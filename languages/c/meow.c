#include <stdio.h>
#include <cs50.h>

void meow(int c);

int main(void)
{
    int n = get_int("How many time should i say Meow?");
    meow(n);
}

void meow(int c)
{
    for (int i = 0; i < c; i++)
    {
    printf("Meow!");
    }
}
