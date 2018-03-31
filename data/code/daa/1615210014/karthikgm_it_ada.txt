#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
 
#define MIN(a,b) (((a)<(b))?(a):(b))
#define MAX(a,b) (((a)>(b))?(a):(b))
#define FI(i,s,n) for(i=s;i<=n;i++)
#define FD(i,n,s) for(i=n;i>=s;i--)
#define MA 1000000000000000000 // 1e18
#define M  1000000007
#define MM 2000000000
#define N  3000
#define K  5
 
typedef long long ll;
typedef long double ld;
 
typedef struct { ll a, b, c; } ll2;
ll n,m;
ll a[N];
ll b[N];
ll s[N][N];
 
void swap(ll *a, ll *b) {
  ll r=*a;
  *a=*b;
  *b=r;
}
 
int compare(const void* a, const void* b) {
  ll2 l = *((ll2 *)a);
  ll2 r = *((ll2 *)b);
 
  return r.c - l.c;
}
 
int main() {
  ll t;
  ll i,j,k,d,l,r,x,y,z,p,q;
 
  char cc;
  ll c,h;
 
  t=1;
  //scanf("%lld", &t);
 
  while(t--) {
    scanf("%lld", &n);
    scanf("%lld", &x);
    scanf("%lld", &m);
    scanf("%lld", &p);
 
    for(i=0;i<n;i++) {
      scanf("%lld", a+i);
    }
 
    FI(i,0,n-1) {
      if (a[i]>a[0])
        s[0][i]=(a[0]-a[i])*p;
      else
        s[0][i]=(a[i]-a[0])*m;
      //printf("%3lld ", s[0][i]);
    }
    //puts("");
 
    FI(i,1,n-1) {
      y=0;
      FI(j,0,n-1) {
        if (s[i-1][j]>y) y=s[i-1][j];
      }
      FI(j,0,n-1) {
        s[i][j]=MAX(s[i-1][j]+ x, y);
        if (a[j]>a[i])
          s[i][j]+=(a[i]-a[j])*p;
        else
          s[i][j]+=(a[j]-a[i])*m;
        //printf("%3lld ", s[i][j]);
      }
      //puts("");
    }
 
    r=0;
    FI(i,0,n-1) {
      r=MAX(r, s[n-1][i]);
    }
    printf("%lld\n", r);
  }
}