let map = [
    [" ", " ", "#", "#", "#", "#", "#", "#", "#", "#", "#",],
    [" ", " ", "#", "s", "d", "d", "d", " ", "k", "c", "#",],
    [" ", " ", "#", " ", " ", " ", "=", " ", "c", "=", "#",],
    [" ", " ", "#", "c", "#", "#", " ", "#", "c", "c", "#",],
    [" ", " ", "#", "c", "#", "#", " ", "#", "#", "#", "#",],
    [" ", " ", "#", " ", "c", "c", "=", "c", "c", " ", "#",],
    [" ", " ", "#", " ", " ", "#", " ", "#", "#", "c", "#",],
    ["#", "#", "#", "#", "#", "#", " ", "#", "#", "c", "#",],
    ["#", "c", " ", "c", "c", "c", "s", "#", "#", "c", "#",],
    ["#", "c", " ", "#", "#", "#", " ", "c", "c", " ", "#",],
    ["#", "c", " ", "c", "c", "#", "l", "#", "#", "#", "#",],
    ["#", " ", " ", " ", " ", "#", "s", "#", " ", " ", " ",],
    ["#", " ", "p", " ", " ", "#", "f", "#", " ", " ", " ",],
    ["#", "#", "#", "#", "#", "#", "#", "#", " ", " ", " ",],
]

let object = [
    '<div class="line">',//0
    '<div class="block wall">#</div>',//1
    '<div class="block air"> </div>',//2
    '<div class="block player">p</div>',//3
    '<div class="block flag">f</div>',//4
    '<div class="block coin">c</div>',//5
    '<div class="block star">s</div>',//6
    '<div class="block key">k</div>',//7
    '<div class="block lock">l</div>',//8
    '<div class="block pip">d</div>',//9
    '<div class="block ladder">=</div>',//10
    '</div>',//11
]

let html

let player_poss = ["y", "x"]

let game = document.getElementById("game")

let starnum = document.getElementById("starnum")

let contlsstar = 0

let coinnum = document.getElementById("coinnum")

let contlcoin = 0

let it_is_live = true

let lock_poss = ["y", "x"]

let onlader = false

function drawmap() {
    html = ""
    for (let y = 0; y < map.length; y++) {
        html += object[0]
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] == "#") {
                html += object[1]
            } else if (map[y][x] == " ") {
                html += object[2]
            } else if (map[y][x] == "p") {
                player_poss[0] = y
                player_poss[1] = x
                html += object[3]
            } else if (map[y][x] == "f") {
                html += object[4]
            } else if (map[y][x] == "c") {
                html += object[5]
            } else if (map[y][x] == "s") {
                html += object[6]
            } else if (map[y][x] == "k") {
                html += object[7]
            } else if (map[y][x] == "l") {
                lock_poss[0] = y
                lock_poss[1] = x
                html += object[8]
            } else if (map[y][x] == "d") {
                html += object[9]
            } else if (map[y][x] == "=") {
                html += object[10]
            }
        }
        html += object[11]
    }
    game.innerHTML = html
    coinnum.innerHTML = "coin - " + contlcoin
    starnum.innerHTML = "star - " + contlsstar + "/3"
}

drawmap()

document.addEventListener("keydown", function (btn) {
    if (it_is_live == true) {
        if (btn.code == "KeyW") {
            moveup()
        } else if (btn.code == "KeyS") {
            movedown()
        } else if (btn.code == "KeyA") {
            moveleft()
        } else if (btn.code == "KeyD") {
            moverigth()
        }
    }
})

function dead() {
    it_is_live = false
    ocno.style.display = "flex"
    resech.innerHTML = 'you проиграл <br> stars = ' + contlsstar + '/3<br> coins = ' + contlcoin
    up.style.display = "none"
}

