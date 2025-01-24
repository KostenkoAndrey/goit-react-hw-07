import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css"
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";




const initialValues = { name: "", number: "" };

const FeedbackSchema = Yup.object().shape({
name: Yup.string().min(3, "Too short!").max(50, "Too long!").required(),
number: Yup.string().min(3, "Too short!").max(50, "Too long!").required()});

const ContactForm = () => {
const nameFieldId = useId();
const numberFieldId = useId();
const dispatch = useDispatch();

const handleSubmit = (values, actions) =>{
dispatch(addContact(values));
actions.resetForm();
}

return (<Formik 
  initialValues={initialValues}
  onSubmit={handleSubmit} 
  validationSchema={FeedbackSchema}>
    <Form className={s.form}>
    <label htmlFor={nameFieldId} className={s.formLabel}>Name</label>
      <Field id={nameFieldId} type="text" name="name" className={s.formInput}/>
        <ErrorMessage name="name" component="span" className={s.errorSpan} />
    <label htmlFor={numberFieldId} className={s.formLabel}>Number</label>
      <Field id={numberFieldId} type="text" name="number" className={s.formInput}/>
      <ErrorMessage name="number" component="span" className={s.errorSpan} />
    <button type="submit" className={s.formBtn}>Add contact</button>
    </Form>  
    </Formik>
)};

export default ContactForm;



