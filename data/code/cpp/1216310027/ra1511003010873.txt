#include <bits/stdc++.h>

using namespace std;

int N, K;
int A[100000];
int B[100000];

int main()
{
    scanf("%d%d", &N, &K);
    char c;
    for(int i=0; i<N; i++)
    {
        scanf(" %c", &c);
        A[i]=c-'0';
    }
    for(int i=0; i<N-i-1; i++) if(A[i]!=A[N-i-1])
    {
        if(A[i]>A[N-i-1])
            A[N-i-1]=A[i], B[N-i-1]=1;
        else
            A[i]=A[N-i-1], B[i]=1;
        K--;
    }
    if(K<0)
        printf("-1\n");
    else
    {
        for(int i=0; i<=N-i-1; i++) if(A[i]!=9)
        {
            int cost=2;
            if(i==N-i-1)
                cost=1;
            if(B[i])
                cost--;
            if(i!=N-i-1 && B[N-i-1])
                cost--;
            if(K>=cost)
            {
                K-=cost;
                A[i]=A[N-i-1]=9;
            }
        }
        for(int i=0; i<N; i++)
            printf("%d", A[i]);
        printf("\n");
    }
    return 0;
}
