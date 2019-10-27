(function () {
    let id = 0;
    return class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            Object.entries(template).forEach(([key, value]) => {
                if (typeof value === "function") {
                    Object.getPrototypeOf(this)[key] = value;  // закачаме функцията към инстанция на класа а не към самия клас : Extensible.prototype
                } else {
                    this[key] = value;  // закачаме пропърти към класа
                }
            })
        }
    }
}());