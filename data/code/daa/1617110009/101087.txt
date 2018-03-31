#include <iostream>
#include <string>
#include <queue>
#include <unordered_map>
#include <algorithm>
 
using namespace std;
 
int main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(0);
 
	int T;
	cin >> T;
	while (T--) {
		string S;
		int A, H;
		cin >> S;
		cin >> A >> H;
		int l = S.length();
 
		string minimum = S;
 
		unordered_map<string, bool> visited;
		queue<string> q;
		q.push(S);
		visited[S] = true;
 
		while (!q.empty()) {
			string s = q.front();
			q.pop();
 
			string s2;
			s2.reserve(2 * l);
			for (int i = 0; i < l; ++i) {
				s2 += s[((l - H + i) % l + l) % l];
			}
 
			for (int i = 1; i < l; i += 2)
				s[i] = (s[i] + A - '0') % 10 + '0';
 
			if (!visited[s]) {
				visited[s] = true;
				q.push(s);
				minimum = min(minimum, s);
			}
			if (!visited[s2]) {
				visited[s2] = true;
				q.push(s2);
				minimum = min(minimum, s2);
			}
		}
 
		cout << minimum << '\n';
	}
}