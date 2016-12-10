var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

var PromptContainer = require('../Containers/PromptContainer');
var home = require('../Components/Home');
var main = require('../Components/Main');
var ComparatorContainer = require('../Containers/ComparatorContainer');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={main}>
            <IndexRoute component={home}/>
            <Route path="subjectOne" header="Subject One" component={PromptContainer} />
            <Route path="subjectTwo/:subjectOne" header="Subject Two" component={PromptContainer} />
            <Route path="compareThem" component={ComparatorContainer} />
        </Route>
    </Router>
);

module.exports = routes;
