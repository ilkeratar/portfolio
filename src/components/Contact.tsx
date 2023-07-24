import WideLogo from "../assets/separatorBlack1.png";
import { Formik,Field, Form, ErrorMessage } from 'formik';

function Contact() {

    const initialValues = {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    };

    const onSubmit = (values: typeof initialValues) => {
      console.log(values);
    };

    const validateForm = (values: typeof initialValues) => {
      const errors: Partial<typeof initialValues> = {};

      if (!values.name) {
        errors.name = "Ad alanı zorunludur";
      }

      if (!values.email) {
        errors.email = "E-posta alanı zorunludur";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Geçerli bir e-posta adresi girin";
      }

      if (!values.message) {
        errors.message = "Mesaj alanı zorunludur";
      }

      return errors;
    };

  return (
    <div className="py-16 flex flex-col items-center justify-center" id="contact">
      <div className="w-[404px] h-[107px] flex items-center justify-center bg-opacity-0 border-8 border-black">
        <p className="font-Montserrrat text-center text-black text-2xl font-bold leading-10 tracking-widest">
          CONTACT
        </p>
      </div>
      <p className="mt-14 text-center text-sm text-[#050505] w-[763px] ">
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </p>
      <img src={WideLogo} alt="wideLogo" className="w-44 h-3 mt-6" />

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validateForm}
      >
        <Form className="flex flex-col items-center justify-center mt-24">
          <div className="mb-10">
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="ENTER YOUR NAME*"
              className="w-[600px] border-l-4 border-b-4 border-black p-2 focus:outline-none bg-transparent font-Montserrrat font-bold text-sm"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-10">
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              className="w-[600px] border-l-4 border-b-4 border-black p-2 focus:outline-none bg-transparent font-Montserrrat font-bold text-sm"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-10">
            <Field
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="PHONE NUMBER"
              className="w-[600px] border-l-4 border-b-4 border-black p-2 focus:outline-none bg-transparent font-Montserrrat font-bold text-sm"
            />
          </div>
          <div className="mb-10">
            <Field
              as="textarea"
              id="message"
              name="message"
              placeholder="YOUR MESSAGE*"
              rows={6}
              className="w-[600px] border-l-4 border-b-4 border-black p-2 focus:outline-none bg-transparent font-Montserrrat font-bold text-sm"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500"
            />
          </div>

          <button type="submit" className="font-Montserrrat font-bold text-base tracking-wide text-black border-black border-l-4 border-r-4 px-10 py-2">
            SUBMIT
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Contact;
