;var MyPromise = (function(){
	return function(callback){

		var resolveCallbacks = [];
		this.then = fuction(resolveCallback){
			resolveCallbacks.push(resolveCallback);
			return this;
		};

		var rejectCallbacks = [];
		this.catch = function(rejectCallback){
			rejectsCallbacks.push(rejectCallback);
			return this;
		};

		var status = 'pending';
		var resData = undefined;
		function resolve(data){
			resData = data;
			resolveCallbacks.forEach(function(clb){
				clb(data);
			});
			status = 'resolved';
		}

		function reject(data){
			rejectCallbacks.forEach(function(clb){
				clb(data);
			});
		}
	}
})();