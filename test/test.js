test( "Array.prototype", function(){
    notDeepEqual( Z.fn, [], "Don't fuck with JavaScript Array.prototype" );
});
test( "String.prototype", function(){
    notDeepEqual( Z.fn, "", "Don't fuck with JavaScript String.prototype" );
});
test( "f1 created a proper Array", function(){

    var object = $('html');
    deepEqual( Object.getPrototypeOf(object), Z.fn );

    ok( Array.isArray( object ), "Non-array returned on selector" );

    ok( Array.isArray( $() ), "Non-array returned on empty set" );
});

test( "Event bound", function(){
    expect(2);
    var fuck = false;
    function handler(){
        fuck = true;
    }
    //Test binding
    var div = $("div.test");
    div.on('click',handler);
    div[0].dispatchEvent(new Event('click'));
    equal(fuck,true);

    //Test unbinding
    fuck = false;
    div.off('click',handler);
    div[0].dispatchEvent(new Event('click'));
    equal(fuck,false);
});

test("Adding and Removing Classes",function(){
    expect(5);
    var div = $("div.test");
    equal(div[0].classList,"test");

    div.class("test2");
    equal(div[0].classList,"test test2");

    div.class("test2");
    equal(div[0].classList,"test");

    div.class("test2 test3");
    equal(div[0].classList,"test test2 test3");

    div.class("test2 test3");
    equal(div[0].classList,"test");

});
