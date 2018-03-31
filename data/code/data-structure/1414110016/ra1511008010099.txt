#include <iostream>
using namespace std;

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        long long int n;
        cin>>n;
        int pos[1000001]={0};
        int neg[1000001]={0};
        for(long long int i=0;i<n;i++)
        {
            int x;
            cin>>x;
            if(x>=0)
            pos[x]++;
            else
            neg[-x]++;
        }
        long long int ans=0;
        for(int i=0;i<=1000000;i++)
        {
            if(pos[i]>0)
            {
                ans+= (pos[i]*(pos[i]+1)/2);
            }
            if(neg[i]>0)
            {
                ans+= (neg[i]*(neg[i]+1)/2);
            }
        }
        cout<<ans<<endl;

    }
    return 0;
}