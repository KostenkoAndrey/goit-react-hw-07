import s from "./Contact.module.css"
import { BsFillTelephoneFill as Phone } from "react-icons/bs";
import { FaUser as User } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";


const Contact = ({ id, name, number }) => {
const dispatch = useDispatch();

const handleDelete = () => dispatch(deleteContact(id));


return (
<div className={s.wrapper}>
    <div className={s.outercontainer}>
    <div className={s.innerCont}>
        <User className={s.contactIcon}/>
        <p className={s.innerText}>{name}</p>
    </div>
    <div className={s.innerCont}>
        <Phone className={s.contactIcon}/>
        <p className={s.innerText}>{number}</p>
    </div>
    </div>
    <button  onClick={handleDelete} className={s.contantNBtn}>Delete</button>
    </div>)}

export default Contact;
