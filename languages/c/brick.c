#include <cs50.h>
#include <stdio.h>

int main(void)
{
    // Get size
    int n;
    do
    {
        n = get_int("Size: ");
    }
    while (n < 1);

    for (int i = 0; i < n; i++)
    {
        for (int c = 0; c < n; c++)
        {
            printf("# ");
        }
        printf("\n");
    }

}
