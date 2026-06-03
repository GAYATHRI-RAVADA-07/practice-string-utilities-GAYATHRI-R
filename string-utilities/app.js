const stringUtils = require('./stringUtils');
console.log(stringUtils.capitalize("gayathri"));
console.log(stringUtils.capitalize(""));
console.log(stringUtils.capitalize(null));
console.log(stringUtils.capitalize(" jay"));

console.log(stringUtils.reverse(""));
console.log(stringUtils.reverse("Hello World"));
console.log(stringUtils.reverse(" Hello "));
console.log(stringUtils.reverse("12345"));
console.log(stringUtils.reverse(null));
console.log(stringUtils.reverse("A1B2C3"));

console.log(stringUtils.contains("Hello World","World"));
console.log(stringUtils.contains("Hello World",""));
console.log(stringUtils.contains("Hello World","bye"));
console.log(stringUtils.contains("","World"));
console.log(stringUtils.contains("",""));
console.log(stringUtils.contains("Hello World","world"));
console.log(stringUtils.contains(" Hello","Hell"));
console.log(stringUtils.contains(null,"World"));












 

