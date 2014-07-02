//jshint node:true, eqnull:true
'use strict';

var tk = require('rocambole-token');

var wrapWithBraces = function(node, prop) {
    var old = node[prop];
    var block = {
        type: 'BlockStatement',
        parent: old.parent,
        root: old.root,
        body: [ old ],
        startToken: tk.before(old.startToken, {
            type: 'Punctuator',
            value: '{'
        }),
        endToken: tk.after(old.endToken, {
            type: 'Punctuator',
            value: '}'
        })
    };
    old.parent = block;
    node[prop] = block;
};

var checkConditionals = function(node) {
    //replace regular conditionals
    if (node.consequent.type === 'ExpressionStatement') {
        wrapWithBraces(node, 'consequent');
    }
    //replace else alternate conditional
    if (node.alternate && node.alternate.type === 'ExpressionStatement') {
        wrapWithBraces(node, 'alternate');
    }
};

exports.nodeBefore = function(node) {
    //handle conditionals
    if (node.type === 'IfStatement') {
        checkConditionals(node);
    }
    //handle loops
    if (node.type === 'WhileStatement' || node.type === 'DoWhileStatement' || node.type === 'ForStatement') {
        if (node.body.type === 'ExpressionStatement') {
            wrapWithBraces(node, 'body');
        }
    }
};
