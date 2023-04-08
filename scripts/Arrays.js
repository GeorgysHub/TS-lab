function funcArray(num) {
    if (num === null) {
        console.log([]);
    }
    else if (typeof num === "number") {
        const arr = [num];
        console.log(arr);
    }
    else if (typeof num === "string") {
        console.log(num.split(" "));
    }
    else if (Array.isArray(num)) {
        console.log(num);
    }
    else {
        console.log("Invalid input");
    }
}
funcArray(null);
funcArray(5);
funcArray("оп оп ав аы кц");
funcArray([1, 2, 3, 4, 5]);
funcArray(10001);