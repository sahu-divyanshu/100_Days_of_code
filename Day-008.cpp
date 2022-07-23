/* section 9 challange
this challange is about using a collection (list) of integers  and allowing the user to select 
options from a menu to perform operations on the list.

your program should display a menu options to the user as follows:

P - print numbers 
A - add numbers 
M - Display mean of the numbers
S - Display the smallest number
L - Display the largest
Q - Quit 

enter your choice

the program should only accept valid choices from the user, both upper and lower case 
selections should be allowed. if an illegal choice is made you should display , "unknown selection ,
pls try again"and the menu options should be displayed again.

if the user enters 'P' or 'p' you should display all of the elements (ints) in the list.
if the list is empty you should display "[] - the list is empty"
if the list is not empty then all the list element should be displayed innside square brackets seprated 
by space . for example, [ 1 2 3 4 5]

if the user enters 'A' or 'a' then you should prompt the user for an integer to add to the 
list which you will add to the list and then display it was added. for example, if the user    
enters 5 
You should display,"5 added".
Duplicate  list entries are ok

if the user enters 'M' or 'm' you should calculate the mean or avg of the elements in the list and 
display it.
if the list is empty you should display , "unable to calculate the mean -no data"

if the user enters 'S' or 's' you should display the smallest element in the list.
for examlple , if the list contains [2,4,5,1], you should display, "the amallest no. is 1"
if the list is empty you should display, "unable to determine the smallest number - list is empty"

if the user enter 'L' or 'l' you should display the largest elelment in the list
same as above

if the user enters 'Q' or 'q' than you should display"goodbye' and the program should terminate

before you begin. write out the steps you need to take and decide in what order they should 
be done think about what loops you should use as well as what you will use for your selection logic

this exercise can be challenging! it may likely take a few attempts before you complete  it -thats OK!
finally, be sure to test your program as you go and at the end.
hint - use a vector!

additional functionality if you wish to extend this program.
- search for a number in the list and if found display the number of times  it occours in the list.
- clearing out of the list(make it empty again)(hint:the vectorclass has a clear () method)
- come up with your own ideas!
*/

#include<iostream>
#include<vector>
using namespace std;
int main (){
    vector<int>numbers{};
    char selection{};
    do {
    cout << "\n P - print numbers" << endl;
    cout << " A - add a number" << endl;
    cout << " M - display the mean of numbers" << endl;
    cout << " S - display the smallest number" << endl;
    cout << " L - display the largest number "<< endl;
    cout << " Q - quit" << endl;
    cout << "\n enter your choice: "<< endl;
    cin >> selection;

    if(selection == 'P'|| selection == 'p') {
        if(numbers.size() == 0)
            cout << "list is empty" <<endl;
        else{
            cout << "[";
            for(auto num : numbers)
            cout << num << " ";
            cout << "]"<< endl;
        }
    } 
    else if (selection == 'A',selection == 'a'){
        int num_to_add;
        cout << "enter an integer to add to the list";
        cin >> num_to_add;
        numbers.push_back(num_to_add);
        cout << num_to_add << "added" << endl;
    }
    else if(selection =='M'||selection =='m'){
        if (numbers.size()== 0)
            cout << "no data"<< endl;
        else {
            int total{};
            for (auto num: numbers)
                total += num;
            cout << "the mean is "<< static_cast<double>(total)/numbers.size() << endl; 
        }
    }
    else if(selection == 's'||selection == 'S'){
        if (numbers.size() == 0)
            cout << "list is empty" << endl;
        else {
            int smallest = numbers.at(0);
            for (auto num:numbers)
                if (num < smallest)
                smallest = num;
        cout << "The smallest number is"<< smallest << endl;
        }
    }
    else if(selection == 'L'|| selection =='l'){
        if(numbers.size()==0)
            cout << "list is empty" << endl;
        else{
            int largest = numbers.at(0);
            for(auto num: numbers) 
                if (num>largest)
                    largest = num;
            cout << "the largest number is" << largest << endl;
             
        }
    }
    else if (selection == 'Q' || selection == 'q'){
        cout << "good bye " << endl;}
    else{
        cout << "unknown selection pls try again" << endl;  
    }

    }while (selection != 'q' || selection !='Q' );
return 0;
}