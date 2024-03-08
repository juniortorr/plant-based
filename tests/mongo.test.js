import initializeMongoServer from '../mongo-testing-config';
import bcrypt from 'bcrypt';
import hash from '../src/app/lib/encrypt';

import { describe, it, expect, beforeAll } from 'vitest';
import Users from '/src/app/lib/models.ts';

beforeAll(async () => {
  await initializeMongoServer();
});

describe('basic mongo actions', () => {
  const fakeUser = { username: 'Hello there', password: 'test123' };
  const salt = 10;

  it('saves a user without password', async () => {
    await Users.create(fakeUser);
    const person = await Users.findOne({ username: 'Hello there' });
    expect(person.username).toEqual('Hello there');
  });
  it('saves a user with encrypted passcode', async () => {
    const hashedPw = await bcrypt.hash(fakeUser.password, salt);
    await Users.create({ username: 'jim', password: hashedPw });
    const foundUser = await Users.findOne({ username: 'jim' });
    expect(foundUser.username).toBe('jim');
  });

  it('finds a user', async () => {
    const foundUser = await Users.findOne({ username: 'Hello there' });
    expect(foundUser.username).toEqual('Hello there');
  });
});
