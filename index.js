//jshint node:true, eqnull:true
'use strict';
var wrapWithBraces = function(node) {
    var newToken = {
        type: 'BlockStatement' // can be anything (not used internally)
    };
    newToken.value = '{ ' + node.toString() + ' }';
    // update linked list references
    if (node.startToken.prev) {
        node.startToken.prev.next = newToken;
        newToken.prev = node.startToken.prev;
    }
    if (node.endToken.next) {
        node.endToken.next.prev = newToken;
        newToken.next = node.endToken.next;
    }
    node.startToken = node.endToken = newToken;
};

var checkConditionals = function(node) {
    //replace regular conditionals
    if (node.consequent.type === 'ExpressionStatement') {
        wrapWithBraces(node.consequent);
    }
    //replace else alternate conditional
    if (node.alternate && node.alternate.type === 'ExpressionStatement') {
        wrapWithBraces(node.alternate);
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
            wrapWithBraces(node.body);
        }
    }
};
