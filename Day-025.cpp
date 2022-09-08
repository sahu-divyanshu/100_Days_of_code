// types of inheritance 
// 1. Single inheritance


/*#include<iostream>
using namespace std;

class Animal{
    public:
    int age;
    int weight;

    public:
    void speak(){
        cout << "speaking " << endl;
    } 

};
class Dog: public Animal{

};

int main (){
    Dog d;
    d.speak();
return 0;
} */
// multilevel inheritance
/*#include<iostream>
using namespace std;

class Animal{
    public:
    int age;
    int weight;

    public:
    void speak(){
        cout << "speaking " << endl;
    } 

};
class Dog: public Animal{

};
class GermanShepherd: public Dog{

};


int main (){
    GermanShepherd g;
    g.speak();
return 0;
} */
// multiple inheritance
/*#include<iostream>
using namespace std;

class Animal{
    public:
    int age;
    int weight;

    public:
    void bark(){
        cout << "barking " << endl;
    } 

};
class Human{
    public:
    void speak(){
        cout << "speaking" << endl;
    }
};
class Hybrid: public Animal,public Human{

};

int main (){
    Hybrid obj1;
    obj1.speak();
    obj1.bark();
return 0;
} */
// Hierarchical Inheritance
/*#include<iostream>
using namespace std;

class Animal{
    public:
    int age;
    int weight;

    public:
    void speak(){
        cout << "speaking " << endl;
    } 

};
class Dog: public Animal{

};
class Cat: public Animal{

};

int main (){
    Dog d;
    d.speak();
    Cat c;
    c.speak();
return 0;
} */
// Hybrid Inheritance - Combination of more than 1 type of inheritance
/*#include<iostream>
using namespace std;

class Animal{
    public:
    int age;
    int weight;

    public:
    void speak(){
        cout << "speaking " << endl;
    } 

};
class Dog: public Animal{
   public:
   void dog (){
    cout << "Dog has been called"<< endl;
   }
};
class Cat: public Animal{
       public:
   void cat (){
    cout << "cat has been called"<< endl;
   }
};
class Creatures: public Dog, public Cat{

} ;
int main (){
    Cat c;
    c.speak();
    Creatures obj1;
    obj1.cat();
    obj1.dog();
return 0;
} */
// inheritance Ambiguity

#include<iostream>
using namespace std;

class A{
   public:
   void func(){
    cout << "i AM A" << endl;
   }
};
class B{
   public:
   void func(){
    cout << "i AM B" << endl;
   }
};
class c:public A, public B{

};
int main (){
    c obj;
    // use scope operator to specify which func you want to call
    obj.A::func();
    obj.B::func();
return 0;
}
