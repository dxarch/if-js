import { fetchAndShowHomes } from '../src/js/functions.js';

describe('fetchAndShowHomes', () => {
  it('should fetch and show homes', async () => {
    const mockResponse = {
      ok: true,
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    await fetchAndShowHomes(
      'https://if-student-api.onrender.com/api/hotels/popular',
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://if-student-api.onrender.com/api/hotels/popular',
    );
  });

  it('should handle fetch errors', async () => {
    try {
      await fetchAndShowHomes(
        'https://if-student-api.onrender.com/api/hotels/poplar',
      );
    } catch (err) {
      expect(err).toBeDefined();
    }
  });
});
