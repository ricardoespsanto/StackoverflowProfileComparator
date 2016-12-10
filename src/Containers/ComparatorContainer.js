var React = require('react');
var Comparator = require('../Components/Comparator');

var ComparatorContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            isLoading: true,
            subjectInfo: []
        }
    },
    componentDidMount: function() {
        var query = this.props.location.query;
        // Fetch profiles from stackoverflow
        // mark loading as finished
        // update the subject info
    },
    render: function() {
        return (
            <Comparator
                isLoading={this.state.isLoading}
                subjectInfo={this.state.subjectInfo}
            />
        );
    }
}
);

module.exports = ComparatorContainer;
