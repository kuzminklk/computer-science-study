#include "helpers.h"
#include <math.h>

int smaller(int i, int j);

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{
    // Loop over all pixels
    for (int i = 0; i < height; i++)
    {
        for(int j = 0; j < width; j++)
        {
            // Take average of r,g,b
            int average = (int) (image[i][j].rgbtRed + image[i][j].rgbtGreen + image[i][j].rgbtBlue)/3;

            // Update pixels value
            image[i][j].rgbtRed = image[i][j].rgbtGreen = image[i][j].rgbtBlue = average;
        }
    }
    return;
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{
     // Loop over all pixels
    for (int i = 0; i < height; i++)
    {
        for(int j = 0; j < width; j++)
        {
            int sepiaRed = smaller((.393 * image[i][j].rgbtRed + .769 * image[i][j].rgbtGreen + .189 * image[i][j].rgbtBlue), 255);
            int sepiaGreen = smaller((.349 * image[i][j].rgbtRed + .686 * image[i][j].rgbtGreen + .168 * image[i][j].rgbtBlue), 255);
            int sepiaBlue = smaller((.272 * image[i][j].rgbtRed + .534 * image[i][j].rgbtGreen + .131 * image[i][j].rgbtBlue), 255);

            image[i][j].rgbtRed = sepiaRed;
            image[i][j].rgbtGreen = sepiaGreen;
            image[i][j].rgbtBlue =sepiaBlue;
        }
    }


    return;
}

// Reflect image horizontally
void reflect(int height, int width, RGBTRIPLE image[height][width])
{
         // Loop over all pixels
    for (int i = 0; i < height; i++) //Iterate through rows
    {
        RGBTRIPLE temprow[width]; // Temporary RGBTRIPLE array for 1 row

        for(int j = 0; j < width; j++) //Iterate through pixels in row
        {
            // Fill the temporary array
            temprow[j].rgbtRed = image[i][j].rgbtRed;
            temprow[j].rgbtGreen = image[i][j].rgbtGreen;
            temprow[j].rgbtBlue = image[i][j].rgbtBlue;
        }

        for(int j = 0; j < width; j++) //Iterate through pixels in temporary row and place to opposite side
        {
            image[i][j].rgbtRed = temprow[width - j].rgbtRed;
            image[i][j].rgbtGreen = temprow[width - j].rgbtGreen;
            image[i][j].rgbtBlue = temprow[width - j].rgbtBlue;
        }

    }
    return;
}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE blurred_image[height][width];

    for (int col = 0; col < height; col++)
    {
        for (int row = 0; row < width; row++)
        {
            double sumRed = 0;
            double sumGreen = 0;
            double sumBlue = 0;
            double divider = 0;

            for (int y = col - 1; y <= col + 1; y++)
            {
                for (int x = row - 1; x <= row + 1; x++)
                {
                    if ((y >= 0 && y < height) && (x >= 0 && x < width))
                    {
                        sumRed = image[y][x].rgbtRed + sumRed;
                        sumGreen = image[y][x].rgbtGreen + sumGreen;
                        sumBlue = image[y][x].rgbtBlue + sumBlue;
                        divider++;
                    }
                }
            }

            blurred_image[col][row].rgbtRed = round((sumRed / divider));
            blurred_image[col][row].rgbtGreen = round((sumGreen / divider));
            blurred_image[col][row].rgbtBlue = round((sumBlue / divider));
        }

    }

    for (int i = 0; i < height; i++) //Copying blured version to original
    {
        for (int j = 0; j < width; j++)
        {
            image[i][j].rgbtRed = blurred_image[i][j].rgbtRed;
            image[i][j].rgbtGreen = blurred_image[i][j].rgbtGreen;
            image[i][j].rgbtBlue = blurred_image[i][j].rgbtBlue;
        }
    }
    return;
}

int smaller(int i, int j)
{
    if (i < j)
    {
        return i;
    }
    else
    {
        return j;
    }
}
