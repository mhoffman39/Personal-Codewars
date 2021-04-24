// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

var defangIPaddr = function(address) {
  let result = '';
  for (var i = 0; i < address.length; i ++) {
      let current = address[i];
        if (current === '.') {
            current = '[.]'
            result += current;
        } else {
          result += current;
        }
    }
    return result;
};

console.log(defangIPaddr('1.1.1.1'));