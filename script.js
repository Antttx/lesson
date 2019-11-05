let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let obj = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let answer1 =  prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer2 =  prompt("Во сколько обойдется?", ""),
    answer3 =  prompt("Введите обязательную статью расходов в этом месяце", ""),
    answer4 =  prompt("Во сколько обойдется?", "");

obj.expenses.answer1 = answer2;
obj.expenses.answer3 = answer4;

alert("Бюджет на 1 день: "+obj.budget / 30);