'use strict';

var assert = require('assert');

require('../src/locale-compare');

describe('default', function () {
  it('should order b after a', function () {
    assert('b'.localeCompare('a') === 1);
  });
});

describe('da-DK', function () {
  it('should order ø after p', function () {
    assert('ø'.localeCompare('p', 'da-DK') === 1);
  });

  it('should order deep strings', function () {
    assert('bbbbc'.localeCompare('bbbba', 'da-DK') === 1);
  });

  it('should order an array', function () {
    var unordered = ['ø', 'å', 'z', 'æ'];
    var ordered = ['z', 'æ', 'ø', 'å'];
    assert.deepStrictEqual(unordered.sort(function (a, b) {
      return a.localeCompare(b, 'da-DK');
    }), ordered);
  });
});

describe('tr-TR', function () {
  it('should order ş after s', function () {
    assert('ş'.localeCompare('s', 'tr-TR') === 1);
  });

  it('should order deep strings', function () {
    assert('kokoreç'.localeCompare('kokorecci', 'tr-TR') === 1);
  });

  it('should order an array', function () {
    var unordered = ['ç', 'c', 'ğ', 'g'];
    var ordered = ['c', 'ç', 'g', 'ğ'];
    assert.deepStrictEqual(unordered.sort(function (a, b) {
      return a.localeCompare(b, 'tr-TR');
    }), ordered);
  });
});
