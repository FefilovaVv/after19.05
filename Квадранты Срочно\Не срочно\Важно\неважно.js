
let task = 0;
let importance = 0;
let urgency = 0;
const STOP_WORD = '.'
const taskImportance = {[task]: importance };
const taskUrgency = {[task]: urgency };


while(true) {task = prompt('Введи свое дело');
if (task==='.'){break};
taskImportance[task] = confirm('Оно важное?');
taskUrgency[task] = confirm('Оно срочное?');
taskImportance.task = task;
taskUrgency.task = task;}

//разделение на только важно, только не важно, только срочное и только не срочное

let  onlyImportant=null;
let  onlyNotImportant=null;
let  onlyUrgent=null;
let  onlyNotUrgent=null;
function filtration (notFiltered,value) {
 let filteredInArr =[];
 let filtered ={};
 for (let prop in notFiltered)
 { if(notFiltered.hasOwnProperty(prop)&&notFiltered[prop]===value) 
 { filteredInArr.push({prop:prop, value:notFiltered[prop]});}
  filtered = filteredInArr.reduce((obj,item)=>{obj[item.prop]=item.value;
return obj;}, {});
}
return filtered;
}

onlyImportant=filtration(taskImportance, true);
onlyNotImportant=filtration(taskImportance, false);
onlyUrgent=filtration(taskUrgency, true);
onlyNotUrgent=filtration(taskUrgency, false);


//Разделение на квадранты

const squareOne ={};
const squareTwo ={};
const squareThree ={};
const squareFour ={};
const c ={};
 function toSquare(obj1, obj2, commonForBoth) {
    for (let common in obj1) {if (obj1.hasOwnProperty(common)&&obj2.hasOwnProperty(common)) {commonForBoth[common]=obj1[common]};
}
return c
 }
 
 toSquare(onlyImportant, onlyUrgent, squareOne);
 toSquare(onlyImportant, onlyNotUrgent, squareTwo);
 toSquare(onlyNotImportant, onlyUrgent, squareThree);
 toSquare(onlyNotImportant, onlyNotUrgent, squareFour);

 //считаем кол-во дел в каждом квадранте
 function count(obj) {
  let countNumber = 0;
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      countNumber++;
    }
  }
  return countNumber;
}
const squareOneCounted = count(squareOne);
const squareTwoCounted = count(squareTwo); 
const squareThreeCounted = count(squareThree);
const squareFourCounted = count(squareFour);

//итоги

console.log('Задачек первого квадранта: ' +squareOneCounted);
console.log('Задачек второго квадранта: ' +squareTwoCounted);
console.log('Задачек третьего квадранта: ' +squareThreeCounted);
console.log('Задачек четвертого квадранта: ' +squareFourCounted);

console.log('1️⃣ Если у тебя больше задач из первого квадранта: Огонь! Ты больше всего работаешь в самом клевом и правильном квадранте не срочно и важно. У тебя никогда не горит от дедлайнов задница и ты подготавливаешь в своем темпе платформу для важных в будущем вещей. Так держать!')
console.log('2️⃣ Если у тебя больше задач из второго квадранта: Гуд. Квадрант срочно/важно - задница от дедлайнов иногда подгорает, но здорово, что ты рабоатешь по большей части именно над важными вещами')
console.log('3️⃣ Если у тебя больше задач из третьего квадранта: Нууу, такое себе что большую часть времени ты делаешь срочные и совершенно не важные дела. Начерта?')
console.log('4️⃣ Если у тебя больше задач из четвертого квадранта: Ооох, ёмае! Тебе срочно нужно что-то в этой жизни менять! Большую часть времени ты делаешь срочные, но совершенно не важные штуки. СТОП! Удали их к чертям собачим из своего списка.')
