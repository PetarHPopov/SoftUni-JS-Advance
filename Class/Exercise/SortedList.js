class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a,b)=> a-b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.list.length ) {
            this.list.splice(index, 1);
            this.size--;
        }else {
            throw Error();
        }

    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
           return  this.list[index]
        }else {
            throw Error();
        }
    }
}

let list = new List();
list.add(5);
console.log(list.get(0));
list.add(3);
console.log(list.get(0));
list.remove(0);
console.log(list.get(0));
console.log(list.size);
