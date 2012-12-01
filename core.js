/*global Event:true */

var Z = Object.create(Object.create([].__proto__));

//Factory
window.$ = function(selector) {
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

Z.fn = Z.__proto__,

Z.extend = function(obj, props) {
    if (!props) {
        props = obj;
        obj = Z;
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
    }
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
