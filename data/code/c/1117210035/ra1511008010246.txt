#include<stdio.h>
 
int main()
 
{
 
int n,i,a,b,c,count,x,y,tmp,flag,gt;
 
scanf("%d",&n);
 
for(i=0;i<n;i++)
 
{
 
count=0;
 
scanf("%d%d%d",&a,&b,&c);
 
x=0;
 
y=0;
 
gt=0;
 
if(a>b)
 
{
 
tmp=a;
 
a=b;
 
b=tmp;
 
}
 
if(c==a||c==b)
 
{
 
printf("1\n");
 
continue;
 
}
 
else if(c>b)
 
{
 
printf("-1\n");
 
continue;
 
}
 
else
 
{
 
gt=0;
 
flag=0;
 
while(gt!=100000)
 
{
 
if(x==0)
 
{
 
x=a;
 
count+=1;
 
}
 
else if(y==b)
 
{
 
y=0;
 
count+=1;
 
}
 
else
 
{
 
if(b-y>=x)
 
{
 
y=y+x;
 
x=0;
 
count+=1;
 
if(y==c||y==(b-c))
 
{
 
printf("%d\n",count);
 
flag=1;
 
break;
 
}
 
}
 
else
 
{
 
x=x+y-b;
 
y=b;
 
count+=1;
 
if(x==c)
 
{
 
printf("%d\n",count);
 
flag=1;
 
break;
 
}
 
}
 
}
 
gt++;
 
 
 
}
 
}
 
if(flag==0)
 
printf("-1\n");
 
 
}
 
return 0;
} 