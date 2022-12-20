export function scramble(string) {
    let output = ""
    for (let char of string) {
        if (isLetterOrNumber(char)) {
            const rand = randIntBetween(0,61);
            let randChar;
            if ((rand >= 0) && (rand <= 9)) {
                randChar = String.fromCharCode(rand + 48);
            } else if ((rand >= 10) && (rand <= 35)) {
                randChar = String.fromCharCode(rand + 65 - 10);
            } else if ((rand >= 35) && (rand <= 61)) {
                randChar = String.fromCharCode(rand + 97 - 36);
            }
            output = output + randChar;
        } else {
            output = output + char
        }
    }
    return output;
}

function randIntBetween(min, max) {
    return Math.trunc(min + (Math.random() * ((max+1) - min)))
}

function isLetterOrNumber(char) {
    if (char.match("^[a-zA-Z0-9]$")) {
        return true;
    } else {
        return false;
    }
}
