const price = 4500;
const age = 61;
if (age < 12 ) {
    console.log("free");
} else if (age > 60) {
    const discount = price /100 * 50;
    const pay = price - discount;
    console.log(pay);
} else {
    console.log(price);
}