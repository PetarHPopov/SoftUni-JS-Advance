function solve(input) {
    let heroes = [];

    for (let i = 0; i < input.length; i++) {
        let [name, level, items] = input[i].split(" / "); //дестръкчарин деректно взимаме стойностите
        level = Number(level);
        items = items ? items.split(", ") : []; // сплитваме масива но ако няма итамс затова с тернарен оператор
                                                // правим проверка защото ще върне undefind а то е falsi
        heroes.push({name, level, items});
    }
    console.log(JSON.stringify(heroes));
}


solve(
    ['Jake / 1000 / Gauss']
);