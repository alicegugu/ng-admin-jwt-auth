var ngAdminJWTAuthService = function($http, jwtHelper, ngAdminJWTAuthConfigurator) { 
	
	return {
		authenticate: function(data, successCallback, errorCallback) {
				localStorage.login = data.login;
				successCallback(data);

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
