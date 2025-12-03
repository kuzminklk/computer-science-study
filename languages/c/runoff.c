#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int winner(int num, int election[], int argc, string argv[]);

int main(int argc, string argv[])
{
    int num = get_int("Number of voters: ");
    int election[argc-1][num];

    for (int i = 0; i < argc-1; i++) //For every candidate
    {
        for (int j = 0; j < num; j++) //For every voter
        {
            election[i][j] = get_int("Candidate \"%s\", voter %i, rank: ", argv[i+1], j+1);
        }
        printf("\n");
        winner(num, election, argc, argv);
    }
}

int winner(int num, int election[], int argc, string argv[])
{
    for (int i = 0; i < argc-1; i++) //For every candidate
    {
        int count = 0;
        for (int j = 0; j < num; j++) //For every voter
        {
            count += election[i][j];
        }
        if((float) count <= (float) argc * 1.5)
        {
            printf("Winner is %s \n", argv[i+1]);
        }
        else {
            dicrease cand
        }
    }
}

int decrease(int num, int election[][], int argc, string argv[])
{
    for (int i = 0; i < argc-1; i++) //For every candidate
    {
        int count = 0;
        for (int j = 0; j < num; j++) //For every voter
        {
            count += election[i][j];
        }
        if((float) count <= (float) argc * 1.5)
        {
            printf("Winner is %s \n", argv[i+1]);
        }
    }
}
