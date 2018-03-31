#include <stdio.h>
 
int main()
{
   int n,a[100],i,id[100],t=0,k,l,j,si,diff,pre;
   scanf("%d",&n);
   for(i=0;i<n;i++)
   {
   	scanf("%d",&a[i]);
   }
   for(i=0;i<n;i++)
   {
   	scanf("%d",&id[i]);
   }
   for(j=0;j<n;j++)
   {
   	si=j;
   	for(i=j;i<n;i++)
   	{
   		if(a[i]==id[j])
   		{
   		diff=i-si;
   		l=si;
   		for(k=0;k<diff;k++)
   		{
   			l=si;
   			pre=a[si];
   			while(l<=n-1)
   			{
   			a[l]=a[l+1];
   			l++;
   			}
   			a[n-1]=pre;
   		}
   		//for(i=0;i<n;i++)
	 //	{
//   	printf("%d ",a[i]);
//		 }
 
			t=t+diff+1;
   		}
   	//	t++;
   	}
   }
   printf("%d",t);
    return 0;
}