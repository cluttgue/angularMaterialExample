
app.factory("CanalService", function($http, UrlService){
	return{
     	getCanales : function(success, error) {
     			return  $http({
							      method: 'GET',
							      url: UrlService.getUrl('getCanales')
							   }).then(function (response){
							   		if(success !== undefined && success !== null){
							   				success(response);
										}
							   },function (error){
							   		if (error !== undefined && error !== null) {
                        				error(data);
                    				}
							   });
			},
		prueba : function(){
			return "prueba factory services";
		}
     }      
});
