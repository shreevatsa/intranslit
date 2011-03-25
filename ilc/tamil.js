// This file is part of Indian Language Converter

// Indian Language Converter is free software; you can redistribute it
// and/or modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2 of
// the License, or (at your option) any later version.

// Copyright (C) 2005, 2006 Vijay Lakshminarayanan <liyer.vijay@gmail.com>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License as
// published by the Free Software Foundation; either version 2 of the
// License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301, USA.

var vowels = "(A(hh)?)|(E)|(H)|(I)|(O)|(U)|(a((a)|(e)|(i)|(u))?)|(e(e)?)|(i)|(o((a)|(o))?)|(u)"
var consonants = "(L)|(N)|(R)|(b(h)?)|(c(h)?)|(d(h)?)|(f)|(g)|(h)|(j)|(k(h)?)|(l)|(m)|(n((G)|(N)|(Y))?)|(p)|(r)|(s(h)?)|(t(h)?)|(v)|(w)|(y)|(z(h)?)"
var letter_codes = {
"~a" : "&#2949;",
"~aa" : "&#2950;",
"~A" : "&#2950;",
"~i" : "&#2951;",
"~ee" : "&#2952;",
"~I" : "&#2952;",
"~u" : "&#2953;",
"~oo" : "&#2954;",
"~U" : "&#2954;",
"~e" : "&#2958;",
"~ae" : "&#2959;",
"~E" : "&#2959;",
"~ai" : "&#2960;",
"~au" : "&#2964;",
"~o" : "&#2962;",
"~oa" : "&#2963;",
"~O" : "&#2963;",
"a" : "",
"aa" : "&#3006;",
"A" : "&#3006;",
"ae" : "&#3015;",
"E" : "&#3015;",
"ai" : "&#3016;",
"au" : "&#3020;",
"e" : "&#3014;",
"ee" : "&#3008;",
"I" : "&#3008;",
"i" : "&#3007;",
"o" : "&#3018;",
"oo" : "&#3010;",
"U" : "&#3010;",
"oa" : "&#3019;",
"O" : "&#3019;",
"u" : "&#3009;",
"k" : "&#2965;",
"kh" : "&#2965;",
"g" : "&#2965;",
"c" : "&#2965;",
"nG" : "&#2969;",
"ch" : "&#2970;",
"j" : "&#2972;",
"nY" : "&#2974;",
"d" : "&#2975;",
"t" : "&#2975;",
"nN" : "&#2979;",
"dh" : "&#2980;",
"th" : "&#2980;",
"N" : "&#2984;",
"n" : "&#2985;",
"b" : "&#2986;",
"bh" : "&#2986;",
"p" : "&#2986;",
"m" : "&#2990;",
"y" : "&#2991;",
"r" : "&#2992;",
"R" : "&#2993;",
"l" : "&#2994;",
"L" : "&#2995;",
"z" : "&#2996;",
"zh" : "&#2996;",
"v" : "&#2997;",
"w" : "&#2997;",
"sh" : "&#2999;",
"s" : "&#3000;",
"h" : "&#3001;",
"f" : "&#2947;&#2986;",
"H" : "&#2947;",
"Ahh" : "&#2947;",
"~H" : "&#2947;",
"~Ahh" : "&#2947;",
"*" : "&#3021;"
}
