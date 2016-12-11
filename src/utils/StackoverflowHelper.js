var axios = require('axios');

function getSubjectInfo(username) {
    return axios.get('https://api.stackexchange.com/2.2/users?order=desc&sort=reputation&inname=' + username + '&site=stackoverflow');
}

var helpers = {
    getSubjectsInfo: function(subjects) {
        return axios.all(subjects.map(function(username) {
            return getSubjectInfo(username);
        })).then(function(info) {
            return info.map(function(user) {
                return user.data;
            });
        }).catch(function(err) {
            console.warn("Something went wrong while retrieving subject info", err);
        });
    }
};

module.exports = helpers;
