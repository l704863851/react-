import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import "./styles.css"

function MyContent() {
  return <div>内容</div>
}

class Home extends React.Component {
  state = {
    isOpen: false
  }
  onOpenChanged = (isOpen) => {
    this.setState({
      isOpen
    })
  }
  render() {
    const { isOpen } = this.state;
    return (
      <App triggerClass="triggerClass" popoverClass="popoverClass" content={<MyContent />} children="+" isOpen={isOpen} onOpenChanged={this.onOpenChanged} />
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));