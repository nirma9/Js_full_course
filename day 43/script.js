function debounce(fn,wait){
               let timer;
               return function(...args){
                              clearTimeout(timer);
                              timer = setTimeout(() => {
                                             fn(...args);
                              },wait);
               }
}



//trottle

function throttle(fn,limit){
               let inthrottle = false;

               return function(){
                              if(!inthrottle){
                                             fn();
                                             inthrottle = true;
                                             setTimeout(() => {
                                                            inthrottle = false;

                                             },limit);

                              }
               }};
                              
