let time = document.getElementById("time")

let root = document.documentElement

function change() {
    if (time.style.flexDirection == "row") {
        root.style.setProperty('--color', 'rgb(218, 91, 153)')
        root.style.setProperty('--color_bgc', 'rgb(243, 199, 222)')
        root.style.setProperty('--body_bgc', 'rgb(208, 155, 174)')
        time.style.flexDirection = "row-reverse"
    } else {
        root.style.setProperty('--color', 'rgb(67, 24, 67)')
        root.style.setProperty('--color_bgc', ' rgb(219, 166, 219)')
        root.style.setProperty('--body_bgc', 'rgb(255, 183, 255)')
        time.style.flexDirection = "row"
    }
}