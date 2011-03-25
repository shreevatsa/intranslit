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

var vowels = "(A(O)?)|(E)|(H)|(I)|(M)|(O)|(TR)|(U)|(a((a)|(e)|(i)|(u))?)|(e(e)?)|(i)|(o((a)|(o))?)|(tR)|(u)"
var consonants = "(B(h)?)|(Ch)|(D(h)?)|(G)|(J(h)?)|(K(h)?)|(L)|(N)|(R)|(Sh)|(T(h)?)|(b(h)?)|(ch)|(d(h)?)|(g(h)?)|(h)|(j(h)?)|(k(h)?)|(l)|(m)|(n(Y)?)|(p(h)?)|(r)|(s(h)?)|(t(h)?)|(v)|(y)"
var letter_codes = {
"~a" : "&#3077;",
"~aa" : "&#3078;",
"~A" : "&#3078;",
"~i" : "&#3079;",
"~ee" : "&#3080;",
"~I" : "&#3080;",
"~u" : "&#3081;",
"~oo" : "&#3082;",
"~U" : "&#3082;",
"~e" : "&#3086;",
"~ae" : "&#3087;",
"~E" : "&#3087;",
"~ai" : "&#3088;",
"~o" : "&#3090;",
"~oa" : "&#3091;",
"~O" : "&#3091;",
"~au" : "&#3092;",
"~tR" : "&#3083;",
"~TR" : "&#3168;",
"a" : "",
"aa" : "&#3134;",
"A" : "&#3134;",
"i" : "&#3135;",
"ee" : "&#3136;",
"I" : "&#3136;",
"u" : "&#3137;",
"oo" : "&#3138;",
"U" : "&#3138;",
"e" : "&#3142;",
"ae" : "&#3143;",
"E" : "&#3143;",
"ai" : "&#3144;",
"o" : "&#3146;",
"oa" : "&#3147;",
"O" : "&#3147;",
"au" : "&#3148;",
"tR" : "&#3139;",
"TR" : "&#3140;",
"k" : "&#3093;",
"K" : "&#3093;",
"kh" : "&#3094;",
"Kh" : "&#3094;",
"g" : "&#3095;",
"gh" : "&#3096;",
"G" : "&#3097;",
"ch" : "&#3098;",
"Ch" : "&#3099;",
"j" : "&#3100;",
"jh" : "&#3101;",
"J" : "&#3101;",
"Jh" : "&#3101;",
"nY" : "&#3102;",
"t" : "&#3103;",
"T" : "&#3104;",
"d" : "&#3105;",
"D" : "&#3106;",
"N" : "&#3107;",
"th" : "&#3108;",
"Th" : "&#3109;",
"dh" : "&#3110;",
"Dh" : "&#3111;",
"n" : "&#3112;",
"p" : "&#3114;",
"ph" : "&#3115;",
"b" : "&#3116;",
"B" : "&#3117;",
"bh" : "&#3117;",
"Bh" : "&#3117;",
"m" : "&#3118;",
"y" : "&#3119;",
"r" : "&#3120;",
"R" : "&#3121;",
"l" : "&#3122;",
"L" : "&#3123;",
"v" : "&#3125;",
"sh" : "&#3126;",
"Sh" : "&#3127;",
"s" : "&#3128;",
"h" : "&#3129;",
"AO" : "&#3073;",
"M" : "&#3074;",
"H" : "&#3075;",
"~AO" : "&#3073;",
"~M" : "&#3074;",
"~H" : "&#3075;",
"*" : "&#3149;"
}
