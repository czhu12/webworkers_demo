
self.interval;

self.addEventListener('message', function(e){
  if(e.data.command === 'start'){
    self.interval = setInterval(function(){
      self.postMessage('hello from ' + e.data.id);
    }, 1000);
  } else if(e.data.command === 'stop'){
    clearInterval(self.interval);
  }
}, false);


