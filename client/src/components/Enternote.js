import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { addnote } from "../actions";

class Enternote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textvalue: '',
      day: '',
      month: ''
    };
    this.handlechange = this.handlechange.bind(this);
    this.submitonclick = this.submitonclick.bind(this);
  }

  handlechange(e) {
    if (e.target.name === 'textvalue') {
      this.setState({
        textvalue: e.target.value
      });
    } else if (e.target.name === 'day') {
      this.setState({
        day: e.target.value
      });
    } else if (e.target.name === 'month') {
      this.setState({
        month: e.target.value
      });
    }
    console.log(this.state)
  }

  submitonclick() {
    this.props.addnote(this.state.textvalue, this.props.currentid, 'this item is due on ' + this.state.day + ' of ' + this.state.month);
    if (this.state.textvalue !== "") {
      axios.post('/notes', {
          id: this.props.currentid,
          text: this.state.textvalue,
          date: 'this item is due on ' + this.state.day + ' of ' + this.state.month
      }).then(() => console.log("action is called"))
          .catch(err => {
            console.error(err);
          });
  }
}

  render() {
    return (
      <div class="ui container center aligned">
        <form class="ui form">
          <textarea placeholder="Enter your note here ..." name="textvalue" onChange={this.handlechange} rows="3"></textarea>
        </form>
        <br />
          <div class="ui container center aligned">
            <h4> Enter a due date below</h4>
            <input type="text" name="day" onChange={this.handlechange} maxLength="2" placeholder="day"/>
                          <p>  </p>
                 <select class="ui search dropdown" style={{maxWidth:"10em"}} onChange={this.handlechange} name="month">
                   <option value="">Month</option>
                   <option value="January">January</option>
                   <option value="February">February</option>
                   <option value="March">March</option>
                   <option value="April">April</option>
                   <option value="May">May</option>
                   <option value="June">June</option>
                   <option value="July">July</option>
                   <option value="August">August</option>
                   <option value="September">September</option>
                   <option value="October">October</option>
                   <option value="November">November</option>
                   <option value="December">December</option>
                 </select>
            </div>
          <br />
        <button class="ui primary button" onClick={this.submitonclick}>submit</button>

      </div>
      //{() => this.prop.addnote(document.getElementById("inputtext").value, this.props.currentid)}
    )
  }
}

const mapStateToProps = (state) => {
  return { notes: state.notes,
           currentid: state.currentid
         };
  }

export default connect(mapStateToProps, { addnote })(Enternote);
