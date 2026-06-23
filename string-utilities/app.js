const stringUtils = require('./stringUtils');

console.log(stringUtils.capitalize("launchcode"));
console.log(stringUtils.capitalize(""));
console.log(stringUtils.capitalize("  javascript"));

console.log(stringUtils.reverse(""));
console.log(stringUtils.reverse("launchcode"));
console.log(stringUtils.reverse("  javascript"));
console.log(stringUtils.reverse(12345));
console.log(stringUtils.reverse("12345"));
console.log(stringUtils.reverse(undefined));

console.log(stringUtils.contains("", "hello"));
console.log(stringUtils.contains("hello world", "hello"));
console.log(stringUtils.contains("hello world", "bye"));
console.log(stringUtils.contains(null, "hello"));
console.log(stringUtils.contains("  hello world", "hello"));

















