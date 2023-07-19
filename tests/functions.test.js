import {
  isPalindrome,
  findDataByQuery,
  countryCity,
  getCalendarMonth,
} from '../scripts/functions.js';
import { hotels } from '../scripts/array.js';

test('Racecar is a palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('"Was it a car or a cat I saw?" is a palindrome', () => {
  expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
});

test('Wrong query returns empty array', () => {
  expect(findDataByQuery(hotels, 'qwerty')).toStrictEqual([]);
});

test(
  "\"usa\" query returns ['USA', 'Chicago', 'Virgin Hotel', " +
    "'USA', 'Hawaii', 'Waikiki Resort Hotel', 'USA', 'Miami', 'Mandarin Oriental']",
  () => {
    expect(findDataByQuery(hotels, 'usa')).toStrictEqual([
      'USA',
      'Chicago',
      'Virgin Hotel',
      'USA',
      'Hawaii',
      'Waikiki Resort Hotel',
      'USA',
      'Miami',
      'Mandarin Oriental',
    ]);
  },
);

test(
  'Country-cities object is {\n' +
    "   Australia: ['Sydney'],\n" +
    "   Germany: ['Berlin', 'Hamburg'],\n" +
    "   Italy: ['Florence', 'Rome'],\n" +
    '}',
  () => {
    const testArr = [
      {
        name: 'Four Seasons Hotel',
        city: 'Sydney',
        country: 'Australia',
      },
      {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
      },
      {
        name: 'Steigenberger Hotel',
        city: 'Hamburg',
        country: 'Germany',
      },
      {
        name: 'San Firenze Suites',
        city: 'Florence',
        country: 'Italy',
      },
      {
        name: 'Concept Terrace Hotel',
        city: 'Rome',
        country: 'Italy',
      },
    ];
    expect(countryCity(testArr)).toStrictEqual({
      Australia: ['Sydney'],
      Germany: ['Berlin', 'Hamburg'],
      Italy: ['Florence', 'Rome'],
    });
  },
);

test('Wrong object in array raises an error', () => {
  const testArr = [
    {
      a: 1,
      name: 'Sam',
    },
  ];
  expect(() => countryCity(testArr)).toThrow('Wrong object structure!');
});

test('Get calendar month without arguments returns default calendar', () => {
  expect(getCalendarMonth()).toStrictEqual([
    [27, 28, 29, 30, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 1],
  ]);
});
