var start = new Date().getTime();
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const matchon = /Fox/g;


 const file1 = readFile('file1.txt', 'utf8');
 const file2 = readFile('file2.txt', 'utf8');
 const file3 = readFile('file3.txt', 'utf8');
 const file4 = readFile('file4.txt', 'utf8');

 Promise.all([file1,file2,file3,file4])
 .then((data)=>{

    console.log(data);
    const found = data.join().match(matchon);
      console.log("Asychronous Data :",found);
       console.log('Asy... found word : ' + found.length + ' times.');
       var end = new Date().getTime();
var dur = end - start;
console.log("Asynchronously Processed Time Duration :",dur/1000);
 })



 //without use any async code 
const startTime1 = new Date();

const fsync = require('fs');

const fsyn1 = fsync.readFileSync('file1.txt', 'utf8');
const fsyn2 = fsync.readFileSync('file2.txt', 'utf8');
const fsyn3 = fsync.readFileSync('file3.txt', 'utf8');
const fsyn4 = fsync.readFileSync('file4.txt', 'utf8');

const matching = /Quick/g;
const foundSync = (fsyn1 + fsyn2 + fsyn3 + fsyn4).match(matching);

console.log("Synchronous Data : ",foundSync);
console.log("Syn... Found Word : ",foundSync.length+ ' times.');

const endTime1 = new Date();
const dur =(endTime1 - startTime1);
console.log('Synchronously Processed Time Duration :',dur/1000);



