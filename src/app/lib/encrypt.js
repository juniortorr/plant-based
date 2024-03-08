import bcrypt from 'bcrypt';

export default async function hash(fakeUser) {
  bcrypt.hash(fakeUser.password, 10, function (err, hash) {
    if (err) {
      return err;
    } else {
      return Users.create({ username: fakeUser.username, password: hash });
    }
  });
}
