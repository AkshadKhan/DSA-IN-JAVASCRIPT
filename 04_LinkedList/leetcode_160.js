

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



