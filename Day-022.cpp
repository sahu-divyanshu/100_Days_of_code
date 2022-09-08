#include<iostream>
#include<cstring>
using namespace std;
class Mystring
{
    char *str;
    public:
    Mystring();
    Mystring(const char *s);
    Mystring(const Mystring &source);
    ~Mystring();
    void display() const;
    int get_length() const;
    const char *get_str() const;
};

int main (){
Mystring empty;
Mystring larry("Larry");
Mystring stooge (larry);

empty.display();
larry.display();
stooge.display();
return 0;
}
// no args constructor
Mystring::Mystring()
:str{nullptr}{
    str = new char [1];
    *str = '\0';
}
// Overloaded constructor
Mystring::Mystring(const char *s)
:str {nullptr}{
    if (s==nullptr){
    str = new char[1];
    *str ='\0';
} else {
    str = new char[std::strlen(s)+1];
    std::strcpy(str,s);
}
}
Mystring::Mystring(const Mystring &source)
:str{nullptr}{
    str = new char [std::strlen(source.str)+1];
    std::strcpy(str, source.str);
}
//Destructor
Mystring::~Mystring(){
    delete [] str;
}
// Display method
void Mystring::display() const {
    cout << str << ":" << get_length() << endl;
}
// length getter 
int Mystring::get_length() const {return std::strlen(str);}
 
// string getter 
const char *Mystring::get_str() const {return str;}
