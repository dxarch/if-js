import { parseDate, findDataByQuery } from '../scripts/functions';
test('2020-11-26 converts to 26.11.2020', () => {
  expect(parseDate('2020-11-26')).toBe('26.11.2020');
});

test('Parse date throws an error in case of wrong input', () => {
  expect(() => parseDate('2020.11.26')).toThrow(
    "Input date doesn't match format!",
  );
});

test(
  '"Hotel" query returns ["Russia", "Saint-Petersburg, "Hotel Leopold", "Marocco", "Ourika", "Rokoko Hotel", ' +
    '"Germany", "Berlin", "Hotel Rehberge Berlin Mitte"]',
  () => {
    expect(findDataByQuery('Hotel')).toContain(
      'Russia',
      'Saint-Petersburg',
      'Hotel Leopold',
      'Marocco',
      'Ourika',
      'Rokoko Hotel',
      'Germany',
      'Berlin',
      'Hotel Rehberge Berlin Mitte',
    );
  },
);

test('When entering a request for which there is no data, empty array is returned', () => {
  expect(findDataByQuery('Hello!')).toHaveLength(0);
});
