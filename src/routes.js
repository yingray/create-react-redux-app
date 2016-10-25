import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import ContentPage from './containers/ContentPage'

import PasswordPage from './1-password_common/containers/PasswordPage'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={ContentPage}/>
        <Route path="home" component={ContentPage}/>
        <Route path="passwordCommon" component={PasswordPage} />
    </Route>
);

export default routes
