// g = global
// i = ignore case
var str = 'Is this This?';
const output = (str, regex, target) => {
    target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
}



var regex = new RegExp("is", "gi");

output(str, regex, document.querySelector('pre'));
var regex2 = /it/g;
console.log(regex2.test(str));
console.log(regex.exec(str));
console.log(regex.exec(str));
console.log(regex.exec(str));

// array that returns each instance of the pattern
console.log(str.match(regex));

console.log(str.replace(regex, str => "XX"))

console.log(str.search(regex))
