function flattenRecursive(array) {
    "use strict";
    var arr = arguments.length > 1 && arguments[1] || [];
    array.forEach(function(element) {
        if (Array.isArray(element)) {
            flattenRecursive(element, arr);
        } else if (typeof element !== 'object' || element === null) {
            arr.push(element);
        }
    }, this);
    return arr;
}
function flattenNR (array) {
    "use strict";
    var list = [].concat(array),
        flatList = [], item;
    while (list.length) {
      item = list.shift()
      if (Array.isArray(item)) {
        list = item.concat(list)
      } else if (typeof item !== 'object' || item === null) {
        flatList.push(item)
      }
    }
    return flatList;
  }

var nested = [3,[1,'hey',[null, undefined],[2, 'you',[2,5]]],1,[9,[{"a": 1},[2,true]]]];
console.log(flattenRecursive(nested));
console.log(flattenNR(nested));
