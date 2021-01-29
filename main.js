class Hamburger {
    constructor(size = [0, 0], topping = [0, 0], optionally = [0, 0]) {
        this.sum = size[0] + topping[0] + optionally[0];
        this.cal = size[1] + topping[1] + optionally[1];
    }
    returnSum () {
        return this.sum;
    }
    returnCal () {
        return this.cal;
    }
}

class makeHamburger {
    static listenerForSize() {
        var size = document.querySelectorAll('.size');
        size.forEach(item => item.addEventListener('click', function(event) {
            if (event.target.id == 'small') {return [50, 20];} else {return [100, 40];}
        }))
    }

    static listenerForTopping() {
        var topping = document.querySelectorAll('.top');
        topping.forEach(item => item.addEventListener('click', function(event) {
            if (event.target.id == 'cheese') {return [10, 20];} else 
            if (event.target.id == 'salad') {return [20, 5];} else
            {return [15, 10]}
        }))
    }

    static listenerForOptions() {
        var options = document.querySelectorAll('.opt');
        options.forEach(item => item.addEventListener('click', function(event) {
            if (event.target.id == 'spice') {return [15, 0];} else {return [20, 5];}
        }))
    }
}

let  newHamburger = new Hamburger(makeHamburger.listenerForSize(), makeHamburger.listenerForTopping(), makeHamburger.listenerForOptions);

