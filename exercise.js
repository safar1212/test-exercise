function stringLength(string) {
 
    if (string.length === 0){
        return Error;
      } else if (string.length > 10) {
          return Error;
      } else {
          return string.length;
      }
}



module.exports = stringLength;
