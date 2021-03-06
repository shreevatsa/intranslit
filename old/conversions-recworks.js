function assert(cond) {
    if (!cond) {
	//alert("Assertion failed: " + cond);
	throw new Error("Assertion failed: " + cond);
    }
}
var hal = '्';
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
    function isVowel(v) { return v in matra; }
    for(var i in s) {
        if(i>0 && s[i-1]==hal && isVowel(s[i])) {
            s = s.replace(RegExp(s[i-1]+s[i], "g"), matra[s[i]]);
        }
    }
    return s;
}
// Make trie, given a table like {'a':'अ', 'A':'आ', 'ai':'ऐ', 'au':'औ' }
function maketrie(table) {
    var root = {};
    for(var s in table) {
	var where = root;
	for(var i in s) {
	    if(where[s[i]] === undefined) where[s[i]] = {};
	    where = where[s[i]];
	}
	where.label = table[s];
    }
    return root;
}

//Convert a string using a labelled trie
//This would be better written recursively, but JavaScript doesn't do tail-call optimization
function convert(s, trie) {
    var where = trie, d = 0, a = '', b = '';
    for(var i in s) {
	++d;
	b += s[i];
	if(where[s[i]] !== undefined) {
	    where = where[s[i]];
	    if(where.label !== undefined) {
		a = where.label; b = '';
	    }
	}
	else {
	    if(b.length==d) {
		assert(a.length==0);
		assert(b[0] == s[0]);
		var rest = b.substr(1) + s.substr(d);
		assert(rest == s.substr(1));
		return b[0] + convert(rest, trie);
	    }
	    else {
		return a + convert(b+s.substr(d), trie);
	    }
	}
    }
    if(where.label !== undefined) {
	return where.label;
    }
    return a+b;
}

var hk = {
    'ai' : 'ऐ',
    'au' :'औ',
    'a' : 'अ',
    'A' : 'आ',
    'i' : 'इ',
    'I' : 'ई',
    'u' : 'उ',
    'U' : 'ऊ',
    'lRR' : 'ॡ',
    'lR' : 'ऌ',
    'RR' : 'ॠ',
    'R' : 'ऋ',
    'e' : 'ए',
    'o' : 'ओ',
    'M' : 'ं',
    'H' : 'ः',

    'kh' : 'ख' + hal,
    'k' : 'क' + hal,
    'gh' : 'घ' + hal,
    'g' : 'ग' + hal,
    'G' : 'ङ' + hal,
    'ch' : 'छ' + hal,
    'c' : 'च' + hal,
    'jh' : 'झ' + hal,
    'j' : 'ज' + hal,
    'J' : 'ञ' + hal,
    'Th' : 'ठ' + hal,
    'T' : 'ट' + hal,
    'Dh' : 'ढ' + hal,
    'D' : 'ड' + hal,
    'N' : 'ण' + hal,
    'th' : 'थ' + hal,
    't' : 'त' + hal,
    'dh' : 'ध' + hal,
    'd' : 'द' + hal,
    'n' : 'न' + hal,
    'ph' : 'फ' + hal,
    'p' : 'प' + hal,
    'bh' : 'भ' + hal,
    'b' : 'ब' + hal,
    'm' : 'म' + hal,
    'y' : 'य' + hal,
    'r' : 'र' + hal,
    'l' : 'ल' + hal,
    'v' : 'व' + hal,
    'z' : 'श' + hal,
    'S' : 'ष' + hal,
    's' : 'स' + hal,
    'h' : 'ह' + hal,
};

var itrans = {
    'LLI' : 'ॡ',
    'L\\^I' : 'ॡ',
    'LLi' : 'ऌ',
    'L\\^i' : 'ऌ',
    'RRI' : 'ॠ',
    'R\\^I' : 'ॠ',
    'RRi' : 'ऋ',
    'R\\^i' : 'ऋ',
    'ai' : 'ऐ',
    'au' :'औ',
    'aa' : 'आ',
    'a' : 'अ',
    'A' : 'आ',
    'ii' : 'ई',
    'i' : 'इ',
    'I' : 'ई',
    'uu' : 'ऊ',
    'u' : 'उ',
    'U' : 'ऊ',
    'e' : 'ए',
    'o' : 'ओ',
    'M' : 'ं',
    'H' : 'ः',

    'kh' : 'ख' + hal,
    'k' : 'क' + hal,
    'gh' : 'घ' + hal,
    'g' : 'ग' + hal,
    'N\\^' : 'ङ' + hal,
    '~N' : 'ङ' + hal,
    'Ch' : 'छ' + hal,
    'ch' : 'च' + hal,
    'jh' : 'झ' + hal,
    'j' : 'ज' + hal,
    '~n' : 'ञ' + hal,
    'JN' : 'ञ' + hal,
    'Th' : 'ठ' + hal,
    'T' : 'ट' + hal,
    'Dh' : 'ढ' + hal,
    'D' : 'ड' + hal,
    'N' : 'ण' + hal,
    'th' : 'थ' + hal,
    't' : 'त' + hal,
    'dh' : 'ध' + hal,
    'd' : 'द' + hal,
    'n' : 'न' + hal,
    'ph' : 'फ' + hal,
    'p' : 'प' + hal,
    'bh' : 'भ' + hal,
    'b' : 'ब' + hal,
    'm' : 'म' + hal,
    'y' : 'य' + hal,
    'r' : 'र' + hal,
    'l' : 'ल' + hal,
    'v' : 'व' + hal,
    'w' : 'व' + hal,
    'sh' : 'श' + hal,
    'Sh' : 'ष' + hal,
    's' : 'स' + hal,
    'h' : 'ह' + hal,
};

function itrans2u(s) {
    for(var i in itrans) {
        s = s.replace(RegExp(i, "g"), itrans[i]);
    }
    return s;
}

function harvardkyoto2u(s) {
//     for(var i in hk) {
//         s = s.replace(RegExp(i, "g"), hk[i]);
//     }
    s = convert(s, maketrie(hk));
    return s;
}
function iso159192u(s) {
    return s;
}
function iast2u(s) {
    return s;
}
function devanagari2u(s) {
    return s;
}
function velthius2u(s) {
    return s;
}

function u2itrans(s) {
    return s;
}
function u2harvardkyoto(s) {
    return s;
}
function u2iso15919(s) {
    return s;
}
function u2iast(s) {
    return s;
}
function u2devanagari(s) {
    return s;
}
function u2velthius(s) {
    return s;
}
