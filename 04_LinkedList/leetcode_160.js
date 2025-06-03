var getIntersectionNode = function(headA, headB) {
    let stackA = [];
    let stackB = [];

    // Push nodes (not values) into stacks
    while (headA) {
        stackA.push(headA);
        headA = headA.next;
    }

    while (headB) {
        stackB.push(headB);
        headB = headB.next;
    }

    let intersection = null;

    // Compare nodes from the end
    while (stackA.length > 0 && stackB.length > 0) {
        let a = stackA.pop();
        let b = stackB.pop();

        if (a === b) {
            intersection = a; // Same reference — possible intersection
        } else {
            break; // Nodes differ — stop
        }
    }

    return intersection; // If no intersection, returns null
};


let common = new ListNode(8);
common.next = new ListNode(10);

let headA = new ListNode(3);
headA.next = new ListNode(7);
headA.next.next = common;

let headB = new ListNode(99);
headB.next = new ListNode(1);
headB.next.next = common;

console.log(getIntersectionNode(headA, headB)); // ListNode with val = 8
