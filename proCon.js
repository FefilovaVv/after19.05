


//начало начал
const option1 = prompt('Между чем (1) и чем (2) ты не можешь решиться? Напиши сейчас свой первый (1) вариант из двух разрывающих на части. Например, если ты не можешь решить "купить Дом или Яхту?" - то напиши "купить Дом"');
const option2 = prompt('А теперь напиши свое второе (2) чем. Например, если ты не можешь решить "купить Дом или Яхту?", напиши сейчас "купить Яхту"');
//Все, что связанно с option1Pro
let option1Pro;
let option1ProValueFinal;
let option1ProValueFirst;
let option1ProValueNext;
let option1ProInput = [];
function addoption1ProInputFirst(option1Pro, option1ProValueFirst) {
    option1ProInput[option1Pro] = option1ProValueFirst;
}

function addoption1ProInputNext(option1Pro, option1ProValueNext) {
    option1ProInput[option1Pro] = option1ProValueNext;
}

option1Pro = prompt('Расскажи мне про "за" первого варианта, что хорошего произойдет, если ты выберешь его?');
option1ProValueFirst = Number(prompt('Напиши значение от 1 до 10, где \n1 = не такое уж и важное "за", пофиг на него \n10 = Очень-очень важное "за", хочу его!'));
addoption1ProInputFirst(option1Pro, option1ProValueFirst);
for (option1ProValueFinal = 0; option1ProValueFinal >= 0; option1ProValueFinal += option1ProValueNext) {
    option1Pro = prompt('Еще "за"? \nЕсли их нет, то напиши "стоп"')
    //у меня не работает если сказать ему option1Pro == 'стоп'||'Cтоп' и я не могу понять почему
    if (option1Pro == 'стоп') { break };
    option1ProValueNext = Number(prompt('От 1 до 10 по шкале важности'));
    addoption1ProInputNext(option1Pro, option1ProValueNext);
  
};

let option1ProValueFinalSum = option1ProValueFinal + option1ProValueFirst;



//все что связанно с option1Con
let option1Con;
let option1ConValueFinal;
let option1ConValueFirst;
let option1ConValueNext;
//массив ниже особо пока не задействован и вроде как бесполезен, но только пока, я сделала его как задел на будущее и нстройкии опции вывести все свои за и против и степень их важности
let option1ConInput = [];
function addoption1ConInputFirst(option1Con, option1ConValueFirst) {
    option1ConInput[option1Con] = option1ConValueFirst;
}

function addoption1ConInputNext(option1Con, option1ConValueNext) {
    option1ConInput[option1Con] = option1ConValueNext;
}


option1Con = prompt('Расскажи мне про "против" первого варианта, что хорошего НЕ произойдет, если ты выберешь его?');
option1ConValueFirst = Number(prompt('ВНИМАТЕЛЬНО: Напиши значение от -1 до -10, где \n-1 = чуть-чуть грустно от того что это не произойдет, но в целом норм, пофиг на него \n-10 = Это просто ужасно, что этого не произойдет! Мне даже при мысли об этом дурно.'));
addoption1ConInputFirst(option1Con, option1ConValueFirst);
for (option1ConValueFinal = 0; option1ConValueFinal >= 0; option1ConValueFinal += option1ConValueNext) {
    option1Con = prompt('Еще "против"? \nЕсли их нет, то напиши "стоп"')
    //у меня не работает если сказать ему option1Con == 'стоп'||'Cтоп' и я не могу понять почему
    if (option1Con == 'стоп') { break };
    option1ConValueNext = Number(prompt('От -1 до -10 по шкале страданий'));
    addoption1ConInputNext(option1Con, option1ConValueNext);

};

let option1ConValueFinalSum = option1ConValueFinal + option1ConValueFirst;

//Промежуточный результат по option1
let option1Result = option1ProValueFinalSum + option1ConValueFinalSum;













