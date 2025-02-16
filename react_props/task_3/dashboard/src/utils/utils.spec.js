import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility function tests', () => {
  test('getCurrentYear should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  test('getFooterCopy should return the correct string based on input', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification should return the expected string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
