#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

const int size = 10;

typedef struct {
string name;
int votes;
} candidate;

int main(int argc, string argv[])
{

if (argc > size)
{
    printf ("Please use less than 9 candidats.\n");
    return 1;
}

candidate candidats[size];

for (int i = 1; i < argc; i++)
{
    candidats[i].name = argv[i];
    candidats[i].votes = get_int("%s - votes: ", candidats[i].name);
}

int highest = candidats[0].votes;

for(int i = 0; i < argc; i++)
{
    if (candidats[i].votes > highest)
    {
        highest = candidats[i].votes;
    }
}

for (int i = 0; i < argc; i++)
if (candidats[i].votes == highest) {
printf("Winner is: %s\n", candidats[i].name);
}
return 0;
}



// Pseudocode
// size of list as constant
// error for over

// type for cands

// loop for creating candidats

// need find hight in arr of my typos

// int highest = i
// loop i
//     if highrst < i
//     highest = i
