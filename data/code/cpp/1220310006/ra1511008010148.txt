#include <iostream>
using namespace std;

void binary(int n){
if(n<=1){
cout<<n;
return;
}  
int rem=n%2;
binary(n/2);
cout<<rem;
}
int main()
{	try{
  	int num;
  	cin>>num;
	if(num<0){
    throw("Exception occurred: value thrown");
    }
  	else{
    cout<<"Binary Number is :";  
    binary(num);
    
    }
}
 catch(const char* e){
 cout<<e;
 }
 
 return 0;
}