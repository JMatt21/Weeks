const Node = require('./linkednode');

const LinkedList = function () {
    this.head;
    this.current;
    this.tail;
}

LinkedList.prototype.addToLast = function(val) {
    var temp_node = new Node(val);
    if (!this.head) {
        this.head = temp_node;
    } else if (!this.tail){
        this.head.next = temp_node;
        this.tail = temp_node;
    } else {
        this.tail.next = temp_node;
        this.tail = temp_node;
    }
}
LinkedList.prototype.addToFirst = function (val) {
    var temp_node = new Node(val);
    if (!this.head) {
        this.head = temp_node;
    } else if (!this.tail){
        this.tail = this.head;
        this.head = temp_node;
    } else {
        temp_node.next = this.head;
        this.head = temp_node;
    }
}
LinkedList.prototype.display = function () {
    let ret = '';
    this.current = this.head;
    while (this.current){
        // console.log(this.current.val + ' ');
        ret += this.current.val + ' ';
        this.current = this.current.next;
    }
    console.log(ret);
}

module.exports = LinkedList;