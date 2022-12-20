export function arrayToString(array) {
    let string = "";
    for (let i = 0;i<array.length;i++) {
        string = string + " " + array[i];
    }
    console.log(string);
    return string;
}