import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px'
   }
}

class Loading extends React.Component {
  state = {
    text: this.props.text
  }
  componentDidMount() {
    const { text, speed } = this.props
    const stopper = text + '...'

    this.interval = window.setInterval(() => {
      this.state.text === stopper
      ? this.setState({ text })
      : this.setState({ text: this.state.text + '.' })
    }, speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
}
Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}
Loading.defaultProps = {
  text: 'Loading',
  speed: 200
}
export default Loading