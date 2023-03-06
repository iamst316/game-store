
const productsArray = [
    {
        id: 'price_1MihnASCYRjE8Z5GFBJWu5yW',
        title: 'God Of War',
        price : 29.99
    },
    {
        id: 'price_1MihnvSCYRjE8Z5G6UKuFN7r',
        title: 'Red Dead Redemption 2',
        price : 49.99
    },
    {
        id: 'price_1MihoJSCYRjE8Z5GiK4iSSd0',
        title: 'Max Payne 3',
        price : 13.99
    }
]

function getProductData(id){
    let productData = productsArray.find(product=> product.id===id);

    if(productData===undefined){
        console.log("Not Found");
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData};