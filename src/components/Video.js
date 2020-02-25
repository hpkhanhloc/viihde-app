import React, { Component } from 'react'
import RxPlayer from 'rx-player'

class Video extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.initPlayer()
    }

    initPlayer() {
        const videoElement = document.querySelector("video");

        const player = new RxPlayer({ videoElement });
        
        player.addEventListener("error", err => {
            console.log("the content stopped with the following error", err);
        });

        player.addEventListener("playerStateChange", state => {
            if (state === "LOADED") {
                console.log("the content is loaded")

            // toggle between play and pause when the user clicks on the video
                videoElement.onclick = function() {
                    if (state === "PLAYING") {
                        player.pause();
                    } else if (state === 'PAUSED') {
                        player.play();
                    }
                };
            }
        })

        player.loadVideo({
            url: `${this.props.video.sources}`,
            transport: "smooth",
            autoPlay: true,
        })
        }
    
    render() {
        return (
          <div>
            <h1>{this.props.video.title}</h1>
            <div>
              <video id="video" controls ></video>
            </div>
          </div>
        );
    } 
}

export default Video