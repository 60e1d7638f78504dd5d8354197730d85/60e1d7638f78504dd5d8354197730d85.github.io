#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n,i,ans=0,ar[109][26]={},j,flag;
    cin >> n;
    string s;
    for(i=0; i<n; i++)
    {
    cin >> s;
    for(j=0; j<s.size(); j++)
        ar[i][s[j]-'a']++;
    }
    for(i=0; i<26; i++)
    {
    flag=0;
    for(j=0; j<n; j++)
        if(ar[j][i]==0)flag=1;
    if(flag==0)ans++;
    }
    cout << ans << endl;
    return 0;
}
