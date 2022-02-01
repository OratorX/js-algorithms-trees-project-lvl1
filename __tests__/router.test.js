import { test, expect } from '@jest/globals';
import makeRouter from '../src/router.js';

const routes = [
  {
    path: '/courses',
    handler: () => 'courses!',
  },
  {
    path: '/courses/basics',
    handler: () => 'basics',
  },
];

const router = makeRouter(routes);

test('routerPlain', () => {
  expect(router.serve('/courses').handler()).toBe('courses!');
});

test('routerHierarchie', () => {
  expect(router.serve('/courses/basics').handler()).toBe('basics');
});

test('routerError', () => {
  expect(() => {
    router.serve('/does_not_exists');
  }).toThrow(Error);
});
