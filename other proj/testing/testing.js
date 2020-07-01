import React, { useState } from 'react';
import css from "./testing.css";

function App() {
    return (
        <div>
            <div className="div parent">
                <div className="div first">
                    first divfsdf asdfas dfasdfasdf asdfasfda sdfasdfasd
                    afsasdfasfasdfas dfasdf asfasdfadsfa sdfasdfas fasdfasdfasdfdsf
                    asdfasdfasfasdfasdf
                    sdfasfa sdfads fasdfasdfasf asdfas dfasdfdsf
                    asdf asdfa sfa sdfasdf
                    first divfsdf asdfas dfasdfasdf asdfasfda sdfasdfasd
                    afsasdfasfasdfas dfasdf asfasdfadsfa sdfasdfas fasdfasdfasdfdsf
                    asdfasdfasfasdfasdf
                    sdfasfa sdfads fasdfasdfasf asdfas dfasdfdsf
                    asdf asdfa sfa sdfasdf
                    first divfsdf asdfas dfasdfasdf asdfasfda sdfasdfasd
                    afsasdfasfasdfas dfasdf asfasdfadsfa sdfasdfas fasdfasdfasdfdsf
                    asdfasdfasfasdfasdf
                    sdfasfa sdfads fasdfasdfasf asdfas dfasdfdsf
                    asdf asdfa sfa sdfasdf
                    first divfsdf asdfas dfasdfasdf asdfasfda sdfasdfasd
                    afsasdfasfasdfas dfasdf asfasdfadsfa sdfasdfas fasdfasdfasdfdsf
                    asdfasdfasfasdfasdf
                    sdfasfa sdfads fasdfasdfasf asdfas dfasdfdsf
                    asdf asdfa sfa sdfasdf
                </div>
                <div className="div second">
                    first div
                </div>
                <span id="zaira">
                    zaira
                    <div id="dela">
                        dela
                    </div>
                </span>
            </div>
            <div className="div float">
                <span>
                    afsasdf asfasdfas dfasdf asfasdfadsfa sdfasdfas fasdfasdfasdfdsf
                    asdfasdfas fasdfasdf
                    sdfasfa sdfads fasdfasdfasf asdfas dfasdfdsf
                    asdf asdfa sfa sdfasdf
                    first divfsdf asdfas dfasdfasdf asdfasfda sdfasdfasd
                    sdfasfa sdfads fasdfasdfasf asdfas dfasdfdsf
                    asdf asdfa sfa sdfasdf
                    <img src="https://www.taylorguitars.com/sites/default/files/styles/feature_half/public/TaylorGuitars-600%20Series-50-50.jpg?itok=LjxkSiXc" />
                    <img className="img react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
                    first divfsdf asdfas dfasdfasdf asd fasfda sdfa sdf asd
                    afsasdfa sfasdfas dfasdf asfasdf adsfa sdfasdfas fasdf asdfa sdfdsf
                    asdfasdfa sfasdfasdf
                    sdfasfa sdfads fasdfasdfasf asdfas dfasdfdsf
                    asdf asdfa sfa sdfasdf  
                    afsasdfasfasdfas dfasdf asfasdfadsfa sdfasdfas fasdfasdfasdfdsf
                    asdfasdfasfasdfasdf     
                </span>      
            </div>
            <span className="testing-span testing">
                {"can\'t modify the height/width of a span element"}
            </span>
            <span className="testing-span testing2">
                {"span doesn't honor top/bottom margin but left/right"}
            </span><br/>
            <a className="a facebook" target="_blank" href="http://www.facebook.com">facebook</a>
            <a className="a twitter" target="_blank" href="http://www.twitter.com">twitter</a>
            <a className="a reddit" target="_blank" href="http://www.reddit.com">reddit</a>
            <div class="div align">
                {"text-align: center;"}
            </div>
            <div className="relative">
                {"position: relative"}
            </div>
            <div className="sticky">
                {"I am sticky!"}
            </div>

            <div style={{height: "10000px"}}></div>
        </div>
    )
}

export default App;