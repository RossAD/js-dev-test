import React from 'react';

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

  render() {
    const { manifest } = this.state;
    const manifestList = manifest.map(item => (
      <li key={item.id}>
        <span>
          <strong>Make:</strong> {item.make}<br />
          <strong>Model:</strong> {item.model}<br />
          <strong>Color:</strong> {item.color}<br />
          <strong>Time Entered:</strong> {item.enteredAt}
        </span>
      </li>
    ));
    return <div>
      <ul>{manifestList}</ul>
    </div>;
  }
}