function moveup() {
    if (map[player_poss[0] - 1][player_poss[1]] == " ") {
        map[player_poss[0] - 1][player_poss[1]] = "p"
        map[player_poss[0]][player_poss[1]] = " "
        drawmap()
        moveup()
    } else if (map[player_poss[0] - 1][player_poss[1]] == "f") {
        map[player_poss[0] - 1][player_poss[1]] = "p"
        if (onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        uwin()
        drawmap()
        moveup()
    } else if (map[player_poss[0] - 1][player_poss[1]] == "c") {
        map[player_poss[0] - 1][player_poss[1]] = "p"
        if (onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        contlcoin++
        drawmap()
        moveup()
    } else if (map[player_poss[0] - 1][player_poss[1]] == "s") {
        map[player_poss[0] - 1][player_poss[1]] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        contlsstar++
        drawmap()
        moveup()
    } else if (map[player_poss[0] - 1][player_poss[1]] == "k") {
        map[player_poss[0] - 1][player_poss[1]] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        lockopen()
        drawmap()
        moveup()
    } else if (map[player_poss[0] - 1][player_poss[1]] == "d") {
        map[player_poss[0] - 1][player_poss[1]] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        dead()
        drawmap()
    } else if (map[player_poss[0] - 1][player_poss[1]] == "=") {
        map[player_poss[0] - 1][player_poss[1]] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = true
        drawmap()
    }
}

function movedown() {
    if (map[player_poss[0] + 1][player_poss[1]] == " ") {
        map[player_poss[0] + 1][player_poss[1]] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        drawmap()
        movedown()
    } else if (map[player_poss[0] + 1][player_poss[1]] == "f") {
        map[player_poss[0] + 1][player_poss[1]] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        uwin()
        drawmap()
        movedown()
    } else if (map[player_poss[0] + 1][player_poss[1]] == "c") {
        map[player_poss[0] + 1][player_poss[1]] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        contlcoin++
        drawmap()
        movedown()
    } else if (map[player_poss[0] + 1][player_poss[1]] == "s") {
        map[player_poss[0] + 1][player_poss[1]] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        contlsstar++
        drawmap()
        movedown()
    } else if (map[player_poss[0] + 1][player_poss[1]] == "k") {
        map[player_poss[0] + 1][player_poss[1]] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        lockopen()
        drawmap()
        movedown()
    }
    else if (map[player_poss[0] + 1][player_poss[1]] == "d") {
        map[player_poss[0] + 1][player_poss[1]] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        dead()
        drawmap()
    } else if (map[player_poss[0] + 1][player_poss[1]] == "=") {
        map[player_poss[0] + 1][player_poss[1]] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = true
        drawmap()
    }
}

function moveleft() {
    if (map[player_poss[0]][player_poss[1] - 1] == " ") {
        map[player_poss[0]][player_poss[1] - 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        drawmap()
        moveleft()
    } else if (map[player_poss[0]][player_poss[1] - 1] == "f") {
        map[player_poss[0]][player_poss[1] - 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        uwin()
        drawmap()
        moveleft()
    } else if (map[player_poss[0]][player_poss[1] - 1] == "c") {
        map[player_poss[0]][player_poss[1] - 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        contlcoin++
        drawmap()
        moveleft()
    } else if (map[player_poss[0]][player_poss[1] - 1] == "s") {
        map[player_poss[0]][player_poss[1] - 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        contlsstar++
        drawmap()
        moveleft()
    } else if (map[player_poss[0]][player_poss[1] - 1] == "k") {
        map[player_poss[0]][player_poss[1] - 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        lockopen()
        drawmap()
        moveleft()
    } else if (map[player_poss[0]][player_poss[1] - 1] == "d") {
        map[player_poss[0]][player_poss[1] - 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        dead()
        drawmap()
    } else if (map[player_poss[0]][player_poss[1] - 1] == "=") {
        map[player_poss[0]][player_poss[1] - 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = true
        drawmap()
    }
}

function moverigth() {
    if (map[player_poss[0]][player_poss[1] + 1] == " ") {
        map[player_poss[0]][player_poss[1] + 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        drawmap()
        moverigth()
    } else if (map[player_poss[0]][player_poss[1] + 1] == "f") {
        map[player_poss[0]][player_poss[1] + 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        uwin()
        drawmap()
        moverigth()
    } else if (map[player_poss[0]][player_poss[1] + 1] == "c") {
        map[player_poss[0]][player_poss[1] + 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        contlcoin++
        drawmap()
        moverigth()
    } else if (map[player_poss[0]][player_poss[1] + 1] == "s") {
        map[player_poss[0]][player_poss[1] + 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        contlsstar++
        drawmap()
        moverigth()
    } else if (map[player_poss[0]][player_poss[1] + 1] == "k") {
        map[player_poss[0]][player_poss[1] + 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        lockopen()
        drawmap()
        moverigth()
    } else if (map[player_poss[0]][player_poss[1] + 1] == "d") {
        map[player_poss[0]][player_poss[1] + 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = false
        dead()
        drawmap()
    } else if (map[player_poss[0]][player_poss[1] + 1] == "=") {
        map[player_poss[0]][player_poss[1] + 1] = "p"
        if(onlader == true) {
            map[player_poss[0]][player_poss[1]] = "="
        } else {
            map[player_poss[0]][player_poss[1]] = " "
        }
        onlader = true
        drawmap()
    }
}

function lockopen() {
    map[lock_poss[0]][lock_poss[1]] = " "
}

let resech = document.getElementById("resech")


let ocno = document.getElementById("ocno")

function uwin() {
    it_is_live = false
    ocno.style.display = "flex"
    resech.innerHTML = 'you win <br> stars = ' + contlsstar + '/3<br> coins = ' + contlcoin
    up.style.display = "none"

}

function uwinclouse() {
    ocno.style.display = "none"
}

let up = document.getElementById("up")


