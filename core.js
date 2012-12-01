var Z = Object.create([].__proto__),
    $ = function(selector) {
        return Z.slice.apply(document.querySelectorAll(selector));
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

Z.extend(Z.fn,{
    on: function(type, fn) {
        return this.forEach(function() {
            this.addEventListener(type, fn);
        });
    },
    off: function(type, fn) {
        return this.forEach(function() {
            this.removeEventListener(type, fn);
        });
    }
});
