import redirects from './redirects';

describe('test in destination', () => {
  test('renders all current redirects', () => {
    expect(redirects).toMatchSnapshot();
  });
});