//Все, что связанно с option2Pro
let option2Pro;
let option2ProValueFinal;
let option2ProValueFirst;
let option2ProValueNext;
let option2ProInput = [];
function addoption2ProInputFirst(option2Pro, option2ProValueFirst) {
    option2ProInput[option2Pro] = option2ProValueFirst;
}

function addoption2ProInputNext(option2Pro, option2ProValueNext) {
    option2ProInput[option2Pro] = option2ProValueNext;
}

option2Pro = prompt('Расскажи мне про "за" второго варианта, что хорошего произойдет, если ты выберешь его?');
option2ProValueFirst = Number(prompt('Напиши значение от 1 до 10, где \n1 = не такое уж и важное "за", пофиг на него \n10 = Очень-очень важное "за", хочу его!'));
addoption2ProInputFirst(option2Pro, option2ProValueFirst);
for (option2ProValueFinal = 0; option2ProValueFinal >= 0; option2ProValueFinal += option2ProValueNext) {
    option2Pro = prompt('Еще "за"? \nЕсли их нет, то напиши "стоп"')

    if (option2Pro == 'стоп') { break };
    option2ProValueNext = Number(prompt('От 1 до 10 по шкале важности'));
    addoption2ProInputNext(option2Pro, option2ProValueNext);

};

let option2ProValueFinalSum = option2ProValueFinal + option2ProValueFirst;



//все что связанно с option2Con
let option2Con;
let option2ConValueFinal;
let option2ConValueFirst;
let option2ConValueNext;
let option2ConInput = [];
function addoption2ConInputFirst(option2Con, option2ConValueFirst) {
    option2ConInput[option2Con] = option2ConValueFirst;
}

function addoption2ConInputNext(option2Con, option2ConValueNext) {
    option2ConInput[option2Con] = option2ConValueNext;
}


option2Con = prompt('Расскажи мне про "против" второго варианта, что хорошего НЕ произойдет, если ты выберешь его?');
option2ConValueFirst = Number(prompt('ВНИМАТЕЛЬНО: Напиши значение от -1 до -10, где \n-1 = чуть-чуть грустно от того что это не произойдет, но в целом норм, пофиг на него \n-10 = Это просто ужасно, что этого не произойдет! Мне даже при мысли об этом дурно.'));
addoption2ConInputFirst(option2Con, option2ConValueFirst);
for (option2ConValueFinal = 0; option2ConValueFinal >= 0; option2ConValueFinal += option2ConValueNext) {
    option2Con = prompt('Еще "против"? \nЕсли их нет, то напиши "стоп"')

    if (option2Con == 'стоп') { break };
    option2ConValueNext = Number(prompt('От -1 до -10 по шкале страданий'));
    addoption2ConInputNext(option2Con, option2ConValueNext);

};

let option2ConValueFinalSum = option2ConValueFinal + option2ConValueFirst;
//Промежуточный результат по option2
let option2Result = option2ProValueFinalSum + option2ConValueFinalSum;



//Итоговый результат 
//конечно клево потом будет настроить чтобы вместо "лучше Первый вариант" выпадало: Лучше купить дом. Просто уже оч сонная, чтобы гуглить

let result = null;
if (option1Result > option2Result) { result = 'Лучше первый вариант' }
else if (option1Result < option2Result) { result = 'Лучше второй вариант' }
else { result = 'Хуй знает!' };

console.log(result);



//Если люди в поле где должны быть цифры будут вводить еще и буквы - все конечно полетить и надо бы встроить им атата
//Если они в поля где подразумевается отрицательное чсило случайно введут положительное то тоже лучше бы на этот случай атата поставить, а то сами они к той страке не смогут вернуться и исправить
//Пока не придумала как бы сделать так чтобы люди могли корерктировать предыдущее, если они вдруг вспомнила "за" к первому варианту" но уже закончили их вводить. Точнее, наверное придумю с кучей кода но после того как посплю :)
//И было бы клево встраивать штуку для прерывания всей программы в любой момент, а то она прям долгая, но это тоже в след раз
