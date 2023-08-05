import {fetchAndShowHomes} from "../src/js/functions.js";

describe('Fetch homes by url', () => {
    it('Returns an error in case of invalid url', () => {
        expect(fetchAndShowHomes('https://if-student-api.onrender.com/api/hotels/poplar')).toThrow(Error);
    });

    it('Is called with valid url', () => {
        expect(fetchAndShowHomes).toHaveBeenCalledWith('https://if-student-api.onrender.com/api/hotels/popular');
    });
});
