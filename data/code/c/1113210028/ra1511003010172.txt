#include <stdio.h>

#include<math.h>
int main()
{
	int t,n,i,j;
	scanf("%d",&t);
	while(t--)
	{
		
        scanf("%d",&n);
		int a[n+1];
		int total;
		int m=1000000000+7;
		for(i=0;i<=n;i++)
		{
			scanf("%d",&a[i]);
		}
		int s=0;
		for(i=1;i<n;i++)
		{
			for(j=i+1;j<=n;j++) 
			{
				s=s+(((a[i]%m)*(a[j]%m))%m*((int)pow(2,n-j+i-1)%m))%m;
			}
		}
		int s1=0;  
		for(j=1; j<=n;j++)
		{
			s1=s1+(((a[0]%m)*(a[j]%m))%m*((int)pow(2,n-j)%m))%m;
		}
		total=2*(s+s1);
		printf("%d\n", total);
    
       }
  
return 0;
}