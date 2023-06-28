const parseDate = (date) => {
  const regexp = /\b(\d{2,4})-(0?[1-9]|\d{2})-(0?[1-9]|\d{2})\b/;
  if (!regexp.test(date)) {
    throw new Error("Input date doesn't match format!");
  }

  return date.replace(regexp, '$3.$2.$1');
};

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const findDataByQuery = (query) => {
  const outData = [];

  for (let i = 0; i < data.length; i++) {
    const objValues = Object.values(data[i]);

    for (let j = 0; j < objValues.length; j++) {
      if (objValues[j].toLowerCase().includes(query.toLowerCase())) {
        outData.push(...objValues);
      }
    }
  }

  return outData;
};

export { parseDate, findDataByQuery };
