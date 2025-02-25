import fs from 'fs';

const jsonData = fs.readFileSync('./data.json', 'utf-8'); 
const data = JSON.parse(jsonData);

// map

// 1
let productsNames = data.map((element) => {
    return element.name;
});
// console.log(productsNames);

// 2
let productsNamesAndPrice = data.map((element) => {
    return {
        name: element.name,
        price: element.price
    };
});
// console.log(productsNamesAndPrice);

// filter

// 3
let productsInStock = data.filter((element) => {
    return element.inStock;
});
// console.log(productsInStock);

// 4
let priceOverHundred = data.filter((element) => {
    return element.price > 100;
});
// console.log(priceOverHundred);

// 5
let electronicProducts = data.filter((element) => {
    return element.category == "Electronics";
});
// console.log(electronicProducts);

// 6
let goodRatingProducts = data.filter((element) => {
    return element.rating >= 4.5;
});
// console.log(goodRatingProducts);

// reduce

// 7
let totalPrice = Math.round(data.reduce((totalPrice, element) => {
    return totalPrice + element.price;
}, 0) * 100) / 100;
// console.log(totalPrice);

// 8
let averagePrice = Math.round((totalPrice / data.length) * 100) / 100;
// console.log(averagePrice);

// II level

// 9
let minPriceProduct = data[0];
for(let i = 1; i < data.length; i++){
    if(minPriceProduct.price > data[i].price){
        minPriceProduct = data[i];
    }
}
// console.log(minPriceProduct);

let maxPriceProduct = data[0];
for(let i = 1; i < data.length; i++){
    if(maxPriceProduct.price < data[i].price){
        maxPriceProduct = data[i];
    }
}
// console.log(maxPriceProduct);

// 10
let allReviews = [].concat(...data.map((element) => {
    return element.reviews.map((element) => {
        return element;
    });
}));
// console.log(allReviews);

// 11
let averageRatingInStock = Math.round((productsInStock.reduce((totalRating, element) => {
    return totalRating + element.rating;
}, 0) / productsInStock.length) * 100) / 100;
// console.log(averageRatingInStock);

// 12
let reviewsCount = allReviews.length;
// console.log(reviewsCount);

// 13
let productsNamesAndReviews = data.map((element) => {
    return {
        name: element.name,
        reviews: element.reviews
    };
});
// console.log(productsNamesAndReviews);
