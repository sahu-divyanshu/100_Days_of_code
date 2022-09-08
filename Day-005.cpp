
#include<iostream>
using namespace std;
int main (){
    int num1{}, num2{},num3{},total{};
    const int count{3};
    double avg{};

    cout << "enter three numbers" << endl;
    cin >> num1 >> num2 >> num3;

    total = num1 +num2 +num3;

    avg = static_cast<double>(total)/count;
    // avg = (double)total/count; // old method it dont check it can be converted or not
     
    cout << "sum =" << total <<endl;
    cout << "average" << avg <<endl;

return 0;
}

#include<iostream>
using namespace std;
int main (){

    bool equal_reasult{};
    bool not_equal_reasult{};

    int num1{},num2{};
    
    cout << boolalpha; // will display true/false instead of 1/0 

    cout << "enter two integers" << endl;

    cin >> num1 >> num2;

    equal_reasult = (num1 == num2);

    not_equal_reasult = (num1 != num2);

    cout << "comparison reasult equals " <<equal_reasult <<endl;

    cout << "comparison reasult not equals " <<not_equal_reasult <<endl;

    // this can be alsoo done with char and floats , char is compared with asky values
return 0;
}
