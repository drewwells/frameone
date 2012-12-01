var Z = Object.create(Object.create([].__proto__)),
    $ = function(selector) {
        var arr = Z.slice.apply(document.querySelectorAll(selector));
        arr.__proto__ = Z.fn;
        return arr;
    };


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
Z.slice = Array.prototype.slice;

Z.extend(Z.fn,{
    on: function(type, fn) {
        this.forEach(function( n ){
            n.addEventListener(type, fn);
        });
        return this;
    },
    off: function(type, fn) {
        this.forEach(function( n ) {
            n.removeEventListener(type, fn);
        });
        return this;
    },
    trigger: function(type){

    }
});
