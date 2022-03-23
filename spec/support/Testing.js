describe("function Datatypes", function() {

    var word = hello;
    describe("Movement function", function(){
        it("should have a number datatype", function(){
            expect(makeMove(move)).toEqual("")
        })
    })
});

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