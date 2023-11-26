# Introduction
The **Stock Management Application**  is an application that helps a user to: 
1. Add items to the stock
2. Update existing items from the stock
3. List available items in the stock
4. Find specific items from the stock
            
# Requirements
1. Look into all files and update the code wherever there is a `comment` written as: `//`.
2. First run the code of your application before completing the application.
3. To run the code, use the command:
`node index.js` from the terminal.
4. Before adding your own code, read the documentation provided above every function to understand better the way the function works.

  An example of documentation is:
  ```javascript
  /**
 * This function receives the `id` of an item, the `key` to update a given item, and the `value` to update the item.
 * @param {number} id the id of the item
 * @param {string} key the key to update
 * @param {*} value the value to update
 * 
 * 
 * @example
 * //The stock is an array of objects with properties id, name, measurementUnit, amount, pricePerUnit, and totalPrice.
 * //And an item with id 2 exists in the stock array.
 * 
 * update(2, 'amount', 10);
 * //This will update the 'amount' property of the item with id 2.
 * 
 * update(2, 'name', 'pepper');
 * //This will update the 'name' property of the item with id 2.
 * 
 * 
 * @endcode
 * 
 * NOTE:
 * Add a condition to also update the `totalPrice` if the key to be updated is either `amount` or `pricePerUnit`.
 * 
 */

  ```
  Documentation or comments such as this above are located at the top of each function. These contain descriptions of the parameters of a certain function, how to call the function, datatypes of arguments to pass in the function call, and even examples of how to call the functions.

  Below is the code for the function whose documentation is presented above.
  ```javascript
  const update = (id, key, value) => {
    console.log("\n2. UPDATING ------------------------------------------------------ ")
    console.log("\nItem before updating:");
    
    var exists = {};
    // Add code below to verify whether there is an item with the given id.
    
    console.log(exists);

    if (!exists) {
        // Add code to print a message if no item is found.
        
    } else {
        // Add your code below this line


        // Write your code above this line
        console.log("\nItem updated!");
        console.log("\nItem after updating:");
        console.log(exists);
    }
}
  ```
  In VSCode Editor, by hovering the mouse above the function name, you will get a detailed overview of the function's documentation.
  
  **Example**:
  
  ![Demo video on how comments work with functions](https://github.com/SheCanCODE-Backend-Devs/Stock-Management-Application/blob/main/assets/demo-for-question.gif)

