import { isPalindrome } from '../scripts/functions';

test('Racecar is a palindrome', () => {
    expect(isPalindrome('racecar').toBe(true));
});

test('"Was it a car or a cat I saw?" is a palindrome', () => {
    expect(isPalindrome("Was it a car or a cat I saw?").toBe(true));
});
