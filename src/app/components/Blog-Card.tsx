import DeleteBtn from './Delete-Blog-Btn';
import Link from 'next/link';

interface BlogCardProps {
  title: string;
  id: string;
}

const BlogCard = async ({ title, id }: BlogCardProps) => {
  return (
    <article className="group relative flex size-60 max-w-60 cursor-pointer items-center justify-center bg-accent/50 p-6 text-center transition duration-300 ease-in-out hover:bg-accent/100 hover:text-white">
      <h3 className="text-xl font-semibold group-hover:hidden">{title}</h3>
      <Link href={`/blogs/${id}`}>
        <button className="hidden border-2 bg-white/0 px-10 py-3 text-lg text-white transition duration-300 ease-in-out hover:border-0 hover:bg-green/100 group-hover:block">
          Edit Post
        </button>
      </Link>
      <DeleteBtn id={id} />
    </article>
  );
};

export default BlogCard;
