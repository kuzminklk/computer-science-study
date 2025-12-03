// Implements a dictionary's functionality

#include <ctype.h>
#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>
#include <math.h>

#include "dictionary.h"

unsigned int wcount = 0;

// Prototype
unsigned int size(void);

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
} node;

// Choose number of buckets in hash table
const unsigned int N = 26;

// Hash table
node *table[N];

// Returns true if word is in dictionary, else false
bool check(const char *word)
{
    int windex = hash(word);
    node *cursor = table[windex];

    while(cursor != NULL)
    {
        if (strcasecmp(word, cursor->word) == 0)
        {
            return true;
        }

        cursor = cursor->next;
    }
    return false;
}

// Hashes word to a number
unsigned int hash(const char *word)
{
    // TODO: Improve this hash function
    return toupper(word[0]) - 'A';
}

// Loads dictionary into memory, returning true if successful, else false
bool load(const char *dictionary)
{
    // Open the dictionary file
    FILE *source = fopen(dictionary, "r");

    // Check if file was opened
    if(source == NULL)
    {
        printf("Couldn't open the file\n");
        return false;
    }

    char wbuffer[LENGTH+1]; // Buffer for a word

    // Seek for a word in file and add it to the hash table
    while(fscanf(source, "%s", wbuffer) != EOF) // Loop through file and take char
    {
        //  Create memory for new node
        node *n = malloc(sizeof(node));

        // Check if we allocate memory
        if (n == NULL)
        {
            printf("Memory initialization error\n");
            return false;
        }

        // Hash the word to obtain its hash value
        int whash = hash(wbuffer);

        // Copy word into the node
        strcpy(n->word, wbuffer);
        n->next = NULL;

        // Insert the new node into the hash table (using the index specified by its hash value)
        if (table[whash] == NULL)
        {
            table[whash] = n;
        }
        else
        {
            n->next = table[whash];
            table[whash] = n;
        }
        wcount++;

    }

    // Close the dictionary file
    fclose(source);
    return true;
}

// Returns number of words in dictionary if loaded, else 0 if not yet loaded
unsigned int size(void)
{
    return wcount;
}

// Unloads dictionary from memory, returning true if successful, else false
bool unload(void)
{
    for (int i = 0; i < N; i++)
    {

        node *tmp = table[i];
        node *cursor = table[i];

        while(tmp != NULL)
        {
            cursor = cursor->next;
            free(tmp);
            tmp = cursor;
        }

    }

    return true;

}
