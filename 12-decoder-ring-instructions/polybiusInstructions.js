/* 

    1	2	3	4	5
1	A	B	C	D	E
2	F	G	H	I/J	K
3	L	M	N	O	P
4	Q	R	S	T	U
5	V	W	X	Y	Z



encode-> polybius("ok then", true) -> "4352 44325133"
encode-> polybius("i am", true) -> "42 1123"
decode-> polybius("4352 44325133", false) -> ""


let lookupEncode = {
    'a': '11',
    'b': '21'
    ...
    ..
    ..
}



Encode -> turn letter/word/sentence to number string
"thinkful" -> "4432423352125413"


Decode -> turn number string to letter/word/sentence string

You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.

When encoding, your output should still be a string.

When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.

Spaces should be maintained throughout.

Capital letters can be ignored.

The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.


polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
polybius("44324233521254134", false); //> false
*/


function polybius(input="", encode=true){

}


