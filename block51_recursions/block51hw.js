/*
Merge the two sorted linked lists linked_list1 and linked_list2 into a single sorted list. 
Create the merged list by splicing together the nodes of the first two lists. Return the head of the resulting merged linked list. 
 
The input will be linked_list1 = [1,2,4] and linked_list2 = [1,3,4], and the expected output is [1,1,2,3,4,4]. */


const mergeTwoLists = function (l1, l2) {
    // Check if either of the lists is null 
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    // Head of the new linked list - this is the head of the resultant list
    let head = null;
    // Reference of head which is null at this point
    let temp = head;
    // Choose head which is smaller of the two lists
    if (l1.val < l2.val) {
        temp = head = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        temp = head = new ListNode(l2.val);
        l2 = l2.next;
    }
    // Loop until any of the list becomes null
    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = new ListNode(l1.val);
            l1 = l1.next;
            temp = temp.next;
        } else {
            temp.next = new ListNode(l2.val);
            l2 = l2.next;
            temp = temp.next;
        }
    }
    // Add all the nodes in l1, if remaining
    while (l1) {
        temp.next = new ListNode(l1.val);
        l1 = l1.next;
        temp = temp.next;
    }
    // Add all the nodes in l2, if remaining
    while (l2) {
        temp.next = new ListNode(l2.val);
        l2 = l2.next;
        temp = temp.next;
    }
    return head;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/* Reverse the given singly linked list by manipulating 
its head and return the reversed list. The input is head = [1,2,3,4,5] and the expected output is [5,4,3,2,1]. */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev; // The new head of the reversed list
}

// Example usage:

// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const originalList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

// Reverse the linked list
const reversedList = reverseLinkedList(originalList);

// Print the reversed list
while (reversedList !== null) {
    console.log(reversedList.val);
    reversedList = reversedList.next;
}


/* How can we remove nodes with a specific value from a linked list, and what should be returned as the new head 
of the modified list? The given linked list has a head node [1,2,6,3,4,5,6] and the specified value is 6. The expected 
output is a modified list with nodes [1,2,3,4,5].  */

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeElements(head, val) {
    // Create a dummy node to simplify the code
    const dummy = new ListNode(-1);
    dummy.next = head;

    let current = dummy;

    while (current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next; // The new head of the modified list
}

// Example usage:

// Create a linked list: 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6
const originalList1 = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));

// Remove nodes with value 6
const modifiedList = removeElements(originalList1, 6);

// Print the modified list
while (modifiedList !== null) {
    console.log(modifiedList.val);
    modifiedList = modifiedList.next;
}

/* Solve the problem without changing the values in the nodes. Note that only the positions of the nodes can be changed, 
for example, if the input linked list is [1, 2, 3, 4], the output should be [2, 1, 4, 3].  */
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapPairs(head) {
    const dummy = new ListNode(-1);
    dummy.next = head;
    let current = dummy;

    while (current.next !== null && current.next.next !== null) {
        const firstNode = current.next;
        const secondNode = current.next.next;

        // Swap nodes
        current.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;

        // Move to the next pair
        current = firstNode;
    }

    return dummy.next; // The new head of the modified list
}

// Example usage:

// Create a linked list: 1 -> 2 -> 3 -> 4
const originalList2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

// Swap nodes in pairs
const modifiedList2 = swapPairs(originalList2);

// Print the modified list
while (modifiedList2 !== null) {
    console.log(modifiedList2.val);
    modifiedList2 = modifiedList2.next;
}
