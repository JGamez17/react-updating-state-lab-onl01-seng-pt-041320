import React, { Component } from "react";

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
  };

  bitrate = () => {
    this.setState({ settings: { ...this.state.settings, bitrate: 12 } });
  };

  resolution = () => {
    this.setState({
      settings: { ...this.state.settings, video: { resolution: "720p" } },
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrate}>
          {this.state.settings.bitrate}
        </button>
        <button className="resolution" onClick={this.resolution}>
          {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
