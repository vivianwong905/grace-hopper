
/*
If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 
*/

// need price before discount - pricePerRefill x refills
// if sub is true, 25% discount
// if coupon is true, - $10

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

function pricebeforeDiscount(pricePerRefill, refills) {
  return pricePerRefill * refills;
}

function priceSubscription(pricebeforeDiscount, subscription) {
  if (subscription) {
    return pricebeforeDiscount - pricebeforeDiscount * 0.25;
  } else {
    return pricebeforeDiscount;
  }
}

// funnel down, check coupon, and then check priceSubscription 
function priceDiscountCoupon(priceSubscription, coupon){
    if (coupon){
        return priceSubscription - 10;
    } else {
        return priceSubscription;
    }
}

const sarah1 = pricebeforeDiscount(sarah.pricePerRefill, sarah.refills);
const sarah2 = priceSubscription(sarah1, sarah.subscription);
const sarah3 = priceDiscountCoupon(sarah2, sarah.coupon);
console.log("your grand total is $", sarah3);

const timmy1 = pricebeforeDiscount(timmy.pricePerRefill, timmy.refills);
const timmy2 = priceSubscription(timmy1, timmy.subscription);
const timmy3 = priceDiscountCoupon(timmy2, timmy.coupon);
console.log("your grand total is $", timmy3);

const rocky1 = pricebeforeDiscount(rocky.pricePerRefill, rocky.refills);
const rocky2 = priceSubscription(rocky1, rocky.subscription);
const rocky3 = priceDiscountCoupon(rocky2, rocky.coupon);
console.log("your grand total is $", rocky3);