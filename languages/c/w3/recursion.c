#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <cs50.h>

int sum(int x);

int sqroot(int y);

int main()
{
    int n = get_int("Print a number: ");
    printf("Answer: %i\n", sum(n));
}

int sum(int x)
{
    if (x > 0) {
        return x + sum(x - 1);
    }
    else {
        return 0;
    }
}
