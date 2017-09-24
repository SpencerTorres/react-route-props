# react-route-props

This package is for easily passing extra props into react router's `Route` component. It adds a new component called `RouteProps` for achieving this.

## Install

**NPM**
```
npm install react-route-props
```
**Yarn**
```
yarn add react-route-props
```

## Usage

```JSX
import { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import RouteProps from 'react-route-props'

import SomeStandaloneComponent from './SomeStandaloneComponent'
import SomeComponentWithProps from './SomeComponentWithProps'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={SomeStandaloneComponent}/>
        <RouteProps path='/route' component={SomeComponentWithProps} someProps={'Stringy String'} moreProps={5}/>
        <RouteProps exact path='/another' component={SomeComponentWithProps} someProps={'Example String'}/>
        <RouteProps component={Redirect} to={'/'}/>
      </Switch>
    )
  }
}
```

`RouteProps` is just like `Route` with the difference of being able to pass extra props to the given `component`. Be careful with conflicting prop names for `Route`. You should add `Route` props to the left of the `component` prop as seen above with the `exact` prop.

There may be better ways to approach this, but this works for my projects using `react-router-v4`.

## License
react-route-props is released under the MIT license.
