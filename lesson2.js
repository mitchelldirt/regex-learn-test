const str2 = `Cat
sat on 
the hat.`;
const regex2 = /\./g

const output2 = (str, regex, target) => {
    target.innerHTML = str.replace(regex, str => `<span>${str}</span>`);
}

output(str, regex, document.querySelector("pre"))