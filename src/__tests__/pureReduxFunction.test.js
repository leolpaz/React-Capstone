import '@testing-library/jest-dom/extend-expect';

import { filterList } from '../redux/coins/coin';

describe('test filterList pure function', () => {
  const payload = [{ name: 'test' }];
  test('Function to return an object containing both the payload and the string attributed to the FILTER_ARRAY constant', () => {
    expect(filterList(payload)).toEqual({ payload, type: 'cryptowatcher/coin/FILTER_ARRAY' });
  });
});
