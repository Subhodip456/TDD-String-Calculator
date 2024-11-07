function add(numbers) {
  const numbersArray = numbers.split(","); 
  const parsedNumbers = numbersArray.map(num => parseFloat(num) || 0); 
  return parsedNumbers.reduce((sum, num) => sum + num, 0); 
}

console.log(add("1,2")); 
