import Image from 'next/image';
import { handleDeleteBlog } from '../(actions)/admin-actions';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { handleDeleteClient } from '../(actions)/actions';

interface DeleteBtnProps {
  id: string;
  blog?: any;
}

const DeleteBtn = async ({ id, blog }: DeleteBtnProps) => {
  const parsedBlog = JSON.parse(JSON.stringify(blog));

  const handleDeleteOptions = async () => {
    'use server';
    const admin = cookies().get('admin');
    if (admin) {
      await handleDeleteBlog(id);
    } else {
      await handleDeleteClient(parsedBlog);
    }
    revalidatePath('/admin');
  };

  return (
    <form
      className="absolute -right-4 -top-4 hidden transition duration-300 ease-in-out group-hover:block"
      action={handleDeleteOptions}
    >
      <button>
        <Image
          src={'/bin.png'}
          alt="delete blog"
          width={44}
          height={44}
          className="transition duration-200 ease-in-out hover:scale-125 "
        ></Image>
      </button>
    </form>
  );
};

export default DeleteBtn;
