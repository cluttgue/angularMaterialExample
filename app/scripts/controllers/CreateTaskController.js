
app.controller('CreateTaskController', function($scope, $q, CampanaService, CanalService, DisparadorService, UtilService) {
	$scope.respuestas = [
								    { id: 1, name: 'Si' },
								    { id: 0, name: 'No' }
  								];

	$scope.init = function(){
		CampanaService.getCampanasVigentes(function(response, error){
			$scope.campanas = response.data;
        });

        CanalService.getCanales(function(response, error){
        	$scope.canales = response.data;
        });
	};

	$scope.ejecucionVigenteSelected = function(){
		$scope.task.fInicioCampania = $scope.task.selectedEjecucionVigenteCampana.FECHA_INI;
        $scope.task.fFinCampania = $scope.task.selectedEjecucionVigenteCampana.FECHA_FIN;
	};

	$scope.campanaSelected = function(){
		$scope.task.fInicioCampania = "";
		$scope.task.fFinCampania = "";
		CampanaService.getCampanaMesVigenteByCampanaId($scope.task.selectedCampanas.ID_CAMPANA, function(response){
			$scope.ejecucionVigente = response.data;
		});
	};

	$scope.canalSelected = function(){
		DisparadorService.getRemitenteByCanal($scope.task.canal.COD_CANAL, function(response){
			$scope.remitente = response.data;
		});
	};

	$scope.save = function(){
		if($scope.taskForm.$valid){
			var promesas = [ 
						getIdMaxTarea()
						];
	  		$q.all(promesas).then(function (promesasRes) {  
	          var oArrayResponse = promesasRes;
	          if((oArrayResponse[0] != null )){
	          	 var newIdTarea = oArrayResponse[0].data + 1;
	          	 var dataObj =  
	          	 {
	          	 	IdTarea: newIdTarea,
	          	 	Tarea_Descripcion: $scope.task.descripcionTarea,
	          	 	ID_CAMPANAMES: $scope.task.selectedEjecucionVigenteCampana.ID_CAMPANAMES,
	          	 	COD_CANAL: $scope.task.canal.COD_CANAL,
	          	 	IdRemitente: $scope.task.remitenteSelect.IdRemitente,
	          	 	Ind_BuscaRespuesta: $scope.task.buscaRespuesta.id,
	          	 	Plantilla_Mensaje: $scope.task.plantillaMsje,
	          	 	fechaHora: UtilService.formatDate($scope.task.fechaHora)
	          	 };
	          	 DisparadorService.setCalendarioDisparo(dataObj, function(response){
	          	 		console.log(response);
	          	 });
	          }
	        });
		}
	};

	//ESte es una funcion que utiliza promesa angular
	function getIdMaxTarea(){
		var defered = $q.defer();
       	var promise = defered.promise;
       	DisparadorService.getMaxIdTarea(function(response){
       		defered.resolve(response);
       	});
      	return promise; 
	}
});