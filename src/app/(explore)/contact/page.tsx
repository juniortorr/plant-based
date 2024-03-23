import SharedHeader from 'src/app/components/Shared-Header';
import ContactForm from 'src/app/components/Contact-Form';

const Contact = async () => {
  return (
    <div>
      <SharedHeader title={'Get in Touch!'} />
      <section>
        <div className="mx-auto my-10 flex flex-col gap-2 text-center">
          <h2 className="text-xl font-bold">Want to Talk?</h2>
          <p className="leading-5">
            Fill out the form below to register for<br></br> a new account
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
