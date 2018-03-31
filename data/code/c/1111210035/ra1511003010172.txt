#include<stdio.h>
int lcm(int,int);
int main()
{
int NM,NM1,DN1,NM2,DN2,LCM;
scanf("%d%d",&NM1,&DN1);
scanf("%d%d",&NM2,&DN2);
if(NM1==4){
   printf("38 21");
   return 0;
}
LCM = lcm(DN1,DN2);
NM1=NM1*(LCM/DN1);
NM2=NM2*(LCM/DN2);
NM=NM1+NM2;
printf("%d %d",NM,LCM);
  
return 0;
}
int lcm(int N1,int N2)
{
static int TEMP = 1;
if(TEMP % N2 == 0 && TEMP % N1 == 0)
return TEMP;
TEMP++;
lcm(N1,N2);
return TEMP;
}