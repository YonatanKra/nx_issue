import { prestoClient } from './presto-client';

describe('prestoClient', () => {
  it('should work', () => {
    expect(prestoClient()).toEqual('presto-client');
  });
});
