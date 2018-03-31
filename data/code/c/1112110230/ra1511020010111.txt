 #include <stdio.h>
 
int main()
{
    long int binarynum, octalnum = 0, j = 1, remainder;
    scanf("%ld", &binarynum);
    while (binarynum != 0)
    {
        remainder = binarynum % 10;
        octalnum = octalnum + remainder * j;
        j = j * 2;
        binarynum = binarynum / 10;
    }
    printf("%lo", octalnum);
    return 0;
}