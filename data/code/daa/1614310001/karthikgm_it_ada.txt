#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool compare(pair<char,unsigned long long> A,pair<char,unsigned long long> B)
{
	return A.second > B.second;
}

int main()
{
	int T;
	cin>>T;
	for(;T--;)
	{
		int M,N,cost;
		cin>>M>>N;
		vector<pair<char,unsigned long long> > cutCost;
		for (int i = 0; i < M-1; ++i)
		{
			cin>>cost;
			cutCost.push_back(make_pair('y',cost));
		}
		for (int i = 0; i < N-1; ++i)
		{
			cin>>cost;
			cutCost.push_back(make_pair('x',cost));
		}
		sort(cutCost.begin(),cutCost.end(),compare);

		unsigned long long vcut = 1, hcut = 1, totalcost = 0;

		for (int i = 0; i < cutCost.size(); ++i)
		{
			if(cutCost[i].first == 'y')
			{
				totalcost = (totalcost + ((vcut*cutCost[i].second)%1000000007))%1000000007;
				++hcut;
			}
			else if(cutCost[i].first == 'x')
			{
				totalcost = (totalcost + ((hcut*cutCost[i].second)%1000000007))%1000000007;
				++vcut;
			}
		}
		cout<<totalcost<<"\n";
	}   
    return 0;
}