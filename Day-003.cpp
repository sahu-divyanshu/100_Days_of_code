// tomorrow's section challange
#include<iostream>
using namespace std;
int main (){
    int no_of_small_rooms;
    int no_of_large_rooms;
    const float cost_small{25.0};
    const float cost_large{35.0};
    float cost;
    const float tax_rate{0.06};
    float tax;
    float total;


    cout << "welcome to carpet cleaning service" << endl;

    cout << "enter the no of small rooms you want to clean" << endl;
    cin >> no_of_small_rooms ;

    cout << "enter the no of large rooms you want to clean" << endl;
    cin >> no_of_large_rooms;

    cost = (no_of_large_rooms*cost_large) + (no_of_small_rooms*cost_small);
    cout << "ectimated cost $" << cost << endl;

    tax = cost * tax_rate;
    cout << "tax $" << tax << endl;

    total = cost + tax;
    cout << "total cost $" << total << endl;

return 0;
}
//array and vector
// name of array is the loaction of the array
 #include<iostream>
 #include<vector>
 using namespace std;
 int main (){

    vector <char> vowels{'a','e','i','o','u'};
    cout << vowels[0] << endl;
    cout << vowels[4] << endl;

    //vector <int> test_score(3); //3 elements ,all are initialized to zero
    // vector <int> test_score(3,100); // 3 elements ,all initialized to 100
    
    vector <int> test_score{100,98,89};
    cout << "test score using array syntax" << endl;
    cout << test_score[0] << endl;
    cout << test_score[1] << endl;
    cout << test_score[2] << endl;

    cout << "test score using vector syntax" << endl;
    cout << test_score.at(0) << endl;
    cout << test_score.at(1) << endl;
    cout << test_score.at(2) << endl;
    cout << "there are" << test_score.size() << "scores in the vector" <<endl;

    cout << "updating scores,enter new digits"<< endl;
    cin >> test_score.at(0);
    cin >> test_score.at(1);
    cin >> test_score.at(2);

    cout << "updates scores" << endl;
    cout << test_score.at(0) << endl;
    cout << test_score.at(1) << endl;
    cout << test_score.at(2) << endl;

    cout << "enter a test score you want to add" << endl;
    int score_to_add{0};
    cin >> score_to_add;

    test_score.push_back(score_to_add);
     
    cout << "enter one more score" << endl;
    cin >> score_to_add;

    test_score.push_back(score_to_add);
    

    // example of a 2d vector
    vector <vector<int>> movie_ratings
    {
        {1,2,3,4},
        {1,2,4,4},
        {1,3,4,5}
    };
    cout << "movie rating of reviewer 1 using array syntax" <<endl;
    cout << movie_ratings[0][0] << endl;
    cout << movie_ratings[0][1] << endl;
    cout << movie_ratings[0][2] << endl;
    cout << movie_ratings[0][3] << endl;

    cout << "movie rating of reviewer 2 using vector syntax " << endl;
    cout << movie_ratings.at(0).at(0) <<endl;
    cout << movie_ratings.at(0).at(1) <<endl;
    cout << movie_ratings.at(0).at(2) <<endl;
    cout << movie_ratings.at(0).at(3) <<endl;

 return 0;
 }
