#include <cstdio>
#include <cassert>
#include <cctype>
#include <algorithm>
using namespace std;
const int MAX_N = 100;
const int MAX_T = 100;

int N, T;
char G[MAX_N + 1][MAX_N + 1];

int main(){
  scanf("%d", &T);
  assert(1 <= T && T <= MAX_T);
  while(T--){
    scanf("%d", &N);
    assert(1 <= N && N <= MAX_N);
    bool good = true;
    for(int i = 0; i < N; i++){
      scanf("%s", G[i]);
      sort(G[i], G[i] + N);
      if(i > 0)
        for(int j = 0; j < N; j ++)
          good &= G[i][j] >= G[i - 1][j];
    }
    puts(good ? "YES" : "NO");
  }
  return 0;
}