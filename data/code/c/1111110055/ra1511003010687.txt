#include <stdio.h>
int main()
{
   char str[20];
   scanf("%[^\n]%*c", str);
   printf("%s", str);
 
   return 0;
}