const board = [
    null, 0, null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
];

// ---------Finding the exact location of the disk
let find_Disk = function (disk_Id) {
    let parsed_Integer = parseInt(disk_Id);
    return board.indexOf(parsed_Integer);
};


// ---------Collecting the objects from the twoplayerGame.html using DOM References--------
const cells = document.querySelectorAll("td");
let black_Disks = document.querySelectorAll("p");
let white_Disks = document.querySelectorAll("span");
const turn_Divider = document.querySelector("seperator");
const black_Disk_Turn = document.querySelectorAll(".black_Turn_Sign");
const white_Disk_Turn = document.querySelectorAll(".white_Turn_Sign");

// ------------Properties of each player------------

//Keeping track of number of disks for each player
let black_Disk_count = 12;
let white_Disk_count = 12;
let player_Disks;
//Keeping track of player's turn
let player_Turn = true;

// ------------Properties of each disk------------

// Help to identify disk, its position and the available positions it can move to
let selectedDisk = {
    disk_Id: -1,
    position_of_disk: -1,
    isKing: false,
    //Identifying the positions it can move to
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false
}

// ------------Giving each Disk an a click event listener so that when clicked we can move it------------
function giveDisksEventListeners() {
    if (player_Turn) {
        for (let i = 0; i < black_Disks.length; i++) {
            black_Disks[i].addEventListener("click", getPlayerDisks);
        }
    } else {
        for (let i = 0; i < white_Disks.length; i++) {
            white_Disks[i].addEventListener("click", getPlayerDisks);
        }
    }
  }

// ------------Estabilishing the(player_Turn) of each player------------
function getPlayerDisks() {
    if (player_Turn) {
    player_Disks = black_Disks;
} else {
    player_Disks = white_Disks;
}
removeCellonclick();
resetBorders();
}

// ------------Looping through all the cells on board and removing onclick------------
function removeCellonclick() {
    for (let i = 0; i < cells.length; i++) {
    cells[i].removeAttribute("onclick");
    }
}

// -------resets borders to default------
// So if player selects a different Disk the first goes back to normal
function resetBorders() {
    for (let i = 0; i < player_Disks.length; i++) {
    player_Disks[i].style.border = "1.5px solid black";
}
resetSelectedDiskProperties();
  getSelectedDisk();
}

// ------------resets the selected the Disk properties so each Disk returns to original state------------
function resetSelectedDiskProperties() {
    selectedDisk.disk_Id = -1;
    selectedDisk.disk_Id = -1;
    selectedDisk.isKing = false;
    selectedDisk.seventhSpace = false;
    selectedDisk.ninthSpace = false;
    selectedDisk.fourteenthSpace = false;
    selectedDisk.eighteenthSpace = false;
    selectedDisk.minusSeventhSpace = false;
    selectedDisk.minusNinthSpace = false;
    selectedDisk.minusFourteenthSpace = false;
    selectedDisk.minusEighteenthSpace = false;
}

function getSelectedDisk() {
    selectedDisk.disk_Id = parseInt(event.target.id);
    selectedDisk.position_of_disk = find_Disk(selectedDisk.disk_Id);
    isDiskKing();
}

function isDiskKing() {
    if (document.getElementById(selectedDisk.disk_Id).classList.contains("King")) {
        selectedDisk.isKing = true;
    } else {
        selectedDisk.isKing = false;
    }
    getAvailableSpaces();
}

// ------------Looking at surrouding cells of  selected disk to see if it can move there------------
function getAvailableSpaces() {
    if (board[selectedDisk.position_of_disk + 7] === null && 
        cells[selectedDisk.position_of_disk + 7].classList.contains("emptycell") !== true) {
        selectedDisk.seventhSpace = true;
    }
    if (board[selectedDisk.position_of_disk + 9] === null && 
        cells[selectedDisk.position_of_disk + 9].classList.contains("emptycell") !== true) {
        selectedDisk.ninthSpace = true;
    }
    if (board[selectedDisk.position_of_disk - 7] === null && 
        cells[selectedDisk.position_of_disk - 7].classList.contains("emptycell") !== true) {
        selectedDisk.minusSeventhSpace = true;
    }
    if (board[selectedDisk.position_of_disk - 9] === null && 
        cells[selectedDisk.position_of_disk - 9].classList.contains("emptycell") !== true) {
        selectedDisk.minusNinthSpace = true;
    }
    checkAvailableJumpSpaces();
}

