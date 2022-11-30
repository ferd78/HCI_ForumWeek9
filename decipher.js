function DigitalDecipher(eMessage, Keys) {
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var output = "";
    Keys = Array.from(String(Keys), Number); 

    for(var i = 0; i < eMessage.length; i++) {
        var Char = eMessage[i];
        output += letters[Char - 1 - Keys[i % Keys.length]%26];

    }

    return output;
}

console.log(DigitalDecipher([20, 12, 18, 30, 21], 1939));
console.log(DigitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990));
console.log(DigitalDecipher([6, 4, 1, 3, 9, 20], 100));
