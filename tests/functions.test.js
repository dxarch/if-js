import { fetchHomes } from '../src/js';

describe('fetchAndShowHomes', () => {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve('success'),
    ok: true,
  }));


  it('should fetch and show homes', async () => {
    await fetchHomes(
      'https://if-student-api.onrender.com/api/hotels/popular',
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://if-student-api.onrender.com/api/hotels/popular',
        {
          method: 'GET',
        },
    );
  });

  it('should handle fetch errors', async () => {
    try {
      await fetchHomes(
        'https://if-student-api.onrender.com/api/hotels/poplar',
      );
    } catch (err) {
      expect(err).toBeDefined();
    }
  });

  it('should return a Promise with success message', async () => {
    const result = await fetchHomes(
      'https://if-student-api.onrender.com/api/hotels/popular',
    );
    expect(result).resolves.toBeTruthy();
  });
});
