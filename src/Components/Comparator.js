var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

function Comparator(props) {
    return props.isLoading === true ? <p>Loading subject info ... </p> : (
        <div>

            <div className="col-sm-6">
                <img />
            </div>

            <div className="col-sm-6">
                <img />
            </div>

            <Link to="/compare">
                <button className="btn btn-success btn-lg" type="button">
                    Compare
                </button>
            </Link>

            <Link to="/chooseAgain">
                <button className="btn btn-danger btn-lg" type="button">
                    Choose someone else
                </button>
            </Link>
        </div>
    )
}

module.exports = Comparator;
