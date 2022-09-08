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
~Node(){
    int value = this ->data;
    // memory free
    if(this ->next != NULL ){
        delete next;
        this ->next =NULL;
    }
    cout <<"memory is free for node with data" << value << endl;
    
}
};
void insertAtHead(Node* &head,Node* &tail , int d){
    if(head==NULL){
        Node* temp = new Node(d);
        head = temp;
        tail = temp;
    }
    Node* temp = new Node(d);
    temp -> next =  head;
    head = temp;

}
void print(Node* &head){
    Node* temp = head ;
    while (temp != NULL){
        cout << temp -> data << " ";
        temp = temp ->next;

    }
    cout << endl;
}
void insertAtTail(Node* &head ,Node* &tail, int d){
    if(tail == NULL){
        Node* temp = new Node(d);
        head = temp;
        tail = temp;
    }
    Node* temp = new Node(d);
    tail ->next = temp;
    tail = temp;
}
void insertAtPosition(Node* &tail ,Node* &head, int position, int d){
//insert at start
if (position == 1){
    insertAtHead(head,tail,d);
    return;
}

    Node* temp = head;
    int cnt = 1;

    while(cnt < position-1){
        temp = temp->next;
        cnt++;
    }
    // insert at last position
    if(temp ->next == NULL){
        insertAtTail(head,tail,d);
        return;
    }
    //creating a node for d
    Node* nodeToInsert = new Node(d);
    nodeToInsert -> next = temp ->next;
    temp -> next = nodeToInsert;
}
void deleteNode(int position, Node* &head){
    // deleting first node
    if(position == 1){
        Node* temp = head;
        head = head ->next;
        // memory free
        temp ->next = NULL;
        delete temp;
    }
    else {// deleting any middle or last node 
        Node* curr = head;
        Node* prev = NULL;

        int cnt =1;
        while(cnt < position){
            prev = curr;
            curr = curr ->next;
            cnt++;
        }
        prev ->next = curr ->next;
        curr ->next = NULL;
        delete curr;
    }
}
bool isCircular(Node* head){
    // considering empty as circular
    if(head == NULL){
        return NULL;
    }
    Node* temp = head ->next;
    while(temp != NULL && temp != head){
        temp = temp->next;
    }
    if(temp == head){
        return true;
    }
    return false;
}
int main (){

//created a new node     
Node *node1 = new Node(10);
cout << node1 ->data << endl;
cout << node1 ->next << endl;
// head pointed to node1
Node* head = node1;
Node* tail = node1;
print(head);

insertAtTail(head,tail ,12);
print(head);

insertAtTail(head,tail, 15);
print(head);

insertAtPosition(tail,head,4,22);
print(head);

cout << "head " << head ->data << endl;
cout << "tail " << tail ->data << endl;

deleteNode(4,head);
print(head);

if(isCircular(head)){
    cout << " linked list is circular" << endl;
}
else{
    cout << " linked list is not circular" << endl;
}
return 0;

} 