function solve(input) {
    let system = {};

    for (let line of input) {
        let [systemName, componentName, subcomponentName] = line.split(" | ");
        if (!system.hasOwnProperty(systemName)) {
            system[systemName] = {};
        }
        let components = system[systemName];
        if (!components.hasOwnProperty(componentName)) {
            components[componentName] = [];
        }
        components[componentName].push(subcomponentName);

    }

    let newSystem = Object.entries(system)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length);

    for (let [key,value] of newSystem) {
        console.log(key);
        let product = system[key];
        let sortProduct = Object.entries(product)
            .sort((a, b) => b[1].length - a[1].length);
        for (let p of sortProduct) {
            console.log(`|||${p[0]}`);
            p[1].forEach(e => console.log(`||||||${e}`));
        }
    }
}
solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);