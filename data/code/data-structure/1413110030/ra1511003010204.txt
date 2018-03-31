#include<bits/stdc++.h>
using namespace std;
#define xx first
#define yy second
#define ll long long
int n,q;
vector<pair<pair<ll,ll>,ll> >mnt;
ll val=0;
ll ans(ll x)
{
	int l=0,r=n-1;
	while(l<=r)
	{
		int mid=(l+r)>>1;
		if(mnt[mid].xx.xx<=x && mnt[mid].xx.yy>=x)
			return mnt[mid].yy+x-mnt[mid].xx.xx;
		else if(mnt[mid].xx.xx>x)
			r=mid-1;
		else if(mnt[mid].xx.yy<x)
			l=mid+1;
	}
}
int main()
{
	cin>>n>>q;
	for(int i=0;i<n;i++)
	{
		ll t,temp;
		cin>>t>>temp;
		mnt.push_back(make_pair(make_pair(val+1,temp-t+val+1),t));
		val=temp-t+val+1;
	}
	while(q--)
	{
		ll x;
		cin>>x;
		cout<<ans(x)<<"\n";
	}
	return 0;
}