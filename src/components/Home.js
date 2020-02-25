import React from 'react'

const Home = () => (
  <div>
    <h1>Mini Viihde app</h1>
    <h2>Summarise</h2>
    <ul>
      <li>
        Hard code video data, the link to source media by{" "}
        <a href="http://playready.azurewebsites.net/Home/AmsSamples">
          http://playready.azurewebsites.net/Home/AmsSamples
        </a>
      </li>
      <li>
          Direct access the video by the link /video/:id
      </li>
      <li>
        Web player librarie by Rx-Player{" "}
        <a href="https://github.com/canalplus/rx-player">
          https://github.com/canalplus/rx-player
        </a>
      </li>
      <li>
          Simple UI by Semantic-UI.
      </li>
    </ul>
  </div>
);

export default Home