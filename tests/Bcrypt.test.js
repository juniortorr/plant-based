import { it, expect } from 'vitest';

const bcrypt = require('bcrypt');
const salt = 10;
const password = 'pw';

const hash = async (pw) => {
  bcrypt.hash(pw, salt, function (err, hash) {
    err ? console.log(err) : console.log(hash);
  });
  return hash;
};

it('hash', () => {
  expect(hash(password)).toBe('string');
});
