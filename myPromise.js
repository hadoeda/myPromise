;var MyPromise = (function(){
	return function(callback){

		var resolveCallbacks = [];
		this.then = function(resolveCallback){
            if(status === 'resolved') resolveCallback(resData);
			else if(status === 'pending') resolveCallbacks.push(resolveCallback);
			return this;
		};

		var rejectCallbacks = [];
		this.catch = function(rejectCallback){
            if(status === 'rejected') rejectCallback(rejectCallback);
            else if(status === 'pending') rejectsCallbacks.push(rejectCallback);
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

        var rejError = undefined;
		function reject(error){
            rejError = error;
			rejectCallbacks.forEach(function(clb){
				clb(data);
            });
            status = 'rejected';
        }
        
        callback(resolve, reject);
	};
})();