#include<stdio.h>
int main()
{
    int test;
    scanf("%d",&test);
    while(test--)
    {
        int number,i,leaves=0;
        float branches;
        scanf("%d",&number);
 
        for(i=0;i<number;i++)
        {
            scanf("%d",&leaves);
            if(i!=0)
            {
                branches*=2;
            }
            else{
                    branches=1;
            }
            branches=branches-leaves;
        }
        if(branches==0)
        {
            printf("Yes\n");
        }
        else{
                printf("No\n");
        }
    }
    return 0;
}
 