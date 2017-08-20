import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as weatherActions from '../actions/weatherActions'

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.hasLoaded = this.hasLoaded.bind(this)
    this.isLoading = this.isLoading.bind(this)
    this.Spinner = this.Spinner.bind(this)
    this.Button = this.Button.bind(this)
    this.Information = this.Information.bind(this)
  }

  handleClick() {
    this.props.actions.getWeather()
  }

  hasLoaded() {
    return this.props.weatherState.city === 'Initial'
  }

  isLoading() {
    return this.props.weatherState.loading
  }

  Spinner() {
    return <div className="c-weather__spinner"></div>
  }

  Button() {
    const { loading } = this.props.weatherState
    return loading ? this.Spinner() : <button onClick={this.handleClick.bind(this)}>Click Me!</button>
  }

  Information() {
    const { city, temp, date, text } = this.props.weatherState
    return (
      <div>
        <h4>
          {city} - {temp}&#8457;
        </h4>
        <p>
          {date}
        </p>
        <p>
          {text}
        </p>
      </div>
    )
  }

  render() {
    return <div>
      {this.hasLoaded() ? this.Button() : this.Information() }
    </div>
  }
}

export default connect(
  state => ({
    weatherState: state.weatherReducer
  }),
  dispatch => ({
    actions: bindActionCreators(weatherActions, dispatch)
  })
)(Weather)
