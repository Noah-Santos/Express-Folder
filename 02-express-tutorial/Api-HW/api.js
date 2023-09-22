const express = require('express');
const app = express();
const {menu} = require('./menu');

// gets the product information and turns it into a json
// prints the json when it is on the home page
app.get('/', (req, res) => {
    const list = menu.map(product =>{
        const {id, category, title, price, desc} = product;
        return {id, category, title, price, desc};
    })
    res.json(list);
});

// queries the menu items by category
app.get('/menu/query', (req,res)=>{
    const {search,limit} = req.query;
    let menuItem = [...menu];
    // gets the menu items that match the category given
    if(search){
        menuItem = menuItem.filter((product)=>{
            return product.category.startsWith(search);
        })
    }
    // if a limit is specified, then is makes sure that the number of returned items matches the limit
    if(limit){
        menuItem = menuItem.slice(0, Number(limit));
    }
    // if there is one item, it will return that one item
    if(menuItem.length < 2){
        return res.status(200).json({success:true, data:[]});
    }
    // returns the items that match in a json format
    res.status(200).json(menuItem);
})

// allows the user to find a product by id
app.get('/menu/:menuID', (req, res) => {
   const {menuID} = req.params;
   
    // determines if the parameter id is in the data list or not
   const oneItem = menu.find((items)=>items.id == Number(menuID));

    // if the item is not in the data list, it returns 404 not found error
   if(!oneItem){
        return res.status(404).send('Product not found');
   }
   return res.json(oneItem);
});

// allows the user to sort the items by price
app.get('/menu/order/:direction', (req, res) => {
    const {direction} = req.params;
    if(direction == 'asc'){
        res.json(sortingPrices('asc'));
    }else if(direction == 'desc'){
        res.json(sortingPrices('desc'));
    }
});

// function to sort the menu items by price
function sortingPrices(direction){
    // puts the prices into an array
    let prices = [];
    let temp = [];
    menu.map(item=>{
        const {price} = item;
        prices.push(price);
    })

    // sorts array
    for(let i = 0; i < prices.length; i++){
        while(i > 0 && prices[i] <= prices[i-1]){
            let temp = prices[i];
            prices[i] = prices[i-1];
            prices[i-1] = temp;
            i--;
        }
    }
    
    // determines how to arrange the array
    for(let i = 0; i < prices.length; i++){
        temp.push(prices[i])
    }
    
    if(direction == 'desc'){
        for(let i = prices.length-1; i >= 0; i--){
            temp[(prices.length-1) - i] = prices[i]
        };
        prices = temp;
    }

    // changes the price values into the menu objects
    menu.map(item=>{
        const {price} = item;
        for(let i = 0; i < prices.length; i++){
            if(price == prices[i]){
                prices[i] = item;
            }
        }
    })

    return prices;
}

// makes the server listen
app.listen(5000, () => {console.log('listening on port 5000 and good luck')});