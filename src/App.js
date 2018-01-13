import React, { Component } from 'react';
import './App.css';
import blank from './icons/blank.gif';
import folder from './icons/folder.gif';
import movie from './icons/movie.gif';

var vAlignTop = {
  verticalAlign: 'top'
};

var alignRight = {
  textAlign: 'right'
};

class App extends Component {
  render() {
    return (
      <div>
        <h1>Index of /</h1>
        <table>
          <tbody>
            <tr>

              {
                /* top row */
              }
              <th style={vAlignTop}>
                <img src={blank} alt="[ICO]"></img>
              </th>
              <th>
                <a href="?C=N;O=D">Name</a>
              </th>
              <th>
                <a href="?C=M;O=A">Last modified</a>
              </th>
              <th>
                <a href="?C=S;O=A">Size</a>
              </th>
              <th>
                <a href="?C=D;O=A">Description</a>
              </th>
            </tr>

            {
              /* line break */
            }
            <tr>
              <th colSpan="5">
                <hr />
              </th>
            </tr>

            {
              /* first entry */
            }
            <tr>
              <td style={vAlignTop}>
                <img src={movie} alt="[VID]" />
              </td>
              <td>
                <a href="https://www.dropbox.com/s/6lix6i65sl0o1ih/hard%20jazz.mp3?dl=0">hard jazz.mp3</a>
              </td>
              <td style={alignRight}>2016-06-28 16:32  </td>
              <td style={alignRight}>8.42MB</td>
              <td>&nbsp;</td>
            </tr>

            {
              /* second entry */
            }
            <tr>
              <td style={vAlignTop}>
                <img src={movie} alt="[VID]" />
              </td>
              <td>
                <a href="https://www.dropbox.com/s/oqdsenlle5rowsf/interpolate.mp3?dl=0">interpolate.mp3</a>
              </td>
              <td style={alignRight}>2016-06-11 16:37  </td>
              <td style={alignRight}>12.62MB</td>
              <td>&nbsp;</td>
            </tr>

            {
              /* third entry */
            }
            <tr>
              <td style={vAlignTop}>
                <img src={movie} alt="[VID]" />
              </td>
              <td>
                <a href="https://www.dropbox.com/s/dxk3n9sya4ee2jh/jame.mp3?dl=0">jame.mp3</a>
              </td>
              <td style={alignRight}>2016-06-08 00:58  </td>
              <td style={alignRight}>6.83MB</td>
              <td>&nbsp;</td>
            </tr>

            {
              /* fourth entry */
            }
            <tr>
              <td style={vAlignTop}>
                <img src={movie} alt="[VID]" />
              </td>
              <td>
                <a href="https://www.dropbox.com/s/327lvezrsvoev3z/surf%20jam.mp3?dl=0">surf jam.mp3</a>
              </td>
              <td style={alignRight}>2016-06-08 00:56  </td>
              <td style={alignRight}>10.27MB</td>
              <td>&nbsp;</td>
            </tr>

          </tbody>
        </table>
        <address>Apache/2.4.10 (Debian) Server at drector1.github.io/brutality Port 80</address>
      </div>



    );
  }
}

export default App;
