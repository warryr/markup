// #5 Написанный код должен вывести console.log имени которое лежит в this.name пятью разными способами

function showName() {
    var self = this;
    setTimeout(function() {
        this.name = this.name || 'Anonymous';
        console.log(self.name);
    }, 1000);
}

// 1
showName();

// 2
this.showName();

// 3
var human = this;
human.showName();

// 4
var me = {name: 'Maria'};
showName.call(me);

// 5
showName.apply(me);
