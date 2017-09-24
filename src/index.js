import React from 'react'
import { Route } from 'react-router-dom'

const renderWithProps = (component, ...passProps) => {
  const combinedProps = Object.assign({}, ...passProps)
  return React.createElement(component, combinedProps)
}

const RouteProps = ({ component, ...passProps }) => {
  return (
    <Route {...passProps} render={routeProps => {
      return renderWithProps(component, routeProps, passProps)
    }}/>
  )
}

export default RouteProps
