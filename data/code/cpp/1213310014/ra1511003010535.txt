#include<bits/stdc++.h>
#include <cstdio>
#define MAX 5000
using namespace std;
map<string,int> mp ;
int main(){
	ios::sync_with_stdio(0);
	int t;
	cin>>t;
	while(t--){
		mp.clear();
		string s,sn,ss ;
		int j;
		cin>>s;
		int l=s.length();
		for(int k=0;k<l;k++){
			ss = "";
			for(int i=0;i<l-k;i++){	
					j = k+i;
					ss = ss + s[j];
					sn = ss ;
					sort(sn.begin() , sn.end());
					mp[sn]++;
			}
		}
		long long int ans = 0 ;
		map<string,int> :: iterator it ;
		for(it = mp.begin() ; it != mp.end() ; it++){
			long long  vl = (long long)(it->second) ;
			if(vl > 1){				
				ans += (vl*(vl-1))/2LL ;
			}
		}
		cout<<ans<<endl;
	}
	return 0;
}