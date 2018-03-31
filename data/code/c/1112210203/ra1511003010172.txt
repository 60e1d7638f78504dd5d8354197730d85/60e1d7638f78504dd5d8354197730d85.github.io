#include <stdio.h>

int main()
{
	int a[10], i=0, j=0, n, t;

	scanf ("%d", &n);

	
	for (i=1 ; i<n+1 ; i++)
	{
		printf (" %d", i);
	}

	for (i=n ; i>0 ; i--)
	{
		printf (" %d", i);
	}

      return 0;
}