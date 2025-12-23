let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true, 'Apple'];
let values3 = ['Mars', 9, 'Apple'];

values1.forEach(a => {
    values2.forEach(b => {
        values3.forEach(c => {
            if (a == b && b == c) {
                console.log(a);
            }
        });
    });
});