function checkAvailableJumpSpaces() {
    if (player_Turn) {
        if (board[selectedDisk.position_of_disk + 14] === null 
        && cells[selectedDisk.position_of_disk + 14].classList.contains("emptycell") !== true
        && board[selectedDisk.position_of_disk + 7] >= 12) {
            selectedDisk.fourteenthSpace = true;
        }
        if (board[selectedDisk.position_of_disk + 18] === null 
        && cells[selectedDisk.position_of_disk + 18].classList.contains("emptycell") !== true
        && board[selectedDisk.position_of_disk + 9] >= 12) {
            selectedDisk.eighteenthSpace = true;
        }
        if (board[selectedDisk.position_of_disk - 14] === null 
        && cells[selectedDisk.position_of_disk - 14].classList.contains("emptycell") !== true
        && board[selectedDisk.position_of_disk - 7] >= 12) {
            selectedDisk.minusFourteenthSpace = true;
        }
        if (board[selectedDisk.position_of_disk - 18] === null 
        && cells[selectedDisk.position_of_disk - 18].classList.contains("emptycell") !== true
        && board[selectedDisk.position_of_disk - 9] >= 12) {
            selectedDisk.minusEighteenthSpace = true;
        }
    } else {
        if (board[selectedDisk.position_of_disk + 14] === null 
        && cells[selectedDisk.position_of_disk + 14].classList.contains("emptycell") !== true
        && board[selectedDisk.position_of_disk + 7] < 12 && board[selectedDisk.position_of_disk + 7] !== null) {
            selectedDisk.fourteenthSpace = true;
        }
        if (board[selectedDisk.position_of_disk + 18] === null 
        && cells[selectedDisk.position_of_disk + 18].classList.contains("emptycell") !== true
        && board[selectedDisk.position_of_disk + 9] < 12 && board[selectedDisk.position_of_disk + 9] !== null) {
            selectedDisk.eighteenthSpace = true;
        }
        if (board[selectedDisk.position_of_disk - 14] === null && cells[selectedDisk.position_of_disk - 14].classList.contains("emptycell") !== true
        && board[selectedDisk.position_of_disk - 7] < 12 
        && board[selectedDisk.position_of_disk - 7] !== null) {
            selectedDisk.minusFourteenthSpace = true;
        }
        if (board[selectedDisk.position_of_disk - 18] === null && cells[selectedDisk.position_of_disk - 18].classList.contains("emptycell") !== true
        && board[selectedDisk.position_of_disk - 9] < 12
        && board[selectedDisk.position_of_disk - 9] !== null) {
            selectedDisk.minusEighteenthSpace = true;
        }
    }
    checkDiskConditions();
}

// restricts movement if the Disk is a king
function checkDiskConditions() {
    if (selectedDisk.isKing) {
        giveDiskBorder();
    } else {
        if (player_Turn) {
            selectedDisk.minusSeventhSpace = false;
            selectedDisk.minusNinthSpace = false;
            selectedDisk.minusFourteenthSpace = false;
            selectedDisk.minusEighteenthSpace = false;
        } else {
            selectedDisk.seventhSpace = false;
            selectedDisk.ninthSpace = false;
            selectedDisk.fourteenthSpace = false;
            selectedDisk.eighteenthSpace = false;
        }
        giveDiskBorder();
    }
}

// gives the Disk a green highlight for the user (showing its movable)
function giveDiskBorder() {
    if (selectedDisk.seventhSpace || selectedDisk.ninthSpace || selectedDisk.fourteenthSpace || selectedDisk.eighteenthSpace
    || selectedDisk.minusSeventhSpace || selectedDisk.minusNinthSpace || selectedDisk.minusFourteenthSpace || selectedDisk.minusEighteenthSpace) {
        document.getElementById(selectedDisk.disk_Id).style.border = "5px solid red";
        giveCellsClick();
    } else {
        return;
    }
}

function giveCellsClick() {
    if (selectedDisk.seventhSpace) {
        cells[selectedDisk.position_of_disk + 7].setAttribute("onclick", "makeMove(7)");
    }
    if (selectedDisk.ninthSpace) {
        cells[selectedDisk.position_of_disk + 9].setAttribute("onclick", "makeMove(9)");
    }
    if (selectedDisk.fourteenthSpace) {
        cells[selectedDisk.position_of_disk + 14].setAttribute("onclick", "makeMove(14)");
    }
    if (selectedDisk.eighteenthSpace) {
        cells[selectedDisk.position_of_disk + 18].setAttribute("onclick", "makeMove(18)");
    }
    if (selectedDisk.minusSeventhSpace) {
        cells[selectedDisk.position_of_disk - 7].setAttribute("onclick", "makeMove(-7)");
    }
    if (selectedDisk.minusNinthSpace) {
        cells[selectedDisk.position_of_disk - 9].setAttribute("onclick", "makeMove(-9)");
    }
    if (selectedDisk.minusFourteenthSpace) {
        cells[selectedDisk.position_of_disk - 14].setAttribute("onclick", "makeMove(-14)");
    }
    if (selectedDisk.minusEighteenthSpace) {
        cells[selectedDisk.position_of_disk - 18].setAttribute("onclick", "makeMove(-18)");
    }
}

