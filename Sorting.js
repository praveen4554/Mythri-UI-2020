// Sorting
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