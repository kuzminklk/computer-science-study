#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>


const int scr[] = {1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10};
const string alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

int score(string str);


int main(void)
{
string p1 = get_string("Player 1: ");
string p2 = get_string("Player 2: ");

printf("Player 1 score is - %i\n", score(p1));
printf("Player 2 score is - %i\n", score(p2));
}


int score(string str)
{
int sum = 0;
for (int i = 0; i < strlen(str); i++)
{
    for (int l = 0; l < strlen(alph); l++)
    {
        if (toupper(str[i]) == alph[l])
        {
            sum = sum + scr[l];
        }
    }

}
return sum;
}
