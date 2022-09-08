#include<iostream>
#include<vector>
#include<string>
#include"Movies.h"
using namespace std;
void increment_watched(Movies &movies, std::string name);
void add_movie(Movies &movies,std::string name,std::string rating,int watched );

void increment_watched(Movies &movies,std::string name){
    if (movies.increment_watched(name)){
        cout << name << "watched increment" <<endl;
    }
    else {
        cout << name << "not found " << endl;
    }
}
void add_movie(Movies &movies , std::string name,std::string rating,int watched){
    if(movies.add_movie(name,rating,watched)){
        cout << name << "added" << endl;
    }
    else {
        cout << name << "already exists" << endl;
    }
}
int main(){
    Movies my_movies;

    my_movies.display();
    
    add_movie(my_movies,"big","PG-13",2);
    add_movie(my_movies,"star wars","PG",5);
    add_movie(my_movies,"cinderella","PG",7);

    my_movies.display();

    add_movie(my_movies,"cinderella","PG",7);
    add_movie(my_movies,"ice age","PG",12);

    my_movies.display();

    increment_watched(my_movies,"XXX");

    return 0;
}/* Taking input from user
int main (){
  int choice{};
    cout << "enter yout choice "<< endl;
    cout << "1 for add movie that you have watched today "<< endl;
    cout << "2 for display watched movies "<< endl;
 
    cin >> choice;
    switch (choice){
        case 1:{
        cout << "the name of movie" <<endl;
        string movie_name;
        string rating;
        cin >> movie_name ;
        cout << "enter rating"<< endl;
        cin >> rating ;
        Movies obj;
        obj.add_movie(movie_name,rating,0);
        obj.increment_watched(movie_name);
        }
        case 2:{
            Movies obj;
            obj.display();
        }
    
    }

return 0;
*/