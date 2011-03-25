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

var vowels = "(A(O)?)|(H)|(I)|(Ll(L)?)|(M)|(Rr(R)?)|(U)|(a((a)|(i)|(u))?)|(e(e)?)|(i)|(o(o)?)|(u)"
var consonants = "(B(h)?)|(Ch)|(D(h)?)|(G)|(N)|(Sh)|(T(h)?)|(Y)|(b(h)?)|(ch)|(d(h)?)|(g(h)?)|(h)|(j(h)?)|(k(h)?)|(l)|(m)|(n(Y)?)|(p(h)?)|(r((R(r)?))?)|(s(h)?)|(t(h)?)|(v)|(y)"
var letter_codes = {
"~a" : "&#2437;",
"~aa" : "&#2438;",
"~A" : "&#2438;",
"~i" : "&#2439;",
"~ee" : "&#2440;",
"~I" : "&#2440;",
"~u" : "&#2441;",
"~oo" : "&#2442;",
"~U" : "&#2442;",
"~Rr" : "&#2443;",
"~RrR" : "&#2528;",
"~Ll" : "&#2444;",
"~LlL" : "&#2529;",
"~e" : "&#2447;",
"~ai" : "&#2448;",
"~o" : "&#2451;",
"~au" : "&#2452;",
"a" : "",
"aa" : "&#2494;",
"A" : "&#2494;",
"i" : "&#2495;",
"ee" : "&#2496;",
"I" : "&#2496;",
"u" : "&#2497;",
"oo" : "&#2498;",
"U" : "&#2498;",
"Rr" : "&#2499;",
"RrR" : "&#2500;",
"Ll" : "&#2444;",
"LlL" : "&#2529;",
"e" : "&#2447;",
"ai" : "&#2448;",
"o" : "&#2451;",
"au" : "&#2452;",
"k" : "&#2453;",
"kh" : "&#2454;",
"g" : "&#2455;",
"gh" : "&#2456;",
"G" : "&#2457;",
"ch" : "&#2458;",
"Ch" : "&#2459;",
"j" : "&#2460;",
"jh" : "&#2461;",
"nY" : "&#2462;",
"t" : "&#2463;",
"T" : "&#2464;",
"d" : "&#2465;",
"D" : "&#2466;",
"N" : "&#2467;",
"th" : "&#2468;",
"Th" : "&#2469;",
"dh" : "&#2470;",
"Dh" : "&#2471;",
"n" : "&#2472;",
"p" : "&#2474;",
"ph" : "&#2475;",
"b" : "&#2476;",
"v" : "&#2476;",
"bh" : "&#2477;",
"B" : "&#2477;",
"Bh" : "&#2477;",
"m" : "&#2478;",
"y" : "&#2479;",
"r" : "&#2480;",
"l" : "&#2482;",
"sh" : "&#2486;",
"Sh" : "&#2487;",
"s" : "&#2488;",
"h" : "&#2489;",
"rR" : "&#2524;",
"rRr" : "&#2525;",
"Y" : "&#2527;",
"AO" : "&#2433;",
"M" : "&#2434;",
"H" : "&#2435;",
"~AO" : "&#2433;",
"~M" : "&#2434;",
"~H" : "&#2435;",
"*" : "&#2509;"
}
