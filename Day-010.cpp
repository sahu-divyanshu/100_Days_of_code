#include<iostream>
#include<string>

using namespace std;
int main (){
    string alphabet{"abcdefghijklmnopqrstuvwxyz"};
    string key{"qwertyuiopasdfghjklzxcvbnm"};

    string message {};
    string encrypted{};
    string decrypted{};
    cout << "enter your message" << endl;
    getline(cin,message);

    for (char c:message )
    {
        int place = alphabet.find(c);
        if (place != string::npos)
        {
            char replace {key.at(place)};
            encrypted += replace;
        }
        else 
        {
            encrypted += c;
        }
    }
    cout << "encrypted message"  << encrypted << endl;

    
    for (char c:encrypted )
    {
        int place = key.find(c);
        if (place != string::npos)
        {
            char replace {alphabet.at(place)};
            decrypted += replace;
        }
        else 
        {
            decrypted += c;
        }
    }
    cout << "decrypted message" << decrypted << endl;
return 0;
}