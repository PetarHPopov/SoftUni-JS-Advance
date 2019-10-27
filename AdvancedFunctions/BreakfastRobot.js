let manager = (function () {
    const ingredientObj = {protein: 0, carbohydrates: 0, fat: 0, flavours: 0};
    const recipesObj = {
        "apple": {carbohydrates: 1, flavours: 2},
        "lemonade": {carbohydrates: 10, flavours: 20},
        "burger": {carbohydrates: 5, fat: 7, flavours: 3},
        "eggs": {protein: 5, fat: 1, flavours: 1},
        "turkey": {protein: 10, carbohydrates: 10, fat: 10, flavours: 10}
    };

    const prepareRecipe = (recipe, neededQuantity) => {
        const neededIngredients = Object.entries(recipesObj[recipe]);
        for (const [ing, qty] of neededIngredients) {
            const ingredientStored = ingredientObj[ing] * neededQuantity;
            if ( ingredientStored < qty) {
                return `Error: not enough ${ing} in stock`
            }
        }
        for (const [ing, qty] of neededIngredients) {
            ingredientObj[ing] -= (qty * neededQuantity);
        }
        return "Success";
    };


    return function (input) {
        const tokens = input.split(" ");
        const command = tokens[0];
        if (command === "restock") {
            ingredientObj[tokens[1]] += Number(tokens[2]);
            return "Success";
        } else if (command === "prepare") {
            return prepareRecipe(tokens[1], Number(tokens[2]));
        } else if (command === "report") {
            return Object.entries(ingredientObj)
                .map((kvp) => `${kvp[0]}=${kvp[1]}`)
                .join(" ");
        }
    }
}());

console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
