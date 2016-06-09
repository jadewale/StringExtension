'use strict';
String.prototype.hasVowels = function () {
  return /[aeiou]/gi.test(this);
};

String.prototype.toUpper = function () {
  return validData(this) ? this.replace(/[a-z]/g, upperCase) : '';
};

String.prototype.toLower = function () {
  return validData(this) ? this.replace(/([A-Z])/g, lowerCase) : '';
};

String.prototype.ucFirst = function () {
  return validData(this) ? this.toUpper()[0].concat(trim(this).toLower()) : '';
};

String.prototype.isQuestion = function () {
  return validData(this) ? /([?])/.test(this) : false;
};

String.prototype.words = function () {
  return validData(this) ? this.split(/\W+/g)
    .filter(function(word) {return word !=='';}) : [];
};

String.prototype.wordCount = function () {
  return validData(this) ? this.words().length : 0;
};

String.prototype.toCurrency = function () {
   return parseFloat(this.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
};

function lowerCase(word) {
  return String.fromCharCode(word.charCodeAt() + 32);
}

function upperCase(word) {
  return String.fromCharCode(word.charCodeAt() - 32);
}

function trim(words){
  return words.substring(1);
}

function validData(word){
  if(word){
    return true;
  }
}
