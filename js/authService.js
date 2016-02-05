var ngAdminJWTAuthService = function($http, jwtHelper, ngAdminJWTAuthConfigurator) { 
	
	return {
		authenticate: function(data, successCallback, errorCallback) {
				localStorage.login = data.login;
				successCallback(response);

		},

		isAuthenticated: function() {
        return localStorage.login;
		},

		logout: function() {
			localStorage.removeItem('login');
			return true;
		}
	};
};

ngAdminJWTAuthService.$inject = ['$http', 'jwtHelper', 'ngAdminJWTAuthConfigurator'];

module.exports = ngAdminJWTAuthService;
