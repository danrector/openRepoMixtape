import React, { Component } from 'react';
import './App.css';
import blank from './icons/blank.gif';
import folder from './icons/folder.gif';
import movie from '.icons/folder.gif';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Index of /</h1>
        <table>
          <tbody>
            <tr>
              <th valign="top">
                <img src={blank} alt="[ICO]"></img>
              </th>
            </tr>
          </tbody>
        </table>
        <address>Apache/2.4.10 (Debian) Server at ns641378.ovh.net Port 80</address>
      </div>

    );
  }
}

export default App;
