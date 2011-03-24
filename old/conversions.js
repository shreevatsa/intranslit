// Make trie, given a table like {'a':'अ', 'A':'आ', 'ai':'ऐ', 'au':'औ' }
function maketrie(table) {
    var root = {};
    for(var s in table) {
	var where = root;
	for(i=0; i<s.length; ++i) {
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
    var repeat = true;
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
	else { 			// else, go back to the root
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
var hal = '्';

skalphabet = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ',
	      'ऋ', 'ॠ', 'ऌ', 'ॡ',
	      'ए', 'ऐ', 'ओ', 'औ',
	      'ं', 'ः',

	      'क', 'ख', 'ग', 'घ', 'ङ',
	      'च', 'छ', 'ज', 'झ', 'ञ',
	      'ट', 'ठ', 'ड', 'ढ', 'ण',
	      'त', 'थ', 'द', 'ध', 'न',
	      'प', 'फ', 'ब', 'भ', 'म',
	      'य', 'र', 'ल', 'व',
	      'श', 'ष', 'स', 'ह'];

hkalphabet = ['a', 'A', 'i', 'I', 'u', 'U',
	      'R', 'RR', 'lR', 'lRR',
	      'e', 'ai', 'o', 'au',
	      'M', 'H',

	      'k', 'kh', 'g', 'gh', 'G',
	      'c', 'ch', 'j', 'jh', 'J',
	      'T', 'Th', 'D', 'Dh', 'N',
	      't', 'th', 'd', 'dh', 'n',
	      'p', 'ph', 'b', 'bh', 'm',
	      'y', 'r', 'l', 'v',
	      'z', 'S', 's', 'h'];

itransalphabet = ['a', ['aa','A'], 'i', ['ii','I'], 'u', ['uu','U'],
		  ['RRi','R^i'], ['RRI','R^I'], ['LLi','L^i'], ['LLI','L^I'],
		  'e', 'ai', 'o', 'au',
		  'M', 'H',

		  'k', 'kh', 'g', 'gh', ['~N','N^'],
		  'ch', 'Ch', 'j', 'jh', ['~n','JN'],
		  'T', 'Th', 'D', 'Dh', 'N',
		  't', 'th', 'd', 'dh', 'n',
		  'p', 'ph', 'b', 'bh', 'm',
		  'y', 'r', 'l', ['v','w'],
		  'sh', 'Sh', 's', 'h'];

velthiusalphabet = ['a', 'aa', 'i', 'ii', 'u', 'uu',
		    '.r', '.rr', '.l', '.ll',
		    'e', 'ai', 'o', 'au',
		    '.m', '.h',

		    'k', 'kh', 'g', 'gh', '"n',
		    'c', 'ch', 'j', 'jh', '~n',
		    '.t', '.th', '.d', '.dh', '.n',
		    't', 'th', 'd', 'dh', 'n',
		    'p', 'ph', 'b', 'bh', 'm',
		    'y', 'r', 'l', 'v',
		    '"s', '.s', 's', 'h'];

iastalphabet = ['a', 'ā', 'i', 'ī', 'u', 'ū',
		'ṛ', 'ṝ', 'ḷ', 'ḹ',
		'e', 'ai', 'o', 'au',
		'ṃ', 'ḥ',

		'k', 'kh', 'g', 'gh', 'ṅ',
		'c', 'ch', 'j', 'jh', 'ñ',
		'ṭ', 'ṭh', 'ḍ', 'ḍh', 'ṇ',
		't', 'th', 'd', 'dh', 'n',
		'p', 'ph', 'b', 'bh', 'm',
		'y', 'r', 'l', 'v',
		'ś', 'ṣ', 's', 'h'];

IASTalphabet = ['A', 'Ā', 'I', 'Ī', 'U', 'Ū',
		'Ṛ', 'Ṝ', 'Ḷ', 'Ḹ',
		'E', 'Ai', 'O', 'Au',
		'Ṃ', 'Ḥ',

		'K', 'Kh', 'G', 'Gh', 'Ṅ',
		'C', 'Ch', 'J', 'Jh', 'Ñ',
		'Ṭ', 'Ṭh', 'Ḍ', 'Ḍh', 'Ṇ',
		'T', 'Th', 'D', 'Dh', 'N',
		'P', 'Ph', 'B', 'Bh', 'M',
		'Y', 'R', 'L', 'V',
		'Ś', 'Ṣ', 'S', 'H'];

//Make object like {'a':'अ', 'A':'आ', 'ai':'ऐ', 'au':'औ', 'k':'क्'}
function to_sk(alphabet) { 
    var ret = {};
    for(var i in alphabet) {
	var rhs = skalphabet[i] + (i>=16 ? hal : '');
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
	var lhs = skalphabet[i] + (i>=16 ? hal : '');
	if(typeof(alphabet[i])=='string') ret[lhs] = alphabet[i];
	else ret[lhs] = alphabet[i][0];
    }
    return ret;
};


var hktrie = maketrie(to_sk(hkalphabet));
var itranstrie = maketrie(to_sk(itransalphabet));
var velthiustrie = maketrie(to_sk(velthiusalphabet));
var iasttrie = maketrie(to_sk(iastalphabet));
var IASTtrie = maketrie(to_sk(IASTalphabet));

var sk2hktrie = maketrie(from_sk(hkalphabet));
var sk2itranstrie = maketrie(from_sk(itransalphabet));
var sk2velthiustrie = maketrie(from_sk(velthiusalphabet));
var sk2iasttrie = maketrie(from_sk(iastalphabet));
var sk2IASTtrie = maketrie(from_sk(IASTalphabet));


//////////////////////////////////////////////////////////////////////

function fixmatras(s) {
    var matra = {
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
	'ं' : 'ं',
	'ः' : 'ः'
    };
    for(var i in matra) {
	s = s.replace(RegExp(hal+i, "g"), matra[i]);
    }
    return s;
}

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
	'ौ' : 'औ',
    };    
    var consonants = {'क':'', 'ख':'', 'ग':'', 'घ':'', 'ङ':'',
		      'च':'', 'छ':'', 'ज':'', 'झ':'', 'ञ':'',
		      'ट':'', 'ठ':'', 'ड':'', 'ढ':'', 'ण':'',
    		      'त':'', 'थ':'', 'द':'', 'ध':'', 'न':'',
    		      'प':'', 'फ':'', 'ब':'', 'भ':'', 'म':'',
    		      'य':'', 'र':'', 'ल':'', 'व':'',
    		      'श':'', 'ष':'', 'स':'', 'ह':''};

    for(var i in vowel) {
	s = s.replace(RegExp(i, "g"), hal+vowel[i]);
    }
    var t = '';
    for(var i=0; i<s.length; ++i) {
	t += s[i];
    	if((s[i] in consonants) && s[i+1]!==hal) { //Even if it is undefined!
	    t += hal + 'अ';
	}
    }
    return t;
}

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

function devanagari2u(s) {
    return insertbraces(unfixmatras(s));
}
function itrans2u(s) {
    return convert(s, itranstrie);
}
function harvardkyoto2u(s) {
    return convert(s, hktrie);
}
function velthius2u(s) {
    return convert(s, velthiustrie);
}
function IAST2u(s) {
    return convert(s, IASTtrie);
}
function iast2u(s) {
    return convert(s, iasttrie);
}

function u2devanagari(s) {
    return removebraces(fixmatras(s));
}
function u2itrans(s) {
    return convert(s, sk2itranstrie);
}
function u2harvardkyoto(s) {
    return convert(s, sk2hktrie);
}
function u2IAST(s) {
    return convert(s, sk2IASTtrie);
}
function u2iast(s) {
    return convert(s, sk2iasttrie);
}
function u2velthius(s) {
    return convert(s, sk2velthiustrie);
}
