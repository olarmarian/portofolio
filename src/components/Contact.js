import React from "react"

export default class Contact extends React.Component{
    render() {
        return (
            <section id="contact" className="contact" data-aos="fade-in">
                <h1>Contact me</h1>
                <form name = "contact-form" method="post" className="contact-form" netlify data-netlify="true">
                    <div>
                        <p>Name : </p>
                        <input type="text" name="name" placeholder="Enter name here"/>
                    </div>    
                    <div>
                        <p>Email : </p>
                        <input type="email" name="email"  placeholder="Enter email here"  size="170"/>
                    </div>
                    <div>
                        <p>Message : </p>
                        <textarea name="message" placeholder="Enter message here" cols="80" rows="5"></textarea>
                    </div>
                    <input className="send-btn" type="submit" value="Send"/>
                </form>
            </section>
        );
    }
}