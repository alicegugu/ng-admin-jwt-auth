var loginController = function($scope, $rootScope, ngAdminJWTAuthService, ngAdminJWTAuthConfigurator, notification, $location) {
	this.$scope = $scope;
	this.$rootScope = $rootScope;
	this.ngAdminJWTAuthService = ngAdminJWTAuthService;
	this.ngAdminJWTAuthConfigurator = ngAdminJWTAuthConfigurator;
	this.notification = notification;
	this.$location = $location;
};

loginController.prototype.login = function() {
	var that = this;
	
	var success = this.ngAdminJWTAuthConfigurator.getLoginSuccessCallback() || function(response) {
		that.notification.log(response.data.message, { addnCls: 'humane-flatty-success' });
		that.$location.path('/');
	};		
	var error = this.ngAdminJWTAuthConfigurator.getLoginErrorCallback() || function(response) {
		that.notification.log(response.data.message, { addnCls: 'humane-flatty-error' });
	};
};

loginController.prototype.google_login = function(googleUser) {

    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
            //      console.log("Name: " + profile.getName()); -->
            ///      console.log("Image URL: " + profile.getImageUrl()); -->
            //      console.log("Email: " + profile.getEmail()); -->

            //The ID token you need to pass to your backend: -->
    var id_token = googleUser.getAuthResponse().id_token;
           //    console.log("ID Token: " + id_token);

    var url = 'http://admin.cafe.lol.garena.com:8000/ajax-auth/google-login/?idtoken='+id_token;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            console.log(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();


};


loginController.$inject = ['$rootScope', '$scope', 'ngAdminJWTAuthService', 'ngAdminJWTAuthConfigurator', 'notification', '$location'];

module.exports = loginController;
