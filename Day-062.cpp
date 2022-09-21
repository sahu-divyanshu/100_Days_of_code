#include <iostream>
using namespace std; 
int main(void) {
    int t ;
    cin >> t;
    while(t--){
        float a,b,c,d;
        cin >> a >> b >> c >> d;
        float s1 = a/b;
        float s2 = c/d;
        
        if(s1>s2){
            cout << "Alice" << endl;
        }
        else if(s2>s1){
            cout << "Bob" << endl;
        }
        else {
            cout << "Equal" << endl;
        }
    }
	
	return 0;
}

