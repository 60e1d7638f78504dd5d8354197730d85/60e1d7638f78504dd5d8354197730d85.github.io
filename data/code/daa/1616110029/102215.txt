#include<stdio.h>
#include<math.h>

int x[50],soln=0;

int place(int k,int i){ 
   int j;
   for(j=1;j<k;j++)  
     if((x[j]==i) || (abs(x[j]-i)==abs(j-k)))
      return 0;
   return 1;  
}



void display(int n){
   int i,j;
   soln++;
   printf("\nSOLUTION #%d\n",soln);
   for(i=1;i<=n;i++){
     for(j=1;j<=n;j++)
       if(x[i]==j)
          printf("Q ");
       else
          printf("* ");
     printf("\n");
   }
}

void nqueens(int k,int n){
  int i;
  for(i=1;i<=n;i++)
    if(place(k,i)==1){  
     x[k]=i;  
     if(k==n)  
       display(n);
     else
       nqueens(k+1,n); 
    }
}

int main(){
   int n;
  // printf("Enter no. of queens : ");
   scanf("%d",&n);
   nqueens(1,n);
   printf("TOTAL SOLN. : %d",soln);

   return 0;
}