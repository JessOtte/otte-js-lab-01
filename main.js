let name1 = prompt('what is your name?');
let name2 = prompt('what is your name?');
let name3 = prompt('what is your name?');
let result = document.getElementById('result');

// let name1 = "joe";
// let name2 = "jessica";
// let name3 = "beth";


if ( (name1.length === name2.length) && (name1.length > name3.length)) {
    result.innerHTML = `${name1} & ${name2} tie for the longest name!`;
    // console.log(`${name1} & ${name2} tie for the longest name!`);
}

else if ( (name1.length === name2.length) && (name1.length === name3.length)) {
    result.innerHTML = `${name1} & ${name2} & ${name3} tie for the longest name!`;
    // console.log(`${name1} & ${name2} & ${name3} tie for the longest name!`);
}
else if ( (name1.length > name2.length) && (name1.length > name3.length)) {
    result.innerHTML = `${name1} has the the longest name!`;
    // console.log(`${name1} has the the longest name!`);
}

else if ( (name2.length > name1.length) && (name2.length > name3.length)) {
    result.innerHTML = `${name2} has the the longest name!`;
    // console.log(`${name2} has the the longest name!`);
}

else if ( (name3.length > name1.length) && (name3.length > name2.length)) {
    result.innerHTML = `${name3} has the the longest name!`;
    // console.log(`${name3} has the the longest name!`);
}



