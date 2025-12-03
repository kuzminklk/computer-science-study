#include <cs50.h> // For string type, get_int()
#include <string.h> // For strcmp()
#include <stdio.h>
#include <stdbool.h> // Bool type

const int MAX_VOTERS = 10;
const int MAX_CANDIDATS = 5;


typedef struct {
    string name;
    int votes;
    bool eliminated;
} candidate;


int preferences[MAX_VOTERS][MAX_CANDIDATS];
int candidate_count = 0;
int voter_count = 0;

candidate candidates[MAX_CANDIDATS];


// Prototypes
bool vote(int voter, int rank, string name);
void tabulate(void);
bool print_winner(void);
int find_min(void);
bool is_tie(int min);
void eliminate(int min);


int main(int argc, string argv[])
{

candidate_count = argc - 1; //Get candidats count

if(argc - 1 > MAX_CANDIDATS) // Max candidats check
{
    printf("Max candidats is %i\n", MAX_CANDIDATS);
    return 1;
}

for(int i = 0; i < candidate_count; i++) // Get candidats from argv[] and set their names
{
    candidates[i].name = argv[i+1];
    candidates[i].votes = 0;
    candidates[i].eliminated = false;
}

voter_count = get_int("Number of voters: "); //Get voters number
if(voter_count > MAX_VOTERS) // Max voters check
    {
        printf("Max voters is %i\n", MAX_VOTERS);
        return 2;
    }

// Set our ranks!
for(int a = 0; a < voter_count; a++) // We sort through voters
{
    for(int b = 0; b < candidate_count; b++) // We sort through ranks
    {
        string name = get_string("Voter %i Rank %i is: ", a+1, b+1);
        if (!vote(a, b, name))
        {
            return 3;
        }
    }
    printf("\n");
}



while(1)
{
tabulate();
int min = find_min();

if (print_winner())
{
    return 0;
}
else
{
    eliminate(min);
}

if(is_tie(min))
{
    printf("Election is in tie\n");
    return 4;
}

}

}


bool vote(int voter, int rank, string name) //Parse our votes
{
    for(int i = 0; i < candidate_count; i++) // We sort through candidats array and compare
    {
        if(strcmp(name, candidates[i].name) == 0)
        {
            preferences[voter][i] = rank;
            return true;
        }
    }
        printf("Uncorrect candidat name\n");
        return false;
}

void tabulate(void) //Tabulate votes from preferences to candidats struct
{
    for(int i = 0; i < voter_count; i++) // We sort through voters
    {
        for(int j = 0; j < candidate_count; j++) // We sort through candidats
        if (preferences[i][0] == j) //Mark if there are vote for candidate
        {
            if (candidates[j].eliminated == false)
            {
            candidates[j].votes++;
            }
        }
    }
}

bool print_winner(void) // Print winner if it is, otherwise return false
{
    for(int j = 0; j < candidate_count; j++) // We sort through candidats
    {
        if((float) candidates[j].votes > (float) voter_count/2) // Check for 50%+ votes
        {
            printf("%s is winner!\n", candidates[j].name);
            return true;
        }
        else
        {
            return false;
        }
    }
    return false;
}

int find_min(void) //Find minimum votes from any candidate
{
    int minvotes = voter_count; //Max possible votes for start point
    for(int j = 0; j < candidate_count; j++) // We sort through candidats
    {
        if (candidates[j].votes < minvotes && candidates[j].eliminated == false)
        {
            minvotes = candidates[j].votes;
        }
    }
    return minvotes;
}

bool is_tie(int min) //Check if electiont is in a tie
{
    for(int j = 0; j < candidate_count; j++) // We sort through candidats
    {
       if(candidates[j].votes != min && candidates[j].eliminated == false)
       {
            return false;
       }
    }
    return true;
}

void eliminate(int min) //Eliminate candidate with min votes
{
     for(int j = 0; j < candidate_count; j++) // We sort through candidats
    {
        if(candidates[j].votes == min)
        {
            candidates[j].eliminated = true;
        }
    }
}
