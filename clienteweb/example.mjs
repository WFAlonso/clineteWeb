import fetch from 'node-fetch';
const response = await fetch('http://api.icndb.com/jokes/random/');
const json  = await response.json();
console.log(json);