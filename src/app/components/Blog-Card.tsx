import DeleteBtn from './Delete-Blog-Btn';
import Link from 'next/link';
import { cookies } from 'next/headers';

interface BlogCardProps {
  title: string;
  id: string;
  blog?: any;
}

const BlogCard = async ({ title, id, blog }: BlogCardProps) => {
  const auth = cookies().get('admin');
  return (
    <article className="group relative flex size-60 max-w-60 cursor-pointer flex-col items-center justify-center bg-accent/50 p-6 text-center transition duration-300 ease-in-out hover:bg-accent/100 hover:text-white">
      <h3 className="text-xl font-semibold group-hover:hidden">{title}</h3>
      <Link href={`/blogs/${id}`}>
        <button className="mb-2 hidden h-11 w-40 border-2 bg-white/0 text-lg text-white transition duration-300 ease-in-out hover:border-0 hover:bg-green/100 group-hover:block">
          View Post
        </button>
      </Link>
      {auth && (
        <Link href={`/blogs/edit/${id}`}>
          <button className="hidden h-11 w-40 border-2 bg-white/0 text-lg text-white transition duration-300 ease-in-out hover:border-0 hover:bg-green/100 group-hover:block">
            Edit Post
          </button>
        </Link>
      )}

      <DeleteBtn id={id} blog={blog} />
    </article>
  );
};

export default BlogCard;
