var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Home() {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3">
            <h1>Stackoverflow Profile Comparator</h1>
            <p className="lead">There can be only one!</p>
            <Link to="/subjectOne">
                <button className="btn btn-success btn-lg">
                    Go
                </button>
            </Link>
        </div>
    );
};

module.exports = Home;
