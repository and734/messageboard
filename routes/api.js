'use strict';

var expect=require('chai').expect;
var MongoClient=require('mongodb').MongoClient;
var ObjectId=require('mongodb').ObjectId;
const htmlSanitize=require('sanitize-html');

module.exports = function (app) {

 app.route('/api/threads/board')

  app.route('/api/threads/:board');
    
  app.route('/api/replies/:board');

};
