 #include<iostream>
 
// Macro definition
#define AREA(l, b) (l * b)

//chain macro
#define INSTAGRAM FOLLOWERS
#define FOLLOWERS 300

// multi line macro
#define ELE 1, \
            2, \
            3

// function like macro
#define min(a, b) (((a) < (b)) ? (a) : (b))

 using namespace std;
 int main (){
        int l1 = 10, l2 = 5, area;
 
    // Find the area using macros
    area = AREA(l1, l2);
 
    // Print the area
    cout << "Area of rectangle is" << area ;


    cout << "i have" << INSTAGRAM << " followers on Instagram" ;
    
        int arr[] = { ELE };
 
    // Print elements
    cout << "Elements of Array are" << endl;
 
    for (int i = 0; i < 3; i++) {
        cout << arr[i] << " ";
    }
     cout << endl;
     
    int a = 18;
    int b = 76;
 
    cout << min(a, b) << endl;

 return 0;
 }