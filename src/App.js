import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Paper from "@material-ui/core/Paper";
import "./App.scss";
class App extends React.Component {
  state = {
    value: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, nam dolorum, iste blanditiis, aliquam suscipit dicta assumenda enim facilis corporis modi a quo molestias voluptatibus neque culpa dolor perspiciatis provident voluptate! Aspernatur temporibus quod quibusdam amet corporis praesentium laudantium commodi quam ut illum, illo excepturi dicta delectus hic blanditiis soluta quasi perferendis assumenda fugit voluptas nesciunt laborum eaque explicabo. Eligendi voluptatum omnis culpa corrupti nulla consequatur similique modi reprehenderit, accusamus illum quae impedit illo ea consectetur ad, fugit libero itaque numquam vero ipsum quas. Delectus atque eum blanditiis ut quis sit est sint autem vel natus repellendus, veritatis, ullam impedit?`,
    copied: false,
  };

  render() {
    return (
      <div className="container d-block">
        <Paper
          className="bg-primary customize"
          value={this.state.value}
          onChange={({ target: { value } }) =>
            this.setState({ value, copied: false })
          }
        >
          {this.state.value}
        </Paper>

        <CopyToClipboard
          text={this.state.value}
          onCopy={() => this.setState({ copied: true })}
        >
          <div className="btn btn-outline-success text-danger text-center mt-2 customize1">
            Click Me To Copy The Text
          </div>
        </CopyToClipboard>

        {this.state.copied ? (
          <span style={{ color: "red" }}>Copied.</span>
        ) : null}
      </div>
    );
  }
}
export default App;
