Testing = function() {};

Testing.prototype.getPlayerDisks = function() {
  if (player_Turn) {
  player_Disks = black_Disks;
} else {
  player_Disks = white_Disks;
}
removeCellonclick();
resetBorders();
}

Testing2 = function() {};

Testing2.prototype.removeCellonclick = function() {
  for (let i = 0; i < cells.length; i++) {
  cells[i].removeAttribute("onclick");
  }
}

Testing3 = function() {};

// -------resets borders to default------
// So if player selects a different Disk the first goes back to normal
Testing3.prototype.resetBorders = function() {
  for (let i = 0; i < player_Disks.length; i++) {
  player_Disks[i].style.border = "1.5px solid black";
}
resetSelectedDiskProperties();
getSelectedDisk();
}


describe("Testing to see if function has been called", function() {
  var getPlayerDisksTest;
  var removeCellonclickTest;
  var resetBordersTest;
 
  beforeEach(function() {
    getPlayerDisksTest = new Testing();
    
    spyOn(getPlayerDisksTest, 'getPlayerDisks');
  });
 
  describe("Seeing if function is called", function(){
     
    //Test for getPlayerDisks call
    it("getPlayerDisks should call the other functions", function() {
      //call any method
      
      getPlayerDisksTest.getPlayerDisks()
      
      //verify it got executed
      expect(getPlayerDisksTest.getPlayerDisks).toHaveBeenCalled();
      
    });
 
  });
});