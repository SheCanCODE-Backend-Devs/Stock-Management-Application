
const {stock,overallInventory} = require("../db/stock");

const add = (item) => {

    id = stock.length+1;
    totalPrice = (item.pricePerUnit * item.amount);
    let newitem = {
        newId,
        ...item,
        totalPrice
    }
    stock.push(newitem);

    overallInventory.numberOfItemsInTheStock =overallInventory.numberOfItemsInTheStock + item.amount;
    overallInventory.totalCostOfItemsInTheStock =overallInventory.totalCostOfItemsInTheStock + item.totalPrice;

    console.log("\n1. ADDING ------------------------------------------------------ ")
    console.log('\nItem added!\n');
    console.log(stock);
    console.log(overallInventory);
}

const update = (id, key, value) => {
    console.log("\n2. UPDATING ------------------------------------------------------ ")
    console.log("\nItem before updating:\n");
    
    var exists = {};

    exists= stock.find(Elem => Elem.id === id);
    console.log(exists);

    if (!exists) {
      
        console.log(" No item is found ");
    } else {
      
          if(key=== "amount" || key === "pricePerUnit"){
            overallInventory.numberOfItemsInTheStock = overallInventory.numberOfItemsInTheStock - exists.amount;
            overallInventory.totalCostOfItemsInTheStock = overallInventory.totalCostOfItemsInTheStock - exists.totalPrice;
            console.log("\n Before updating:\n",overallInventory);
            exists[key]= value;
            exists.totalPrice = (exists.amount * exists.pricePerUnit);
            overallInventory.numberOfItemsInTheStock =overallInventory.numberOfItemsInTheStock + exists.amount;
            overallInventory.totalCostOfItemsInTheStock =overallInventory.totalCostOfItemsInTheStock + exists.totalPrice;
            console.log("\n After updating:\n",overallInventory);
          }
          else{
            exists[key]=value;
          }
          
        console.log("\nItem updated!");
        console.log("\nItem after updating:");
        console.log(exists);
    }
}



const updateManyElements = (id, item) => {
    console.log("\n3. UPDATE MANY ELEMENTS ------------------------------------------------------ ")
    console.log("\nItem before updating:");
    
    var exists = {};
    
    exists=stock.filter(ele=>ele.id===id);
    console.log(exists);

    if (!exists) {
        
        console.log("no item found");
    } else {
        
            for (const key in item) {
             if(key==="amount" || key==="pricePerUnit"){
                exists[key] = item[key];
                exists.totalPrice=(exists.amount * exists.pricePerUnit);

             } 
             else { 
             exists[key] = item[key];
            }
            }
        }
       
        console.log("\nItem updated!");
        console.log("\nItem after updating:");
        console.log(exists);
    
}



const remove = (id) => {
    console.log("\n4. REMOVE ------------------------------------------------------ ")
    
    var exists = {};
    exists= stock.find(elem => elem.id === id);
   overallInventory.numberOfItemsInTheStock = overallInventory.numberOfItemsInTheStock - exists.amount;
    overallInventory.totalCostOfItemsInTheStock = overallInventory.totalCostOfItemsInTheStock - exists.totalPrice;
    console.log(overallInventory);  
    if (!exists) {
        
        console.log("no item found");
    } else {
        var remainingItems = [];
       
    remainingItems = stock.filter(elem => elem !== id);


        console.log(`\nItem with id: ${id} is removed successfully!!`);
        console.log("\nRemainig Items:");
        console.log(remainingItems);
    }
}



const display = () => {

    console.log("\n5. DISPLAY ------------------------------------------------------ ")
    
    console.log("\nItems in stock:\n");
    // console.log(stock);
}



const findById = (id) => {    
    console.log("\n6. FIND BY ID ------------------------------------------------------ ")
    
    let foundItem = {};
   
    foundItem=stock.find(Element=>Element.id===id);


    if (!foundItem) {
        console.log("Item not found!")
    } else {
        console.log("\nFound Item:\n");
        console.log(foundItem);
    }
}

const findMany = (measurementUnit) => {
    console.log("\n7. FIND BY MANY ------------------------------------------------------ ")
    let foundItems = [];

    foundItems =stock.filter(Element=>Element.measurementUnit===measurementUnit);


    if (!foundItems) {
        console.log("No item matches the given measurement unit!");
    } else {
        console.log(`\nItems with ${measurementUnit} as measurement unit are: \n`);
        console.log(foundItems);
    }
}






module.exports = {
    add, 
    display, 
    findById, 
    findMany,
    remove, 
    update, 
    updateManyElements
}

