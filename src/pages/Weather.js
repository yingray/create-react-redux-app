import React from 'react'
import { Helmet } from 'react-helmet'
import Weather from '../containers/Weather'

const WeatherPage = () => [
  <Helmet>
    <meta name="description" content="React Redux example demonstrates how to fetch API easily!" />
  </Helmet>,
  <main>
    <h3>Get Weather - Practice Async Event!</h3>
    <p>Click the button below to fetch RESTful API and get weather. </p>
    <Weather />
  </main>
]

export default WeatherPage
