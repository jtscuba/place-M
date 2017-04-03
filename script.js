// const modhash = window.reddit.modhash;
// var sec = 0, index = 0;
// setInterval(() => console.log("Drawing in " + (sec--) + " seconds"), 1e3);
// const draw = seconds => {
//     index++
//     sec = Math.ceil(seconds/1000)
//     setTimeout(() => {
//         const x = index % 37;
//         const y = Math.floor(index / 37) % 22;
//         const logoColors =
//         [[8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
//          [8,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 8],
//          [8,13, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8,13, 8, 8, 8, 8,13, 8,13,13, 8,13,13,13,13, 8,13,13, 8, 8, 8,13,13,13, 8, 8,13,13,13, 8, 8,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13, 8,13, 8,13,13, 8,13,13,13,13, 8,13, 8,13,13, 8,13,13, 8,13,13, 8,13,13,13,13, 8,13, 8,13, 8],
//          [8,13, 8,13,13, 8, 8, 8,13, 8,13,13, 8,13,13,13,13, 8,13,13, 8, 8, 8,13,13, 8,13,13, 8,13, 8, 8,13, 8,13, 8,13, 8],
//          [8,13, 8,13,13,13,13, 8,13, 8,13,13, 8,13,13,13,13, 8,13, 8,13,13, 8,13,13, 8,13,13, 8,13, 8,13,13, 8,13, 8,13, 8],
//          [8,13, 8,13, 8, 8, 8, 8,13, 8, 8, 8, 8,13, 8, 8, 8, 8,13,13, 8, 8, 8,13,13,13, 8, 8,13,13,13, 8, 8,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8,13,13,13,13,13,13, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8,13,13, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13,13, 8, 8, 8,13, 8, 8, 8, 8,13, 8, 8, 8,13,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13,13, 8, 8, 8,13,13, 8, 8,13,13, 8, 8, 8,13,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13, 8, 8, 8, 8, 8,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 8,13, 8],
//          [8,13, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,13, 8],
//          [8,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13, 8],
//          [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8]
// ];

//         const logoColor = logoColors[y][x];
//         const xChange = logoColor != logoColors[y][x - 1] || logoColor != logoColors[y][x + 1];
//         const yChange = (logoColors[y - 1] && logoColor != logoColors[y - 1][x]) || (logoColors[y + 1] && logoColor != logoColors[y + 1][x]);
//         const ax = 104 - x;
//         const ay = y + 804;

//         $.get("https://www.reddit.com/api/place/pixel.json?x=" + ax + "&y=" + ay)
//         .then(res => {
//             if (res.color == logoColor) {
//                 console.log("Skipping " + (ax + ", " + ay) + " because it's already correct");
//                 return draw(50);
//             }
//             console.log("Drawing at " + ax + ", " + ay + " (https://www.reddit.com/r/place/#x=" + ax + "&y=" + ay + ")");
//             $.ajax({ url: "https://www.reddit.com/api/place/draw.json", type: "POST",
//                 headers: { "x-modhash": modhash }, data: { x: ax, y: ay, color: logoColor }
//             })
//             .done(data => draw(300000))
//             .error(data => draw(300000));
//         })
//         .fail(data => draw(0));
//     }, seconds);
// }
// draw(0);

// 
const modhash = window.reddit.modhash;

// Time constants
const five_minutes_in_ms = 300000;

const logo_colors = 
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
const x_max = 104;
const x_min = x_min + logo_colors[0].length;

const y_min = 802;
const y_max = y_min + logo_colors.length;

const draw_pixel = () => {
    sec = 0;
    for (y = y_min; y < y_max; y++) {
        for (x = x_min; x < x_max; x++) {
            $.get("https://www.reddit.com/api/place/pixel.json?x=" + x + "&y=" + y)
            .then(res => {
                // Get the desired color
                const color = logo_colors[y - y_min][x - x_min]

                // check if the color is already correct
                if (res.color == color) {
                   console.log("Skipping " + (x + ", " + y) + " because it's already correct");
                }
                else {
                   // If not fix it
                   console.log("Drawing at " + x + ", " + y + " (https://www.reddit.com/r/place/#x=" + x + "&y=" + y + ")");
                   $.ajax({ url: "https://www.reddit.com/api/place/draw.json", type: "POST",
                       headers: { "x-modhash": modhash }, data: { x: x, y: y, color: color }
                   })

                   return;
                }

            })
            .fail(err => {
                console.log(err);
                return;
            })

            // rate limiting
            sleep(50);
        }
    }
}