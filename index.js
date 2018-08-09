'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */

var request = require('syncrequest');

module.exports =  {

    connect : (url, login, pwd) => {
        var response = request.post.sync(url + "rest/rm/login", {formData: {
                                        username: login,
                                        password: pwd
                                    }})

        return {
            "url" : url,
            "login" : login,
            sessionId : response.response.statusCode == 200 ? response.body : undefined,
            isConnected : function () {
                return this.sessionId != undefined
            },

            getJobs : function() {
                if(!this.isConnected) {
                    console.log("You are not connected to the sheduler")
                } else {
                    var response = request.get.sync(this.url + "rest/scheduler/jobs", { headers: {
                                                            "sessionId": this.sessionId
                                                        }})
                    return response.body
                }
            }

        }
    }
}
