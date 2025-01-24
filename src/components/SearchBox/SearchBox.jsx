import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css'
import { useId } from 'react';


const SearchBox = () => {
const inputId = useId();
const dispatch = useDispatch();

const handleOnChange = (e) => dispatch(changeFilter(e.target.value));

return (
    <label className={s.labelSearch} htmlFor={inputId}>
        <span className={s.labelSpan}>Find contacts by name</span>
        <input onChange={ handleOnChange } className={s.inputSearch}  id={inputId} />
    </label>)}

export default SearchBox;
