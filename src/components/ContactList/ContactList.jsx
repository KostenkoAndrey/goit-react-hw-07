import s from "../Contact/Contact.module.css"
import { selectFilteredContacts } from "../../redux/contactsSlice"
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";



const ContactList = () => {    
const contacts = useSelector(selectFilteredContacts);
    
return (
    <ul className={s.contactsList}>
        {contacts.map(({ id, name, number }) =>
        <li  key={id} className={s.contactItem} >
            <Contact  id={id} name={name} number={number}/>
            </li>)}
    </ul>
)
};

export default ContactList;
