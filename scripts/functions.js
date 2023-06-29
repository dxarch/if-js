import {hotels} from "./array.js";

const isPalindrome = (word) => {
    const cleanWord = word.replaceAll(/[.,#!?$%&';:\-_()\s]/g, '').toLowerCase();
    return cleanWord.slice(0, cleanWord.length / 2)
            ===
           cleanWord.slice(-cleanWord.length / 2).split('').reverse().join('');
};

const findDataByQuery = (query) => {

    return hotels
        .filter((obj) => Object.values(obj)
                                    .map((v) => v.toLowerCase())
                                    .includes(query.toLowerCase()))
        .map((obj) => Object.values(obj).reverse())
        .reduce((accum, currItem) => accum.concat(currItem));
};

const countryCity = () => {
    const result = {};

    hotels.forEach((obj) => {
        if (result[obj.country] === undefined){
            result[obj.country] = [];
            if (!result[obj.country].includes(obj.city)) {
                result[obj.country].push(obj.city);
            }
        }
    });

    return result;

};

export { isPalindrome, findDataByQuery, countryCity };