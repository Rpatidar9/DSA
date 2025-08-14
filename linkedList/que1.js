// Reverse a linked list

// Goal: Rewire the next pointers to reverse the list.

// Test: Pointer manipulation.


        function reverseLinkedList(head) {
            let prev = null;
            let curremt = head;
            while(curremt){
                let  nextNode = curremt.next;
                curremt.next = prev,
                prev = curremt;
curremt = nextNode;

            }
            return prev; // New head of the reversed list
        }
        ;
        console.log(reverseLinkedList([1,2,3,4,5]));
        