var React = require('react');
var Prompt = require('../Components/Prompt');

var PromptContainer = React.createClass({
        contextTypes: {
            router: React.PropTypes.object.isRequired
        },
        getInitialState: function () {
            return {
                username: ''
            }
        },
        handleSubmitUser: function (e) {
            e.preventDefault();
            var username = this.state.username;
            this.setState({
                username: ''
            });

            if (this.props.routeParams.subjectOne) {
                this.context.router.push({
                    pathname: '/compareThem',
                    query: {
                        subjectOne: this.props.routeParams.subjectOne,
                        subjectTwo: this.state.username
                    }
                })
            } else {
                this.context.router.push('/subjectTwo/' + this.state.username);
            }
        },
        handleUpdateUser: function (e) {
            this.setState({
                username: e.target.value
            })
        },
        render: function () {
            return (
                <Prompt
                    onSubmitUser={this.handleSubmitUser}
                    onUpdateUser={this.handleUpdateUser}
                    header={this.props.route.header}
                    username={this.state.username}
                />
            )
        }
    }
);

module.exports = PromptContainer;
