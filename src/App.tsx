import React from 'react';
import { Background } from 'react-imgix';
import './App.css';

import {
  FacebookIcon,
  InstagramIcon,
  SoundcloudIcon,
  TwitterIcon,
  YoutubeIcon
} from './socialIcons';

import gullLogo from './assets/MA_Seagull_Black.png';

import { helpers } from './helpers';
import { timeMappedWallpaper } from './timeMappedWallpaper';

function App() {
  return (
    <Background src={timeMappedWallpaper()}
      className="appBackground fade_in"
      htmlAttributes={{
        onLoad: () => helpers.handleImgOnLoad(),
      }}
    >
      <div className="App backgrounded">
        <Background src={gullLogo} className="gullLogoWrapper">
          <div id="rectangle" />
          <div className="gullLogo" />
        </Background>
        <div className="ma_title_line_wrapper">
          <div className="ma_title_line" />
        </div>
        <div className="ma_title">
          <p><strong>Mango Alley</strong></p>
          <p>Our music is good for</p>
          <p>any weather, any</p>
          <p>timezone and any</p>
          <p>season.</p>
        </div>
        <div className="ma_links">
          <ul>
            <li>
              <a href={'https://themangoalley.bandcamp.com'}
                target={"_blank"}
                rel={"noopener noreferrer"}
              ><p>/&nbsp;BANDCAMP</p></a>
            </li>
            <li>
              <a href={'https://open.spotify.com/artist/5IJu5Seoth5ZJ4NomGtxwQ'}
                target={"_blank"}
                rel={"noopener noreferrer"}
              ><p>/&nbsp;SPOTIFY</p></a>
            </li>
            <li>
              <a href={'https://www.beatport.com/label/mango-alley/11276'}
                target={"_blank"}
                rel={"noopener noreferrer"}
              ><p>/&nbsp;BEATPORT</p></a>
            </li>
          </ul>
        </div>
        <div className="ma_social">
          <a href={'https://facebook.com/themangoalley'}
            target={"_blank"}
            rel={"noopener noreferrer"}
          ><img src={FacebookIcon} alt={'Facebook Logo'} width={35} height={35} />
          </a>
          <a href={'https://twitter.com/themangoalley'}
            target={"_blank"}
            rel={"noopener noreferrer"}
          ><img src={TwitterIcon} alt={'Twitter Logo'} width={35} height={35} />
          </a>
          <a href={'https://soundcloud.com/themangoalley'}
            target={"_blank"}
            rel={"noopener noreferrer"}
          ><img src={SoundcloudIcon} alt={'SoundCloud Logo'} width={35} height={35} />
          </a>
          <a href={'https://www.instagram.com/themangoalley/'}
            target={"_blank"}
            rel={"noopener noreferrer"}
          ><img src={InstagramIcon} alt={'Instagram Logo'} width={35} height={35} />
          </a>
          <a href={'https://www.youtube.com/channel/UCfWx2XK0bq93Z278WycYAAw'}
            target={"_blank"}
            rel={"noopener noreferrer"}
          ><img src={YoutubeIcon} alt={'Youtube Logo'} width={35} height={35} />
          </a>
        </div>
      </div>
    </Background>
  );
}

export default App;
