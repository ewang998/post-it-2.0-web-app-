import { combineReducers } from "redux";




const notesReducer = (notes = [], action) => {

  if (action.type === "ADD_NOTE") {
      return [...notes, {id: action.payload.id, text: action.payload.text, date: action.payload.date}];
    } else if (action.type === "DELETE_NOTE") {
      return notes.filter(note => note.id !== action.payload);
    }
    return notes;
};

const notesidReducer = (currentid = 0, action) => {
console.log('cur id is:', currentid)
  if (action.type === "ADD_NOTE") {
      return currentid+1;
    }
    return currentid;
};

const currentnoteReducer = (currentnote = null, action) => {

  if (action.type === "SELECT_NOTE") {
      return action.payload;
    }
    return currentnote;
};

export default combineReducers({
    notes: notesReducer,
    currentid: notesidReducer,
    currentnote: currentnoteReducer
});
