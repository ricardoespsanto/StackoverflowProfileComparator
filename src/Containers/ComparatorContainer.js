var React = require('react');
var Comparator = require('../Components/Comparator');
var StackoverflowHelpers = require('../utils/StackoverflowHelper');

var ComparatorContainer = React.createClass({
        contextTypes: {
            router: React.PropTypes.object.isRequired
        },
        getInitialState: function () {
            return {
                isLoading: true,
                subjectInfo: []
            }
        },
        componentDidMount: function () {
            var query = this.props.location.query;
            StackoverflowHelpers.getSubjectsInfo([query.subjectOne, query.subjectTwo])
                .then(function (subjects) {
                    this.setState({
                        isLoading: false,
                        subjectInfo: [subjects[0], subjects[1]]
                    });
                }.bind(this));
        },
        render: function () {
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
