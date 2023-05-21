// // const numbers = [10, 20];

// // function hui (numbers) {
// //     return numbers.reduce((s, a)=>s+a/2, 0)};

// //  console.log(hui (numbers))

// let a = { f: 1, s: 2, g: 3, h: 4, l: 5 };
// let b = { f: 1, g: 2, u: 3, m: 4, l: 5 };
// //  let numbersEven;
// //  function even (c){numbersEven= Object.values(c).filter(even => even%2===0);
// // return numbersEven}
// // function evenNot (c){numbersEven= Object.values(c).filter(even => even%2!==0);
// //     return numbersEven}
// // let Eeven = even(a);
// // let Noteven = evenNot(a);

// const goodToDelete ={};
// for (const bad in a) { 
//     if (a.hasOwnProperty(bad) && b.hasOwnProperty(bad)) { goodToDelete[bad] = a[bad]; 
//     } 
// };


// // console.log(Noteven);
// // console.log(Eeven);
// console.log(goodToDelete);

// const goodToDelete ={};
// for (const bad in even(taskUrgency)) { 
//     if (even(taskUrgency).hasOwnProperty(bad) && even(taskImportance).hasOwnProperty(bad)) { goodToDelete[bad] = even(taskUrgency)[bad]; 
//     } 
// };
// let goodToDeleteString = JSON.stringify(Object.entries(goodToDelete).map (([key, values])=>key))


// alert('И выкинь из списка своих дел вот эти пункты! Как совершенно не важные и не срочные. \n ${goodToDelete}');

console.log(taskImportance)
console.log(taskUrgency)
// console.log(firstResult)
console.log(important)
console.log(notImportant)
console.log(urgent)
console.log(notUrgent)
console.log(goodToDelete);
console.log(goodToDeleteString);

//Результаты (блин, я не сделала варианты с равно, да? (спустя еще 10 минут):бляяяя я вообще не так всю схему построила. надо было их вообще по 4ем квадрантам сразу рассортировать, а потом уже выдавать раезультаты в каком квадранте чел больше всего времени проводит)