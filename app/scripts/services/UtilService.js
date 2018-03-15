app.factory("UtilService", function(){
	return {
			formatDate : formatDate
		};   

	function addZero(i){
		if(i<10){
			i = "0" + i;
		}
		return i;
	}

	function formatDate(date) {
	  var hours = date.getHours();
	  var minutes = date.getMinutes();
	  hours = hours ? hours : 12; // the hour '0' should be '12'
	  minutes = minutes < 10 ? '0'+minutes : minutes;
	  var strTime = hours + ':' + minutes;
	  return date.getFullYear() + "-" + addZero((date.getMonth()+1)) + "-" + addZero(date.getDate()) +  " " + strTime;
	}

});