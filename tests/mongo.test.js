import initializeMongoServer from '../mongo-testing-config';

import { describe, it, expect, beforeEach } from 'vitest';
import Users from '/src/app/lib/models.ts';

beforeEach(async () => {
  await initializeMongoServer();
});

describe('basic mongo actions', () => {
  it('saves a user', async () => {
    const fakeUser = { username: 'Hello there', password: 'test123' };
    const fakePerson = await Users.create(fakeUser);
    const person = await Users.findOne({ username: 'Hello there' });
    expect(person.username).toEqual('Hello there');
  });
});
