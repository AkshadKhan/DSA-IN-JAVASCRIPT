var reverseList = function(head) {
    if(!head) return head;
    let prev = null;
    let cur = head;
    let next = head.next;
    while(next){
        cur.next = prev;
        prev = cur;
        cur = next;
        next = cur.next;
    }
    cur.next = prev;
    return cur;
};