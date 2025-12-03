#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <cs50.h>

struct car {
    string color;
    int number;
    string mark;
};

int main(void) {
    struct car car1;
    car1.color = "red";
    car1.number = 11223;
    car1.mark = "Dodge";
}
