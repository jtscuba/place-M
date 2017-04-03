// refresh 
var run_counter = 0;
const script_file_loc = "https://gitlab.eecs.umich.edu/bgimby/place-M/raw/master/script.js";
const draw = null;
const time_out = 3600;

const load_script = () => {
   $.getScript(script_file_loc)
   .done(res => {
      draw = setInterval( () => {
         draw_pixel();
         sec = 300;
      }, 300000);
   })
   .fail(err => {
      console.log(err);
   })
}

setInterval(() => {
   if (sec > 0) {
      console.log("Drawing in " + (sec) + " seconds");
      sec--;
   }

   run_counter++;

   if (run_counter % time_out == 0 and draw != null) {
      clearInterval(draw);
      load_script();
   }
   	
}, 1e3);




