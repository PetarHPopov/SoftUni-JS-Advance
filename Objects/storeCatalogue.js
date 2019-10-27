function solve(input) {
    const sortAlpha = ((a, b) => a.localeCompare(b));

    let catalog = {};

    for (let line of input) {
        let [name, quantity] = line.split(" : ");
        quantity = Number(quantity);
        let firstChar = name[0];
        if (!catalog.hasOwnProperty(firstChar)) {
            catalog[firstChar] = {};
        }
        let product = catalog[firstChar];

        if (!product.hasOwnProperty(name)) {
            product[name] = quantity;
        }
    }
    let sortCatalog = Object.keys(catalog).sort(sortAlpha);
    for (let p of sortCatalog) {
        console.log(p);
        let product = catalog[p];
        let sortProduct = Object.keys(product).sort(sortAlpha);
        for (let string of sortProduct) {
            console.log(`  ${string}: ${product[string]}`)
        }
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);