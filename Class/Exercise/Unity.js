class Rat {
    constructor(name){
        this.name = name;
        this.listRat = [];
    }
    unite(otherRat){
        if (otherRat instanceof Rat){
            this.listRat.push(otherRat)
        }
    }
    getRats(){
        return this.listRat
    }
    toString(){
        // let result = this.name + `\n`;
        // for (const rat of this.listRat) {
        //     result += `##${rat}\n`
        // }
        // return result.trim();
        return `${this.name}\n${this.listRat.map(rat=>`##${rat.name}`).join("\n")}`.trim();
    }
}
let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex
