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

var vowels = "(An)|(a((a)|(e)|(i)|(u))?)|(e(e)?)|(i)|(o((a)|(o))?)|(u)"
var consonants = "(B(h)?)|(Ch)|(D(h)?)|(G(h)?)|(Kh)|(L)|(N)|(R)|(Sh)|(T(h)?)|(b(h)?)|(ch)|(d(h)?)|(f)|(g(h)?)|(h)|(j(h)?)|(k(h)?)|(l)|(m)|(n((G)|(y))?)|(p(h)?)|(q)|(r)|(s(h)?)|(t(h)?)|(v)|(y)|(z)"
var letter_codes = {
"~a" : "&#2565;",
"~aa" : "&#2566;",
"~i" : "&#2567;",
"~ee" : "&#2568;",
"~u" : "&#2569;",
"~oo" : "&#2570;",
"~e" : "&#2575;",
"~ae" : "&#2575;",
"~ai" : "&#2576;",
"~oa" : "&#2579;",
"~o" : "&#2579;",
"~au" : "&#2580;",
"a" : "",
"aa" : "&#2622;",
"i" : "&#2623;",
"ee" : "&#2624;",
"u" : "&#2625;",
"oo" : "&#2626;",
"e" : "&#2631;",
"ae" : "&#2631;",
"ai" : "&#2632;",
"oa" : "&#2635;",
"o" : "&#2635;",
"au" : "&#2636;",
"k" : "&#2581;",
"kh" : "&#2582;",
"g" : "&#2583;",
"gh" : "&#2584;",
"nG" : "&#2585;",
"ch" : "&#2586;",
"Ch" : "&#2587;",
"j" : "&#2588;",
"jh" : "&#2589;",
"ny" : "&#2590;",
"t" : "&#2591;",
"T" : "&#2592;",
"d" : "&#2593;",
"D" : "&#2594;",
"N" : "&#2595;",
"th" : "&#2596;",
"Th" : "&#2597;",
"dh" : "&#2598;",
"Dh" : "&#2599;",
"n" : "&#2600;",
"p" : "&#2602;",
"ph" : "&#2603;",
"b" : "&#2604;",
"bh" : "&#2605;",
"B" : "&#2605;",
"Bh" : "&#2605;",
"m" : "&#2606;",
"y" : "&#2607;",
"r" : "&#2608;",
"l" : "&#2610;",
"L" : "&#2611;",
"v" : "&#2613;",
"sh" : "&#2614;",
"Sh" : "&#2614;",
"s" : "&#2616;",
"h" : "&#2617;",
"q" : "&#2649;",
"Kh" : "&#2649;",
"Gh" : "&#2650;",
"G" : "&#2650;",
"z" : "&#2651;",
"R" : "&#2652;",
"f" : "&#2654;",
"An" : "&#2562;",
"~An" : "&#2562;",
"*" : "&#2637;"
}
