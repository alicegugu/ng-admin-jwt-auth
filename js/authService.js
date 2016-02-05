var ngAdminJWTAuthService = function($http, jwtHelper, ngAdminJWTAuthConfigurator) { 
	
	return {
		authenticate: function(data, successCallback, errorCallback) {
				localStorage.login = data.login;
				successCallback(data);

		},

		isAuthenticated: function() {
        if(localStorage.login === 'false') {
            console.log(localStorage.login);
            return false;
        }else {
            console.log(localStorage.login);
            return true;
        }

		},

		logout: function() {
			localStorage.removeItem('login');
			return true;
		}
	};
};

ngAdminJWTAuthService.$inject = ['$http', 'jwtHelper', 'ngAdminJWTAuthConfigurator'];

module.exports = ngAdminJWTAuthService;
