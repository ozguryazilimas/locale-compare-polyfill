# locale-compare-shim

This project is a fork of [locale-compare-polyfill](https://github.com/jeppeburchardt/locale-compare-polyfill) with turkish support which is not maintained anymore.

Polyfill for String.localeCompare

localeCompare is not supported in Safari and most mobile browsers. Only 2.345 bytes.

## locales

Currently only supports Turkish, Danish, Norwegian, Swedish and Finish, but more locales can easily be generated (take a look at src/generator.js). 

## install

```
npm install locale-compare-shim
npm test
```

## usage

```
'ø'.localeCompare('p') // -1
'ø'.localeCompare('p', 'da') // 1 a positive value: in danish, ø sorts after p
```

## syntax

`referenceStr.localeCompare(compareString[, locales[, options]])`

### compareString

The string against which the referring string is compared

### locales

A string with a BCP 47 language tag. Currently only supports `tr`, `da`, `nb`, `se` and `fi`. 

### options

No polyfill support yet.
