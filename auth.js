import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from './config/db';
import Users from './src/app/lib/models';
import bcrypt from 'bcryptjs';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from './src/app/lib/mongodb';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'Sign In',
      credentials: {},
      async authorize(credentials, req) {
        await connectDB();
        const existingUser = await Users.findOne({ email: credentials.email });
        if (!existingUser) {
          throw new Error('No user found with this email');
        }
        const isAuthenticated = await bcrypt.compare(credentials.password, existingUser.password);
        if (!isAuthenticated) {
          throw new Error('Incorrect Password');
        }
        console.log('successfully signed in!');
        return existingUser;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  secret: '234',
});
