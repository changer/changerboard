var googleapis = require('googleapis');

module.exports = function(config, dependencies, job_callback) {
    job_callback(null, { title: config.widgetTitle });
};
