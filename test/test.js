'use strict';

var expect = require('chai').expect;
var proactive = require('../index');

describe('#proactive', function() {

    it('should connect to scheduler', function() {

        expect(connection.isConnected()).to.equal(true);
    });

    it('should not connect to scheduler', function() {

        expect(connection.isConnected()).to.equal(false);
    });

    it('should retrieve jobs from scheduler', function() {

        expect(connection.isConnected()).to.equal(true);

        console.log(connection.getJobs)
    });

});
