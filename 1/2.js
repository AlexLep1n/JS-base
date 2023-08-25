"use strict";

/*
Необходимо создать переменную name, записать в эту переменную свое имя.
Необходимо также создать переменную admin и присвоить этой переменной значение
из переменной name.
Вывести значение переменной admin в консоль.
*/

const myName = "Alex"; //ругается на переменную name, так как она устаревшая ('name' is deprecated)
const admin = myName;

console.log(`name: ${myName}\nadmin: ${admin}`);
