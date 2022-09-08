#include <stdio.h>
int main()
{
	int Q[5]= {0},max=5,front=max,rear=max,choice,i,value;
	do {
		printf("\nreaverse que opertion \n1.enqueue\n2.dequeue\n3.peek\n4.exit\n");
		scanf("%d",&choice);
		switch(choice) {
			case 1:
				if(rear==0)
					printf("overflow");
				else {
					rear--;
					printf("enter value - ");
					scanf("%d",&value);
					Q[rear]=value;
					for(i=max-1; i>=rear; i--)
						printf("_%d",Q[i]);
				}
				if(rear==max-1)
					front=front-1;
				break;

			case 2:
				if(front==max||front<rear)
					printf("underflow");
				else {
					printf("value to be removed - %d",Q[front]);
					front--;
				}
				break;

			case 3:
				printf("first value is- %d",Q[front]);
				break;

		}
	} while(choice==1||choice==2||choice==3);
	return 0;
}