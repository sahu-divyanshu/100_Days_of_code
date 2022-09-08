#include<iostream>
using namespace std;
// Doubly linked list
class Node{
    public:
    int data;
    Node* prev;
    Node* next;

    // constructor
    Node(int d){
        this ->data = d;
        this ->prev = NULL;
        this ->next = NULL;
    }
    ~Node(){
        int val = this ->data;
        if(next != NULL){
            delete next;
            next = NULL;
        }
        cout << "memory free for node with data " << val << endl;
    }
};
// Traverse
void print(Node* head){
    Node* temp = head;
    while(temp!= NULL){
        cout << temp->data << " ";
        temp = temp->next; 
    }
    cout << endl;
}
int getLength(Node* head){
    Node* temp = head;
    int count=0;
    while(temp!=NULL){
        temp = temp->next;
        count++;
    }
    return count;
}
void insertAtHead(Node* &head,Node* &tail,int d){
    if(head==NULL){
        Node* temp = new Node(d);
        head = temp;
        tail = temp;
    }
    Node* temp = new Node(d);
    temp->next = head;
    head->prev = temp;
    head = temp;
}
void insertAtTail(Node* &head,Node* &tail,int d){
    
    if(tail == NULL){
        Node* temp = new Node(d);
        head = temp;
        tail = temp;
    }
    Node * temp = new Node(d);
    tail->next = temp;
    temp->prev = tail;
    tail = temp;
}
void insertAtPosition(Node* &head,Node* &tail,int d,int position){
    if(position == 1){
        insertAtHead(head,tail,d);
        return;
    }
    Node *temp = head;
    int count = 1;

    while(count<position-1){
        temp = temp->next;
        count ++;
    } 
    if(temp->next == NULL){
        insertAtTail(head,tail,d);
    }
    Node * nodeToInsert = new Node(d);
    
    nodeToInsert->next = temp->next;
    temp->next->prev = nodeToInsert;
    temp->next = nodeToInsert;
    nodeToInsert ->prev = temp;
}
void deleteNode(int position,Node* & head){
    //deleting first node
    if(position == 1){
        Node* temp = head;
        temp->next->prev = NULL;
        head = temp->next;
        temp->next = NULL;
        delete temp;   
    }
    else{
        //deleting any middle node or last node
        Node* curr = head;
        Node* prev = NULL;
        int count = 1;
        while(count < position){
            prev = curr;
            curr = curr->next;
            count ++;
        }
        curr -> prev = NULL;
        prev ->next = curr->next;
        curr ->next = NULL;

        delete curr;
    }
}
int main (){
    Node* node1 = new Node (10);
    Node* head = node1;
    Node* tail = node1;

    print(head);
    cout << "length " << getLength(head) << endl;

    insertAtHead(head,tail,7);
    print (head);

    insertAtTail(head,tail,3);
    print(head);

    insertAtPosition(head,tail,5,2);
    print(head);

    deleteNode(3,head);
    print(head);
return 0;
}