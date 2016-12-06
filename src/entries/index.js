import "./index.css"

import React from "react"
import { render } from "react-dom"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import Main from "../web_components/presentational/Main"
import HomeLayout from "../web_components/presentational/Layout/home"

render((
	<Router history={ browserHistory }>
		<Route path="/" component={ Main }>
			<IndexRoute component={ HomeLayout }/>
		</Route>
	</Router>
), document.getElementsByTagName("main")[0])
