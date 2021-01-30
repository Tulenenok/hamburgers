class Parser {
    constructor (element) {
        this.price = +element.dataset['price'];
        this.cal = +element.dataset['cal'];
    }
}

class Hamburger {
    constructor(size, topping, optionally) {
        this.size = new Parser(this.selectSize(size));
        this.topping = this.getSeveral(topping);
        this.optionally = this.getSeveral(optionally);
    }
    
    selectSize (size) {
        return document.querySelector(`input[name = ${size}]:checked`);
    }

    selectAll (name) {
        return [...document.querySelectorAll(`input[name = ${name}]:checked`)];
    }

    getSeveral (name) {
        let result = [];
        this.selectAll(name).forEach(elem => result.push(new Parser(elem)));
        return result;
    }

    sumPrice () {
        let result = this.size.price;
        this.topping.forEach(elem => result += elem.price);
        this.optionally.forEach(elem => result += elem.price);
        return result;
    }

    sumCal () {
        let result = 0;
        result += this.size.cal;
        this.topping.forEach(elem => result += elem.cal);
        this.optionally.forEach(elem => result += elem.cal);
        return result;
    }

}

document.querySelector('.button').addEventListener('click', function (event) {
    let newHamburger = new Hamburger('size', 'top', 'opt');
    event.target.textContent = 'Итог: ' + newHamburger.sumPrice() + 'рублей, ' + newHamburger.sumCal() + 'калорий'
})

