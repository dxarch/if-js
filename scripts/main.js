import {
  isPalindrome,
  findDataByQuery,
  countryCity,
  getCalendarMonth,
} from './functions.js';
import { hotels } from './array.js';

const word = 'racecar';
console.log(isPalindrome(word));

const query = 'usa';
console.log(findDataByQuery(hotels, query));

console.log(countryCity(hotels));

console.log(getCalendarMonth());
