
app.factory("SeguroService", function($http, UrlService){
	return{
     	getSeguros: function(success, error) {
     			return  $http({
							      method: 'GET',
							      url: UrlService.getUrl('getSeguros')
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
