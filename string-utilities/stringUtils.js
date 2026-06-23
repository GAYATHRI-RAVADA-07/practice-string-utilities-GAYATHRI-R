function capitalize(str){
    if(typeof str !== "string") return "";
    
    str = str.trim();

    if(str.length === 0) return "";

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
       
}

function reverse(str){
    if(typeof str !== "string") return "";

    return [...str].reverse().join('');
}

function contains(str, substr){
    if (typeof str !== "string" || typeof substr !== "string"){
        return false;
    }

    return str.includes(substr);
}

module.exports = {capitalize,reverse,contains};