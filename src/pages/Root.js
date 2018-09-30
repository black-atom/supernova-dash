import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Login from './Login'
import ProtectedRoute from './routing/ProtectedRoute' // eslint-disable-line

const Root = ({ funcionario }) => ( // eslint-disable-line
  <Router forceRefresh={false}>
    <Switch>
      <Route path="/login" component={Login} />

      <Redirect to="/login" />
    </Switch>
  </Router>
)

const mapStateToProps = state => ({
  funcionario: state.login.funcionario,
})

Root.defaultProps = {
  funcionario: null,
}

Root.propTypes = {
  funcionario: PropTypes.shape({
    login: PropTypes.shape({
      tipo: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
}

export default connect(mapStateToProps)(Root)
