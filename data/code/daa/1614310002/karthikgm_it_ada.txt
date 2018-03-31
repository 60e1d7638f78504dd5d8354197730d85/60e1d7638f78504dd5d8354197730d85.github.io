#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <cstring>
using namespace std;

char in[10005];
int L[128];
int need[128];
char ans[10005];
int ansPos;

using namespace std;

int main()
{
	scanf("%s", in);
    for(int i=0; in[i]; ++i){
        ++L[in[i]];
    }
    int len=strlen(in);
    for(int j=0; j < 128; ++j)
        need[j]=L[j]/2;
    int pos=len-1;
    while(ansPos < len/2){
        bool init=0;
        char best;
        int ind, i;
        for(i=pos; i >= 0; --i){
            if((!init || in[i] < best) && need[in[i]]){
                init=1;
                best=in[i];
                ind=i;
            }
            L[in[i]]--;
            if(L[in[i]] < need[in[i]])
                break;
        }
        for(; i < ind; ++i){
            ++L[in[i]];
        }
        --need[best];
        ans[ansPos++]=best;
		pos=ind-1;
    }
    printf("%s", ans);
	return 0;
}
