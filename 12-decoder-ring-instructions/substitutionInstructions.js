/* 
input refers to the inputted text to be encoded or decoded.

alphabet refers to substitution alphabet.

encode refers to whether you should encode or decode the message. By default it is set to true.

The input could include spaces and letters as well as special characters such as #, $, *, etc.

Spaces should be maintained throughout.

Capital letters can be ignored.

The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.


All the characters in the alphabet parameter must be unique. Otherwise, it should return false.


substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'

substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'
substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false




~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
ENCODE-> look for letters from input word and find their location in the actual alphabet, then connect that letter from actual alphabet to corresponding position in input alphabet

substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'


thinkful -> input word
abcdefghijklmnopqrstuvwxyz -> actual alphabet
xoyqmcgrukswaflnthdjpzibev -> input alphabet

result= "jrufscpw"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
DECODE (when encode === false)


substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'
 

jrufscpw -> input word

xoyqmcgrukswaflnthdjpzibev -> input alphabet
abcdefghijklmnopqrstuvwxyz -> actual alphabet

result = "thinkful"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


*/


function substitution(input="", alphabet="", encode=true){

}
