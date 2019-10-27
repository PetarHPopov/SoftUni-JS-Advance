function solve(input) {

    let catalogCar = {};

    for (let car of input) {
        let [brands, carModel, producedCar] = car.split(" | ");
        producedCar = Number(producedCar);
        if (!catalogCar.hasOwnProperty(brands)) {
            catalogCar[brands] = {};
        }
        let infoCar = catalogCar[brands];
        if (!infoCar.hasOwnProperty(carModel)) {
            infoCar[carModel] = 0;
        }
        infoCar[carModel] += producedCar;
    }
    let sortCatalog = Object.keys(catalogCar);

    for (let car of sortCatalog) {
        console.log(car);
        let carInfo = catalogCar[car];
        let carSortInfo = Object.entries(carInfo);

        for (let car of carSortInfo) {
            console.log(`###${car[0]} -> ${car[1]}`);
        }
    }
}

solve(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000' ,
    'Mercedes-Benz | W163 | 200']
);