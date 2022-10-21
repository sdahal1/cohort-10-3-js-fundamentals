function caesar(input="", shift=0, encode=true){

}

/* 
Encode = true means-> shift the input to the right if shift number is positive. To the left if shift number is negative
Decode=> Encode == false means-> decode-> means shift input to the left if shift is positive. To the right if shift is negative

use the lowercase version of your input

Spaces should be maintained throughout, as should other nonalphabetic symbols.

a b c d e f g h i j k  l  m  n   o   p   q   r   s   t   u   v   w   x   y   z
0 1 2 3 4 5 6 7 8 9 10 11 12 13  14  15  16  17  18  19  20  21  22  23  24  25

"l", 4
"y"-> is at index 24, shift num is 4, so 24+4 = 28. if its over 25, then...

*/




caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false