#include<stdio.h>
#include<math.h>
int main()
{
	int n,x1,x2,x3,y1,y2,y3,arr[101],arr1[101],area,i,j,count;
    scanf("%d",&n);
    for(i=0;i<n;i++)
    {
    	scanf("%d%d%d%d%d%d",&x1,&y1,&x2,&y2,&x3,&y3);
    	area = 0.5 * abs((x1 * y2 - x2 * y1) + (x2 * y3 - x3 * y2) + (x3 * y1 - x1 * y3));
    	arr[i]=area;
	}
   for(i=0;i<n;i++)
   {
   	 arr1[i]=arr[i];
   }
   for(i=0;i<n;i++)
   {
   	 for(j=0;j<n-i-1;j++)
   	 {
   	   if(arr[j]>arr[j+1])
		  {
		  	int tmp=arr[j];
		  	arr[j]=arr[j+1];
		  	arr[j+1]=tmp;
		  }
	 }
   }
count=0;
for(i=0;i<n;i++)
{
	if(arr[0]==arr1[i])
	 count=i;
}
printf("%d ",count+1);
count=0;
for(i=0;i<n;i++)
{
	if(arr[n-1]==arr1[i])
	 count=i;
}
printf("%d\n",count+1);
return 0;
} 