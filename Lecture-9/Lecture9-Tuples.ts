console.log("\n--- 1. Basic Tuple ---");
let person: [string, number] = ["Alice", 25];

console.log("person[0] | name:", person[0]);
console.log("person[1] | age:", person[1]);
console.log("person    | full tuple:", person);

console.log("\n--- 2. Tuple with Multiple Fields ---");
let userRecord: [number, string, boolean, number, string];
userRecord = [1, "Steve", true, 20, "Admin"];

console.log("userRecord | full tuple:", userRecord);

console.log("\n--- 3. Iterating with for Loop ---");
for (let position = 0; position < userRecord.length; position++) {
    console.log(`index ${position}: ${userRecord[position]}`);
}

console.log("\n--- 4. Iterating with for...in Loop (indexes) ---");
for (let index in userRecord) {
    console.log(`index ${index}: ${userRecord[index]}`);
}

console.log("\n--- 5. Iterating with for...of Loop (values) ---");
for (let fieldValue of userRecord) {
    console.log("value:", fieldValue);
}

console.log("\n--- 6. Tuple Array (Array of Tuples) ---");
let studentRecords: [number, string][] = [
    [101, "Smith"],
    [102, "Scott"],
    [103, "Mary"]
];

console.log("studentRecords[0] | first student:", studentRecords[0]);
console.log("studentRecords[1] | second student:", studentRecords[1]);
console.log("studentRecords[2] | third student:", studentRecords[2]);
