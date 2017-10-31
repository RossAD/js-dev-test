import React from 'react';
import ManifestList from './ManifestList.js';
import ReloadButton from './ReloadButton.js';

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
    const res = await fetch('/api/manifest/');
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
        <ReloadButton clickHandler={this.handleClick} />
        <ManifestList manifest={manifest} />
      </div>
    );
  }
}
