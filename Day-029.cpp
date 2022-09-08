#include<iostream>
#include<map>
using namespace std;

class Node {
    public:
    int data;
    Node* next;

    // constructor
    Node(int d){
        this->data = d;
        this->next = NULL;
    }
    // destructor
    ~Node(){
        int value = this->data ;
        if (this->next != NULL){
            delete next;
            next = NULL;
        } 
        cout << "memory is free for node with data " << value << endl;
    }
};
void insertNode(Node* &tail, int element, int d){
    // assuming that the element is present in the list
    if (tail == NULL){
        // empty list
        Node* newNode = new Node(d);
        tail = newNode;
        newNode ->next = newNode;
    }
    else{
        // non empty list
        Node* curr = tail;
        while (curr->data != element)
        {
            curr = curr ->next ;
        }
        // element found - curr is representing that
        Node* temp = new Node(d);
        temp -> next = curr -> next;
        curr -> next = temp;
    }
}
void print(Node* tail ){
    Node* temp = tail;
    if(tail == NULL){
        cout << " list is empty" << endl;
        return;
    }
    do {
        cout << tail -> data << " ";
        tail = tail -> next;
    }while(tail != temp);
    cout << endl;
}
void deleteNode(Node* &tail, int value){
    if(tail == NULL){
        cout << "list is empty" << endl;
        return;
    }
    else{//non empty
        //assuming that value is present in linked list
        Node* prev = tail;
        Node* curr = prev ->next;

        while(curr ->data != value){
            prev = curr ;
            curr = curr ->next;
        }
        //founded
        prev ->next = curr ->next;

        //for only 1 node
        if(curr == prev){
            tail = NULL;
        }
        // 2 or more than 2 node
        else if(tail == curr){
            tail = prev;
        }
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
bool detectLoop(Node* head){
    if(head == NULL)
        return NULL;
    
    map< Node*, bool > visited;

    Node* temp = head;

    while(temp != NULL){
        // cycle is present
        if(visited[temp] == true){
            return true;
        }
        visited[temp] = true;
        temp = temp->next;
    } 
    return false;
}
Node* floydDetectLoop(Node* head){
    if(head == NULL)
        return NULL;
        Node* slow = head;
        Node* fast = head;

        while(slow != NULL && fast!= NULL){
            fast = fast ->next;
            if(fast != NULL){
                fast = fast->next;
            }
            slow = slow ->next;
            
            if(slow == fast){
                return slow;
            }
        }
        return NULL;
}
Node* getStartingNode(Node* head){
    if(head==NULL)
        return NULL;
    
    Node* intersection = floydDetectLoop(head);
    if(intersection == NULL)
        return NULL;
    Node* slow = head;

    while(slow != intersection){
        slow = slow ->next;
        intersection = intersection->next;
    }
    return slow;
}

Node *removeLoop(Node *head)
{
    if(head==NULL)
        return NULL;

    Node* startOfLoop = getStartingNode(head);
    if(startOfLoop==NULL)
        return head;
    Node* temp = startOfLoop;

    while(temp->next != startOfLoop){
        temp = temp->next;
    }
    temp->next = NULL;
    return head;
}
int main (){
Node* tail = NULL;

// empty list me insert kar rahe hai
insertNode(tail,5,3);
print(tail);

insertNode(tail,3,5);
print(tail);

insertNode(tail,5,7);
print(tail);

insertNode(tail,5,6);
print(tail);

insertNode(tail,3,4);
print(tail);

deleteNode(tail,5);
print(tail);

if(isCircular(tail)){
    cout << " linked list is circular" << endl;
}
else{
    cout << " linked list is not circular" << endl;
}

if(detectLoop(tail)){
    cout << " loop is present" << endl;
}
else{
    cout << "Loop is absent" << endl;
}

if(floydDetectLoop(tail)!= NULL){
    cout << " loop is present" << endl;
}
else{
    cout << "Loop is absent" << endl;
}

 
return 0;
}