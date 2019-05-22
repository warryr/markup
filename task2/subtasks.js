var Robot = function (name) {
	this.name = name;
}

function add (op1, op2) {
	this.name = this.name || "Human";
	return  this.name + " can count to " + (op1 + op2);
}

var voltron = new Robot("Voltron");

// #1 Вывести результат сложения 0 и 1
console.log( add(0,1) );

// #2 Вывеcти результат сложения Voltron 1 и 2 используя call
console.log( add.call(voltron, 1, 2) );

// #3 Вывести результат сложения Voltron 20 и 30 используя apply
console.log( add.apply(voltron, [20, 30]) );

// #4 Вывести результат сложения Voltron «drinking» и «beer» используя bind
add = add.bind(voltron);
console.log( add("drinking", "beer") );