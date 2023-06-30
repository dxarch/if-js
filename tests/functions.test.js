import {isPalindrome, findDataByQuery, countryCity, getCalendarMonth} from '../scripts/functions';

test('Racecar is a palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('"Was it a car or a cat I saw?" is a palindrome', () => {
  expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
});

test("Wrong query returns empty array", () => {
  expect(findDataByQuery('qwerty')).toBe([]);
});

test('"usa" query returns [\'USA\', \'Chicago\', \'Virgin Hotel\', ' +
    '\'USA\', \'Hawaii\', \'Waikiki Resort Hotel\', \'USA\', \'Miami\', \'Mandarin Oriental\']', () => {
  expect(findDataByQuery('usa')).toBe(['USA', 'Chicago', 'Virgin Hotel', 'USA', 'Hawaii',
                                                    'Waikiki Resort Hotel', 'USA', 'Miami', 'Mandarin Oriental']);
});

test('Country-cities object is {\n' +
    '   Australia: [\'Sydney\'],\n' +
    '   Germany: [\'Berlin\', \'Hamburg\'],\n' +
    '   Italy: [\'Florence\', \'Rome\'],\n' +
    '   USA: [\'Chicago\', \'Hawaii\', \'Miami\'],\n' +
    '   Ukraine: [\'Kyiv\']\n' +
    '}', () => {
  expect(countryCity()).toBe({
    Australia: ['Sydney'],
    Germany: ['Berlin', 'Hamburg'],
    Italy: ['Florence', 'Rome'],
    USA: ['Chicago', 'Hawaii', 'Miami'],
    Ukraine: ['Kyiv'],
  });
});

test('Get calendar month without arguments returns default calendar', () => {
  expect(getCalendarMonth()).toBe([
        [27, 28, 29, 30, 1, 2, 3],
        [4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17],
        [18, 19, 20, 21, 22, 23, 24],
        [25, 26, 27, 28, 29, 30, 1],
  ]);
});
