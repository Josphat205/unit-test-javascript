const stringLength = (string)=>{
 const len =string.length;
 if(len < 1 &&  len > 10 ){
 throw new DisgustingError('Range required');
 }
 return len;
}


module.exports = stringLength