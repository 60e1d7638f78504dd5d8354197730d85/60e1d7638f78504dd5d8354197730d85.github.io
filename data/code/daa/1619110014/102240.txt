#include <stdio.h>

int main(){
int T,N,stone,remaining,day;
scanf("%d",&T);
while(T--)
{
scanf("%d",&N);
day=1;
remaining=N;
    while(1)
    {
        if(remaining==1) 
        break;
        if(remaining==0)
        {day--; break;}
        stone=1;
        while( (stone*2) <= remaining){
            stone = 2*stone;
        }
    remaining = remaining - stone;
    day++;
    }
printf("%d\n",day);
}

return 0;
}
