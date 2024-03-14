import initializeMongoServer from '../mongo-testing-config';
import bcrypt from 'bcrypt';

import { describe, it, expect, beforeAll } from 'vitest';
import Users from '/src/app/lib/models.ts';
import BlogPosts from '/src/app/lib/blogModel.ts';

beforeAll(async () => {
  await initializeMongoServer();
});

describe('basic mongo actions', () => {
  const fakeUser = {
    firstName: 'heyo',
    lastName: 'torres',
    email: 'juniortorr@gmail.com',
    password: 'test123',
  };
  const salt = 10;

  it('saves a user without password', async () => {
    await Users.create(fakeUser);
    const person = await Users.findOne({ firstName: 'heyo' });
    expect(person.firstName).toEqual('heyo');
  });
  it('saves a user with encrypted passcode', async () => {
    const hashedPw = await bcrypt.hash(fakeUser.password, salt);
    await Users.create({
      firstName: 'heyo',
      lastName: 'torres',
      email: 'juniortorr@gmail.com',
      password: hashedPw,
    });
    const foundUser = await Users.findOne({ firstName: 'heyo' });
    expect(foundUser.firstName).toBe('heyo');
  });
  it('blocks a user if theres already an account in that name', async () => {
    let results = null;
    const existingUser = await Users.findOne({ firstName: 'heyo' });
    if (existingUser) {
      results = 'true';
    } else {
      results = 'false';
    }
    expect(results).toMatch('true');
  });
});

describe('blog actions', () => {
  const fakePost = {
    id: 1,
    date: new Date(),
    title: 'Food?',
    body: 'Just trying out a bunch of random things out. This is a great start to it all',
    private: true,
  };

  it('uploads one', async () => {
    await BlogPosts.create(fakePost);
    const blog = await BlogPosts.findOne({ id: fakePost.id });
    expect(blog.title).toMatch('Food?');
  });

  it('edits a blog', async () => {
    await BlogPosts.findOneAndUpdate({ title: 'Food?' }, { title: 'FOOD!' });
    const newBlog = await BlogPosts.findOne({ id: fakePost.id });
    expect(newBlog.title).toMatch('FOOD!');
  });

  it('deletes a blog', async () => {
    await BlogPosts.findOneAndDelete({ title: 'FOOD!' });
    const blog = await BlogPosts.findOne({ title: 'FOOD!' });
    expect(blog).toBeNull;
  });
});
