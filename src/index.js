module.exports = function check(str, bracketsConfig) {
    let steck = [];
    let equal = false;
    let equalSource = "";
    for (let i = 0; i < str.length; i++) {
        if (isLeft (str[i], bracketsConfig)) {
            if (isEqual(str[i], bracketsConfig) && !equal) {
              equal = true;
              equalSource = str[i];
              steck.push(str[i]);
          } else if (isEqual(str[i], bracketsConfig) && equal) {
              if (equalSource === str[i]) {
                equal = false;
                equalSource = "";
                steck.pop();
              }
          } else {
              steck.push(str[i]);
          }
        } else {     
        if (steck.length === 0) return false;
        if (isRight(steck[steck.length - 1], str[i], bracketsConfig)) {
            steck.pop();
            }
        }
    }
    
    if (steck.length === 0) return true;
    return false;
  
    function isEqual (bracket, bracketsConfig) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (bracket === bracketsConfig[i][0] && bracket === bracketsConfig[i][1]) {
                return true;
            }
        }
        return false;
    }
    
    function isLeft (bracket, bracketsConfig) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (bracket === bracketsConfig[i][0]) {
                return true;
            }
        }
        return false;
    }
    
    function isRight (bracketLeft, bracketRight, bracketsConfig) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (bracketLeft === bracketsConfig[i][0]) {
                if (bracketsConfig[i][1] === bracketRight) {
                    return true;
                }
            }
        }
        return false;
    }
}
