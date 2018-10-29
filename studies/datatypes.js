/* 
Datatypes:
  1. Number
    - Numbers can be writted with or without decimals.
    - Number Example:
      ~ var age = 21;
  2. String
    - A string is a series of characters.
    - Strings are written with single '' or double "" quotes.
    - String Examples:
      ~ var snakeSpecies = 'Ball Python';  //Single Quotes
      ~ var snakeSpecies = "Ball Python";  //Double Quotes
  3. Boolean
    - Booleans can only have two values: true or false.
    - Boolean Examples:
      ~ var myBoolean = true;
      ~ var myBoolean = false;
  4. Array
    - Arrays are written with square brackets [].
    - Elements within the array are separated by commas.
    - Elements within the array are zero-based, meaning that they start at [0], then [1] and so on.
    - Array Example:
      ~ var favoriteGames = ["Spyro the Dragon", "Elder Scrolls: Oblivion", "The Forest"];
  5. Object
    - Object are written with curly brackets {}.
    - The properties of the object are written as name:value pairs, and they are separated by commas.
    - Object Example:
      ~ var lastPet = {dogSpecies:"Catahoula", firstName:"Sapphire", eyeColor:"blue"};
  6. Function
    - A function is a block of code that is designed to perform a particular action.
    - A function is executed when there is "something" that calls it.
  7. undefined
    - A variable without a value is known as undefined.
    - Undefined Example:
      ~ var computer;
  8. null
    - Null is "nothing".
    - The data type of null is an object.
    - An object can be emptied by setting it to null.
  9. NaN
    - The NaN property value represents Not-A-Number.
    - NaN is equivalent to Number.NaN.
  10. Infinity & -Infinity
    - Number.POSITIVE_INFINITY property represents the Infinity value.
      ~ function checkNum(largeNum) {
        if (largeNum === Number.POSITIVE_INFINITY) {
          return 'Infinity';
        }
        return largeNum;
      }
    - Number.NEGATIVE_INFINITY property represents the -Infinity value.
      ~ function checkNum(tinyNum) {
        if (tinyNum === Number.NEGATIVE_INFINITY) {
          return '-Infinity';
        }
        return tinyNum;
      }
  11. What is the difference between primitive/simple & complex data types?
    - Primitive/Simple data types are immutable, meaning that they do not hold, collect, or aggregate other values, and operations on simple 
    values return new simple values, they do not alter the original value.
    - Complex data types aggregate other vlaues and therefore are of indefinite size.
  12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
    - Primative/Simple are Copy by Value, which means that when you are assigning or passing, simple data-types are copied from one variable
    to the next.
    - Complex are Copy by Reference, which means that when you are assigning or passing, complex data-types are passed by reference.
*/    