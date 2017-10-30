import React from 'react';
import ManifestList from './ManifestList.js';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      manifest:[]
    };
    this.fetchManifest = this.fetchManifest.bind(this);
  }

  componentDidMount() {
    this.fetchManifest();
  }

  async fetchManifest() {
    const res = await fetch('/api/manifest/',
      {
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
      }
    );
    const manifest = await res.json();
    this.setState({ manifest });
  }

  handleClick = (e) => {
    e.preventDefault();
    this.fetchManifest();
  }

  render() {
    const { manifest } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Refresh Manifest</button>
        <ManifestList manifest={manifest} />
      </div>
    );
  }
}
