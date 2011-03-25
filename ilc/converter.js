// -*- mode: java; -*-

// Indian Language Converter - transliterates from Roman scripts to
// Indic scripts.

// Copyright (C) 2005, 2006 Vijay Lakshminarayanan <liyer.vijay@gmail.com>

// Indian Language Converter is free software; you can redistribute it
// and/or modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2 of
// the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301, USA.

// 	$Id: converter.js,v 1.1.1.1 2006-05-26 11:49:07 vijay Exp $	
// 	Author: Vijay Lakshminarayanan	
// 	$Date: 2006-05-26 11:49:07 $	

function split_word(word)
{
  var syllables = new Array(0);
  var vowel_start_p = true;
  while (word.length) {
    re = new RegExp(vowels);
    var index = word.search(vowels);
    if (index == 0) {  //the vowel's at the start of word
      var matched = re.exec(word)[0]; //what is it?
      if (vowel_start_p) {
	syllables.push(("~"+matched)); //one more to the syllables
      } else {
	syllables.push(matched);
      }
      vowel_start_p = true;
      word = word.substring(matched.length);
    } else {
      re = new RegExp(consonants);
      var index = word.search(consonants);
      if (index == 0) {
	var matched = re.exec(word)[0];
	syllables.push(matched);
	vowel_start_p = false;
	word = word.substring(matched.length);

	//look ahead for virama setting
	var next = word.search(vowels);
	if (next != 0 || word.length == 0)
	  syllables.push('*');
      } else {
	syllables.push(word.charAt(0));
	word = word.substring(1);
      }
    }
  }
  return syllables;
}

function match_code(syllable_mcc)
{
  var matched = letter_codes[syllable_mcc];

  if (matched != null) return matched;
  return syllable_mcc;
}

function one_word(word_ow)
{
  if (!word_ow) return "";
  var syllables_ow = split_word(word_ow);
  var letters_ow = new Array(0);

  for (var i_ow = 0; i_ow < syllables_ow.length; i_ow++) {
    letters_ow.push(match_code(syllables_ow[i_ow]));
  }
  return letters_ow.join("");
}

function many_words(sentence)
{
  var regex = "((" + vowels + ")|(" + consonants + "))+";
  var words = new Array(0);
  while (sentence.length >= 1) {
    re = new RegExp("^``" + regex);
    var match = re.exec(sentence);
    if (match != null) {
      match = match[0];
      words.push("`");
      words.push(one_word(match.substring(2)));
      sentence = sentence.substring(match.length);
    } else {
      re = new RegExp("^`" + regex);
      match = re.exec(sentence);
      if (match != null) {
	match = match[0];
	words.push(match.substring(1));
	sentence = sentence.substring(match.length);
      } else {
	re = new RegExp("^" + regex);
	match = re.exec(sentence);
	if (match != null) {
	  match = match[0];
	  words.push(one_word(match));
	  sentence = sentence.substring(match.length);
	} else {
	  words.push(sentence.charAt(0));
	  sentence = sentence.substring(1);
	}
      }
    }
  }
  return words.join("");
}

function print_many_words(index_pmw)
{
  var text_pmw = many_words(document.convarea.many_words_text.value);

  var ans = "";
  while (text_pmw.length) {
    var unicode_chars = /&#[0-9]+;/;
    re = unicode_chars;
    var matche = re.exec(text_pmw);
    if (matche != null) {
      matche = matche[0];
      search = text_pmw.search(unicode_chars);
      ans += text_pmw.substring(0, search);
      ans += String.fromCharCode(matche.match(/[0-9]+/));
      text_pmw = text_pmw.substring(search + matche.length);
    } else {
      ans += text_pmw.substring(0);
      text_pmw = "";
    }
  }

  document.convarea.converted_text.value = ans;

  var html_txt = "";
  for (i=0; i<ans.length; i++) {
    var unicode_character = ans.charCodeAt(i);
    switch (unicode_character) {
    case 32:
      html_txt += " ";
      break;
    case 10:
    case 13:
      html_txt += "<br/>\n";
      break;
    default:
      html_txt += "&#" + unicode_character + ";";
    }
  }

  document.convarea.html_text.value = html_txt;
}
