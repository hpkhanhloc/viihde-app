import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Button } from 'semantic-ui-react'

const Videos = (props) => {
    return (
      <div>
        <h1>Videos</h1>
        {props.videos.map(video => (
          <Grid celled key={video.id}>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image src={video.thumb} />
              </Grid.Column>
              <Grid.Column width={12}>
                <h2>
                  <Link to={`/videos/${video.id}`}>
                    {video.title}
                  </Link>
                </h2>
                <p>{video.description}</p>
                <p>{video.subtitle}</p>
                <Link to={`/videos/${video.id}`}>
                  <Button primary>Play</Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ))}
      </div>
    );
}

export default Videos