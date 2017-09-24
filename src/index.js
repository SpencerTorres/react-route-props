import React from 'react'
import { Route } from 'react-router-dom'
// Render passed component with provided props.
const renderCombinedProps = (component, ...passProps) => React.createElement(component, Object.assign({}, ...passProps))
// Export route for forwarding props
export default (component, ...passProps) => <Route {...passProps} render={routeProps => renderCombinedProps(component, routeProps, passProps)}/>
