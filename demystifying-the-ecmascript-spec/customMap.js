import "./styles.css";
// https://tc39.es/ecma262/#sec-array.prototype.map

const testFunction = () => "test";

// Typical Map fuction with use case
const arrayOfOddNumbers = [1, 3, 5, 7, 9];

const arrayOfEvenNumbers = arrayOfOddNumbers.map((item) => item + 1);

/**
 * Calls constructor with arguments
 * @param {(...any[]) => any} constructor
 * @param {any[]} args
 */
const construct = (constructor, ...args) => {
  // TODO: https://tc39.es/ecma262/#sec-construct
  return constructor(...args);
}

// Custom isConstructor function
const isConstructor = (possibleObject) => typeof possibleObject === 'object';

/**
 * Clones an array
 * 
 * @param {any[]} oldArray
 * @param {number} length
 */
const arraySpeciesCreate = (oldArray, length) => {
  if (!Array.isArray(oldArray)) return Array(length);

  let C = oldArray.constructor;

  if (isConstructor(C)) {
    // a. Let thisRealm be the current Realm Record.
    // b. Let realmC be ? GetFunctionRealm(C).
    // c. If thisRealm and realmC are not the same Realm Record, then
    //   i. If SameValue(C, realmC.[[Intrinsics]].[[%Array%]]) is true, set C to undefined.
  }

  if (typeof C === "object") {
    C = C[Symbol.species];
    if (C === null) {
      C = undefined;
    }
  }
  if (C === undefined) return Array(length);

  if (!isConstructor(C)) {
    throw new TypeError('object.constructor[Symbol.species] is not a constructor');
  }
  
  return construct(C, Number(oldArray.length));
};

const isCallable = (possibleFunction) => typeof possibleFunction === "function";

/** 
 * Turns a number into a valid array length
 * @param {number} number
 */
const toLength = (number) => {
  const len = Number(number);
  if (len < 0) return 0;
  return Math.min(len, Number.MAX_SAFE_INTEGER);
}

/**
 * Custom implementation of Array.prototype.map
 * 
 * @param {(item: any, index: number, arr: any[]) => any} callback
 * @param {any} thisArg
 */
function austinMap(callback, thisArg) {
  const O = Object(this);
  
  const len = toLength(O.length);

  if (!isCallable(item)) throw new TypeError(item + " is not a function");

  const A = arraySpeciesCreate(O, len);
  let k = 0; 
  while (k < len) {
    const Pk = String(k);
    const kPresent = Pk in O;
    if (kPresent) {
      const kValue = O[Pk];
      const mappedValue = callback.call(thisArg, kValue, k, O);
      A[Pk] = mappedValue;
    }

    k += 1;
  }
  return A;
}

Array.prototype.autinMap = austinMap;

[1, 2, 3].austinMap((num) => num ** 2)

document.getElementById("app").innerHTML = `
${arrayOfEvenNumbers}
`;
