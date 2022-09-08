#include<iostream>
#include<string>
using namespace std;

void encryption(string alphabet,string key,string message );
void decryption (string alphabet,string key,string message );

int main (){
    string alphabet{"abcdefghijklmnopqrstuvwxyz"};
    string key{"qwertyuiopasdfghjklzxcvbnm"};

    string message {};
    
    cout << "enter your message" << endl;
    getline(cin,message);

    encryption(alphabet,key,message);
   



return 0;
}
void encryption(string alphabet,string key,string message ){
string encrypted{};
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
    decryption(alphabet,key,encrypted);

}
void decryption (string alphabet,string key,string encrypted ){
string decrypted{};
for (char c: encrypted )
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
}