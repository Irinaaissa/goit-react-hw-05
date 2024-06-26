
import { Formik , Form, Field} from "formik";
import css from "./SearchForm.module.css";


const SearchForm = ({ request }) => {
  
  return (
    <Formik
      initialValues={{ input: "" }}
      onSubmit={(values, actions) => {
        request(values.input);
        if (!values.input) {
          alert("Please enter a search input");
          return;
        }
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field className={css.input} type="text" name="input" />
        <button className={css.button} type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
