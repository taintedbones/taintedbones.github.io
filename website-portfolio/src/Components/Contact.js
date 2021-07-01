import React, { Component } from "react";
import { AiOutlineMail } from 'react-icons/ai';

class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <div className="Contact-Me-Container">
                    <h3 className="Name-Text">Contact Me</h3>
                    <p><AiOutlineMail /> kjust@csu.fullerton.edu</p>
                </div>
            </section>
        )
    }
}

export default Contact;