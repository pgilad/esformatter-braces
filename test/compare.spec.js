//jshint node:true, eqnull:true
/*global describe, it, before*/
'use strict';
var fs = require('fs');
var path = require('path');
var esformatter = require('esformatter');
var braces = require('../');
var expect = require('chai').expect;

var readFile = function (folder, name) {
    var filePath = path.join('./test', folder, name);
    return fs.readFileSync(filePath).toString();
};

describe('esformatter-braces', function () {
    before(function () {
        esformatter.register(braces);
    });

    describe('conditionals', function () {
        it('should test an if statement', function () {
            var str = 'if (a) b();';
            var output = esformatter.format(str);
            expect(output).to.be.eql('if (a) {\n  b();\n}');
        });

        it('should test an if / else conditional', function () {
            var str = 'if (a) b(); else c();';
            var output = esformatter.format(str);
            expect(output).to.be.eql('if (a) {\n  b();\n} else {\n  c();\n}');
        });

        it('should test an if / else if / else conditionals', function () {
            var str = 'if (a) b(); else if (w) c(); else y();';
            var output = esformatter.format(str);
            expect(output).to.be.eql('if (a) {\n  b();\n} else if (w) {\n  c();\n} else {\n  y();\n}');
        });
    });

    describe('loops', function () {
        it('should test a basic while loop', function () {
            var str = 'while (true) a();';
            var output = esformatter.format(str);
            expect(output).to.be.eql('while (true) {\n  a();\n}');
        });

        it('should test a basic for loop', function () {
            var str = 'for (var i = 0; i < 10; i++) a();';
            var output = esformatter.format(str);
            expect(output).to.be.eql('for (var i = 0; i < 10; i++) {\n  a();\n}');
        });

        it('should test a do while loop', function () {
            var str = 'do a(); while (true);';
            var output = esformatter.format(str);
            expect(output).to.be.eql('do {\n  a();\n} while (true);');
        });
    });

    describe('all around testing', function () {
        it('should prove the example in readme works', function () {
            var input = readFile('fixtures', 'basic.js');
            var actual = esformatter.format(input);
            var expected = readFile('expected', 'basic.js');
            expect(actual).to.be.eql(expected);
        });
    });
});
