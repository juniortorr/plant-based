import BlogPosts from './blogModel';
import connectDB from '../../../config/db';
import { v4 as uuidv4 } from 'uuid';

const post = {
  id: uuidv4(),
  date: new Date(),
  title: 'Why Is Health Important?',
  body: 'Just trying out a bunch of random things out. This is a great start to it all',
};

const seedDb = async () => {
  try {
    await connectDB();
    BlogPosts.create(post);
  } catch (e) {
    console.log(e);
  }
};

export default seedDb;
export { post };
