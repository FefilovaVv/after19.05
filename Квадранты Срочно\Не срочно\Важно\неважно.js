
let task = 0;
let importance = 0;
let urgency = 0;
const STOP_WORD = '.'
const taskImportance = {[task]: importance };
const taskUrgency = {[task]: urgency };

function toNumbers(importance, urgency) 
{if (importance === true) { importance = 1 }
else if (importance === false) { importance = 2 }
if (urgency === true) { urgency = 1 }
else if (urgency === false) { urgency = 2 };
taskImportance[task]= importance; 
taskUrgency[task] = urgency;
return taskImportance, taskUrgency;
};

while(true) {task = prompt('Введи свое дело');
if (task==='.'){break};
importance = confirm('Оно важное?');
urgency = confirm('Оно срочное?');
toNumbers(importance, urgency);}

//подсчетики всякие
let numbersEven; 
function even (c){numbersEven= Object.values(c).filter(even => even%2===0);
return numbersEven}
function evenNot (c){numbersEven= Object.values(c).filter(even => even%2!==0);
   return numbersEven}


const urgent = evenNot(taskUrgency).reduce((sum, Value)=>sum+Value, 0);
const notUrgent = even(taskUrgency).reduce((sum, Value)=>sum+Value, 0)/2;
const important = evenNot(taskImportance).reduce((sum, Value)=>sum+Value, 0);
const notImportant = even(taskImportance).reduce((sum, Value)=>sum+Value, 0)/2;

//Результаты (блин, я не сделала варианты с равно, да? (спустя еще 10 минут):бляяяя я вообще не так всю логику вычислений построила. надо было их вообще по 4ем квадрантам сразу рассортировать, а потом уже выдавать раезультаты в каком квадранте чел больше всего времени проводит)

if (urgent<notUrgent && important>notImportant){console.log('Огонь! Ты больше всего работаешь в самом клевом и правильном квадранте не срочно и важно. У тебя никогда не горит от дедлайнов задница и ты подготавливаешь в своем темпе платформу для важных в будущем вещей. Так держать!')}
else if (urgent>notUrgent && important>notImportant){console.log('Гуд. Квадрант срочно/важно - задница от дедлайнов иногда подгорает, но здорово, что ты рабоатешь по большей части именно над важными вещами')}
else if (urgent>notUrgent && important<notImportant){console.log('Нууу, такое себе что большую часть времени ты делаешь срочные и совершенно не важные дела. Начерта?')}
else if (urgent<notUrgent && important<notImportant){console.log('Ооох, ёмае! Тебе сровно нужно что-то в этой жизни менять! Большую часть времени ты делаешь срочные, но совершенно не важные штуки. СТОП!')};


//рекомендосьен от чего в списке задач своих избавиться
const goodToDelete ={};
for (const bad in taskUrgency) { 
    if (taskUrgency.hasOwnProperty(bad) && taskImportance.hasOwnProperty(bad)) { goodToDelete[bad] = taskUrgency[bad]; 
    } 
};
let goodToDeleteString = JSON.stringify(Object.entries(goodToDelete).filter(([key, value])=>value===2).map (([key, value])=>key));

alert('И выкинь из списка своих дел вот эти пункты! Как совершенно не важные и не срочные' +goodToDeleteString);


