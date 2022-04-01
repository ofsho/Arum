// Make ESLint happy
// eslint-disable-next-line prefer-const
export let runtime = `
// RUNTIME FUNCTIONS
// DO NOT EDIT PAST THIS POINT
// UNLESS YOU KNOW WHAT YOU ARE DOING
// const mathjs = require('mathjs');
const fs = require('fs');
// BEGIN I/O
function print(args) {
	process.stdout.write(args);
}
function println(args) {
	console.log(args);
}
function length(args) {
    return args.length;
}
function get(x, y) {
    return x[y];
}
// END I/O
// BEGIN ETC 
function cases(x, y, args) {
	switch (args) {
		case '==':
			return x === y;
		case '!=':
			return x !== y;
		case '&&':
			return x && y;
		case '||':
			return x || y;
		case '!':
			return !x;
	}
}
function concat (...args) {
	return args.join("");
}
function self(me) {
	return me;
}
// END ETC FUNCTIONS //
// MATH FUNCTIONS //
function add(one, two) { return one + two }
function sub(one, two) { return one - two }
function mul(one, two) { return one * two }
function div(one, two) { return one / two }
function mod(one, two) { return one % two }
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.random() * (max - min + 1) + min;
}
function floor(floored){
	return Math.floor(floored);
}
function ceil(ceiled){
	return Math.ceil(ceiled);
}
function round(rounded){
	return Math.round(rounded);
}
function pow(i, exponent){
	return Math.pow(i, exponent);
}
function sqrt(i){
	return Math.sqrt(i);
}
function abs(i){
	return Math.abs(i);
}
function sin(i){
	return Math.sin(i);
}
function cos(i){
	return Math.cos(i);
}
function tan(i){
	return Math.tan(i);
}
function asin(i){
	return Math.asin(i);
}
function acos(i){
	return Math.acos(i);
}
function atan(i){
    return Math.atan(i);
}
function atan2(i, j){
    return Math.atan2(i, j);
}
function exp(i){
    return Math.exp(i);
}
function log(i){
    return Math.log(i);
}
function log10(i){
    return Math.log10(i);
}
function max(...args){
    return Math.max(...args);
}
function min(...args){
    return Math.min(...args);
}
// END MATH FUNCTIONS //
// LOGIC FUNCTIONS //
function eq(x, y) {
	return x === y;
}
function gt(x, y) {
    return x > y;
}
function lt(x, y) {
    return x < y;
}
function gte(x, y) {
    return x >= y;
}
function lte(x, y) {
    return x <= y;
}
function neq(x, y) {
    return x !== y;
}
function $if(cond, consequent, alternate) {
	if (cond) {
		return consequent();
	} else {
		return alternate();
	}
}
function repeat(times, func) {
	for (let i = 1; i < times; i++) {
		func();
	}
	return func();
}
function $while(cond, func) {
	$i = 0;
	while (true) {
		$i++;
		if ($i > 1000) {
			$i = 0;
			console.error("Budget Error: looped too many times")
			break;
		}
		func();
	}
	$i = 0;
}
// END LOGIC FUNCTIONS //
// ARRAY FUNCTIONS //
function split(string, delimiter) {
	return string.split(delimiter);
}
function each(array, func) {
	for (let i = 1; i < array.length; i++) {
		func(array[i]);
	}
	return func(array[i]);
}
function getValueFromIndex(array, index) {
	return array[index];
}
function getArrayLength(array) {
	return array.length;
}
function push(array, value) {
	array.push(value);
	return 0;
}
function eject(array, index) {
	if (!index) { array.pop(); } else { array.splice(index, 1); }
	return 0;
}
function findIndex(array, value) {
	return array.indexOf(value);
}
function join(array, delimiter) {
	return array.join(delimiter);
}
function sort(array, func) {
    return array.sort(func);
}
function reverse(array) {
    return array.reverse();
}
function filter(array, func) {
    return array.filter(func);
}
function map(array, func) {
    return array.map(func);
}
function reduce(array, func, initial) {
    return array.reduce(func, initial);
}
function reduceRight(array, func, initial) {
    return array.reduceRight(func, initial);
}
function slice(array, start, end) {
    return array.slice(start, end);
}
function splice(array, start, end) {
    return array.splice(start, end);
}
// END ARRAY FUNCTIONS//
//----END RUNTIME FUNCTIONS----//
`;
