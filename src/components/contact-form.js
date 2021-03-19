import React from "react";
import "../utils/normalize.css"
import "../utils/css/screen.css"


import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_0U3PDLeNzRw7xTJ44lJik");

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value  });
  }

  handleSubmit (event) {
    event.preventDefault();

      window.location.href = "/contact-submit"

  }


  render() {
    return (
      <div>
      <form>
        <div className="row gtr-uniform">
        <div className="col-6 col-12-xsmall">
        <input
          type="text"
          id="Name"
          name="name"
          placeholder='Name'
          value={this.state.name}
          onChange={this.handleChange}

          />
        </div>
          <div className="col-6 col-12-xsmall">
          <input
              type="email"
              id="email"
              name="email"
              placeholder='E-mail'
              value={this.state.email}
              onChange={this.handleChange}

            />
          </div>
          {/* Break */}
          <div className="col-12">
            <input
            type="text"
            name="subject"
              id="subject"
              placeholder="Subject"
              rows={1}
value={this.state.subject}
              onChange={this.handleChange}

            />
          </div>
          {/* Break */}
          <div className="col-12">
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows={6}
              value={this.state.message}
              onChange={this.handleChange}

            />
          </div>
          {/* Break */}
          <div className="col-12">
            <ul className="actions">
              <li>
                <button type="submit" value="Submit" className="primary"  onClick={this.handleSubmit}>submit</button>
              </li>

            </ul>
          </div>
        </div>
      </form>

      </div>
    );
  }
}
