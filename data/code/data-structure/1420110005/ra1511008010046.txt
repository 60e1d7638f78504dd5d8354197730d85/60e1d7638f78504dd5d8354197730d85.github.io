#include <bits/stdc++.h>
using namespace std;
int main()
{
    int test;
    cin>>test;
    while(test--)
    {
        string S,T;
        cin>>S>>T;
        int hashS[256]={0};
        int hashT[256]={0};
        for(int i=0;i<S.size();i++)
            hashS[S[i]]++;
        for(int i=0;i<T.size();i++)
            hashT[T[i]]++;
        int count=0;
        for(int i=0;i<256;i++)
        {
            count = count + abs (hashT[i]-hashS[i]);
        }   
        cout<<count<<endl;
    }
    return 0;
}