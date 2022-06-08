const capitalize = (string)=>{
    const res = string.charAt(0).toUpperCase() + string.slice(1);
    return res;
}
module.exports = capitalize;