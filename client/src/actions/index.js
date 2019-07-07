//add note action
//take the text and generate the time at the time of submit

import axios from 'axios';

export const addnote = (note, id, time = "This item have no due date set") => {
    //dont add message that have no text
    if (note === null || note === "") {
      return {
          type: "IGNORE",
    }
  }

    if (time === "this item is due on  of ") {
        time ="This item have no due date set"
    }



  return {
      type: "ADD_NOTE",
      payload: {
        id: id,
        text: note,
        date: time
      }
    };
};



//delete note action
//delete the note from store with the text
export const deletenote = id => {



  axios.delete('/delete', {
    data: {id: id}
  }).then()
      .catch(err => {
        console.error(err);
      });

  return {
      type: "DELETE_NOTE",
      payload: id
    };
};

export const selectnote = id => {
  return {
      type: "SELECT_NOTE",
      payload: id
    };
};
