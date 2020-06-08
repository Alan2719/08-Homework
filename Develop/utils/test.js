const string = {list:'javascript css html c# java python'};

const array = string.list.split(' ');

console.log(array);

string.list = array;

console.log(string);