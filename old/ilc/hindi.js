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

var vowels = "(A((O(M)?)|(o))?)|(En)|(H)|(I)|(M)|(TR)|(U)|(\\:)|(\\|(\\|)?)|(a((A)|(a)|(i)|(u))?)|(e(e)?)|(i)|(o(o)?)|(tR)|(u)"
var consonants = "(B(h)?)|(Ch)|(D((dD)|(h))?)|(G)|(L(lL)?)|(N(nN)?)|(R(rR)?)|(Sh)|(T(h)?)|(Y)|(b(h)?)|(ch)|(d(h)?)|(f)|(g((G)|(h))?)|(h)|(j(h)?)|(k(h)?)|(l)|(m)|(n(Y)?)|(p(h)?)|(q(h)?)|(r)|(s(h)?)|(t(h)?)|(v)|(y)|(z)"
var letter_codes = {
"~a" : "&#2309;",
"~aa" : "&#2310;",
"~A" : "&#2310;",
"~i" : "&#2311;",
"~e" : "&#2319;",
"~ee" : "&#2312;",
"~I" : "&#2312;",
"~u" : "&#2313;",
"~oo" : "&#2314;",
"~U" : "&#2314;",
"~tR" : "&#2315;",
"~En" : "&#2317;",
"~o" : "&#2323;",
"~ai" : "&#2320;",
"~Ao" : "&#2321;",
"~au" : "&#2324;",
"~TR" : "&#2400;",
"a" : "",
"aa" : "&#2366;",
"A" : "&#2366;",
"A" : "&#2366;",
"i" : "&#2367;",
"e" : "&#2375;",
"ee" : "&#2368;",
"I" : "&#2368;",
"u" : "&#2369;",
"oo" : "&#2370;",
"U" : "&#2370;",
"tR" : "&#2371;",
"En" : "&#2373;",
"o" : "&#2379;",
"ai" : "&#2376;",
"Ao" : "&#2377;",
"au" : "&#2380;",
"TR" : "&#2372;",
"k" : "&#2325;",
"kh" : "&#2326;",
"g" : "&#2327;",
"gh" : "&#2328;",
"G" : "&#2329;",
"ch" : "&#2330;",
"Ch" : "&#2331;",
"j" : "&#2332;",
"jh" : "&#2333;",
"nY" : "&#2334;",
"t" : "&#2335;",
"T" : "&#2336;",
"d" : "&#2337;",
"D" : "&#2338;",
"N" : "&#2339;",
"th" : "&#2340;",
"Th" : "&#2341;",
"dh" : "&#2342;",
"Dh" : "&#2343;",
"n" : "&#2344;",
"NnN" : "&#2345;",
"p" : "&#2346;",
"ph" : "&#2347;",
"b" : "&#2348;",
"bh" : "&#2349;",
"B" : "&#2349;",
"Bh" : "&#2349;",
"m" : "&#2350;",
"y" : "&#2351;",
"r" : "&#2352;",
"R" : "&#2353;",
"l" : "&#2354;",
"L" : "&#2355;",
"LlL" : "&#2356;",
"v" : "&#2357;",
"sh" : "&#2358;",
"Sh" : "&#2359;",
"s" : "&#2360;",
"h" : "&#2361;",
"q" : "&#2392;",
"qh" : "&#2393;",
"gG" : "&#2394;",
"z" : "&#2395;",
"DdD" : "&#2396;",
"RrR" : "&#2397;",
"f" : "&#2398;",
"Y" : "&#2399;",
"AO" : "&#2305;",
"M" : "&#2306;",
"H" : "&#2307;",
":" : "&#2307;",
"aA" : "&#2365;",
"|" : "&#2404;",
"||" : "&#2405;",
"AOM" : "&#2384;",
"~AO" : "&#2305;",
"~M" : "&#2306;",
"~H" : "&#2307;",
"~:" : "&#2307;",
"~aA" : "&#2365;",
"~|" : "&#2404;",
"~||" : "&#2405;",
"~AOM" : "&#2384;",
"*" : "&#2381;"
}
