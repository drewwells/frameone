/*global Event:true */
(function(window){

var Z = Object.create(Object.create([].__proto__));

//Factory
var $ = window.$ = Z.$ = function(selector) {
    return Z.slice(document.querySelectorAll(selector));
};

//Shortcuts
var A = Array,
    S = String,
    O = Object,
    AP = [],
    SP = "";
//Remove any that don't get used in the end
A,S,O,AP,SP;

$.fn = Z.fn = Z.__proto__,

//Really this is a mixin, but who's keep score?
Z.extend = function(obj, props) {

    if (!props) {
        props = obj;
        obj = $;
    }

    for (var key in props) {
        obj[key] = props[key];
    }
};

Z.extend(Z,{
    slice: function( arrayLike ){
        var newArray = AP.slice.call(arrayLike);
        newArray.__proto__ = Z.fn;
        return newArray;
    },
    empty: function(){}
});

Z.extend(Z.fn,{
    on: function(type, fn) {
        this.forEach(function( ele ){
            ele.addEventListener(type, fn);
        });
        //return this;
    },
    off: function(type, fn) {
        this.forEach(function( ele ) {
            ele.removeEventListener(type, fn);
        });
        //return this;
    },
    trigger: function(type){
        this.forEach(function( ele ){
            ele.dispatchEvent( new Event(type) );
        });
        //return this;
    },
    'class': function( list ){
        list = list.split(" ");
        this.forEach(function( n ){
            list.forEach(function( l ){
                n.classList.toggle( l );
            });
        });
        //return this;
    }
});

/*{
    type: '',
    url: '',
    data: '',
    complete: '',
    success: ''
}*/
//Ajax
(function(Z){

var id = 0;

var xhr = function(){

    return new window.XMLHttpRequest();
};

var jsonp = function(){

    var cbname = 'jsonp' + ++id,
        script = document.createElement('script');

    var abort = function(){
        document.head.removeChild( script );
        if( window[cbName] ){
            window[cbName] = Z.empty;
        }
    }

}

Z.param = function( obj, ret ){
    var prop;
    if( !ret ){ ret = ""; }

    for( prop in obj){
        if( A.isArray( obj[prop] ) ){
            ret += prop + '[]=' + obj[prop].join('&' + prop + '[]=');
        }
    }
    return ret;
}

Z.ajax = function(){


};

})(Z);

//Copy properties from Z to $
Z.extend($,Z);

})(this);
