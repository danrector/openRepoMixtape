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
            <tr>
              <th colSpan="5">
                <hr />
              </th>
            </tr>
            <tr>
              <td style={vAlignTop}>
                <img src={movie} alt="[VID]" />
              </td>
              <td>
                <a href="">Movie Film Title.mp4</a>
              </td>
              <td style={alignRight}>2017-04-28 16:45  </td>
              <td style={alignRight}>2.0G</td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
        <address>Apache/2.4.10 (Debian) Server at brutality.herokuapp.com Port 80</address>
      </div>

    );
  }
}

export default App;
