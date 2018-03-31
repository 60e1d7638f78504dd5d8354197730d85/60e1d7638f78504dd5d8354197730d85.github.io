#include <bits/stdc++.h>

using namespace std;

int N, M;
char S[5002];
char T[5002];
int dp[5002][5002];
int dp2[5002][5002];
bool ok[256];

int main()
{
    scanf("%s", S+1);
    N=strlen(S+1);
    scanf("%s", T+1);
    M=strlen(T+1);
    for(int i=1; i<=N; i++) for(int j=1; j<=M; j++)
    {
        if(S[i]==T[j])
            dp[i][j]=dp[i-1][j-1]+1;
        else
            dp[i][j]=max(dp[i-1][j], dp[i][j-1]);
    }
    for(int i=N; i>=1; i--) for(int j=M; j>=1; j--)
    {
        if(S[i]==T[j])
            dp2[i][j]=dp2[i+1][j+1]+1;
        else
            dp2[i][j]=max(dp2[i+1][j], dp2[i][j+1]);
    }
    int lcs=dp[N][M];
    int ans=0;
    for(int i=0; i<=N; i++)
    {
        for(int j=1; j<=M; j++)
        {
            if(dp[i][j-1]+dp2[i+1][j+1]==lcs)
                ok[(int)T[j]]=true;
        }
        for(int j=0; j<256; j++)
        {
            ans+=ok[j];
            ok[j]=false;
        }
    }
    printf("%d\n", ans);
    return 0;
}
