import { test, expect } from '@jest/globals';
import makeRouter from '../src/router.js';

const routes = [
  {
    path: '/courses',
    handler: () => 'courses!',
  },
  {
    path: '/courses/:id',
    handler: () => 'course!',
  },
  {
    path: '/courses/:course_id/exercises/:id',
    handler: () => 'exercise!',
  },
  {
    path: '/courses/:course_id/exercises/:exercise_id/task/:task_id',
    handler: () => 'task!',
  },
];

const router = makeRouter(routes);

test('routerPlain', () => {
  expect(router.serve('/courses').handler()).toBe('courses!');
});

test('routerHierarchie', () => {
  expect(router.serve('/courses/basics').handler()).toBe('course!');
});

test('routerPlaceholder', () => {
  expect(router.serve('/courses/php_trees').handler()).toBe('course!');
});

test('routerTwoPlaceholders', () => {
  expect(router.serve('/courses/166/exercises/15').handler()).toBe('exercise!');
});

test('routerThreePlaceholders', () => {
  expect(router.serve('/courses/166/exercises/15/task/4').handler()).toBe('task!');
});

test('routerError', () => {
  expect(() => {
    router.serve('/does_not_exists');
  }).toThrow(Error);
});
