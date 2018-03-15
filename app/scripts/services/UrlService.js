
/**
 * @name UrlService
 * @description
 * # Servicio encargado de proporcionar urls
 *
 */
app.factory("UrlService", function(){
	var url = {
				'getSeguros' : 'http://cllofision01p/WCFBIDesa/Services/SeguroService.svc/getSeguros/',
				'getCampanasVigentes': 'http://cllofision01p/WCFBIDesa/Services/CampanaService.svc/getCampanasVigentes/',
				'getCampanaMesVigenteByCampanaId':'http://cllofision01p/WCFBIDesa/Services/CampanaService.svc/getCampanaMesVigenteByCampanaId/${idCampana}/',
				'getCanales' : 'http://cllofision01p/WCFBIDesa/Services/CanalServices.svc/getCanales/',
				'getRemitenteByCanal': 'http://cllofision01p/WCFBIDesa/Services/DisparadorService.svc/getRemitenteByCanal/${codCanal}/',
				'setCalendarioDisparo': 'http://cllofision01p/WCFBIDesa/Services/DisparadorService.svc/saveCalendarioDisparo/',
				'getMaxIdTarea': 'http://cllofision01p/WCFBIDesa/Services/DisparadorService.svc/getMaxIdTarea/',
				//'documentToSign': $location.protocol() + '://'+ $location.host() +':'+  $location.port() +'/sea-pertinence-web/services/public/document/${qid}',
				'downloadReportService': 'services/report/download/${nombreArchivo}'
		};

		function getUrl(key, params){
			if(params === undefined){
				return validateUrl(key);
			}else{
				var _url = validateUrl(key);

				for(var p in params){
					_url = _url.replace('${' + p + '}', params[p]);
				}

				return _url;
			}
		}

		function validateUrl(key){
			if(url[key] === undefined){
				throw 'La URL requerida no se encuentra definida';
			}

			return url[key];
		}

		return {
			getUrl : getUrl
		};     
});