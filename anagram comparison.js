// Comparing Anagrams

function compare(a, b) {
    y = a.split("").sort();
    z = b.split("").sort();
    for (i = 0; i < y.length; i++) {
        if (y.length === z.length) {
            if (y[i] === z[i]) {
                return true;
                break;
            }
            else {
                return false;
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