[![Thumbnail]()

[![GitHub Issue Count](https://img.shields.io/github/issues-raw/ArumLang/Arum?style=flat-square)](https://github.com/JERScript/JERscript/issues)
[![GitHub PR Count](https://img.shields.io/github/issues-pr/ArumLang/Arum?style=flat-square)](https://github.com/JERScript/JERscript/pulls)
[![Code License](https://img.shields.io/github/license/ArumLang/Arum?style=flat-square)](https://github.com/JERScript/JERscript/blob/master/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/ArumLang/Arum?style=flat-square)](https://github.com/JERScript/JERscript/stargazers)
[![Discord](https://img.shields.io/discord/942973329386655805?label=discord&logo=discord&logoColor=%23ffffff&style=flat-square)](https://discord.gg/gCGmraBRQ8)
# Arum
A multiuse scripting language made in Typescript with syntax inspired by C while being beginner friendly

## Get started
Get started on ArumLang (todo: fix this b4 going public)

## Chat
Hangout with us in our [discord server](https://discord.gg/gCGmraBRQ8)!

## Usage/Examples
```
use: "std/io";

modu Kerbal {
	name: string,
	age: i16,
	occupation: string
}

main = () =>{
	println("Hello world!");

	Kerbal jul = new Kerbal("Jul Specifically", 14, "Engineer");

	if (jul.age < 18) {
		println(jul.name, "is not old enough!")
	}else{
		println(jul.name, "is old enough!")
	}
}

main();
```