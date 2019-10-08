import React from "react"

export default class Contact extends React.Component{
    render() {
        return (
            <section id="contact" className="contact" data-aos="fade-in">
                <h1>Contact me</h1>
                <form name="contact"
                        method="POST"
                        className="contact-form"
                        netlify-honeypot="bot-field"
                        data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                        <p>Name : </p>
                        <input id="name" type="text" name="name" placeholder="Enter name here"/>
                    </div>    
                    <div>
                        <p>Email : </p>
                        <input id="email" type="email" name="email"  placeholder="Enter email here"  size="170"/>
                    </div>
                    <div>
                        <p>Message : </p>
                        <textarea id="message" name="message" placeholder="Enter message here" cols="80" rows="5"></textarea>
                    </div>
                    <input className="send-btn" type="submit" value="Send message"/>
                </form>
            </section>
        );
    }
}