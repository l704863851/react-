import React from "react";
import PropTypes from "prop-types";
import { Portal } from 'react-portal';

class App extends React.Component {
  render() {
    const { triggerClass = "", popoverClass = "", content, isOpen, onOpenChanged, children } = this.props;
    return (
      <div>
        <div className={triggerClass} onClick={() => onOpenChanged(!isOpen)}>{children}</div>
        {isOpen && <Portal>
          <div className={popoverClass}>
            {content}
          </div>
        </Portal>}
        {
          isOpen && <div style={inlineStyles.bg} onClick={() => onOpenChanged(!isOpen)} />
        }
      </div>
    )
  }
}

App.propTypes = {
  triggerClass: PropTypes.string,
  popoverClass: PropTypes.string,
  content: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpenChanged: PropTypes.func.isRequired,
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