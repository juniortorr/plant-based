'use client';

import Image from 'next/image';
import { handleDeleteBlogAdmin } from '../(actions)/admin-actions';
import { revalidatePath } from 'next/cache';
import { handleDeleteBlogClient } from '../(actions)/actions';

interface DeleteBtnProps {
  id: string;
  blog?: Object;
  admin?: any;
  display: string;
  setDisplay: Function;
}

const DeleteBtn = ({ id, blog, admin, display, setDisplay }: DeleteBtnProps) => {
  return (
    <form
      className="absolute -right-4 -top-4 hidden transition duration-300 ease-in-out group-hover:block"
      action={() => {
        setDisplay(() => 'open');
      }}
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
