let money, time;

function start(){
	while( isNaN(money) || money == '' || money == null ){
		money = +prompt("Ваш бюджет на месяц?");
	}

	time = prompt("Введите дату в формате YYYY-MM-DD");
}

start();

let obj = {
	budget: money,
	timeDate: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
	chooseExpenses: function(){
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", "");
				b = prompt("Во сколько обойдется?", "");
	
			if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 && b.length < 50 ) {
				obj.expenses[a] = b;
			} else {
				console.log('Ещё раз');
				i--;
			}
		}
	},
	detectDayBudget: function(){
		obj.moneyPerDay = obj.budget / 30;
		console.log("Ежедневный бюджет: " + obj.moneyPerDay.toFixed(2));
	},
	detectLevel: function(){
		if (obj.moneyPerDay < 100){
			console.log("Минимальный уровень достатка");
		} else if (obj.moneyPerDay > 100 && obj.moneyPerDay < 1000){
			console.log("Средний уровень достатка");
		} else if (obj.moneyPerDay > 1000){
			console.log("Хороший уровень достатка");
		} else {
			console.log("Ошибка данных");
		}
	},
	checkSavings: function(){
		let save = +prompt("Какова сумма накопления?"),
		percent = +prompt('Под какой процент?');
		obj.mathIncome = save / 100 /12 *percent;
		alert("Доход в месяц в вашева депозита: " + obj.mathIncome.toFixed(2));
	},
	chooseOptExpenses: function(){
		obj.savings = confirm('Вы имеете накопление?');
		if (obj.savings == true){
			checkSavings();
		}
	}
};

