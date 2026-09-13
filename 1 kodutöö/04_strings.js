let rawName = "   MaRcUs   ";

// Step 1: clean up the name
let cleanedName = rawName.trim().toLowerCase();
console.log(cleanedName); // "marcus"

// Step 2: capitalize just the first letter (bonus polish)
let formattedName = cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1);
console.log(formattedName); // "Marcus"

// Step 3: build a greeting using a template literal
let greeting = `Hello, ${formattedName}! Welcome!`;
console.log(greeting);