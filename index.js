// BASIC JAVASCRIPT ALGORITHM 1: convertFahrToCelsius

/* 
# The "convertFahrToCelsius" function below accepts "fahr" as an argument, and checks the data type of "fahr".
# If the data type of "fahr" is either "number" or "string", "fahr" is converted into celcius. 
# Otherwise an error message is returned stating that fahr is is not a valid number while indicating the invalid data type.
*/

let convertFahrToCelsius = fahr => {
    let parameterType = Object.prototype.toString.call(fahr).slice(8, -1);
    if (parameterType === "Number" || parameterType === "String") {
        parsedFahr = parseFloat(fahr);
        if(!isNaN(parsedFahr)){
            let celsius = (parsedFahr - 32)*5/9;
            return celsius.toFixed(4);
        } else {
            return `${JSON.stringify(fahr)} is not a valid number but a/an ${parameterType}`;
        }       
    } else {
        return `${JSON.stringify(fahr)} is not a valid number but a/an ${parameterType}`;
    }   
}

// convertFahrToCelsius(0)
// convertFahrToCelsius('0')
// convertFahrToCelsius([1,2,3])
// console.log(convertFahrToCelsius({temp: '123'}))
// console.log(convertFahrToCelsius('abc'))

/* ############################################################################################### */

// BASIC JAVASCRIPT ALGORITHM 2: checkYuGiOh

/* 
# The "checkYuGiOh" function below accepts an Integer "num" as an argument, and checks the data type of "num"
# if the data type of "num" is either "number" or "string", the function then checks if numbers from 1 to the given parameter i.e. "num"
* are divisible by 2,3,5 while replacing with the appropriate words as specified below:
* Numbers divisible by 2 are replaced by "yu"
* Numbers divisible by 3 are replaced by "gi"
* Numbers divisible by 5 are replaced by "oh"
* Numbers are unchanged if not divsible by any of 2,3,5
* Numbers divisible by more than one of 2,3,5 are replaced with words formed by joining the words representing their divisors, separating with hyphen (-).
# The function stores the modified values into a new resulting Array called"checkedArray"
# The function then logs the resulting array to the console and finally returns the resulting array.
*/

let checkYuGiOh = num => {
    let parameterType = Object.prototype.toString.call(num).slice(8, -1);
    if (parameterType === "Number" || parameterType === "String") {
        let parsedNum = parseInt(num);
        if(!isNaN(parsedNum)){
            let numArray = [];
            let checkedArray = [];
        
            // create an array of integers from 1 to the given parameter saved as "numArray"
            for (let i=1; i<=parsedNum; i++){
                numArray.push(i);
            }

            // FOR every element OF "numArray", check if the Integer is divisible by 2,3,5 and replace with the appropriate words as specified
            // then add the corresponding values of each checking to a new array called "checkedArray"
            for (let num of numArray) {
                if ((num % 2 === 0) && (num % 3 === 0) && (num % 5 === 0)) {
                    checkedArray.push('yu-gi-oh');
                } else if ((num % 2 === 0) && (num % 3 === 0)) {
                    checkedArray.push('yu-gi');
                } else if ((num % 2 === 0) && (num % 5 === 0)) {
                    checkedArray.push('yu-oh');
                } else if ((num % 3 === 0) && (num % 5 === 0)) {
                    checkedArray.push('gi-oh');
                } else if (num % 2 === 0) {
                    checkedArray.push('yu');
                } else if (num % 3 === 0) {
                    checkedArray.push('gi');
                } else if (num % 5 === 0) {
                    checkedArray.push('oh');
                } else {
                    checkedArray.push(num);
                }
            } 
            // log the resulting array to the console
            console.log(checkedArray);

            // return the resulting array
            return checkedArray;
        } else {
            return `invalid parameter: ${JSON.stringify(num)}`;
        }       
    } else {
        return `invalid parameter: ${JSON.stringify(num)}`;
    }
}

// checkYuGiOh(10);
// checkYuGiOh(5);
// checkYuGiOh("fizzbuzz is meh")