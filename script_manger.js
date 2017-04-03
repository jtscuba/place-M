// refresh
const modhash = window.reddit.modhash;
const script_file_loc = "https://raw.githack.com/jtscuba/place-M/master/script_manger.js";
const draw = null;
const time_out = 3600;

// wait 1 second after script is started to start running
var sec = 1;

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

const five_minutes_in_ms = 300000;

var logo_colors = 
        [[3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
         [3, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3],
         [3, 8, 8,13,13, 8, 8, 8,13,13, 8, 8, 8, 8,13,13,13, 8, 8,13, 8, 8, 8, 8,13, 8, 8,13, 8,13,13,13,13, 8, 3],
         [3, 8,13, 8, 8, 8, 8,13, 8, 8,13, 8, 8, 8,13, 8, 8,13, 8,13, 8, 8, 8, 8,13, 8, 8,13, 8,13, 8, 8, 8, 8, 3],
         [3, 8,13, 8,13,13, 8,13, 8, 8,13, 8, 8, 8,13,13,13, 8, 8,13, 8, 8, 8, 8,13, 8, 8,13, 8,13,13,13, 8, 8, 3],
         [3, 8,13, 8, 8,13, 8,13, 8, 8,13, 8, 8, 8,13, 8, 8,13, 8,13, 8, 8, 8, 8,13, 8, 8,13, 8,13, 8, 8, 8, 8, 3],
         [3, 8, 8,13,13, 8, 8, 8,13,13, 8, 8, 8, 8,13,13,13, 8, 8,13,13,13,13, 8,13,13,13,13, 8,13,13,13,13, 8, 3],
         [3, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 8, 8, 8, 8,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13,13, 8, 8, 8,13,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8, 8, 8,13,13,13,13,13, 8,13,13,13,13,13,13,13, 8,13,13,13,13,13, 8, 8, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8, 8, 8,13,13,13,13,13, 8, 8,13,13,13,13,13, 8, 8,13,13,13,13,13, 8, 8, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8, 8, 8,13,13,13,13,13, 8, 8, 8,13,13,13, 8, 8, 8,13,13,13,13,13, 8, 8, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8, 8, 8,13,13,13,13,13, 8, 8, 8, 8,13, 8, 8, 8, 8,13,13,13,13,13, 8, 8, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 3],
         [3, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 3],
         [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]];

// Location constants
var x_min = 70;
var x_max = x_min + logo_colors[0].length; // one past the end

var y_min = 802;
var y_max = y_min + logo_colors.length; // one past the end

var current_x = x_min;
var current_y = y_min;

const advance_current_loc = () => {
   // update current search location
   x++;
   if (current_x == x_max) {
      current_x = x_min;
      y++;

      if (current_y == y_max) {
         current_y = y_min;
      }
   }
}

const draw_pixel = (delay) => {
   setTimeout( () => {
      check_pixel(curent_x, current_y);
   }, delay);
}

/*
 * recursivley check pixels so we can use a delay function in between, would be nice to
 * have an iterative suspend option but whatever
 * stops if a pixel is fixed, will be called again by a background manager
 */
const check_pixel = (x, y) => {
   $.get("https://www.reddit.com/api/place/pixel.json?x=" + x + "&y=" + y)
   .then(res => {
      // Get the desired color
      const color = logo_colors[y - y_min][x - x_min]

      // check if the color is already correct
      if (res.color == color) {
         console.log("Skipping " + (x + ", " + y) + " because it's already correct");
         // wait 50 ms and try the next pixel
         advance_current_loc();
         draw_pixel(50)
      }
      else if (color == -1) {
         console.log("ignoring " + (x + ", " + y));
         advance_current_loc();
         draw_pixel(50);
      }
      else {
      // If not correct and not ignoring fix it
         console.log("Drawing at " + x + ", " + y + " (https://www.reddit.com/r/place/#x=" + x + "&y=" + y + ")");
          $.ajax({ url: "https://www.reddit.com/api/place/draw.json", type: "POST",
              headers: { "x-modhash": modhash }, data: { x: x, y: y, color: color }
         })
         .done( (data) => {
            // stop recursion and wait 5 minutes
            sec = 300;
         })
         .error( (err) => {
            // wait 50 ms and try the next pixel
            advance_current_loc();
            draw_pixel(50);
         })
      }
   })
   .fail(err => {
      console.log(err);
      // wait 50 ms and try the next pixel
      advance_current_loc();
      draw_pixel(50);
   });

}


// Background manager
// starts recursive check if seconds is 0
setInterval(() => {
   if (sec > 0) {
      console.log("Drawing in " + (sec) + " seconds");
      sec--;

      // just finished countdown
      if (sec == 0) {
         
         // fetch new logo array
         $.getJSON("M.json", ( data ) => {

            // fetch changes if any
            logo_colors = data.logo_colors;
            x_min = data.x_min;
            x_max = x_min + logo_colors[0].length;

            y_min = data.y_min;
            y_max = y_min + logo_colors.length;
            // start searching for errors again
            // from where we left off last time
            // prevents starvation
            draw_pixel(0)
         })
         .fail( (err) => {
            console.log(err);
         });
      }
   }
      
}, 1e3);