var virama = '்';
var implicita = 'அ';
var barematras = {
  'sk' : ['', 'ா', 'ி', 'ீ', 'ு', 'ூ',
          'ெ', 'ே', 'ை',
          'ொ', 'ோ', 'ௌ'];
};

var vowels=['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ',
         'எ', 'ஏ', 'ஐ',
         'ஒ', 'ஓ', 'ஔ'];
var symbols = ['ஂ', 'ஃ'];
var noncons = vowels.length + symbols.length;
var consonants = [
    'க', 'ங',
    'ச', 'ஞ',
    'ட', 'ண',
    'த', 'ந',
    'ப', 'ம',
    'ய', 'ர', 'ல', 'வ',
    'ழ', 'ள', 'ற', 'ன',
    'ஶ', 'ஜ', 'ஷ', 'ஸ', 'ஹ'];

var alphabets = {

  'sk': vowels.concat(symbols).concat(consonants),

  'harvardkyoto':['a', 'A', 'i', 'I', 'u', 'U',
                  'e', 'E', 'ai',
                  'o', 'O', 'au',
                  'M', 'H',

                  'k', 'G',
                  'c', 'J',
                  'T', 'N',
                  't', 'n',
                  'p', 'm',
                  'y', 'r', 'l', 'v',
                  'LLL', 'LL', 'RR', '[n]', //The last one is an alveolar nasal, which the dental nasal is interchangebale with in practice
                  'SH', 'J', 'SS', 's', 'h'],

  'iast':          ['a', 'ā', 'i', 'ī', 'u', 'ū',
                    'e', 'ē', 'ai',
                    'o', 'ō', 'au',
                    'ṃ', 'ḥ',

                    'k', 'ṅ',
                    'c', 'ñ',
                    'ṭ', 'ṇ',
                    't', 'n',
                    'p', 'm',
                    'y', 'r', 'l', 'v',
                    'ḻ', 'ḷ', 'ṟ', 'ṉ',
                    'ś', 'j', 'ṣ', 's', 'h'],

  'IAST':          ['A', 'Ā', 'I', 'Ī', 'U', 'Ū',
                    'E', 'Ē', 'AI',
                    'O', 'Ō', 'AU',
                    'Ṃ', 'Ḥ',

                    'K', 'Ṅ',
                    'C', 'Ñ',
                    'Ṭ', 'Ṇ',
                    'T', 'N',
                    'P', 'M',
                    'Y', 'R', 'L', 'V',
                    'Ḻ', 'Ḷ', 'Ṟ', 'Ṉ',
                    'Ś', 'J', 'Ṣ', 'S', 'H'],

  'itrans':     ['a', ['aa','A'], 'i', ['ii','I'], 'u', ['uu','U'],
                 'e', 'E', 'ai',
                 'o', 'O', 'au',
                 'M', 'H',

                 'k', 'kh', 'g', 'gh', ['~N','N^'],
                 'ch', 'Ch', 'j', 'jh', ['~n','JN'],
                 'T', 'Th', 'D', 'Dh', 'N',
                 't', 'th', 'd', 'dh', 'n',
                 'p', 'ph', 'b', 'bh', 'm',
                 'y', 'r', 'l', ['v','w'],
                 'sh', 'Sh', 's', 'h', 'L'],

'velthuis':   ['a', 'aa', 'i', 'ii', 'u', 'uu',
              'e', '.e', 'ai',
              'o', '.o', 'au',
              '.m', '.h',

              'k', 'kh', 'g', 'gh', '"n',
              'c', 'ch', 'j', 'jh', '~n',
              '.t', '.th', '.d', '.dh', '.n',
              't', 'th', 'd', 'dh', 'n',
              'p', 'ph', 'b', 'bh', 'm',
              'y', 'r', 'l', 'v',
               '"s', '.s', 's', 'h', '.l'],

'ipa':           ['ɐ', 'ɑː', 'i', 'iː', 'u', 'uː',
                  'e', 'eː', 'əi',
                  'o', 'oː', 'əu',
                  '[anusvara]', '[visarga]',

                  'k', 'kʰ', 'g', 'gʱ', 'ŋ',
                  'c', 'cʰ', 'ɟ', 'ɟʱ', 'ɲ',
                  'ʈ', 'ʈʰ', 'ɖ', 'ɖʱ', 'ɳ',
                  't̪', 't̪ʰ', 'd̪', 'd̪ʱ', 'n̪',
                  'p', 'pʰ', 'b', 'bʱ', 'm',

                  'j', 'r', 'l', 'ʋ',
                  'ɕ', 'ʂ', 's̪', 'ɦ']
};
