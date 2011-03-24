if(!this.SKconvert) {
    //To avoid creating global variables put everything in a "closure"
    this.SKconvert = function () {
        if(typeof(console) === "undefined" || typeof(console.log) === "undefined") var console = { log: function() { } };
        // Make trie, given a table like {'a':'अ', 'A':'आ', 'ai':'ऐ', 'au':'औ' }
        function maketrie(table) {
            var root = {};
            for(var s in table) {
                var where = root;
                for(var i=0; i<s.length; ++i) {
                    if(where[s[i]] === undefined) where[s[i]] = {};
                    where = where[s[i]];
                }
                where.label = table[s];
            }
            return root;
        }

        //Convert a string using a labelled trie
        function convert(s, trie) {
            var out = '';
            var where = trie, d = 0, a = '', b = 0; //d = depth, a = parsed part, b = length of unparsed part
            var i = 0;
            while(i < s.length) {
                var c = s[i]; ++i;
                ++d;
                ++b;
                if(where[c] !== undefined) { //If there is a child in the trie, just follow it
                    where = where[c];
                    if(where.label !== undefined) {
                        a = where.label; b = 0;
                    }
                }
                else {                  // else, go back to the root
                    if(b==d) { //"Parse" the first character
                        a = s[i-b];
                        --b;
                    }
                    out += a;
                    i -= b;
                    where = trie; d = 0; a = ''; b = 0;
                }
            }
            out += a+s.substr(i-b);
            return out;
        }

        //////////////////////////////////////////////////////////////////////
        var virama = '्';

        var alphabets = {
        'sk':        ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ',
                      'ऋ', 'ॠ', 'ऌ', 'ॡ',
                      'ए', 'ऐ', 'ओ', 'औ',
                      'ं', 'ः',

                      'क', 'ख', 'ग', 'घ', 'ङ',
                      'च', 'छ', 'ज', 'झ', 'ञ',
                      'ट', 'ठ', 'ड', 'ढ', 'ण',
                      'त', 'थ', 'द', 'ध', 'न',
                      'प', 'फ', 'ब', 'भ', 'म',
                      'य', 'र', 'ल', 'व',
                      'श', 'ष', 'स', 'ह'],

        'harvardkyoto':['a', 'A', 'i', 'I', 'u', 'U',
                      'R', 'RR', 'lR', 'lRR',
                      'e', 'ai', 'o', 'au',
                      'M', 'H',

                      'k', 'kh', 'g', 'gh', 'G',
                      'c', 'ch', 'j', 'jh', 'J',
                      'T', 'Th', 'D', 'Dh', 'N',
                      't', 'th', 'd', 'dh', 'n',
                      'p', 'ph', 'b', 'bh', 'm',
                      'y', 'r', 'l', 'v',
                      'z', 'S', 's', 'h'],

        'itrans':     ['a', ['aa','A'], 'i', ['ii','I'], 'u', ['uu','U'],
                      ['RRi','R^i'], ['RRI','R^I'], ['LLi','L^i'], ['LLI','L^I'],
                      'e', 'ai', 'o', 'au',
                      'M', 'H',

                      'k', 'kh', 'g', 'gh', ['~N','N^'],
                      'ch', 'Ch', 'j', 'jh', ['~n','JN'],
                      'T', 'Th', 'D', 'Dh', 'N',
                      't', 'th', 'd', 'dh', 'n',
                      'p', 'ph', 'b', 'bh', 'm',
                      'y', 'r', 'l', ['v','w'],
                      'sh', 'Sh', 's', 'h'],

        'velthuis':   ['a', 'aa', 'i', 'ii', 'u', 'uu',
                      '.r', '.rr', '.l', '.ll',
                      'e', 'ai', 'o', 'au',
                      '.m', '.h',

                      'k', 'kh', 'g', 'gh', '"n',
                      'c', 'ch', 'j', 'jh', '~n',
                      '.t', '.th', '.d', '.dh', '.n',
                      't', 'th', 'd', 'dh', 'n',
                      'p', 'ph', 'b', 'bh', 'm',
                      'y', 'r', 'l', 'v',
                       '"s', '.s', 's', 'h'],

        'iast':          ['a', 'ā', 'i', 'ī', 'u', 'ū',
                        'ṛ', 'ṝ', 'ḷ', 'ḹ',
                        'e', 'ai', 'o', 'au',
                        'ṃ', 'ḥ',

                        'k', 'kh', 'g', 'gh', 'ṅ',
                        'c', 'ch', 'j', 'jh', 'ñ',
                        'ṭ', 'ṭh', 'ḍ', 'ḍh', 'ṇ',
                        't', 'th', 'd', 'dh', 'n',
                        'p', 'ph', 'b', 'bh', 'm',
                        'y', 'r', 'l', 'v',
                        'ś', 'ṣ', 's', 'h'],

        'IAST':          ['A', 'Ā', 'I', 'Ī', 'U', 'Ū',
                        'Ṛ', 'Ṝ', 'Ḷ', 'Ḹ',
                        'E', 'Ai', 'O', 'Au',
                        'Ṃ', 'Ḥ',

                        'K', 'Kh', 'G', 'Gh', 'Ṅ',
                        'C', 'Ch', 'J', 'Jh', 'Ñ',
                        'Ṭ', 'Ṭh', 'Ḍ', 'Ḍh', 'Ṇ',
                        'T', 'Th', 'D', 'Dh', 'N',
                        'P', 'Ph', 'B', 'Bh', 'M',
                        'Y', 'R', 'L', 'V',
                        'Ś', 'Ṣ', 'S', 'H'],

        'kannada':       ['ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ',
                          'ಋ', 'ೠ', 'ಌ', 'ೡ',
                          'ಏ', 'ಐ', 'ಓ', 'ಔ',
                          'ಂ', 'ಃ',

                          'ಕ', 'ಖ', 'ಗ', 'ಘ', 'ಙ',
                          'ಚ', 'ಛ', 'ಜ', 'ಝ', 'ಞ',
                          'ಟ', 'ಠ', 'ಡ', 'ಢ', 'ಣ',
                          'ತ', 'ಥ', 'ದ', 'ಧ', 'ನ',
                          'ಪ', 'ಫ', 'ಬ', 'ಭ', 'ಮ',
                          'ಯ', 'ರ', 'ಲ', 'ವ',
                          'ಶ', 'ಷ', 'ಸ', 'ಹ'],

        'ipa':           ['ɐ', 'ɑː', 'i', 'iː', 'u', 'uː',
                          'ɻ', 'ɻː', 'ɭ', 'ɭː',
                          'eː', 'əi', 'oː', 'əu',
                          'MMMMMMMMMMMMMMMMMMMM', 'HHHHHHHHHHHHHHHHHHHH',

                          'k', 'kʰ', 'g', 'gʱ', 'ŋ',
                          //'c͡ç', 'c͡çʰ', 'ɟ͡ʝ', 'ɟ͡ʝʱ', 'ɲ',
                          'c', 'cʰ', 'ɟ', 'ɟʱ', 'ɲ',
                          'ʈ', 'ʈʰ', 'ɖ', 'ɖʱ', 'ɳ',
                          't̪', 't̪ʰ', 'd̪', 'd̪ʱ', 'n̪',
                          'p', 'pʰ', 'b', 'bʱ', 'm',

                          'j', 'r', 'l', 'ʋ',
                          'ɕ', 'ʂ', 's̪', 'ɦ']
        };

        //Make object like {'a':'अ', 'A':'आ', 'ai':'ऐ', 'au':'औ', 'k':'क्'}
        function to_sk(alphabet) {
            var ret = {};
            for(var i in alphabet) {
                var rhs = alphabets['sk'][i] + (i>=16 ? virama : '');
                if(typeof(alphabet[i])=='string') ret[alphabet[i]] = rhs;
                else {
                    for(var c in alphabet[i]) ret[alphabet[i][c]] = rhs;
                }
            }
            return ret;
        }

        //Make object like {'अ':'a', 'आ':'A', 'ऐ':'ai', 'औ':'au' }
        function from_sk(alphabet) {
            var ret = {};
            for(var i in alphabet) {
                var lhs = alphabets['sk'][i] + (i>=16 ? virama : '');
                if(typeof(alphabet[i])=='string') ret[lhs] = alphabet[i];
                else ret[lhs] = alphabet[i][0];
            }
            return ret;
        };


        //////////////////////////////////////////////////////////////////////

        var matras = {
            'sk' : {
                'अ' : '',
                'आ' : 'ा',
                'इ' : 'ि',
                'ई' : 'ी',
                'उ' : 'ु',
                'ऊ' : 'ू',
                'ऋ' : 'ृ',
                'ॠ' : 'ॄ',
                'ऌ' : 'ॢ',
                'ॡ' : 'ॣ',
                'ए' : 'े',
                'ऐ' : 'ै',
                'ओ' : 'ो',
                'औ' : 'ौ',
                 'ं' : 'ं', //These two are included to deal with
                 'ः' : 'ः'  //"kM" and "kH", for example.
            }
        };

        var unmatras = { };
        for(var lang in matras) {
            if(unmatras[lang] === undefined) unmatras[lang]={};
            for(var v in matras[lang]) {
                var m = matras[lang][v];
                if(m!=='') {
                    unmatras[lang][m] = v;
                }
            }
        }
  
        function fixmatras(s, lang) { //Replace क्इ            with                 कि
            var matra = matras[lang];
            for(var i in matra) {
                s = s.replace(RegExp(virama+i, "g"), matra[i]);
            }
            return s;
        }

        /*
        function unfixmatras(s, lang) { //Replace कि            with                 क्इ
            console.log("Vowels of the matras of " + lang + " are :"); console.log(unmatras[lang]);
            function isConsonant(t) { return (alphabets[lang].indexOf(t)>-1) && !(t in matras[lang]); }
            //First, replace explicit matras with VIRAMA+VOWEL
            for(var m in unmatras[lang]) {
                s = s.replace(RegExp(m, "g"), virama+unmatras[lang][m]);
            }
            //Next, replace implicit 'a' with VIRAMA+A
            var t = '';
            for(var i=0; i<s.length; ++i) {
                t += s[i];
                if(isConsonant(s[i])===true && s[i+1]!==virama) { //Even if it is undefined!
                    t += virama + 'अ';
                }
            }

            console.log("After unfixing, returning " + t);
            return t;
        }
        */

        function unfixmatras(s) {
            var vowel = {
                'ा' : 'आ',
                'ि' : 'इ',
                'ी' : 'ई',
                'ु' : 'उ',
                'ू' : 'ऊ',
                'ृ' : 'ऋ',
                'ॄ' : 'ॠ',
                'ॢ' : 'ऌ',
                'ॣ' : 'ॡ',
                'े' : 'ए',
                'ै' : 'ऐ',
                'ो' : 'ओ',
                'ौ' : 'औ'
            };
            var consonants = {'क':'', 'ख':'', 'ग':'', 'घ':'', 'ङ':'',
                              'च':'', 'छ':'', 'ज':'', 'झ':'', 'ञ':'',
                              'ट':'', 'ठ':'', 'ड':'', 'ढ':'', 'ण':'',
                              'त':'', 'थ':'', 'द':'', 'ध':'', 'न':'',
                              'प':'', 'फ':'', 'ब':'', 'भ':'', 'म':'',
                              'य':'', 'र':'', 'ल':'', 'व':'',
                              'श':'', 'ष':'', 'स':'', 'ह':''};

            for(var i in vowel) {
                s = s.replace(RegExp(i, "g"), virama+vowel[i]);
            }
            var t = '';
            for(var i=0; i<s.length; ++i) {
                t += s[i];
                if((s[i] in consonants) && s[i+1]!==virama) { //Even if it is undefined!
                    t += virama + 'अ';
                }
            }
            return t;
        }

        //TODO: Make this exhaustive without hundreds of lines of code
        function insertbraces(s) {
            //Insert braces in ai, au, aii, kh, gh, etc.
            s = s.replace(RegExp('अइ', "g"), 'अ{}इ');
            s = s.replace(RegExp('अउ', "g"), 'अ{}उ');
            return s;
        }

        function removebraces(s) {
            return s.replace(RegExp("{}", "g"), "");
        }

        //////////////////////////////////////////////////////////////////////

        //Ok, explanation: "u" is my canonical Unicode form, in which "ka" and "ki" are both stored as KA+VIRAMA+VOWEL.
        //This is convenient as "k" is always KA+VIRAMA, etc.
        //fixmatras() shows Devanagari, by replacing each VIRAMA+VOWEL with the matra for that vowel.
        //unfixmatras() converts Devanagari to u, by replacing each MATRA with VIRAMA+VOWEL.

        var ret = {
            devanagari2u: function(s)  {
                return insertbraces(unfixmatras(s, 'sk'));
            },
            u2devanagari: function(s) {
                return removebraces(fixmatras(s, 'sk'));
            },
            u2html: function(s) {
                s = this.u2devanagari(s);
                var t='';
                for(var i=0;i<s.length;++i) {
                    if(s.charCodeAt(i)>=128) t+='&#' + s.charCodeAt(i) + ';';
                    else t+=s[i];
                }
                return t;
            },
            html2u: function(s) {
                var t = '';
                for(var i=0;i<s.length;++i) {
                    if(s[i]=='&' && s[i+1]=='#') {
                        for(var j=i;s.charAt(j)!=';';++j)
                            ;
                        var n = s.substring(i+2,j) * 1;
                        t += String.fromCharCode(n);
                        i = j;
                    } else {
                        t += s[i];
                    }
                }
                return this.devanagari2u(t);
            }
        };

        for(var f in {itrans:'', harvardkyoto:'', velthuis:'', IAST:'', iast:'', kannada:'', ipa:''}) {
          var g = function () { //Need to do it inside a function, because of the broken "closure" model
            var t = maketrie(to_sk(alphabets[f]));
            var u = maketrie(from_sk(alphabets[f]));
            ret[f+"2u"] = function(s) { return convert(s, t); }
            ret["u2"+f] = function(s) { return convert(s, u); }
          }();
        }

        console.log('matras -- ');
        console.log(matras['sk']);
        console.log('unmatras-- ');
        console.log(unmatras['sk']);
        return ret;
    }();
}
