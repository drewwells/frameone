test( "Array.prototype", function(){
    notDeepEqual( Z.fn, [], "Don't fuck with JavaScript Array.prototype" );
});
test( "String.prototype", function(){
    notDeepEqual( Z.fn, "", "Don't fuck with JavaScript String.prototype" );
});
test( "Event bound", function(){
    expect(2);
    var fuck = false;
    function handler(){
        fuck = true;
    }
    var div = $("div.test").on('click',handler);
    div[0].dispatchEvent(new Event('click'));
    equal(fuck,true);
    fuck = false;
    div.off('click',handler);
    div[0].dispatchEvent(new Event('click'));
    equal(fuck,false);
});
