function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/; 
    if (numbers.startsWith("//")) {
      const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
      if (delimiterMatch) {
        delimiter = new RegExp(delimiterMatch[1]);
        numbers = numbers.slice(delimiterMatch[0].length);
      }
    }
    const numbersArray = numbers.split(delimiter);
    const parsedNumbers = numbersArray.map(num => parseFloat(num) || 0);
    const negativeNumbers = parsedNumbers.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }
    return parsedNumbers.reduce((sum, num) => sum + num, 0);
  }

  


console.log(add("//;\n1;2"));    
console.log(add("1\n2,3"));      
console.log(add("10,20,30"));    
console.log(add(""));            
try {
    console.log(add("//;\n1;-2;-3")); 
  } catch (error) {
    console.error(error.message);
}











