/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */

const googleapis = require('googleapis');
var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

var request = require('request');

exports.deployfunction = function deployfunction(req, res) {
  console.log(req.secret)
  res.status(200).send('ok');
};