import React, { useState } from 'react';
import { BrowserRouter as Router,
         Route, Link} from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import Videos from './components/Videos'
import Video from './components/Video'
import Home from './components/Home'

const App = () => {

  // setVideos might be used later to add/edit video list
  const [videos, setVideos] = useState([
    {
      id: 1,
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      sources:
        "https://amssamples.streaming.mediaservices.windows.net/683f7e47-bd83-4427-b0a3-26a6c4547782/BigBuckBunny.ism/manifest",
      subtitle: "By Blender Foundation",
      thumb:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      title: "Big Buck Bunny"
    },
  ]);

  const videoById = (id) => videos.find(video => video.id === Number(id))

  const padding = { padding: 5 }

  return (
    <Container>
      <div>
        <Router basename='/viihde-app'>
          <div>
            <Menu inverted>
              <Menu.Item link>
                <Link style={padding} to="/">
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item link>
                <Link style={padding} to="/videos">
                  Videos
                </Link>
              </Menu.Item>
            </Menu>
          </div>
          <Route
            exact path="/"
            render={() => <Home />}
          />
          <Route
            exact path="/videos"
            render={() => <Videos videos={videos} />}
          />
          <Route
            exact path="/videos/:id"
            render={({ match }) => <Video video={videoById(match.params.id)} />}
          />
        </Router>
        <div className="footer">
          <br />
          <em>
            <p>
              By Loc Hoang. See{" "}
              <a href="https://github.com/hpkhanhloc/viihde-app">
                https://github.com/hpkhanhloc/viihde-app
              </a>{" "}
              for source code.
            </p>
          </em>
        </div>
      </div>
    </Container>
  );
}

export default App
