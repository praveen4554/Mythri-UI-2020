var str = "civic";
var palin = [];
var newStr;

for (let i = 0; i < str.length + 1; i++) {
  for (j = 0; j < str.length + 1; j++) {
    newStr = str.slice(i, j);
    console.log(newStr);
    var reverse = newStr
      .split("")
      .reverse()
      .join("");
    if (reverse.length > 2 && reverse === newStr) {
      palin.push(newStr);
    }
  }
}

console.log(palin);



