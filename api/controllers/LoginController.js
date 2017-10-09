/**
 * LoginController
 * @author: Manikandan.Vijayasankar
 * @description :: Server-side logic for managing Logins
 */

module.exports = {
	demo: function test(req, res) {
        var data = req.body;
        Login.create(data).exec(function(err, data){
            if(err) {
                res.send(500, {'title':err});
            } else {
                res.send(200, {'successdata':data});
            }
        });
    }
};

