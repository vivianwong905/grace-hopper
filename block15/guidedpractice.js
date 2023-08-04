// add the values of the dinner object to calculate the total cost of the meal. 

const dinner = {
    burger: 12,
    steak: 20,
    soup: 8,
    macCheese: 14,
    soupSalad: 16
}

let price =0;
for(const property in dinner){
   price += dinner[property];
}
console.log(price);


// access keys
console.log(Object.keys(dinner));
// access values
console.log(Object.values(dinner));

