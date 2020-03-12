function duplicate(array) {
    const input = {};
    const output = [];

    array.forEach(item => {
        if(!input[item])
            input[item] = 0;
        input[item] += 1;
    })
    for (const i in input) {
        if(input[i] >= 2) {
            output.push(i);
        }
    }
    return output;
}

console.log(duplicate([]));