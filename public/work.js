self.addEventListener('message', function(e){
  //var answer = work(e.data.param, 0, '');
  var answer = incr(e.data.param.param);
  self.postMessage({param: e.data.param.param, value: answer, id: e.data.id});
}, false);

function work(n, acc, acc2){
  acc = acc + 1;
  acc2 = n + acc2;
  if(n <= 4){
    return acc2;
  }

  if((n % 2) === 0){
    return work(n/2, acc, acc2);
  }else{
    return work(3 * n + 1, acc, acc2); 
  }
}

function incr(n){
  
  while(n < 2147483648){
    n = n + 1;
  }
  return n;
}
