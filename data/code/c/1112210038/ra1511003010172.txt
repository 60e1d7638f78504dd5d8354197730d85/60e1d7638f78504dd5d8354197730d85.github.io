#include<stdio.h>
#include<string.h>
int main(void) {
    int t;
    scanf("%d",&t);
    while(t-- >0)
    {
        int n,m,i,j,temp=0;
        char a[1000][1001];
        scanf("%d %d",&n,&m);
        for(i=0;i<n;i++)
            scanf("%s",a[i]);
        for(i=0;i<n;i++)
        {
            for(j=0;j<m;j++)
            {
                if(a[i][j]=='B')
                {
                    if(i<n-1 && a[i+1][j]!='B')
                    {
                        temp=1;
                        break;
                    }
                }
                else if(a[i][j]=='W')
                {
                    if((a[i+1][j]=='A' && i<n-1) || (j<m-1 && a[i][j+1]=='A') || (j>0 && a[i][j-1]=='A'))
                    {
                        temp=1;
                        break;
                    }
                    else if(i==n-1 || j==0 || j==m-1)
                    {
                        temp=1;
                        break;
                    }
                }
            }
            if(temp==1)
                break;
        }
        if(temp==0)
        printf("yes\n");
        else
        printf("no\n");
    }
	return 0;
} 