/**
 * Created by adrian on 29/08/2018.
 */
let express = require('express');
let app = express();

require('./server/config/express').configExpress(app);
require('./server/config/passport').configPassport(app);
require('./server/routes/user')(app);


app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT ||  3001);
let server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

let server = app.listen(app.get('port'),server_ip_address, () => {
    console.log('Listening on port %d', server.address().port);

});