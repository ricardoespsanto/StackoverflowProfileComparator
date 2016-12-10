var React = require('react');
var PropTypes = React.PropTypes;

function Prompt(props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
            <h1>{props.header}</h1>
            <div>
                <form onSubmit={props.onSubmitUser}>
                    <input id="usernameFiled"
                           className="form-control"
                           placeholder="Stackoverflow username"
                           type="text"
                           onChange={props.onUpdateUser}
                           value={props.username}
                    />
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button type="submit" className="btn btn-success btn-lg">
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

Prompt.PropTypes = {
    username: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    onUpdateUser: PropTypes.func.isRequired
};

module.exports = Prompt;
