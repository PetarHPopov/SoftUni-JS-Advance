function solve(input) {
    let juice = {};
    let bottle = {};

    for (let line of input) {
        let [name, quantity] = line.split(" => ");
        quantity = Number(quantity);
        if (!juice.hasOwnProperty(name)) {
            juice[name] = 0;
        }
        juice[name] += quantity;
        let current = juice[name];
        if (current >= 1000) {
            bottle[name] = Math.trunc(current / 1000);
            //Math.trunc(juice[name] / 1000) => 3020 /1000 = 3.020 s trunc взимаме 3
        }
    }
    // input.forEach((line) => {
    //     let [name, quantity] = line.split(" => ");
    //     quantity = Number(quantity);
    //     if (!juice.hasOwnProperty(name)) {
    //         juice[name] = 0;
    //     }
    //     juice[name] += quantity;
    //     let current = juice[name];
    //     if (current >= 1000) {
    //         bottle[name] = Math.trunc(current / 1000);
    //         //Math.trunc(juice[name] / 1000) => 3020 /1000 = 3.020 s trunc взимаме 3
    //     }
    // });
   let keys = Object.keys(bottle);
    for (let key of keys) {
        let quantity = bottle[key];
        console.log(`${key} => ${quantity}`);
    }
   //  for (let bottleElement in bottle) {
   //      let quantity = bottle[bottleElement];
   //      console.log(`${bottleElement} => ${quantity}`);
   //  }
}

solve([
        'Orange => 2000',
        'Peach => 1432',
        'Banana => 450',
        'Peach => 600',
        'Strawberry => 549'
    ]
);