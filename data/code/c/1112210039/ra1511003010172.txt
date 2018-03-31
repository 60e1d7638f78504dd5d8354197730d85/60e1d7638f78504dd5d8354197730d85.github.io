#include<stdio.h>
#include<math.h>
int main(){
	int t;
	scanf("%d",&t);
	while(t--){
		long double n, l, d, s, c;
		scanf("%Lf%Lf%Lf%Lf",&l,&d,&s,&c);
		n=s*pow(c+1,d-1);
		if(n>=l)	printf("ALIVE AND KICKING\n");
		else		printf("DEAD AND ROTTING\n");
	}
	return 0;
} 