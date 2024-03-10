// no trailing commas, skipped elements, undefined values
let harry = {"name": "Harry Smith", "age":42, "lucky numbers": [17,29], "lucky": false}
//JSON.stringify(obj), JSON.parse(str)
console.log(harry)
console.log(JSON.stringify(harry))

// sometimes used for logging if we use console.log("harry"+harry) [object, object], so below or else use "harry",harry
console.log(`harry=${JSON.stringify(harry)}`)