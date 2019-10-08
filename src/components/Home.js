import React from "react"
import $ from "jquery"
export default class Home extends React.Component{
    componentDidMount(){
        $('.projects-btn').on('click',function(e){
            if(this.hash !== ''){
                e.preventDefault();
        
                const hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 40
                }, "slow","swing",function(){});
            }
        })
    }
    render() {
        return(
            <section id="home" className="hero">
                <div className="content-hero" data-aos="zoom-in">
                    <div className="media" >
                        <h1>Olar Marian</h1>
                        <a target="_blank" rel="noopener noreferrer" href="www.linkedin.com/in/marian-alexandru-olar-19a24a174"><i className="fab fa-linkedin"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/olarmarian?tab=repositories"><i className="fab fa-github"></i></a>
                    </div>
    
                    <h2>I'm Marian, student in Cluj-Napoca, a self-taught person who strives to improve his skills to develop scalable web applications front-end and back-end.</h2>
                </div>
                <a className="projects-btn" href="#projects">Take a look</a>
            </section>
        );
    }
}