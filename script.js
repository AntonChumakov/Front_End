const info = ["item", "logo", "lift", "icon", "ice", "let"];
const prefix = info.map(item => {
    if(item.startsWith("i")){
        return "pro" + item
    } else if(item.startsWith("l")) {
    return "min" + item 
    } else {
        return item
    }
}
)
console.log(prefix);
