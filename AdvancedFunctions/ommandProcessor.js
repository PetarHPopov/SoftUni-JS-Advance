function solution() {
    let result = "";
    function append(str) {
        result += str;
    }
    function removeStart(number) {
        result = result.slice(number)
    }
    function removeEnd(number) {
        result = result.slice(0, result.length - number)
    }
    function print() {
        console.log(result);
    }
    return {
        append,
        removeStart,
        removeEnd,
        print
    }

    // return {
    //     append: (str) => result += str,
    //     removeStart: (number) => result = result.substring(number),
    //     removeEnd: (number) => result = result.substring(0, result.length - number),
    //     print: () => console.log(result)
    // }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