function makeMove(number) {
    document.getElementById(selectedDisk.disk_Id).remove();
    cells[selectedDisk.position_of_disk].innerHTML = "";
    if (player_Turn) {
        if (selectedDisk.isKing) {
            cells[selectedDisk.position_of_disk + number].innerHTML = `<p class="blackDisk King" id="${selectedDisk.disk_Id}"></p>`;
            black_Disks = document.querySelectorAll("p");
        } else {
            cells[selectedDisk.position_of_disk + number].innerHTML = `<p class="blackDisk" id="${selectedDisk.disk_Id}"></p>`;
            black_Disks = document.querySelectorAll("p");
        }
    } else {
        if (selectedDisk.isKing) {
            cells[selectedDisk.position_of_disk + number].innerHTML = `<span class="whiteDisk King" id="${selectedDisk.disk_Id}"></span>`;
            white_Disks = document.querySelectorAll("span");
        } else {
            cells[selectedDisk.position_of_disk + number].innerHTML = `<span class="whiteDisk" id="${selectedDisk.disk_Id}"></span>`;
            white_Disks = document.querySelectorAll("span");
        }
    }
  
    let diskPosition = selectedDisk.position_of_disk
    if (number === 14 || number === -14 || number === 18 || number === -18) {
        changeData(diskPosition, diskPosition + number, diskPosition + number / 2);
    } else {
        changeData(diskPosition, diskPosition + number);
    }
}

// Changes the board states data on the back end
function changeData(position_of_disk, modifiedIndex, removeDisk) {
    board[position_of_disk] = null;
    board[modifiedIndex] = parseInt(selectedDisk.disk_Id);
    if (player_Turn && selectedDisk.disk_Id < 12 && modifiedIndex >= 57) {
        document.getElementById(selectedDisk.disk_Id).classList.add("King")
    }
    if (player_Turn === false && selectedDisk.disk_Id >= 12 && modifiedIndex <= 7) {
        document.getElementById(selectedDisk.disk_Id).classList.add("King");
    }
    if (removeDisk) {
        board[removeDisk] = null;
        if (player_Turn && selectedDisk.disk_Id < 12) {
            cells[removeDisk].innerHTML = "";
            white_Disk_count--
        }
        if (player_Turn === false && selectedDisk.disk_Id >= 12) {
            cells[removeDisk].innerHTML = "";
            black_Disk_count--
        }
    }
    resetSelectedDiskProperties();
    removeCellonclick();
    removeEventListeners();
}

// removes the 'onClick' event listeners for disks
function removeEventListeners() {
    if (player_Turn) {
        for (let i = 0; i < black_Disks.length; i++) {
            black_Disks[i].removeEventListener("click", getPlayerDisks);
        }
    } else {
        for (let i = 0; i < white_Disks.length; i++) {
            white_Disks[i].removeEventListener("click", getPlayerDisks);
        }
    }
    checkForWin();
}

// Checks for a win
function checkForWin() {
    if (white_Disk_count === 0) {
        divider.style.display = "none";
        for (let i = 0; i < black_Disk_Turn.length; i++) {
            black_Disk_Turn[i].style.color = "black";
            white_Disk_Turn[i].style.display = "none";
            black_Disk_Turn[i].textContent = "BLACK WINS!";
        }
    } else if ( black_Disk_count === 0) {
        divider.style.display = "none";
        for (let i = 0; i < white_Disk_Turn.length; i++) {            
            white_Disk_Turn[i].style.color = "black";
            black_Disk_Turn[i].style.display = "none";
            white_Disk_Turn[i].textContent = "WHITE WINS!";
        }
    }
    changePlayer();
}

function changePlayer() {
    if (player_Turn) {
    (player_Turn) = false;
        for (let i = 0; i < black_Disk_Turn.length; i++) {
            black_Disk_Turn[i].style.color = "lightGrey";
            white_Disk_Turn[i].style.color = "black";
        }
    } else {
    player_Turn = true;
        for (let i = 0; i < white_Disk_Turn.length; i++) {
            white_Disk_Turn[i].style.color = "lightGrey";
            black_Disk_Turn[i].style.color = "black";
        }
    }
    giveDisksEventListeners();
  }
  
  giveDisksEventListeners();