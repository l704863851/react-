import React from "react";

class App extends React.Component {
  com
  render() {
    const { triggerClass, popoverClass, content, isOpen, onOpenChanged, children } = this.props;
    return (
      <div>
        <div className={triggerClass} onClick={() => onOpenChanged(!isOpen)}>{children}</div>
        {isOpen && <div className={popoverClass}>
          {content}
        </div>}
        {
          isOpen && <div style={inlineStyles.bg} onClick={() => onOpenChanged(!isOpen)} />
        }
      </div>
    )
  }
}

export default App

const inlineStyles = {
  bg: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  }
}