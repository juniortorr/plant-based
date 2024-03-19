const AddSectionBtn = ({ openSectionState }) => {
  return (
    <div className="flex h-48 w-5/6 items-center justify-center border-2 border-black">
      <button
        type="button"
        onClick={openSectionState}
        className="rounded-md border-2 border-black px-8 py-3"
      >
        Add Section
      </button>
    </div>
  );
};

export default AddSectionBtn;
