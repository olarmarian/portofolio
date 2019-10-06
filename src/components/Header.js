import React from "react"
import $ from "jquery"

export default class Header extends React.Component{
    componentDidMount(){
        $('.container .navbar li a').on('click',function(e){
            if(this.hash !== ''){
                e.preventDefault();

                const hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, "slow","swing",function(){});
            }
        })    
    }
    render(){
        return (
            <header>
                <div className="container">
                    <ul className="navbar">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </header>
        );
    }
}