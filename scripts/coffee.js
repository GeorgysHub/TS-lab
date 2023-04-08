function calcCoffee(size, milk, flavor) {
    let price = 0;
    if (size === 'small') {
        price += 150;
    }
    else if (size === 'medium') {
        price += 180;
    }
    else if (size === 'large') {
        price += 200;
    }
    if (milk === 'banana') {
        price += 100;
    }
    else if (milk === 'coconut') {
        price += 110;
    }
    else if (milk === 'soy') {
        price += 130;
    }
    if (flavor === 'berry') {
        price += 10;
    }
    else if (flavor === 'vanilla') {
        price += 20;
    }
    else if (flavor === 'caramel') {
        price += 30;
    }
    else if (flavor === 'chocolate') {
        price += 40;
    }
    return price;
}
console.log(calcCoffee('small', 'banana', 'vanilla')); // 270
console.log(calcCoffee('large', 'cow', 'chocolate')); // 240
console.log(calcCoffee('medium', 'soy')); // 310
console.log(calcCoffee('medium')); // 180