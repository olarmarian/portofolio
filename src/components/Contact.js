import React from "react"

export default class Contact extends React.Component{
    render() {
        return (
            <section id="contact" className="contact" data-aos="fade-in">
                <h1>Contact me</h1>
                <form method="post" className="contact-form" action="mailto:olar.marian7@gmail.com">
                    <div>
                        <p>Name : </p>
                        <input type="text" placeholder="Enter name here"/>
                    </div>    
                    <div>
                        <p>Email : </p>
                        <input type="text"  placeholder="Enter email here"  size="170"/>
                    </div>
                    <div>
                        <p>Text : </p>
                        <textarea placeholder="Enter text here" cols="80" rows="5"></textarea>
                    </div>
                    <input className="send-btn" type="submit" value="Send"/>
                </form>
            </section>
        );
    }
}