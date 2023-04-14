import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ labelText, defaultValue, setter }) => {
    return (
        <div>
            <label>{labelText}</label>
            <ReactQuill theme="snow" value={defaultValue} onChange={setter} />
        </div>
    )
}

export default Editor