import Image from 'next/image';
import { handleDeleteBlog } from '../(actions)/admin-actions';
import { revalidatePath } from 'next/cache';

interface DeleteBtnProps {
  id: string;
}

const DeleteBtn = async ({ id }: DeleteBtnProps) => {
  const deleteBlog = async () => {
    'use server';
    await handleDeleteBlog(id);
    revalidatePath('/admin');
  };
  return (
    <form
      className="absolute -right-4 -top-4 hidden transition duration-300 ease-in-out group-hover:block"
      action={deleteBlog}
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
