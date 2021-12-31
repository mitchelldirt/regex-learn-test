let str3 = `http://egghead.io
not a web address
http://
https://www.egghead.io`;

let regex3 = new RegExp("https?:\/\/.+", "g");

// `?` optional
// `+` match 1 of the value to the end of the string
// `a{1,3}` min 1 max 3
// `a{1,}` 1 to infinity same as the `+`
// `\` forward slash escapes meta characters such as ?, +, /


const output3 = (str, regex, target) => {
    target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
}

output3(str3, regex3, document.querySelector("pre"))