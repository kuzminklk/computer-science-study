#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int counter = 0;
    int amount = get_int("What's change? ");

    // For 50's
    while (amount >= 50)
    {
        amount = amount - 50;
        counter++;

    // For 25's
    }
     while (amount >= 25)
    {
        amount = amount - 25;
        counter++;
    }

    //For 10's
    while (amount >= 10)
    {
        amount = amount - 10;
        counter++;
    }

    //For 5's
    while (amount >= 5)
    {
        amount = amount - 5;
        counter++;
    }

    //For 1's
    while (amount >= 1)
    {
        amount = amount - 1;
        counter++;
    }

    printf("Amount of coins is: %i \n", counter);
}
