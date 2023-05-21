// дено не понимает русские буквы при вводе
const STOP_WORD = "stop";

const getOptionWord = (isFirstOption) =>
  isFirstOption ? "первого" : "второго";

const PROS_TEXT = {
  getFirstStatement: (isFirstOption) =>
    `Расскажи мне про "за" ${getOptionWord(
      isFirstOption
    )} варианта, что хорошего произойдет, если ты выберешь его?`,
  getFirstStatementValue:
    'Напиши значение от 1 до 10, где \n1 = не такое уж и важное "за", пофиг на него \n10 = Очень-очень важное "за", хочу его!',
  moreStatement: `Еще "за"? \nЕсли их нет, то напиши "${STOP_WORD}"`,
  statementValue: "От 1 до 10 по шкале важности",
};

const CONS_TEXT = {
  getFirstStatement: (isFirstOption) =>
    `Расскажи мне про "против" ${getOptionWord(
      isFirstOption
    )} варианта, что хорошего НЕ произойдет, если ты выберешь его?`,
  // Здесь лучше оставить положительную шкалу от 1 до 10, чтобы не переучивать пользователя,
  // а то он запутается 100%
  // просто потом вместо сложение сделаешь вычитание
  getFirstStatementValue:
    "Напиши значение от 1 до 10, где \n1 = чуть-чуть грустно от того что это не произойдет, но в целом норм, пофиг на него \n10 = Это просто ужасно, что этого не произойдет! Мне даже при мысли об этом дурно.",
  moreStatement: `Еще "против"? \nЕсли их нет, то напиши "${STOP_WORD}"`,
  statementValue: "От 1 до 10 по шкале страданий",
};

// создал словарь с текстом, чтобы текст лежал в одном месте
const TEXT = {
  getFirstOption:
    'Между чем (1) и чем (2) ты не можешь решиться? Напиши сейчас свой первый (1) вариант из двух разрывающих на части. Например, если ты не можешь решить "купить Дом или Яхту?" - то напиши "купить Дом"',
  getSecondOption:
    'А теперь напиши свое второе (2) чем. Например, если ты не можешь решить "купить Дом или Яхту?", напиши сейчас "купить Яхту"',
  cons: CONS_TEXT,
  pros: PROS_TEXT,
};

const firstOption = prompt(TEXT.getFirstOption);
const secondOption = prompt(TEXT.getSecondOption);

const getStatementValues = (textToShow, isFirstOption) => {
  let statement = prompt(textToShow.getFirstStatement(isFirstOption));
  let value = Number(prompt(textToShow.getFirstStatementValue));

  const statementValues = { [statement]: value };

  while (true) {
    statement = prompt(textToShow.moreStatement);

    if (statement === STOP_WORD) break;
    console.log(statement, STOP_WORD, statement === STOP_WORD);

    value = Number(prompt(textToShow.statementValue));
    statementValues[statement] = value;
    console.log(statementValues)
  }
  console.log(getStatementValues)

  return statementValues;
};

const firstPros = getStatementValues(TEXT.pros, true);
const firstCons = getStatementValues(TEXT.cons, true);
const secondPros = getStatementValues(TEXT.pros, false);
const secondCons = getStatementValues(TEXT.cons, false);

const firstResult =
  // тут тебе вообще ничего не понятно :D
  Object.values(firstPros).reduce((sum, value) => sum + value, 0) -
  Object.values(firstCons).reduce((sum, value) => sum + value, 0);

const secondResult =
  Object.values(secondPros).reduce((sum, value) => sum + value, 0) -
  Object.values(secondCons).reduce((sum, value) => sum + value, 0);

let result = "Хуй знает!";

if (firstResult > secondResult) {
  result = "Лучше первый вариант";
} else if (firstResult < secondResult) {
  result = "Лучше второй вариант";
}

console.log(result);
// вообще, можно было бы ещё больше всё обобщить, но это, на мой взгляд,
// для этой программы уже лишнее