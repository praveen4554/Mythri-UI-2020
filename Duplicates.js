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

function duplicate1(arr) {
    var map = {}, j, size;

    for (j = 0, size = arr.length; j < size; j++){
        if (map[arr[j]]){
            return false;
        }

        map[arr[j]] = true;
    }

    return true;
}

