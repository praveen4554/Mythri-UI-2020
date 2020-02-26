function anagram(string) {
    if (string.length === 1)
        return string;
    var ana = [];
    for (var i = 0; i < string.length; i++){
        var s = string[0];
    var newString = anagram(string.slice(1, string.length));
    for (var j = 0; j < newString.length; j++)
        ana.push(s + newString[j]);
    string = string.substr(1, string.length) + s;
    }
   return ana;
}

function sorting() {
    var names = ["A", "B", "C", "D", "E"];
    var marks = [60, 70, 80, 90, 100];
    var list = [];
    for (var j = 0; j < names.length; j++)
        list.push({ 'name': names[j], 'mark': marks[j] });
    list.sort(function (a, b) {
        return ((a.name < b.name) ? -1 : ((a.name == b.name) ? 0 : 1));
    });

    names = [];
    marks = [];

    for (var k = 0; k < list.length; k++) {
        names.push(list[k].name);
        marks.push(list[k].mark);
    }
    var html = "";
for (var h = 0; h < names.length; h++)
  html += names[h] + ", " + marks[h] + "</br";
   document.getElementById("sorting").innerHTML = html;
}

function compare(a, b) {
    y = a.split("").sort();
    z = b.split("").sort();
    for (i = 0; i < y.length; i++) {
        if (y.length === z.length) {
            if (y[i] === z[i]) {
                console.log(a + " and " + b + " are anagrams!");
                break;
            }
            else {
                console.log(a + " and " + b + " are not anagrams.");
                break;
            }
        }
        else {
            return false;
        }
        break;
    }
}
comapre(a, b);


