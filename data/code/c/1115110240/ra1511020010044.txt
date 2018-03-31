#include <stdio.h>
 
int main()
{
    long int n,t,q,s,max,i;
    
    scanf("%ld",&n);
    for(t=0;t<n;t++)
    {   
        scanf("%ld %ld",&q,&s);
        max=0;
        for(i=1;i<(s+1);i++)
        {
            if(max<(q%i))
                max=q%i;
        }
        
        printf("%ld\n",max);
    }    
    
    return 0;
} 