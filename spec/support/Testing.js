describe("On Click", function() {
    var spyEvent;

    it ("should invoke the btnShowMessage click event.", function() {
        spyEvent = spyOnEvent('#btnShowMessage', 'click');
        $('#btnShowMessage').trigger( "click" );
          
        expect('click').toHaveBeenTriggeredOn('#btnShowMessage');
        expect(spyEvent).toHaveBeenTriggered();
      });
    
        
});