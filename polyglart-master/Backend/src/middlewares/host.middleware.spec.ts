import { HostMiddleware } from './host.middleware';

describe('HostMiddleware', () => {
  it('should be defined', () => {
    expect(new HostMiddleware()).toBeDefined();
  });
});
