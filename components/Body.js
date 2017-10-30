import React from 'react';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return <div>hello world!</div>;
  }
}
