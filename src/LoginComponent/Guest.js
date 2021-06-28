import React from 'react';
import Video from '../images/video.mp4';
import { Collection } from "./Collection";

const Guest = () => {
    return (
        <div>
            <div class="jumbotron bg-transparent col-md-12 col-sm-12 col-xs-12" style={{height:"470px", maxWidth:"700px", margin:"0px auto"}}>
                <div style={{backgroundColor:"rgba(0, 89, 254, 0.5)", padding:"20px", textAlign:"center", margin: "0px auto", marginTop:"150px", border: "10px double white"}}>
                    <h1 class="display-4" style={{fontFamily:"Comic Sans MS", margin:"0px auto", color:"white"}}><b>TWEETBOOK</b></h1>
                    <p class="lead" style={{color:"white"}}><b>Connected creativity</b></p>
                </div>
                    <div>
                        <video autoPlay muted loop
                            style={{
                                position:"absolute",
                                width:"99vw",
                                height:"130vh",
                                left:"50%",
                                top:"50%",
                                objectFit:"cover",
                                transform:"translate(-50%,-50%)",
                                zIndex:"-1"
                                }}>
                            <source src={Video} type="video/mp4">
                            </source>
                        </video>
                    </div>
            </div>
            <Collection />
        </div>
    )
}

export default Guest;
