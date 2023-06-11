import "./NoteList.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";

function NoteList() {
  const notes = useSelector((state) => state.noteReducer.notes)
  const dispatch=useDispatch();

  // const notes = [
  //   { text: "apple", createdOn: new Date() },
  //   { text: "mango", createdOn: new Date() }
  // ];
  return (
    <div className="container">
      <ul>
        {notes.map((note, index) => (
          <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p className="note-content">{note.text}</p>
            <button onClick={()=>dispatch(deleteNote(index))} className="btn btn-danger" >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
