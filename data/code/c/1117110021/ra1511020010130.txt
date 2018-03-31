#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
int main()
{
    int a[100][100],n,c=0,d=0,i,j,sum=0;
    scanf("%d",&n);
    for(i=0;i<n;i++)
        for(j=0;j<n;j++)
            scanf("%d",&a[i][j]);
    for(i=0;i<n;i++)
         c=c+a[i][i];        
    for(i=0;i<n;i++)
         d=d+a[i][n-1-i];
    sum=abs(c-d);
    printf("%d",sum);
          
    return 0;
}