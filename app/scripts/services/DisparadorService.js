
app.factory("DisparadorService", function($http, UrlService){
	return{
     	getRemitenteByCanal: function(codCanal, success, error) {
     			return  $http({
							      method: 'GET',
							      url: UrlService.getUrl('getRemitenteByCanal', {'codCanal': codCanal})
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
		setCalendarioDisparo: function(dataObj, success, error){
		  		return  $http({
							      method: 'POST',
							      url: UrlService.getUrl('setCalendarioDisparo'),
							      dataType: "json",
							      data: dataObj,
							      headers : { 'Content-Type' : 'application/json'}
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
		getMaxIdTarea: function(success, error){
			return  $http({
							      method: 'GET',
							      url: UrlService.getUrl('getMaxIdTarea')
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
