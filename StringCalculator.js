function add(numbers) {
  let delimiter = /,|\n/; 
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n"); 
    delimiter = new RegExp(numbers.substring(2, delimiterEnd)); 
    numbers = numbers.substring(delimiterEnd + 1); 
  }

  const numbersArray = numbers.split(delimiter); 
  const parsedNumbers = numbersArray.map(num => parseFloat(num) || 0); 
  return parsedNumbers.reduce((sum, num) => sum + num, 0); 
}

// Test cases
console.log(add("1\n2,3"));    
console.log(add("1,2"));       
console.log(add("//;\n1;2"));
