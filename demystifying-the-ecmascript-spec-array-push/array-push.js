// ECMAScript Spec: https://tc39.es/ecma262/#sec-array.prototype.push

const toLength = (number) => {
  const len = Number(number);
  if (len < 0) return 0;
  return Math.min(len, Number.MAX_SAFE_INTEGER);
}

function austinPush(...items) {
  // 1. Let O be ? ToObject(this value).
  let O = Object(this);

  // 2. Let len be ? LengthOfArrayLike(O).
  let len = toLength(O.length)

  // 3. Let argCount be the number of elements in items.
  let argCount = items.length //TODO: check to see if this is correct

  // 4. If len + argCount > 2^53 - 1, throw a TypeError exception.
  //  2^53 is the maximum safe integer in JavaScript
  if ((len + argCount) > (2 ** 53 - 1)) {
    throw new TypeError('Operation could not be performed, exceeded max safe integer in JavaScript');
  }

  // 5. For each element E of items, do
  items.forEach((E, i) => {
    // a. Perform ? Set(O, ! ToString(𝔽(len)), E, true).
    O[len] = E;
    // b. Set len to len + 1.
    len = len + 1;
  })
  // 6. Perform ? Set(O, "length", 𝔽(len), true).
  O.length = len;
  // 7. Return 𝔽(len).
  return len;
}


Array.prototype.austinPush = austinPush;


let myArray = [1, 2, 3, 4];

let newMyArrayLength = testArray.austinPush(5, 6);

console.log(testArray);
console.log(newTestArrayLength);
