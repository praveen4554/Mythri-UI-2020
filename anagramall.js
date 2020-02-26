// Print all possible Anagrams
function anagram(string) {
    if (string.length === 1)
        return string;
    var ana = [];
    for (var i = 0; i < string.length; i++) {
        var s = string[0];
        var newString = anagram(string.slice(1, string.length));
        for (var j = 0; j < newString.length; j++)
            ana.push(s + newString[j]);
        string = string.substr(1, string.length) + s;
    }
    return ana;
}