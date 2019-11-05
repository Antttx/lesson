let money = +prompt("Ваш бюджет на месяц?"),
	time = prompt("Введите дату в формате YYYY-MM-DD");

let obj = {
	budget: money,
	timeDate: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false
};

for (let i = 0; i < 2; i++) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = prompt("Во сколько обойдется?", "");

	if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 && b.length < 50 ) {
		console.log('done');
		obj.expenses[a] = b;
	} else {
		console.log('Ещё раз');
		i--;
	}
}

obj.moneyPerDay = obj.budget / 30;
console.log("Ежедневный бюджет: " + obj.moneyPerDay);

if (obj.moneyPerDay < 100){
	console.log("Минимальный уровень достатка");
} else if (obj.moneyPerDay > 100 && obj.moneyPerDay < 1000){
	console.log("Средний уровень достатка");
} else if (obj.moneyPerDay > 1000){
	console.log("Хороший уровень достатка");
} else {
	console.log("Ошибка данных");
}