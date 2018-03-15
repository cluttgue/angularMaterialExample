
app.factory("CampanaService", function($http, UrlService){
	return{
     	getCampanasVigentes: function(success, error) {
     			return  $http({
							      method: 'GET',
							      url: UrlService.getUrl('getCampanasVigentes')
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
		getCampanaMesVigenteByCampanaId: function(idCampana, success, error) {
     			return  $http({
							      method: 'GET',
							      url: UrlService.getUrl('getCampanaMesVigenteByCampanaId', {'idCampana': idCampana})
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
