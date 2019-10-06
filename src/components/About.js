import React from "react"
export default class About extends React.Component{
    render(){
        return(
            <section id="about" data-aos="fade-right">
                <div className="about">
                    <div className="about-banner">
                        <h1>About Me</h1>
                    </div>
                    <div className="about-text" data-aos="fade-left">
                        Hello, my name is Olar Marian. I am student at Computer Science Collage.
                        I'm always looking for an opportunity to code and learn new things.
                        In my spare time I'm usually building things and searching for new skills to learn. I also enjoy listening to music, reading, watching movies and hang out.
                    </div>
                </div>
                <div className="skills">
                    <h1>Skills</h1>
                    <h2>The languages, frameworks and tools I use and are in continuous learning:</h2>
                    <ul>
                        <li>
                            <i className="fas fa-code"></i>
                            <div className="skill-text">
                                <h3>Frontend</h3>
                                <p>I like to work with HTML, CSS and JavaScript and combine all of them with React.js.</p>
                            </div>
                        </li>
                        <li>
                            <i className="fas fa-server"></i>
                            <div className="skill-text">
                                <h3>Backend</h3>
                                <p>Being comfortable with JavaScript, I naturally chose Node.js used with backend framework Express.js as server-side language, but I'm in a continuous learning phase and also can work with .NET, PHP with Laravel and even Java with Spring Boot.</p>
                            </div>
                        </li>
                        <li>
                            <i className="fas fa-database"></i>
                            <div className="skill-text">
                                <h3>Database</h3>
                                <p>I am comfortable with SQL database SQL Server and MySQL and NoSQL database like MongoDB with ORM like EntityFramework, Hibernate and ODM like Mongoose.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}