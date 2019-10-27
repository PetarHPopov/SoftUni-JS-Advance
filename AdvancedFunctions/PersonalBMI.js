function BMI() {
    let [name, age, weight, height] = arguments;
    let hMeters = height / 100;
    let calculateBni = Math.round(weight / hMeters ** 2);

    let getStatus = function () {
        if (calculateBni < 18.5) {
            return "underweight";
        } else if (calculateBni < 25) {
            return "normal";
        } else if (calculateBni < 30) {
            return "overweight";
        } else {
            return "obese";
        }
    };
    let status = getStatus();

    let evolution = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: calculateBni,
        status: status
    };
    if (status === "obese") {
        evolution.recommendation = "admission required";
    }
    return evolution;
}

console.log(BMI('Desy', 42, 57, 163));