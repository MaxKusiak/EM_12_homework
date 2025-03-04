import data from "./data.json";

type Review = {
    user: string,
    comment: string,
    rating: number,
    date: string
};

type Product = {
    id: number,
    name: string,
    category: string,
    price: number,
    inStock: boolean,
    rating: number,
    details: object,
    reviews: Review[]
};

function calculateTotalPrice(productsPrices: number[]): number{
    let totalPrice: number = 0;
    for(let i: number = 0; i < productsPrices.length; i++){
        totalPrice += productsPrices[i];
    }
    return totalPrice;
}

function filterByMinValue(array: number[], min: number): number[]{
    let newArray: number[] = [];
    for(let i: number = 0; i < array.length; i++){
        if(array[i] >= min){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

function filterByCategory(products: Product[], category: string): Product[]{
    let newProducts: Product[] = [];
    for(let i: number = 0; i < products.length; i++){
        if(products[i].category == category){
            newProducts.push(products[i]);
        }
    }
    return newProducts;
}

function calculateAverageRating(products: Product[]): number{
    let averageRating: number = 0;
    for(let i: number = 0; i < products.length; i++){
        averageRating += products[i].rating;
    }
    if(products.length != 0){
        averageRating /= products.length;
    }
    return averageRating;
}

function findMostExpensiveProduct(products: Product[]): Product{
    let mostExpensiveProduct: Product;
    if(products.length == 0){
        return mostExpensiveProduct;
    }
    mostExpensiveProduct = products[0];
    for(let i: number = 1; i < products.length; i++){
        if(mostExpensiveProduct.price < products[i].price){
            mostExpensiveProduct = products[i];
        }
    }
    return mostExpensiveProduct;
}

function getAvailableProducts(products: Product[]): Product[]{
    let newProducts: Product[] = [];
    for(let i: number = 0; i < products.length; i++){
        if(products[i].inStock){
            newProducts.push(products[i]);
        }
    }
    return newProducts;
}

function findProductByName(products: Product[], name: string): Product{
    for(let i: number = 0; i < products.length; i++){
        if(products[i].name == name){
            return products[i];
        }
    }
    return undefined;
}

function sortByPrice(products: Product[], order: "asc" | "desc"): Product[]{
    if(order == "asc"){
        return products.sort((a, b) => a.price - b.price);
    }else if(order == "desc"){
        return products.sort((a, b) => b.price - a.price);
    }
}

function addReview(review: Review, id: number){
    if(!data.map((element) => element.id).includes(id)){
        return undefined;
    }
    data[data.findIndex(product => product.id == id)].reviews.push(review);
}
