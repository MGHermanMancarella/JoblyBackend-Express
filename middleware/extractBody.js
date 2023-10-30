'use strict'

/** Middleware: Extracts Request Body.
 *
 * The request object is a little different running on Lambda / serverless. This middleware function extracts what would be a "regular" req.body from the more complex serverless request. 
 * 
 * This function is written in such a way that the app can still be run locally as an express app, w/out the serverless setup. 
 */

function extractRequestBody(req, res, next) {
    
    if (req.apiGateway && req.apiGateway.event && req.apiGateway.event.body !== '') {
        req.body = JSON.parse(req.apiGateway.event.body);
    }
    next();
}

module.exports = extractRequestBody