#include<iostream>
using namespace std;
class LinkedListNode
    {
    public:
        int data;
        LinkedListNode *next;
    
        LinkedListNode(int d){
            this->data = data;
            this->next = NULL;
        }
    };
LinkedListNode<int> *reverseLinkedList(LinkedListNode<int> *head) 
{
    if(head==NULL || head->next == NULL){
        return head;
    }
    LinkedListNode<int>* prev = NULL;
    LinkedListNode<int>* curr = head;
    LinkedListNode<int>* forward = NULL;
    
    while(curr != NULL){
        forward = curr -> next;
        curr->next = prev;
        prev = curr;
        curr = forward;
    }
    return prev;
}
Node* kReverse(Node* head, int k) {
    if(head == NULL){
        return NULL;
    }
    //step 1: reverse first k nodes
    Node* next = NULL;
    Node* curr = head;
    Node* prev = NULL;
    int count = 0;
    
    while(curr != NULL && count < k){
        next = curr ->next;
        curr -> next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    // Recursion dekhlega baki ka
    if(next!=NULL){
        head -> next = kReverse(next,k);
    }
    return prev;
}
Node* getMiddle(Node* head){
    if(head == NULL || head -> next== NULL){
        return head;
    }
    // 2 nodes
    if(head -> next -> next == NULL){
        return head -> next;
    }
    Node* slow = head;
    Node* fast = head->next;
    
    while(fast != NULL){
        fast= fast->next;
        if(fast != NULL){
            fast= fast->next;
        }
        slow = slow ->next;
    }
}
Node *findMiddle(Node *head) {
    return getMiddle(head);
}
class Solution{
    Node* getMid(Node* head){
        Node*slow =head;
        Node*fast = head->next;
        while(fast!=NULL && fast->next!=NULL){
            fast = fast->next->next;
            slow = slow->next;
        }
        return slow;
    }
    Node* reverse(Node* head ){
        Node* curr = head;
        Node* prev = NULL;
        Node* next = NULL;
        while(curr != NULL){
            next = curr -> next;
            curr -> next == prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
  public:
    //Function to check whether the list is palindrome.
    bool isPalindrome(Node *head)
    {
        if(head->next == NULL){
            return true;
        }
    //  step-1 find middle
    Node* middle = getMid(head);
    //step-2 reverse list after middle
    Node* temp = middle ->next;
    middle -> next = reverse(temp);
    //step-3 compare both halfs
    Node*head1 = head;
    Node*head2 = middle->next;
    
    while(head2 != NULL){
        if(head1->data != head2->data){
            return false;
        }
        head1 = head1->next;
        head2 = head2->next;
    }//step 4 re arranging the linked list(optional) 
    temp = middle->next;
    middle ->next = reverse(temp);
    
    return true;
    }
};
class Solution
{
    Node* reverse(Node* head ){
        Node* curr = head;
        Node* prev = NULL;
        Node* next = NULL;
        while(curr != NULL){
            next = curr -> next;
            curr -> next == prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    void insertAtTail(struct Node* head,struct Node* &tail, int d){
    if(tail == NULL){
        Node* temp = new Node(d);
        head = temp;
        tail = temp;
    }
    Node* temp = new Node(d);
    tail ->next = temp;
    tail = temp;
}
struct Node* add(struct Node* first,struct Node* second){
    int carry = 0;
    Node* ansHead = NULL;
    Node* ansTail = NULL;
    
    while(first != NULL || second != NULL ||carry !=0){
        int val1=0;
        if(first!=NULL)
            val1 = first->data;
        
        int val2=0;
        if(second != NULL)
            val2= second->data;
            
        int sum = carry+val1+val2;
        int digit = sum%10;
        
        insertAtTail(ansHead,ansTail,digit);
        carry = sum/10;
        
        if(first != NULL){
            first = first->next;   
        }
        if(second != NULL){
            second = second ->next;
        }
    }
    return ansHead;
}
    public:
    //Function to add two numbers represented by linked list.
    struct Node* addTwoLists(struct Node* first, struct Node* second)
    {
    // step 1- reverse input ll
    first = reverse(first);
    second = reverse(second);
    // step 2 add 2 LL
    Node* ans = add(first,second);
    //step 3
    ans = reverse(ans);
    return ans;
    }
};
