#include <stdio.h>
 
int main ()
{
    int N;
    scanf ("%d", &N);
 
    int player_1 = 0;
    int player_2 = 0;
    int lead;
    int max_lead = 0;
    int lead_player;
    int winner;
 
    while ( N-- ) {
 
        int S, T;
        scanf ("%d %d", &S, &T);
 
        player_1 += S;
        player_2 += T;
 
        lead = player_1 - player_2;
        lead_player = 1;
 
        if ( lead < 0 ) {
            lead *= -1;
            lead_player = 2;
        }
 
        if ( lead > max_lead ) {
            max_lead = lead;
            winner = lead_player;
        }
    }
 
    printf ("%d %d\n", winner, max_lead);
    return 0;
}