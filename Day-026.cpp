/*#include<iostream>
using namespace std;
//Polymorphism
class A {
public:
void sayHello(){
    cout << "hello Divyanshu " << endl;
}
void sayHello(string name){
    cout << "hello " << name << endl;
}//this is ok 
//but if we change only return type but use same name than this will not work
};
// compile time polymorphism or static polymorphism
//operator overloading
class B {
    public:
    int a;
    void operator+ (B &obj){
        int value1 = this -> a;
        int value2 = obj.a;
        cout << "output"<< value2 - value1 << endl;
    }
};
// run time polymorphism
class Animal {
    public:
    void speak(){
        cout << "speaking" << endl;
    }
};
class Dog: public Animal{
    public:
    // function overriding
    void speak(){
        cout << "barking " << endl;
    }
};
int main (){
    Dog obj6;
    obj6.speak(); 
    A obj;
    obj.sayHello();
    B obj1, obj2;
    obj1.a = 6;
    obj2.a = 9;
    obj1 + obj2;
return 0;
}
*/
#include<iostream>
using namespace std;

class Node {
public:
int data;
Node *next;
// constructor
Node(int data){
    this ->data = data;
    this ->next = NULL;

}
};
int main (){
Node *node1 = new Node(10);
cout << node1 ->data << endl;
cout << node1 ->next << endl;
return 0;
}