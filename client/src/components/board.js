/* jshint esversion: 6 */

import React from "react";
import { connect } from "react-redux";
import { deletenote, selectnote, addnote } from "../actions";
import axios from 'axios';
import Detail from './Detail';

class Board extends React.Component {

  componentDidMount() {



     //pre-stored note
    let loadloadednotes = async() => {
      return await axios.get('http://localhost:5000/loadednotes');
    }

    loadloadednotes().then(notes => {

        for (var i=0; i<notes.data.length; i++) {
            this.props.addnote(notes.data[i].text, notes.data[i].id, notes.data[i].time);
        }
    })
    .catch(err => console.error(err))
   }

  renderdetail(note) {
    if (this.props.currentnote === note) {
      return <Detail/>;
    }
  }



  renderlist() {
    return this.props.notes.map(note => {
      return (
        <div className="item" key={note.id}>
          <div className="right floated content">
            <button class="ui primary button" onClick={() => this.props.deletenote(note.id)}>x</button>
          </div>
          <div className="content" onClick={() => this.props.selectnote(note.id)}>
            <h3>{note.text}</h3>
          </div>
          {this.renderdetail(note.id)}
        </div>
      );
    });
  }

  render() {
    return (
      <div class="ui container center aligned">
        <div class="ui divided list">
          {this.renderlist()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
          notes: state.notes,
          currentid: state.currentid,
          currentnote: state.currentnote
         };
  }

export default connect(mapStateToProps, { deletenote, selectnote, addnote })(Board);
