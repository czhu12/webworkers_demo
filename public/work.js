
self.interval;

self.addEventListener('message', function(e){
  if(e.data.command === 'start'){
    console.log('setting interval');
    self.interval = setInterval(function(){
      console.log('hello' + e.data.id);
    }, 1000);
  } else if(e.data.command === 'stop'){
    clearInterval(self.interval);
  }
}, false);


