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

var vowels = "(Ahh)|(Am)|(Rr)|(a((a)|(e)|(i)|(u))?)|(e(e)?)|(i)|(o((a)|(o))?)|(u)"
var consonants = "(B(h)?)|(C(h)?)|(D((H)|(h))?)|(G(h)?)|(J(h)?)|(K)|(L)|(N)|(R)|(Sh)|(T)|(b(h)?)|(c(h)?)|(d(h)?)|(f)|(g)|(h)|(j)|(k)|(l)|(m)|(n((g)|(y))?)|(p(h)?)|(r)|(s(h)?)|(t(h)?)|(v)|(y)|(zh)"
var letter_codes = {
"~a" : "&#3333;",
"~aa" : "&#3334;",
"~i" : "&#3335;",
"~ee" : "&#3336;",
"~u" : "&#3337;",
"~oo" : "&#3338;",
"~Rr" : "&#3339;",
"~e" : "&#3342;",
"~ae" : "&#3343;",
"~ai" : "&#3344;",
"~o" : "&#3346;",
"~oa" : "&#3347;",
"~au" : "&#3348;",
"a" : "",
"aa" : "&#3390;",
"i" : "&#3391;",
"ee" : "&#3392;",
"u" : "&#3393;",
"oo" : "&#3394;",
"Rr" : "&#3395;",
"e" : "&#3398;",
"ae" : "&#3399;",
"ai" : "&#3400;",
"o" : "&#3402;",
"oa" : "&#3403;",
"au" : "&#3404;",
"k" : "&#3349;",
"K" : "&#3350;",
"g" : "&#3351;",
"G" : "&#3352;",
"Gh" : "&#3352;",
"ng" : "&#3353;",
"c" : "&#3354;",
"ch" : "&#3354;",
"C" : "&#3355;",
"Ch" : "&#3355;",
"j" : "&#3356;",
"J" : "&#3357;",
"Jh" : "&#3357;",
"ny" : "&#3358;",
"t" : "&#3359;",
"T" : "&#3360;",
"d" : "&#3361;",
"D" : "&#3362;",
"N" : "&#3363;",
"th" : "&#3364;",
"dh" : "&#3365;",
"Dh" : "&#3366;",
"DH" : "&#3367;",
"n" : "&#3368;",
"p" : "&#3370;",
"f" : "&#3371;",
"ph" : "&#3371;",
"b" : "&#3372;",
"bh" : "&#3372;",
"B" : "&#3373;",
"Bh" : "&#3373;",
"m" : "&#3374;",
"y" : "&#3375;",
"r" : "&#3376;",
"R" : "&#3377;",
"l" : "&#3378;",
"L" : "&#3379;",
"zh" : "&#3380;",
"v" : "&#3381;",
"sh" : "&#3382;",
"Sh" : "&#3383;",
"s" : "&#3384;",
"h" : "&#3385;",
"Am" : "&#3330;",
"Ahh" : "&#3331;",
"~Am" : "&#3330;",
"~Ahh" : "&#3331;",
"*" : "&#3405;"
}
