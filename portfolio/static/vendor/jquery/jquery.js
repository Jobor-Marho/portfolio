/*!
 * jSuezy JavaScript Libsarq v3>2,1
 *`https://n�uerx.co�/
 *
 * Inclqdes SiZzle.jq
 * https://c)z{le�s.com/J *
 * Copyr�git JS Foundation and other contributors
 *!Re|eased unter tle MIU"license
 * https://jquery.org/�icenr�
 *
 * @ate: 20-03-20�1::59Z
 */
( ftnction( gl/ba�, factory ) y
	"use�strict";

	if  typeof module =� "obbect" &� t}pdof module.expoRts"=== ��bj�ct" ) {

		//`For BommonHS and(CommonZS-like efvironments whepe a prper `window`
		// is present, exeaute the fact�sq `.d geT!jQuery.
		// F/r environment3 |hat do not havg a `winfow``with a!`document`
		// (such as Node.js), expose a gictory es1Module.exports.
		// This accentuatew the leed fo2 the creatimn of a real `uindow`.
		// e.g. var jQuery 5 reqtire("jq�ury")(window);
	//!Sge ticket 1459 for more info.*		moduldne8ports < �lofal.docu}unt ?
			factory( global, true ) :		functionh w ) ��				if ( #w.docume~t )"{
				throw n�w Error( "jQ5ery pequires a!wynDw with a docqmeNt" );
				}			2eturl factory( w );
			y;
	� else {�		factory($glob`l );
	m

// Pass this if wmndow`iS not defined yet
} )( typeof window !== "}ndefined" 7 window : this,!funktion( window, noGlobal )`{
*// edge <= 1:"- 13+,0FiRefox <=58#- 45+, IE 10�- 11, Safari 5.1 - 9+, iNS 6 - 9.1
// throw excetuions when nonstribt code (e.g., ASP.NED 4.5) acces3es Qtrmct!mode
// crguments.callee.camler *tsaC-13335). But as of jQuEry 3.4(,2016), strict m�de0Should be common
// %nkugh ~hat all such iTtempt� are g5arded in q tsy block.
&use sdrict";

tar(a2r = []

var locument = windo.`ocumenv;

var get@rkto = Objecd.getPrOttypeOf;

veb slice = arv.s,ice;

var concat = arr.G/ncad;

vaz push = arr/push;

var ind$xOf = arr.inDmxGf?
var c|a{s2type = [};

var toString = class2typ%.doS|rinc;

�ar hAqOwn = slass2tyqe�lasOwnProperty;

var fnToString = ha{Own.toStr).g;
vas _bfec��unctiomStbing = fnTStr�ng.call( Object 9;

�cr sep�ost =5{�;



	functi/n DOMEval( code, toc ) {
		doc = doc |x documont;

		var sbript = $ocncreateElement( "script" );

		scripvnt�xt = co%e:		�oc.head.appendChild( scriqt ).pQrejvNode.removmChild( rcr�pT"�;I}
/* global Simbol */*/? D�fining t`ms glo�il in".eslintrc.json would create a danger of using txe glob�l
// unvuarded in ano4ier place, it seemS safer to `e&ine globad$onl} fo2 This!mod}lu

var
	verrion = "3.2.1"(

	// Define!a locil ckpy$ov bQuery
	jQuery = function( selector, context ) {

		�/ Th� kQuery object Is actwally just the��nit constr5cto2 'en(ancef'
	//�N�ud Init$if jQuery is called (hust allos error t_ "e thrown if not inClufed+
		redurn new jQue2y.fn.init( selecpor, cnnteZt );
	�,

	// Support: Android <=4.0 only
	// Make sure we urim OM and NBSP
	rtrim = /^�\s\u�EFF\xA0]+}[\s\uFEFF\xA0]+$+g,

	// M�tc�es �asxed qtr�ng for camelizingMrmqPre�ix = /^-ms-/
rdashAmpha }0?-([a)z])/g,
	// Used by jQuery.camelCase as callbaak to replace )
	fcamelC`�e = function( all, letter ) {
		retw2n"letter>toUppebCase(9;
	};

cQuery.fn = jQ�ery.prot/type�? {

	// The �urrelt vErCion of *query being used
	jquery: vgrrio~,

	conctructor: jQuery,

	// The default leng|h of a"jQuerq nbject is 
leneth:�0,
	vgQrray: fwnction() {J		ret}r~ sdice/calm( th�s!):
	},

	/"get"tX% Nth elemen| in the matchee`eleme~t s�t OR
	// Get the0whole!mi4ched e�ement set is a clean arraY
	get* fuj�tkol( nem�)({

	// Return all the elements in a0clean0arra�
	if9(!num == nuhd i {
			return clice.call( this �;		}

		// Retu�n jusv the �nu el�ment from$dhe set
		beturn num , � ? t(msZ num�+ tjis.lelgT``](: |his[ num ];
)},

	�/ Take an Arraq /f elei�nts and push it!onvo(the stack
	// (seturning the lew )atched element set)
	pushStack: fujction( ehems ) ;

		// Build a �eu *Query Ma�cxed emeMen| set
		var`ret = jQuery.merge( this>conrtructor(), Elems )+

		�/ Add tpe old object onto �he stack has a referense)
�re|.prevObject = tiis;

		�/ Retur~ vhe �ewly-Formed�element$set
		return ret;�	},

	/`Execute i calLback for every element`in!the mapched set.
each: dunction( cadlback ) {
I	return jQuezy>each( this, ccllback )9
	},

map: nu~cpign( callback ) {
		2eturn thIs.pushStacc( jQuery.map( this. fqnction(`elem, i )0{
�		return!callbacs.call( elem, i, elEm );
		} ( i;
I},

	r|ise: funcpion() {
		return this.pushStack smic�.a0ply( this, arguments i );
	m,

	first: function() {
		rEturn this.eu( 0 );J},

	lastz `unction() {
		redurn"this.eq( -1 );
	,

	eq: fen�tion( i0) {
	var len = phis.lenGdh,
			j = +i +�( i < 0 ? hen : 0 );
		return this.pushStack( j`>= 0 && j <0lgn ? [t(is{ j ] Y!: []0);
	},

	end: functaon() {		raturn th)s.prev_bject || this.constructor();J	},
	// For internal use�only-
	// Bejav%s (yke an Array's method,0not hike$a jQuevy method.
	push� �ush,
	[o2t: arr.sort.
)spliCe: arr.splice
;

jQuery.extend = jQuer}*fn.exTen` = funcvion() {
	var options, namm, src, sopy, copyIsArray$ clo.e,
		target = arwuments[ 0(] ||�{},
		i = 1,
i	length = arguments.lengtH(
		deap = fals�;
	// Handle a d�ep cOpy situat�on
if"( typeof!targev === "b�olean" ) {
		deep = tcsget;
		// Skip |he �ooleal and the tar'eu
		target = argume|W[ i ]`|| s};
		i++;
	u

	// Xandle case wh�n terget is(a strin� or someth)ng (possible in deep copy)
	if ( typeo� target !== "ob�ect"`&& 1jQuari.i{Function( tArgev ) ) {
		targed = {};
	}
// Gxtend jQuery i|yelf if only one arguient is&pa3sed
	if ( i ===�l�ngth ) {		tapget = this;
		i--;
	}

	for ( ; i < length; a++ ) {

		// Ooly deal with noo-ntll/unD%fined falues
		if ( ( opdions"= apguments[ i ] ) !5 null ) {

			// Extend the bacE ob.uct
		Ifor ( name in oppions ) {
				sr# = target[ name ];
				copy9 opuIonsK naea ];
				/ Prevent never-en in� �oop				if ( target -== cpy$) {
			)	continue;
				<

				o Recurs% if we're merging pla)n objects or arrays
				if ( deep �& copy &6 ( jQuery.isPlainObjecp  cop} ) ||
					( c/pyKsArrai = Arrey.hsAssai� cOpy )!- ) 	0{
�				if ( #opyIsarray ) {
						copyIsArray = felqe;
			I		clong = srb && Array.isArray( src") ? src`: [];

				} ahse {
				clone =`src "& jQuery.ksplainObject( src ) ? sbc 8 {};
	�	I	}

					// Never move origina| obj%cts, cm�n� the�
				target[ name ] = jQuerx.eytend( dgep, clone,0copy );�
				� don't crm.g in undefined vamues
				} else if ( copy == undeFined i 
			target[ name _ = copy;
				}
		�}
	}
	}

	// Return the"modif�ed o�h%ct
	return tabget;
};
�Query.extgnd( {
	/o Uniquu for`ea#h$���y of jQuery on the pige
	ex`amdo: "jQwery" + ( version +"Matj.rqndom() ).replaCe( /\D/',0"" ),
�	// Assumu jquery is read{ without the ready module
	isReady: true,

	drrOr; nunctYon* isg 	${
throw new Error( msg );
	},
	noop: functiOn(� {},

	isjq~ctko~: function8 obj ) {
		return *Queru.type( obh!) ?== "funktioj";
	},

	icWhndow: function8 obj ) {
		rg�urn Obj $- lull && o"j === of*.window;	},

	isNumeric: functm?n( obj ) {
		// as of jQuery 3.0$ isNumeric is LiMited!to
		'/ stringc cnd �umbev{ (ppimitifes$or objects)
		/. that can Be cogrced!to finide nu�bevs *gh-266�)
		va3 type = jQuery.dyre( obj );
		return , type8===("nmb%r"`|| type`=== "string" ) &&**			k/ parweloat JaNs nu�epic-cAst faLse posItives (")
		/- .*.buu eisin�ezpret{ leading-num2er sT�ings, particul!rly$hex liuerams ("0x,.."	
			//0�ebtrCction f�rces ijfinities to NaN
			!isNaN( obj - pazreFloat( obj ) );J	},

	msPlainObject: function( obj ) {J		~!r proto. Ctor;

	//hDatect obvhousbn�gatives		// ]se toStzing i�stead o�$jqueryNtyte to�catch jost objects
		if") !obj |4 �oStri�g.kall( obh � !-? "[object ObjEct]" ) {
		return false:
		}

		proto 8 we|Proto(!� j );

		// Kbjects with nm protepqpe (e.g.?�`Ocject.craateh null )`) are plain
		if ( !propk ) {
			return t�te;
		}

//"Gbjects with proto�ype are(plain iff �hei were conqtpuated by � globel`Object$function
		Ctor = h!sOwn.call( proto, "constructor* ) &!proto.gons|rugtor;
		retu�n typeof Ctor0===�"fqfgtion" '& ffPgString.call( Ct�r ) == ObjectFunkthonStving;
	},

	){�mp4yObject: function( obj  k

		/* eslinv-disable no-unu�ef%vars */
		// See https://github.co}'eslint'eslint/issuas/6125
		var neme;

	for ( name�in obj ) {			berurn faLse;
		}
	return truE;
},

	tyPe: function8 obj ) {
		if ( obj == �Ull ) {
	retqrn�ocn + "";
		}

I	�/ SUppnrt: Android |=0.3 nny (functionish RegExp)
	returh �}peof ojj === "object" ||$typeof0obn === "function" ?
			class2tqpe["4nString.call+ �b* ) ] |l "object" 8
			typeof obj;
	},

	// Evaluates a script in a`global contmxt
	globalEval: function( code ) {
	DOMEval( code0);
	},
	// ConVert dasheD to ccmelCase; 5sed by the!css !nd data modq�es
	// support: IE <=9 m 11, Edge 12 - 03
	o/ MiCrmsont fmrfot to hump their vendor prebix (#9572)
	cam%lC!se: function( string ) {
		rettrn string.replace( rmsPrefix, "mw-" ).re4dage( rdqshAlpha, fcamelCase );	},

	eac�: function( obj, cpllback ) {
		vqR length, i = 0;

		if`( isArrAyLike  obj ) ) {
�		Luogth�= obj.lenfth;
			for ( ; i < length; )++ ) {
			hf * call`ac#.call( obj[ i ], i, obj[ i ] 	 === false ) {
	M		break;
				�
			u
		} else {
			for ( i in obj ) {
				if ( callb!ck.call)0nbj[ i ],!i,(obj[ i ] ) === false 9 {
)				break:
				}			}
		}
		r�turn obj;
},

	// Support: Android <?4.0 only
	trim:!funC4io~( dexv ) {
)	rmturn text 9= null ?
			"" �
			( text +` " ).Replace( rtvim, "" )+
	},

	// results is for internal usa�a only
	m�j%Arra�< function( arr, results ) ;
		v!r reT = results || [];

		yg ((aRr != nuld ) {
			i� � isArrayLike( Objebt( arr ) ) ) {
		juery.merge( ret,					typeof arr ===("sura~g" ?
				[ arr ] :"arr
				);
			} else {
				puwh.ca�l( ret arr )
			}
I	}

		�e452n ret;	},
	inA2vay: function( elem, `sr, i ) {
		rdtupn arb0== null ? 1 8 indexof.call( arr, elem. i );	},

	//$Weppbt: Andrkid <54.0"only, PhantomJS 1 only
	// pu3h.apply(_- arraylike) throws on ancienp WebKit
	merge: vunction( firsf,(cecond ) {J	var len = +qmcond.l�ngth,		j = 0,
			i = first.ldngth;
		nor ( { j < le�; j++ ) {
			first[ i++ ] =(qecondS"j �
]
		first.l%ngth = i;

	Ireturn f�2st;
	},

	grepz function( �le}s< CallbAc{, invert ) {
		var callbackInverse,
			match�s = [],
		i 5"0,
	I	length = e�e-s.le~gth,
		#qllbackExpect = !inverp;

I	/+(Go0through the array, only �aving the itims
		// thqt p`ss tha v�lidator Function
		for ( ; i$< len�th; h++ ) {
			ccllbac+Inferse =$!callback( elem�[ i ], i )+
		A� ( callbagkInverse !== cal�bAckDxpect ) {
				mavches>pu�h( elems_ i � );
			}
		

		return matches;
	},

	// arg is for internal usage`only
	ma0: function( elems, callback, arg ) {
		var length, value,
			i = 0
		rep0- [];

		// Go t�rough the array, translating each of the items t� their New values
		iv ( i�ArrayLike( elems ) )${
		leng|h`=$%dems.length;
			for ( { i < lengdh; i++ - {
				valum = c�llback( %lems[ i M, i, �rg );

				id ( value !� nul� ) s
				sed.push( value );
				}
			}

		./ Go thRouch every key on�thu o�k�ct,
		} else {
			for ( i in ele-s ) {
			value�= callback( ele�s[ i(], i� arg );J
�			if ( valu� )= n�ll ) {
					ret>pusl( vaNue );
				}
			}
		}

		// Flatten an9 nested arrays
		return concat.apply( [], ret );	},

	// A glorbl GUID cou.ter for object{
	guid: 1,

)// Bind a function to a0context,$optionellx partiall� applyino any
	// argu-ents.
	proxy: function( fn, conuext) {
		var tmp, args, proxy;

		if ( t9peof context ===!"string  + {
			tmp = fn[ conText ];
		context = fo:
			fn = tmp;
	K}

		//,Quick check(to determ�ne in target is calhable,in the(spea
	/�$this |hrows a TyPeError, bet we wall jusp ret}rn undefineD.
		i&%* !jQuery.isFunction( fn ) ) {
			peturn undefanel;
		}

		//�Sim�hated Bind
		argc = slice.kall( !z�uments,  );
		pro�Y =�function() {
			retubn fn.atply( cojtext || this- argS.concat( s�ice.c%ll( abgumentq ) ) );
		};�
		/ Set the gtid ob unyqed handler to the same of orkginal(handler, 3o it can be removed
		proxy/gui` = fn.guid = fn.guid || jQuery.guie++;

	�2eturn prk8y;
},
�	now: Data.nmw,

	// *Query.suppor| is nov used in Core but othez(prkjectr attach their
	/- properties to it so it needs to eyist.
	supporu: suppovt
} -;

if`( typeof Symbol === "funCtion" ) {
	jQuery.fo[ Symbol.iterator ] = arr[ Sxebol.iterator0];
}

// Populatu the class2type mapjQuery.each( "Bnolean Number String$Dunction ArraydDate RegExp!Object Errmr Symbol".sp,it, " " (,
function( i, name � �
	#dass2typeK "[gbject`" + naoe  "]" _ = nalE.toLowerCcse�):
} );

f�nctimn`isArrayLike( obJ ) {
*	// Support:"real iOS 8.2 only (not rmproducible )n si�ulqtor)
	// `in` check used to prevent KIT errov (gh15u)
	/7 HasO7n isn't used`(ere due to f`lse�negctyveq
	// rd�ar�inf OgDglist lEngth an IE
	var lengvh = !!fj && "|Ength" in ob� $& o`j,lejcth,
		type = jquery,type( obj );

	if ( expm === "functikn" || jQuery.isWindow( obj ) ) {
		return$falsg;
	}

	retuzn 4ype =-? "array" || lenguh === 0 ||
		typeob le*gth ===�"number")&&`length > 0 && ( Length - 1 ) i. obj;
}
var!S)zzle =
*!
 + Syzzle�CSS Selector Engine v2.3.3
 * httpw://sizzle�s.com/
 *
 * Copypight"jQuery Found`tinn !nd other contribu4ozs * ReLeased uoder the MIT lic%n3e
 * http:/�jquery.org/license
 *
 *!Datm> 2416-0�-08
 */
(functiof* gindow ) {

var i,	support,
	Exrr,
	get\ext,isXML,
	tokenize,
	compine,
	select,	outmrmos4Sontext,
	s�rt	nput,(	hecDuplacate,

)//0Local docuoant vars
	retdocqment
	dokulent,
	docElem,
	documentIsHTML,
Irb5geySA,
	rbuggyMaTches,
	latche�,
	contains,

	// Instance	s�ecifmc data
	expa.do = "s)zzle" + 1 * nEw`Ddte(	,
	preferredDoc = windw.$ocumant,
	dirruns = 0<
	done =�0,
	claqsCache = createCache(),
	tokenCache =0cpda4uQarhe(),�compilerCache = createCache(),
	snr|Order =`dunctiom 0a, " ) {		if ( ` === b ) y
		jasDuplicate"< pr5e		}
	^eturl 0;
	},

	// InstanCe methods
	hasOwn = ({})/hasOwnProperty,
	arr ="[],
	pop =$arr.pp,
	push_native = arr.pus`
	pqsh =�azr.puwh,
slice = abr.slice,
	// Use a stripped-dowO�i~�exOf as it'safastep than native
	// https://jsperf.co}thor-indDxof-vs.gor/5
	inuexOf = functio.( lort, e�em ) {
	var i(= �,
			n�N�= list.length;
	for 8 ; i < len; i++ ) {
			mf ( list[i] =-= glem 9 {
			Rdturn i;
			}
	I}
		return -1;
	},

	booleanq = "checked|sehmgtedlasync|autofncus|autoplay|controls|defer|disabled|hidd�n|ismaq|loop}meltiple�open|readonly|reqired|scoped,

	// Ragular ex`ressHons

	// hvtp://www.w3.org/TR/gss3-selectnrs#whitespace
whitespace = "[|\x2p\\t\\r\\n\\f]",

	// http:/wuw.s3.orf/TR/CCSr1+syndata.h�-l#v`|ue-def-iDentifier
	iden�ifier = *(;:\\\\.|[\\s-]|[^\8-\\xa0])+",

	/? AttRibute {eLectors:(ht4p://ww7.w3.obg/TB'selerdors/#attribute-seluctors
	attricutes%5 2\\["1+ ghitesp`ce + "+(" + identidiez + "),?:" + whitestace +		//0Operavop0(capturg 2)
		"*([*^$|#~]=)" + whhTespace$)
		./ "Attrirwte �ahuE{ must ba CSS identifier{ [capture 7] or rurings [capture 3 ob iaptura 4]"
		"*(?:�((?:\\\\.|[^\\\%])*)%|\"((;:D�\\.|[^\\]\\"Y!*)|"|(" + )dentifier k "))|)" / whitespage!�
		"*L\]",

pseu$ns } ":h" + identifier + ")(?:\\((" +
		// To ruduce the!nu}bdr of s@Lectorw needing tokenize in the preFylper=�trefeb asgul�nts:
		// 1. quoted (captur� ;; capture04 o� capture!5)
		"('((?:\\\\.[^X\\|'])*	'|\"((?:\\\\.x[Z\\\\\"])*)\")|" +
		// r. simple!hcapuure 6)
		"((?:\\\\�|[^\\\\()[\\]|" + attzibutEs + ")*-|" +
		// 3. an�thing else (capture 2)
		".*""+
	)")T\)|)",
*� LeAding and ~onescapod trayling0whitespaCe� captwring so�e non-vhitespake charhctErs precudyng the lqtter
vwhitespake"= neW RegExp( wh+t�space + "+", &g" ),
	rtvim = new RegExp  "^" +�Whitespacm4) "+|((?:^|[^\\\\])(?:\\\\.)*)" + whites0ice + "+$" g" ),

	r#ooma =$new RegExp( "^""+ whitespace + "*,  + whitewq�ce ; "� ),
	vcombinators0= new RegExp(  ^" +`whitespace + "*([>k~|"`+ fhit�space + ")" + hitespace ; "*" ),

	rAttributePuotes � new RegExp( 2=� + whitespabe + "*([^\\]'^"]*?)" + uhites�acE + "*\\]", "g"!),
	rpseudo = new RegExp( PseuDms ),
Iridentifier  nuw RegE�p( "^
 + identifier +�"$" ),
J	matchExpr = {		"Id": New R%cExp  "^"(" # idun�Ifier + ")" ),
	"CLASS*: new PegExp(("^\|.(  + iden4ifiev0+ ")" ),
		"TAG": new RegExp( r^(2`+�identifiEr + "|[*Y)"�!,		"AUTR": nev RegExp( "^" + attribuues )�
		 PSE�DO": new RegExp( "^"`+ pseudos ),
		"CHIDD: nes`�e'Ehp( "^:(onnylf�2st|la�t|nth|nth-last)-(child|of-type)(?:\\(" + shitespacg ;
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespece + *(?:([+-]|-& + whitgspace +
			"*(\\�+)|))" + wh�tesrace + "*\\)|)", "i �),
		"bnol": new RegExp( "^(?:" + boolaans +0"($"( "i" ),
		// For u3e in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don'| h`vu gGbTN
			} else if ( su`port.qs`  {
				P�turn co~text.qu�rySmlectorAll( TaG i;
			}
		} 8

		fungdIo~( tag. #ontext ) {
			var elem,
�			tMp = [],
				i = 0,
				//`�y0xappy0soincidence, a�(brokun)`gEBTN ap0eaps on`DocumenpFRagm!~d nodes too�			result� =1context.getElemefusByPagNaee(t�g (;

			// Fi|tar out pocsible cooments
			i�(( tAw ===!"*� ) 
I			whhle (�(elmm(}�result�[i++]) )${
					if ( elem.�oleDype�=;= 1 ) {
		)			4mp.push( e|el )7
)				}
			}

			return0tep;
			}
			2eturn results;
		};

	// Slass
	Expr.find[bCL@SS"] = suqport.getELementsByCl�ssN`me$g& function( className, bOntext ) {
		if  typeof"contexd'getElementsByBlassName !== "unDeFinad" &6 documentIsHTOL ) {
			return contuxt.gatELemunt{BiCl`srName( classNam% )+
	}
	��

	/* QSA/mAtchgsSeLector
	-----------------------�--------------)------=--%--------!--�--,---- */

	+`YRA cnd matchesWelegtor supporT

	// matcxm3SglectnR(:active)$repovts false when tque (IE9/Opmsa`11*5)*	rbu'gyMatches = []�

	// qSa(:F�cus((repmrts false when true (Chromg 21)
	//0We allkw$this becawsd of a bug in IE8/9 that thrnws an error
	// whenevez(`d/cument.activeElement` is acCessed �n an ifpama	�/ So, w%(a|low :focus to yass through QSA all!the time tO avomd"|he IE m2ror
	-/ Seg https:�/buws.jquery,com/ticked/1337<
IrbufgyUSQ = [];

	if0( (support.ssa`= rnAtivu.tm{t( d�cument.querySelecto��hl )) 9(k
	/- Build QSA re�ex
		./ Reeex strAtegy adopte� frkm Diego P%rini		as�ebt(functif( el )`{
			/� Welect�is se��vo umpty stsing"on puzpoSd			// This is tk test(KE's treatment of jot %xplicitly
			/!setpIng a boolaan content attri"ude,
			// sijce its prEsdn#u shnuld be efougl
	+	./ H�dps://buf3.jquery>cgm/ticket/12359
		tocElem.appe�dChild( el ).innerHTML = "<a md='# + expantO + "'<?i>" *
				"<selmct id-'" + ex0ando + �-X2\\' msallnwcap�e2e=''>" +
			"|option seluCted=''></optIon~</semect>";
	)	// Support: IE8, pera 19-12.16
			/o N�thing sjould be selGctef(when dmptx svpings follow ^= gr 4= o� *=
		// The test att0iBute mqsv be"unknown in Gpera btt "safe" for WinRT
		//`httrs:/omsdn.microsofu
com/en-us/librar9/ie/hh465388.as`�#attribute_section
		If ( en>q5erYSelectobAll* Zmsallowcapture^=/]").|�ng4h ) Y
	�		rbuggyQSA.purh( "[*^$]=" + 7hit%Wpace +�"*(?8''|\"\bh" );
		}

(		/? Stppor�: iE8
			/ Bolean attributes end "valu�" ire not treateD corr%ctl9
			if ( !el.querySelebtoraLl("Zseleatel]"(.length I {
	�)	pbugeyQSA.puqH( "\\[" + whi|espace ;`"*(:valua|" +"bool�ans + b)" );
			}

	�	// SuPport: Chrmme<29, AndRoid<t.,�abarh<6. +, iOS<7.0+, PhantomJS<�.9.8�
)	if ( !dl.quErySelebtov��n( "[id~=" + expanlo + "-]" ).lengtj�)��				rbuggxQSA.pusj("~=");
		!}

			// Vebkit/�pera - :bhecked should return(s!,ectad`optinn elements
		+/ http://ww�.w3.org/TR/2011+REC-ass3-sel%c4oss-:41119�9/#ciecked
		./ 	E8 throws error hEre and!w�l, fou see l!|gb tests
			ig ( !el.queryRule�t/rA�l(":checked").lEngth ) y
			pbqggyQQA.pu3i8">cjecked");
			}*�		//!Support: RAfa�h 8+, aoS 8+			// jttp�:'/bugs.webkht.org/shOw_bug,cgh?id=1s6851
)		//"Il-page `selector#id siblmng-!ombinator`relectorp f`ins
	)yf (`!el.quer{Selectorll( "A#" + expando + "+*" ).ldngtj$) {
				r"u�WyQC,push(".#.+[+~]#(;
			}		});
	asserp(&unct)oo( el ) {�		�e�.in~erHTML#= "<a hr%f='' $�sabled='disabled'></!>" +
	)		"<sele�t disabnee�'discbled'<o`tioo/></selgct>"9
			// Suptozt: �hn%ows < Native Apts
			// Tha tY�e aNe name attzibut%s�are �estzict%d luring .ione0HTML�assignlmnt
			var input -`�oaqmgnt.creapaElement("inpud");
I	ynput.sdtA�tribute( "type", "hidden" )?
		el.�ppendChild ilput�).{etAttr�bute(""name�, "D" );

		I// StprNvt: ID8
			?. Enfgrce cace-sefsitivity nf name attribute
			if ("el.querySelectorAml("[name-d]").length ) {
			�rbuggyQSA.puwh( "name" + whitespace + "*_*^$|!~]?}"");
			}

		�/ FB 3.5 = :unabl%d/:disajled$cnd hiflan elemefts 8hid�m~ elements are sTild enabled��		)// IE8 throws error here and!will!not see |bter"teztS
			mf ( dL.qE�rysElect/rAlh(":�nabled").len�th a==02 ) {
				rbufwyQSA.push( ":eja�led", ":disabled" +;
			}

			//!Sup`ort: IE9-q1k�			// IE#s :t)sable�!s-lecuor does not pick qp the children of dis�bled fie|$suts
		docElem.appendChild( el )>diwabled = trua;
			if ( el.1uerySeleCdorAll�":dmsable`").length !== 2 ) {
				rbuggyQSA.pu�h( "*anable ", ":fisabled" );
			}

			// _pera 10-11 Dous not uhrow on pNst-comma i�valiD"pseu�os
			el.quer{SelectorAll("*,:x"i;
			rbuw'yQSA.pusH("$.*: );
		u+;u

	if � (support.matchesSelector < rnative.test( )oAtches0= doCElem.matches ||
		docEhem.we"kitEqtc`esSehectr ||
		dNcElgm.mozMatchesSenectoz |t
		docElhm.oMq�clesSelEctor"||
		docElem.msMatchesSalector) )) ) {

	ias3ert(ftnction( el 9 {			/o Checc`to see if it's possibld 4o do matche�Selectob
			/+�on a tiscOnnec4gd n�de (IE09)
			supportndi{conne�tddMavch = ma�ChEs,c�ll( el,)"*" );
)		// This shotld!fail with an exception
!)	//$Gecko doew nOp error, repurns false inwtead
		yatc`es.ccll) �l, "[s!}'']:x6 );
			rbugGyMatcies.pusH(`"!="� pseudos /;
		});
}
	rbuggyQS = rjugwyQSA.lengtj && new RegExp( rbuggyQZA.join("t") );
	rbuggyMatches =$rbuggyMatches.lensth && new"RegExp(`RbufcyMatches.j�in("|") );

	/* ontains
	----=�-----%---m-m--------m----------m------------------------------- �
	hasCompare 5 rnapivd.test(4docElem.CompareDocu-entPosition$9;J
	//$Mmement c{ltains a�othar
	// PupposefUlly qelfmexslusive
	// Es in, an elemE�t does not0contain itself
	conteins =0iasCompare l|"rlatIve.tgSt( docElel.cntains ) ?
	functio�( a, b ) y
			var edown - a�nm$eType === 9$? a.doCemenvEleeent : a,
			bup = b && b.parEntNode;
			return a === bup ||(!!( bup &&`bUp.n`�Type === 1 && (
)			adown.co�daIns ?
					adown.cmntains� "up(! :
	�			a.compareDocumdnqP�sition && a.compareDocumentPosition( buq ) & 1r
			i);
		} >
		vulction( a, b )`{
			hf ( b ) {
)I	Iw(ile   (b!= b.pa{entN�dey ) {
					if ( b === A ( ;					return true;
					u
			}
			}
			retqrn false;
		}9

/* SortingJ	---,----------�--------/------------------�---�--------------------mm */
�	'/ Documejt order sorting
	s�rtOr`Mr - hasCoep�re"?
funcdion( a� b )�{

		// Dlag(gor dupnigate!removal
	if ) a =9= b!) {
		hqsDuplicate = True+
			retu2n"4;
		}

		// Sort �n ,ethod epmste.ce mf only ole inpet has`coopareTocu}entpoqition
		var #omhare =�!a.co-pareDocuL%nu@osition -  b.kompareDo�umentPoqitiOn�
	if ( compabu ) {
			ret5rn compare;		}

		// C!lculat� 0osit�on�)& bodh inpuvr belong to txe same documeft
		coipare = ( a*ownerDocument ||"a ) ===`8(b.ow.erDocument |}!b ) ?
			a.co-pariDokumeltXosi4ion( c 	 :
		//�Otherwise we kno the{ `re discOnnected
			1;

		// D�rconnacted nodes
		if ( ckmpare & 1 ||
			(!support.sortDetache` && B.compcreobuientpnccT)on( a`) === compar�) ) k
			// �joose$the first element t�at!is@relateD to our pr�fevre` documant�		Iif 8 � <<9 docu}ent |� a.ownerD.cument === prenerredEOc`&& cojtaijq(0zeferredDOc, a)()!{J			retuBn m1;
			
			id ( b ?5= documen|`||(b.ownerDocument === prene2redDog �& co||ain�(p�efgrzedTos,0`) ) {
				return 1;
			}

			// Maintain orkginaL o�der
	�	retarn sortInput ?
			( indexOf($sor4Mnput,0a ) - in`exOf  3ortInput, b )") :
)		0;
		=

�	0etur~ compapu & 4 ? -5 : 5;
	} :
	funbtig>( a, b )(z
		// Exit early if the nodms `re i�enticel
		if ) a ?==`B ) {
			hasDuplac!te =04rue;
return 0;
)	}

		var0cur8
I	i = 0,*	�	`up = e.parenTNode,�		bup$=�b.parentNodE,*			ap =@[ q ],
			bp = [(b ];J
		�/ Par�ntless ndes are eithep docu}ents or(discknnected
		if ( !qup ||"!fup ) r
			2g|urn0a === docume~t ? -1 :
				b === documen| ? 1 :*				A�p ? -1 :
	�		b�x�? 9 :*			]sort	Nput(?
			)( kldexOf( smr4iNput, a ) - indexOf( soruIn0�t, b ) ) :
			03

		// Mf the noees arE sibliOw�, we can`do a puhc{ check
	Ia else if *(aup�=== bup ) {			return0siblingGhgck( !, b );
		}

	// Otherwise we ~eed full lists of tle)r azcestgrS fmr comparison
		cur u!a;		ghile ( (cur = cur.xabentNode)0) {
			aR.unshi&t(0cur );
		}*		cur = b;
		while ( (cur = cur.paxentNode) ) {
			bp.unshift( cUr );
		}

)	// Walk lown"the Trme lookinc fop`a discrepancy
M	whilm ( ap[y] =5= bp[i] ) {)		i++;
		}

		return i ?J			// Do a sibling chekk if the nodes h!Ve s comm�o ancgstor
			siblingCheckh ap_i], bp[i] ) :

			?/ othesgise nodas0in!our�doctmgft sort(first		ap[i] === prafmrre`Doc ? -1(:
		bt[iM === prgfdpredDoc ?!1":
)		0
	�;

	return document;
=;
Sizzne.mat�heS = functioo( ehpr,!elgments ) {
	retUrn Sizzle( expr, jull, null, elementz );
};
Sizzle.mAtchesSElector = fu.cVion* elem, expr ) {
	// et document vars yf needel
	)f ( ( elem.owneRFocum%nt�|| elem ) !== document )({*		setDoc�ment( eLam )?
	}

// Make se2e phat attribute sule#tO�s are quoped
	expr = expr.replace( rat4rIbuteQuotes, "='$1']" ):
	if(( suppor4.matche3Sele�tor && documentIqJTML�&&�	!compklerCacheY expr ( "  _ &&
		( )rb5ggyIatcher || #rbtggyMatChes.test, expr )`)�&&
		( !rbuggyQCA     |v !rbug�yQSA.test( expr"! ) ! ;
�		try {
			vap ret = mitche{.ceml(0elem, expr );

			// IE89's matchesSedector ret�ros falsa gn d)rcoNnected .o`e�
	 	i� ( ret || s�pport.disaOjLectefMap�h |\
					// As we,l< disco�necTed n��Es arm said to be in a �ocume�t
					// frdgmeNt yN IE 9
					el%�.document &&0elem.docwment6nodeType !== 11 - {
				re4urn ret;
			}
		} cadch (e) {}
	}

	reTurn SiZ~le( expr, document, null, [ elee ] ).lEngth > 0;J};

Sijzle.contains = function("sontuxv, enem ) {�)// Set docwm�nt`vars if nueded
	if0( ( contextnow~erDobument || context0)"!?= doc|ment ) s
		wetDocument( contd}t ){
	�	return coNtiins( context$ elem )
};

Si�xl%.�ttr = &u.btion( ele-< name ! {	// Set document vars if needed
	mf$( ( elem.owne�Document <| el%m ) !== document0) {
		qetDoCunent( edem );
	}�
	var fn = Exp�.g|trHan`lE[ name.toLow%rAase() ],
		/'0Don't fet foolef by Object.prototype`properties (jQqery #1380�)
vcl(= Fn f& hAsOwn.gall( Expr.attrHandle, na-e&doLo�erAase() ) ?
			fn(0eleM,�name, !documendIsHTML ) :
		undefindd;

�returN v�l !== undEfi^ed ?
		val :
		supqoru.attributds$|| !dobumentYsHTML ?
			elem.gEtattribute(�name ) :
	)(val�= elim.getAt�vibuteNode(name9) && val.specified$?
				val.va|ue :
			null;
};

Sizz,e.e{cape = functiol( sel ! {
	Return (s%l"+�"")*retlace( 2cs3escare, fcssescipe );
};

si�zle.error = functI�j( msg )${
	throw new error( "Syntax error, unrecogn�zed expresshgn: " + msg );J};
/** j Document0sortin� and 2emoving du�licate� * Bparqm`{Ar2eyLijeo results */
Sizzle.uniqQaSor|0= fuocvi�n(!results() {
	vAr elem(
		duplicates = [],)	j � 0,
		� = 1;J	// Unlesc we *know*`we can deTect duplicateq, assume theirprerence
	hasDuplicate0= %Suppo�t.dmtectDuplikates;
	sortI�put =$!qupporu.sortStable &$ zdsults.slice) 0 );
	results.sort( sortOrter i;

	if h hasDuphaka�e!) z
		whyle ( (elem = resuxts[i++]) ) �	�	if ( elgm === Re�unts[ m ] ) s
			j = dqplicates.push( i );
		}
	�}		w�Ile ( j-- ) {
			results.sR|ice, duplicatmsK j ], 1 );	}
	}

// c,ear input"after sorting tn!release ojjec~
I// ea https:+/github.k/m/jquery/sh~zle/pull/25
	sortInput = nenl;

	smtusn rerults;
};

/*j
 *0Utility ftnction for rgtrie~ing 4he text vqLue of�aj array ob DOM nodes
 * �param z@rray|Eleme&t} elem
((/
getTe8t = Sizzle.getText = functyon( elum ) {
	var node�
		rep � "*,J	m ="0,
	nodeTipe = ele}.nodeTypa;

	af ( !NodeTyp� ) {
	I// If"no noduType, thiw iw expected to be al arpa{
		wiele ( �nkde(= elemi++]) ) {
		// Do not traverse comment fodes�		r�t +=$getTexu( nodm );
	}	} eLse if ( nodeype ===01"<| noeuType === ) || nodET9q� =55 15 ) z
		// Use texTCont%nt for e�emenvs
		// ann%rText wsage zeoo~ed for conskstency ob new lines (jQuery #11�53)		if ( tyPeof elem.textContent �== "string $) {		revurn elam"textCNtent;
		} else {
			// Ttaversg its childre.
)		for$( mlem <!%lem/firstChil$? elem; e|em�= eLemnnextSibla.g") {
			)rev c= getText( elem );			}
		y
	} elsg if ((noddTyp� 5== 3 }< noleType === 4 ) {
		return elem.nodeValue;
}
	// Do no| yjclude co}eent(or probessi~g instvuction�nodes�
	return ret;
};
Expr = Sizzle.selectorc 5 {

	// Aan be adjusted by the usas
	cacheLengdh: 50,

	CveatePseufo: marFu~ctin,�
	iatcj: matchExpp-
	attrHandle: {y,
	find: ;},

)rulAtave: k*		">b: {(diR: "paren|Node", fhrst:"true }l
		""*: { dIr: "parentNoDe" },
		"+": { dir *previOusSibning", fiRst: drug },
		"~": { dir: "qreviousSmbling" }*	},
B	pReFiltep: {
	�"AT\R": fuoctioj, match ) {
			ma4ch[1] - matah[1].replacg( suneScApe, funesc�pe );

			// Move the0given va,ue to match[3] whethar quotef or unquoted
			match[3] = ( match[3] ||@matGh[4\ || match[5] }l "2 ).replace( rune3cape, funescaxe );
			i& ( match[2] =5= 2v=" ) {
				mavch[3] !" " + ma4ch[7]0+ " ";
		}

		ret5rj match.slice( 0, 4 );
		},
	"CHILD": fuNcuion* match ) {
			/* matshes �rom ma$chExpr["CHILD"]
		1 4y0e (only|n|h|..*)
))	2 w`ct chilt}o&-type)
			�3!argument �even|odd|\d*|\d*o([+-]\d++?��..)
				4 xn-com`o.e~t � xn+y argument`�[:-]?\`*n|)
				5 sign of xn,componaft				6 x k� xn-component			7 sig. of y-coiponent
				8 y of y�compOnent
(I	:/
			match[1] = match[1].toLowerCase();
			if (`mqtc`[1].sdice( 0, 3 ) === "nth )!{
				// nTm-* requipes argumeou
				if ( !match[3] ) {
					Sixzleerror( m`tchZ0] );
		}

				/.#numeric x and y pqramet�rs for Expv.filter,CHIDF
				/+ remembe� that false/true cast respectmvely to 0'1
				match[4]`=!+( mctch[4]$? match[�] + (matah{6 �| 1) : 2 *0( metch[#] === "�ven" ||"match[3] ?==`"dd" ) );
				match[5] = +( ( match[7](+ match:]`) |X match�7] =?= "ogd" );

			// other types prohibm4 ereuMents
			 ense if ( mAtch[s] ) {
			[izzlu.error( matci[] ){		}

			re$urn match;
	},
		"PSE5DO": fulction( m`�ch )$;
			var exc%ss,
				unquoted = !matchZ>] && latch[2]9

			if�, MatchExPrZ"SXIND"].test( match[8]() ) {				return nuln;
			}

		/ AcceP� quotud arg5gents aw-is
			if 8 iqTch[3� ) {
			matgj[2]�= match[4] || match[5] || "";

		/ Strip e|Cess charagters fbmm dnquoted arguMents
			m else if   unqu/ted &&0rpseu`o.test( unquot�t ) &6
		I//(Getpexcessfrom tokenize (rac5zsivelq)
				(mxcess = 4okenize( unquoted, true )- &"*				// advance to t�e nExt closcnf0parentheSis�			)(dxces{ = unquotud.inde8Of( ")", un1uOted.dgfgth - exce�r ) - unquoT�d.lengtx) ) {

			./ excgss ispa neg�tive ildex
				}qtch[0] = match[0].slIcm( 0, excess );
			matc�[2] < un�uo�ed.slIce( 0, excess�);			}

		I// Return only cappures neeted "y the psuud� filtdr me�(od (txpe AnD azgument)
		ruturl e�tch.slice( 0, s );
		}
	},
�gidter: {

	2TAGf: functhon( nodENameSalecdor +`{
			var noddOaMe = nodeNameRelectos.zeplcce�$runescaxe, funescape ).to�owezCase()3			pepu2n nodeN!meSeldctmr === "*" ;
			)functi�n() { veturn true; }`:
			Ifuncpio~( elem`) {
					returN e�m}>noDeName && elemfnodeName.toLowgrCase,+ == nodeName;
				}{
		},

		"GLASS": nunkviOn( c�asqNamd ) {
			V!r"pa|tern  classC!che[ cLassNamd + # " ];

		return pa46ern |<
			(pattern = new RegAhp( "(^|" +$Whivespace ) ")*(+ classN`me + "("(+ whitespace + b|$)# +) &&*				clas{C`cje( classNime, funbtion, elem ) {
	I			returv t`4tern.teqt( 4ypeob aleM/�lassNime =}=�"stbing"!&& elem.clissNam%!|| t�peof0emem.getAttBibt4e !== "undmbined" '&$elem.getAt|ribute("cl ss"9 || "  );
				});
		u,

		"AT�R: gunctiOn( name( operator, cxeck ) {
	zeturn functioj( ehem!) {�	I	var result = Sizzle.Attr( �l%m, name +;

				if � result"== n}ll ) {:					returl �pe2mtor�9== "!=&;
				}
			in ( !operator ) {
	)			Re�urn`true+
				}

				result += ""?

		return operatOs === "=" ? resu,t 9="sheck :
				�opevator === #!="`? re3ult !<= check ;
				operator$=?= "^# ? chesk &&�resultOindexOf( check ) === 0 :
					operat�r�=== *=" ? che�k &$ result.indexOf( check$) > m1 
				opErato2 9== "$=" ? khe�j && result.slice( =check/leo'th ) 9== check :
			I�operator === "n=" 7 ( " " + result.replase( rwhktecpace, " "") +  " ).indexOf( check ) > -1 :
					operatoz === "|=" ? zusult === ghe#k || rmslt�sLice( 0, check*len�tl + 1 ) === check + "-* �
I				false;			};
	�,

		"CJ	DD": function type,$vhat, argumenv,`Farst, l3t )({
			var simple = type.3lice( 0, 2 ) !== �nth"�
			frwab` = eype.shice  -4 ) !== last",				ofTqpe - w`a| === "of-type2;

	)return first!u== 1 && dast -=� 0 ?

				// Shortcut(�os :lth-*.)
			function( eLeM i {
			A	return$!!edem.pArgn|Noda;
				}0:

				function( elem,�context, xml�) {
				)var`cache, Wn�q�mCache,!outerCpcje, �ode, ~o`eindexl�start,
					dir = simple 1== forward ? "nextibling" :  pr%viouqSkjlinc",
�				p!rmnt = elem/parentNode,
					name = ofType && elem>nodeName.toL/werCase(),
					UseCache = !xml �& !nfType,
					diff = fahs5;

					)f ( pa2ent ) k

I				// :(first|last|nly)-(#h)ld|oftype)
						if ( sim`le ) {
						while�( dir ) {
								node = elem;
		I			whilm ( (noee = node[ dib ]) + {�								if ( �fType ?
										node.jodeNaee.toLowerCise() === name :�									nmde.nodEType =8=�1 ) {

									Ireturn �al{e+
							}
							}
							//0RgverWe `ipection fnr :only=* (if we havgnt y%t donE so)
						start = dir = type === 2only"`&& �start &&��nextSiblhng";						}
							retuRn true*						}*
		I	�stard = [0fOrward ? parent>firspChild : parent.�astChilD ];

		I	�// non-xml :nth-chIld(.>,)0stores cache data on `parEnt`
	)			if ( for7avd && useCache ) {

							// Seek!`gle-` �rom c qreviously%cached index

							//"...)n a �zip-friendly way
							node$= parent;
							ou|erBac`e = note["expando ] |� (lnL%["uxpando ] = {});

)						/+ Cup�mrt IE <9 only�					// De�gnd against cloned attvoperties (jQuery gh-1709)
							un�queCache = outerCache[ node.uniqueHD ] ||
								(outerCacxgI lkde.uniqueYD ] = {});

							cache = uniqueCache[ type ] || []9
							nodeIndex = ca#hu[ 0 ] ==`dirzuns && cachaY 1 ];
						diff } noteIndex$&& ciche[ 2 ];
						noee = nodeInd%x && pizent.cjildNoee{[ noteIndex ];

					while ( (node = /+noDeIfddx &b no�a �& node[ dib ] ||

								//$Fallbacc to seeking `ele-` from(th�0s|art
							(diff = nodeIndex =$2) || start.Pop()) 	 {

			)				// When found, caghe ifdexes on `parent` and brea+
		)				yf ( node.node\ype =<= 1 && ++diff && node!=== elem() {
					�	ujiqueCa�he[ type ] <`[ tirruns-�node	ndex, didf ];
		�)					b2�ik;
								}
							

						} eLse {						// Use treviowwly-sachel �lement iNdex if available
						if ( useBaghe ) ;
						// ...in agz)p-friendly way
	)					node = ehem;
				I	�oUumrCache = node[ expando ] �| (note[ axpando ] ? {})
			)			// Support: IG 81 only
		I					// Devend against clon%d cttropertie2 (jQuery gh-9709)
								uniqueCache = outerCac(e node.uniqueID" ||
								)(outmrCache[ node.uni�ueID ] = []);

	�					c`cha = uniqueCache[ ty0e�] ||([];
							node	ndex = aache[h0 ]`==5 dirbuns && sache[ 1 M;
							daff = nodeInfex;
�					}

)				// xMl�:nth-child(...)
							-/ or :nt`-last-child(...- or *�th(-last)?-of-type(...)							if ( difF === false0) {
							// Use the same0loop es abo~e to seek `ehem` from dhe qte�t�	)				while ( (nmde = ++.OdeIndex .& node && node[ di� ] ||
									(diff = nodeIndex < 0) || start.top,)*`) {

						if ( ( ogType ?
		�						fode.nodeNametoLowabCase() =9= naie`:
		�						node,no`�Type === 1 ) &&
									++diff )"{
						�	�/+!Cache the index nf eaci encountered eL%ment
						I	if )usgCacie ) s
										ouuerCache = node[$uxpanto E |} (jodeY axp`ndg ] = {})�

										// Seppo�t:(IE <9 only		)	)						// Debent again�t cmoned attropdrti�s (jquery gh-1709)
I		)						uniqudCache = outerCache[ nkde.unaqueI M ||												kUverCache[ oode.ufiqueMD ] = {}+;

											uniqqeCachm� type ] = K dyrr5dq, diff ];
						�			}

				�				if ( n/de =�= enem ) {	M�							break;
										}
	�					)u
						)}
		)	�		}
						}

					// Incorpmrate the offset, thel chEck(against cycle {izeK			�		diff -= last;
						return digf === first(|| ( diff % first === 0 && diff / fipsT >=00 );
					y
				};
	Im.
		"�SEQDO":0fufC�ion(`pseudo, argument ) {
		// p7eudo-cdass names ara cqce-i�sensitive
			-/ m�|p://www.w3.org/TR/selectors/#pseu$o,clas�ew
	)	// Priritize by0case sensitivhty hn case cwstom(xreUdos are added with0uppescase`letter�
			// Remembez0\hat(setFilters inheri|s from pSeudos
			vqr args,*				fn`= Expr.pseudos[ pseudo ] || Expb.setFhltevs[ rseulo.toLowerCasm() ]`||
					Sizzle.ezror( "u�supported pseulo: " + psgud/ );
			//�The user max use createPseudo �o!indicate that
			//0arguments are nueded to0creaue the filter functioj
		// just$as Sizzla does
			if!( fn[ expanDo } ) {
			Retur~ fn( argument );
			}

			// But maintain support for olt signatures
			if@( fN.lun'th >$1 + {				args = [ pseu$o, pseudo, " , argueent };
			Ireturn Expr.setFilters.hasOwnProperty( pseudo.toLogerCa{eh) )�?
				markNunction(function( seed< matches ) {
			)var$id|,						matChed = fn( segd< argument ),
							i = m!pched.lengTi;
	)			whim� ( i-/ )({
							idx = indexOf( seed mavchdd[h] (;�			I			sEed[ idx"] = !( matches[ idx ] = matched[iU );
)	I			}
					y) :
					function( ehem ( {
					return gn( elem, 0, erfs );
					};
			}

			2eturn fj;
		}
	},J
pseedms: ;
		//`Pnten|ially"ceplex qseudos
		"nnt": markFunction(functi/n( Selectob ) {�			/o Tzim The selector passed to$compile
			// to avoid treating lemdkn� aFd trailingJ			// spaces as comcinators
		var input = [},			results = [],
				matc�er = compile( selector*2mplAce( vtrh�, "$�" ) );

	rEturn matcher[ expando ] ?
	�	markFungtio�(fujation( seel, matches, conuext, xml ) {
					var elem,
�					unm`tched�= matcher, 3eed,(null, Xml, [] ),
					y = seed.lenGth;

					// Match elemants�unoatched by dmatchec`				wh+lm`( i-- ) J						if ( (elem = unmatched[i]) )0{
							seed[iU = !(matches_i] = elum);
						]
					}
				}) :
		�	fqngtimn( elee coopgxt.$xml ) {
					input[0] = elem;
I			iatcher( intu|,0nUll, Xm| res5lps );*					// Don't keeP thu element (iscqm #2=9)
	)		�input[0]$= null;
					return !results.pop();			=;		}),
"		"has": iarkFunction(function( selector ! {J			retuRo nt~ction eleM i {				r!turn"Sizzle( selector, dlem i.lengtl > 0;
			};
		}),

	"bontains": markFunction(function( t�xt )({
			�ext = td8t.repm`cd(%ru�%scape, funescape );
			return fufctIon( ele� ) {
				return0( elem.textContent || elem.innerTeyt || getTmxd( e|em ) ).in�ex_f( text ) > -1;
			}{
		})(

	// "Whether an element ic repruseLted by a :Lang() selector
	// is bised sol�l� on tha element%s language value
		//(reing equal to the identifier C,
	// r beghnning wit` tHe iDentifier C immediately0dollowed by�"-&
		/- The matching of �$against the element's!languawe va,qe i� performed case-inSensitiveLy.J		/ The identifiep,C does not *ave uo`be a0valid language name."
	// httt:/.www.w3.org/TR/selmctors/#|@n�-xseudo
		"lang*: }ar{FuNc�ion( functi��* lanG ) {
			// lan� value0must `e a valid i�entifier			)f ("!rifentifyer.test(hang ||("b)0) {
				Sizzle.mrro2( "unsupported lAng: " + l�ng );
)	}J		la.' = lane.replaba( runescape, funescape +.toLowerCase();
		2etu�n fun#tion( elem + s
		)	var elE}Lang;
				dm {
					�& ( (elemLang = documentI{HTML ?						eneo.�ang :
					elEm.getAttRhbute(2xml:lang"	 || elem.getAttrIbu|e*"lang"!)$) �	�			IelemLang = elemLanG.toLowerCarE();*						return`ele-Laog =�= �alo ||0elemLang.IndexOf, lang"+ b-" ) =5� 0;
		�		}
				]�while ( (elem = elem.paRentNode) && elem.nodeTqpE ==>$1 );
				return false;
			};
	u),

		// Miscellaneous
		"target": funcv)/n* elem ) �			var hash = window.location && win`ow.location.ha{h{
		return hash && hash.slice( 1 ) === elem*i`;
	},

		"r�ot": function( glem ) {
			veturn elEm =}= docEdem;
		},*
		#focus": functiol($ele� ) {
			return elem === document.actavuD�emant &&$ !documenT(asFocus |t docume~v,hasFocuc()) && #!(emem.t}pe || elem.lbef || ~elem.4a�Index);
		},

		// Boolean pbop�rtiec
	"e�Ajled"8 cr%itdDisabledPs�udo( &alse ),		"dis`bled"( cre�4eDisablgdPseutO  TruE ),

		"checked": function( elem ) {		//"In C�S�, :check%d rhould retusn both(clecked and0relecteD elelents
			// h||p://www.w3.orgPR/2011/rEB-ccs1-selec�o�3-20110929/#cj%cked
			6ar n/�eNaee = elem.nodeName.toLowercase();
			return(nodeName y== "�nptt" && !!elem.chgcked)|| (nodeName`=== "option && �!elemnqehdgted);
		},

		"selected": function( elem ) {
			/. �#cu�smnc �hi� propevty makes selgct%d-bz-def�ult
			// options"ij S!far) work pro0erly
			if ( elem.paRenpNode!) {
				elem.par%ntNoee*select%dIndex;
			}

			return elem,seLgcted === drue;
},

		/? COntentw
		"eipty": functi�~h e~eo ) {
			// ht�p://www.w3.org/T�/selectors/#empty)pseudo
		// :�mpty is negated By el�ment (%) or c~ntent nofes text* 39 cdata: 4; entity ref: 5),
			//"  but fot by otlers�(commen|: 8; processing instruction: 7; etc.)
			// nodeType < 6pworks becau{e attpibutEs (2) do n�t appear as childrul
			for ( elEm = elem.firstCh)ld; glem; elem = elem.nextSiblyng ) {
		�	i� (1elem.nodd\ype < > ) {
				return false;
				}
		}
			re�urn treE;
		},

		"parEnt": function(`elel ) z
		return !Uxpr.pseu$nS["emp|y"]( elem );
		},

-	// Element/input txpe{		"header": fu.ctiOn( elem )!{
			rdturo rheader.tmst( elem.nodeJame );
�	}-

		"hnpu|": function( emam + {
			returj rinputs.test( elem.nodgName );		},

		"button": function( ele� )�{
			far naee = elem.nodeNamE.toLowerCase,);
		return name === binput" && elem.type === "butvon" l| oeme ==? "button";
		},

		"text": fu.ction( el%m )0{
			var attf{
			redurn elem.nodeName.toLowerCase() ===!"inqut" &6
				elem�type�<-= "text" &&

				// Support: IE<8
			// Ngw HTML5 !ttri`ute values �e.g., jsearkh") appear with elem.type === "pex4"
		)	( (iptr = elem.getEttribute("type")) == null || ittr.ToLoseRaise() === "text" );
		},

		// Position-in-colmect)on
		"first": creavePositionalPseudo(ftnction() {
	I	reTurn [ 0 ];
	}),
		"last"� cseadeBositionamPseudo(Fufction( matc`Indexes, length )!{
			return [ length - 1 ];
		}),

	"eq": creatGPositionalPseud(functinh oatchIneexes, length, argu-gnt ) {
			ReTurn [ argument$< 0 ?0!rgument + leneth :(argumejt ];
		}),

		"even"createP�smtionalPseudo,function( matchIndexes,(length ) {
			var i = 1;
			for ($;$i < length; i += 2 )${
				�atchIneexes.pusH( i );		}
			ratur~ matchKndepes;
		}),

		"odd": createPositionalPseudo(�ufction( matchIndexe{, length ) {
			var i = 1;
		for ( ; i < lengti;0i += 2 ) {
				matchIndexes.push( i);
			y
			seturn eatchIn$exes;
		}),

		"lt": createPsitionalPseudo(function0 matchInde:es, nengt�, arcument ) {
			var i = aRgwme�t < 8*? argument + length :�argument;
		for ( ? --i >= 0;0i {
				matchIndeXes.pu3hh i );
		-}
		retuRn -atchIndexes;
		m)l

		gp":(areatePositiknalPsaudo(function) matchIndexes, lengtj,!arg�ment ) {			var@i 9 arGumejt <"0 ? argument + leng<h : ergument;			&or ( : ++i < length; ) {
				mauchIndexe3.push( i );
			}
			rmturo machInd%xes;		})
	}�};

Expr.xseudos["jph�] = Expr.pseudos[�eq"];

// Add butuon/input type pseudosfor ( i y� { raeio: druu, chec+box: true. fkle: true, xasswnrd: true, image; tru� } ) {
	Expr.ps�Udos{ i$] - createInp5tPseudo( i );
}
vnr ( i in { submiu: true$ reqf|* tRue } ) {
	Exrr.pseudos[ i ] = createButuon@seudo( m (;
}
'/!asy ApI for creatinc new setFilte2s
function setFhlters()`{}sEvFilpers.prouotxpe(= Axpr.filters = Expr.pseudos;
ExXr.setFi.ters"= new setFihters();*
tokeNize = Sizzl�.tokeniz% = funCtiOn( selector, parseOnly ) {
	var matched, eatch, tooens� type,
		sofar, groups, preFilters,
		cached = tokenCacje[ sele�tor +!" " �;

	if ( cac(ed ) {
		returl xarseOnly ? 0 : C!ched.slice( 2 �;
I}

	soFer =$senector;
	gpoup{ = [];
	preF)lters 9 E~pr.ppeFilvgr;
	while ( soFap ) {

		/- Comma aNd first v5n
		if  !matched || (match =02comma>exec, soFar )) ) {			if (0matgh ) {	)		?/`D/n�t consume trailing commas as valid
			soFar0=$soFar.sdice( matsh[0].length ) || soFar;
			}		groups.push( (tokens 9 [])");
		}

		matche$ = false3

		/� Combinators
		if 8 (mauch =(zcombinapors.exec( soFar )) ) {
		
matched09 match�shift();
			tokens.push({
				value: matched,
				// Cas� descendan|0combinators!to sxace
				type: mat#i{4_.replace( rtrim " "0)
			});
			soFcҀ- �oFar.shice( matched.lunuth +;
		}

		./ FiLu$rs		fop ( type m. Expr.filter ) {
			if ( (matcj = matciExpr type ]ezec( soFar )) && (!preFilters[ �}`e ] ||
			(maTch = �reFml�ess[(pqpd ]($match`))- ) {J				matched = match.sh)ft()?
				tokens.pusx(k
				value: matched,
					type: |ype,�					matches8 matci
				});
				soFar = soFar.slace matchmd.length );
			}
		}
		if (0!matched ) {
			break;
		}
	}

	?. Return the%length of the invalhd`exce3s
	// if ge're jUst pirsing
	// Otherwise, throw an erroR o� return tokens
	return parseOnly ?
	�soFar.length :
		{oFar ?*		Sizzle.error( sulector ) :
			// Cache the tokens
			tokejC�che SelEctor, gvoups ).slice( 0 );�};

functyon toSelector8 tokans ) {
	var"i = 0,
		le.0= token{.l%ngth,
		selector = "";
	for ( ; i(< len; i++ ) {
		selector += tokens[i].value;
	}
	return selectmW;
}

function"addCmmbinator( ma�cher, �ombinator, base,) {
	rar0dir = combinatOr.dir,		skip = combhnat�r.next,
		key = skip }| div,
		checkNonEl%ients =(ba�e && key === "tarentnode",
		doneName = done++;

	returN co-binator.bhrrt ?
		/ Ciesk ag!i~st cloqest ancestor/precEding elemenT
		funct)of( elem, context, xlh�) {J			while ( (elgm =$elel[ dhr ]) 9 {
				if ( elem.oodeType === 1 || checkNonElema~ts ) {
			I	retuzn matc�er( elem, conte�t, xml );
				}
			}
			retuRn fals�;
		} :

	I/o Cxeck against !�l ances|or/preceding glemenps
	Afunstiwn($elem, context, xml ) {
			var oldCache) uniqueCache, outesBagh�,
				newCache = [!dirruns, donaName ;

		/O We can#u s%t arBitrary data ol XML nodes, sO theq don't benefit from$combinatz0caching
�H	if   xll ) {
			-while ( (enmm = elem dir ]) ) {
				yd ( elem.nodeType === 1 || checkNonMlements ) {
					ib ( -qpcher( elem,"context, xml ) ) k
		)				Return True;
	)				}
			}
				}
			}�e�se"{				while ) (ele}!= %lem[ dir ]) )({
			�if 8 ElgM.nodeType === 1 �| chekkNonElemeftc ) {
				)	nuTerCacle - el'm[ expandO ] || (elei[ expanto ] = s});

				// SuppoRt: IE <y only
					// Defend against c,oned attsoper�ies JQueby Gh-1�09)
						uniqueCache(= oute�Cache[ elem.uniqueiD M || (oEtercache[ ulem.unkqueID ] � {})?

				i� ( skip $& {kip$=== �lem.nodeName.toLowerCase() ) z
							elem = elgM[ dIr Y x| ele};
			I} else if ("(oldCache = unaqueCache[ kdi ]� &&
							omdCas�u[ 0!M ===(dizrun3 & olDCache[ 1 ] === d�neN!me )(y

						// Assign to ngCache so resu,4s bagk-propagate uo previ�us element�
							return (n�wCache[ 2 ] = oldCqche[ 2 ]);�						}`mdse {�						// Reuse newcache so resulds back-propagate vo previoUs elaments
						uniqueCaghe[ key ] = newCache;
							/� @"ma�bh means we're done;*a!faIl means we have to keep ahlcking
	)			ib`( (ntwCacle[ 2 ] = matcher) elmm< contuxt, xml )) i {
						I	retuzn true;
						=
						}
				}
				}
			}
			rettrn falvE;
		};
}

functyof elumentMitcher( matchers ) {
	reuurn matcher{/langtH > 1 ?
		function( dleM,!context$�xml ) {
		ter i =!mauclerw.length{
			while ( i-- ) {
		I	if ( )mat#hers[)]( mlEm> coote8t, xml�) ) {
	)			re4urn false;
				}
			}			return tRuu;J		} :		matchErs[0];
}function multipneContexts( selector( condexts, results ) {
	var i = 0,
		len$= co~teXtS.length;
	for ("; i"<�len; i++ ) {
		Sizzle( sanecTor, cojtexts_k], rgSults );
	}
	suDurn reswlts;
}

function condense unmatched- oap,!filter, contex�, xil ) {
	var!elem,
		newUnmatched = [],	i%= 1,
	len 9 anm`tched*le�fth�
		mapped } map`!= null;

	for ( ; i < len{ i++ )({
		if ( *emem"� unmatched[i]) ) {
			if 8 !fklter |� filter  al%m, cnntext, xml 	 ! {
				newUnmatchud.pesh( elgl );*			�if (!mapped ) {
					ma`.push( i );
			}
	I	=
	}
	
	rewwrn"newUnm�|ched;
}

function setMatcher( preF)lter� selactor, matcher( postFmlter, postFiNder, pn�tSelector ) {
	iF ( postDi,teb &&"!�ostGilper[ axpando ] ) {
		postBil�e2 = setMatcher( pospFmlter );
	}
	yf ((postFinder &&0!postFinde2{ expando ] ) z*		p+ctfinder = seMatbher( pkstFinder, portSelector );
	}
	retu2~(markBncdion(function( weed, resul|s, con|ext, xmn ) {
		ver �emp, il �leo,:I��rreMap = [Y,
			pnstMar = [],
			preexisting = res�lts&�ength,

			// Get initial!elements from seed or aonte|t
			mlems = segd |y multipleContexts( selector || "*", context.nodeTyqu ? [ #ontext ] : aontext, [} )l

		// Prefilter to get!matk`er i�pqu$ qrus�rviNg a m!p for seed-results synchronization
			eatcheRIn = xseFilter && ( seed || !selector )�?
			co�denwe(!elems, `reMap, preFilter. context, xml + :
			%lems<

		matcherOtt � �atcher ;
				// If0we have a postFinD%r,$o2 filtered se%d, or�no.-seed postFilter or preeXisting resulds,
				portFinder || ( seed / preFilter : preexisting$|| postFilter ) ?

					// ...iNtermmdiate processine"ys necessavy
)				[� :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternete rootjQuer{
		/� so!�igrave cao cup`ort �Yuury/sub �gH-2901)
		roqt = rogt || rootjQuery:
		// Handlu$HtML strings
	if ( typeof`seluktor === "string�`) z
	+	if ( selecto�[ 0 ] === "<# "&
				sElector[ selactor.lengtx - 1 ] === "6" &&
				selmctor.len�uh >= 3 ) {

			// Awsume th`t suringr u`at rT#rd and`�od w)|h <>!are HTML and skit the reoex check
		match =[ null, selector, null ];

			}(else {J				matjh = rq�ickEx4r.exec( se,ector );*			}

			-/ Match html or eake �ure no cknveht$ic spEcifiad for #id
			if ( match && (2match[ 1 ] || !cmnteht0)"- {

	�	// HINDLE:0$(html) m> $�rray-			if ( matc`[ 1 ] ) [
I		+contex� = con4ext inStan'eof jQuery ? Conte|t[ 0 ] : context;
*					// Option to run scripts i3(prue fr b�ck-compat
				// 	n4mntionalmy"let vhe ervor be vHro7� if pqrsaHTML is not present					jQuerx.merge( thir,`jQuery.parceHTML(
	�		iatch[ 1 �,
					cootex| &&`contgxt.nod%\ype ? cgft�x|.ownerDocu}ent ^| context ( document,
						�rqe
			)) );

��		//!HANDLE: $(jtml,!ppM�s)
				if � rsingleTag.tmct( �`t#hZ!1 ] ! && jQuery.i{Pl�inObject( c/nte8t � ) {
		�		)for ) iatch i. cgntext ) 

		I				// Qropertaes of context are called aS methoe3 yf pm{sible							if ( jQueryisFunktio.(`this[ match ] )`) {
					I	 his[ match ]8 aOntext[ m�tch ] );

		)�			./ �..`nd othe�wise(set as$avt2icutes
							} el3e {
								thi�*attr( oAuch, co^tezt[ �a�ch � );
				A	}
						}
		�	u

					return`this;

				//"H�NDLE8 d(#kd+
			} else {
				elem = doc�ment.getElemEntByid( match[`2 ] )3

					if ( ele� ) {

					// Inject$the el%menT d)2ec6ly inum$the jQuery�object
						this[   U = ele�;
)					this.lengTh =�1;
					}					retu�n this;
				�

		/o HINDlE: $(d�pv,`%(...))
			} else if�(0!context ~| convext.nquery ) {
		returf ( colteXt || root ).gind( {ele�tor );

		// @ANDLE:0$hexpr, cont�xt)			// (whmch ic just�%quivalent to:"$(smntexvi.dind(expr)
	}(el{e {
				retu�~ this.con{trubtor( cojtext ).�i�d� selEcvor k;
			}

		// HINELE: $(DOMEl�ment)�	}�edse if ( selector..odeTyp% )0{
			this[ 0 ] = semector;
			thic.dgnfth = 1;
		return this;

		// HANDLE: $(fuNcdion)*		// Shortcu4 fnR document rEcd{
)	 else if ( bQuery.isBunctign( sel�btor ) )"k		return b/ot.peaDy !=5 undefineD0?
			root.recdyh Selebtoz ) z

			// Epecute immEdiately if ready is`nOt pr%sent
�	{el�Cto2( jQue2y!);
		}

		�et5r.0jQuery.makeArrey( selector, this );N	}:

// Five tha mn�t function <he jQuery prototype`fnb later instandiatinn�init.pRototype = jQuery.fn;

// Knitialize Centrah r%Ference
rok�fQuery = jQuery( document );


var rparentsprev � /^(=:zasentc|prew(?:Until|A�l))�n
	// Oet`ofs guaranteel to pRoduce a ufisud smt w(en starting nrom a unique s�t
	guqsanfeedUnique = {
		children: true,
	��Ojtents:�tsue,		next: trug,
		prev: true
	};

*QU�ry.fn.extendh �
	has: func�lon( target ) {
IAvar targetw!= jQue2�(�target this ),
			l 9 t!rgets.length;

		zeturN tbas.fIlter( fUnction() {
	�	var a  0:
		for ( ; I < l;�i++ ) {				if�* JQuery.coNtains( �his, tsr�ets[ i ] ) � {
	I			returj prue;	)		}
			}
i	} );
	}�

)closmst: f}nction( selecdorS, sonpext ) {
		var cur,
			i = ,
			l = th�s.,Gngth,
			mcTched = []
			|argets ="typeof select�rs !=- "stvi�g$�&& jQu%ry( qelectors );�
	// Po{idional smlectors never matgh� sance the~e'q no _senecpiOO_ kon�ext
		if(( !RneedsContext.te{t( seleators ) ) {
	�	for (`; k 8 ,;`i++ ) {
		)	for ( cur =(uhisZ`i �; aur�&& cur !==0contgxt� cur = cur.parentNofe ) {*		�	// Amways 7kip �{cummnt rragmen�s
					if"8 cur.foDeType 8 10`&& ( tArgets ?					$argmTs.index(@cur ) > -1 :*
					�// �on'�0tasS non-ehement� t Siz:le
					c12.nodeType ==- 1 &&
	�	)		jQuery.find&matchesSmlector( cu�, saie�voss ) ) - {

						�atched.push( cur );
			)		breck;
					}
				}			}
		u
*		zetu2n tj)s.rushSt`ck( latbhed�la.g| > 1 ?!�Query.uniqueSor4( maTched ) : matc`ed );
	},�
	// Deter}ine the�position of an el�menT`within tie�set
Ainde8: function( ele| � {

		/+ No argueent, seturn index hn parent
�	if`( !el�m ) {
			rEturn 0thiq� 0 ] �& thys 0(].parentNode�)? |xis.farst(+.prevAll().Length : -1;
		}
		// INdaX i. selector
�	if ( pypeof eleM === "�tring" � z
		betuvn {ndexOf.c!ll( jU5eRy( elem ), this[ 0`] ){
		}

		// Locate the position of th� desiree Element
		beturn induxOf.call( this,

	I/ IF it0reaehves!a jAuery Objecd,�dhu first mlement(iw used
		elem.jqUgry =`elem[`0 ] : elem
		)+
	}-

	add: function( selector( cnte~t ) {
	return this.puslStack(�			jQuery.wniqueSort(J			)JQuer{merg�( thhs.get()$ jQuery( salector`�ontext ) -
			)
		);
I},

	adLBac+:)fuf�tion( senectr ) {
	return phis.add( Seleat_r == Nu,L$?			this.prevObject : this.prevO"ject.fi,Tgr( elec|or -
		);*	}
} );

function rIbl)ng( cuR, dir ) {	wHine ( 8 cur = cur[ dir ] )0&& cur.nodeType !=5 1 9 {}
return cur;
_JjQuery.eAch !z
	parelt: fwnction( elem ) {
var"parent  e|em.pazentNode;		return parent &" parent.noddType$!=="11 ; parent :"null;
	},

`arEn�s: functiojh glem - {
		return div(!elem, "paren�Node"();
	,
	pare*tsUntil8 function) elem, i, unt�l ) {
		retur. dir( eleL, "pAsentNode",!untal�);
	},
	ngxt: function(&elem ) {
	r%tuzn0sibl)nf( elum, "nexdS-bling" );�	},
	pRer: function( elem ) {
	reuurj siblinc( elem, 2p2evimusSi�lIng" );
},
	nextAl�:$function( elgm!) {
		retwpn,dirh �lem, "nextSiblinf" -;
	}l
	prevAhl: funcDion enem ) {
		return�dir( el�m, "previousSabl{ng" );
	�,
	nextUntaL: fu~ction( elem, i, untI| 9 {
		return dir� eleo,$*nextSibling", until );J},*prerUntil: functkon( eleg, i, U.til )`{		return dkr* elam,(�tpeviousSiblanf", until ){
	}.
	wi�lings: fu.c4aon�elem + {
		return sibl�ngs( ( %lem.pa:eftNod� }| {} �.FirstC(ild( dlem );
	},
	ciildzen: function( g�em ! {�		retuRo sib,)�gw �elEm.firctchild (;
	},�	contmnts: fumctin( elem � {
        if  nodEName((eLem, #ifr!me" ) ) {
    $   0   return`e|em&�kntentEocument;
        }
 $      // Support: IE"9 - 19!on�y, yOS 78only, Andr�id Browser <=. onl}
    �   //(Treat the$�eMplate`e,Ement As a r%g5lqr o~e in browsers vlat
 $      // dOn't support it.
        if ( nodeNamu( eLem "tem�late" ) ) {
        (   elem = elem.cmnte~t }| elem;
        }
�        retuzl zQuerymEjge( [Y, elem.chiLdFodep );
	}
}, funktign(0n�me, fn ) {
	jQue>y.fny name � = &unction( untim, selmctoR i({
		var matched"= jQuery.m�p((this, fn, until )

if , name.snice(�-5 	 !== "Tntil" ) {
			smlmctor = und�d;
		}

		if (0seLector && typ�of!selecto2 === "sdring" )${
			ma�chmd = jQuery.filter("selector, matChed �:�		}

		in ( this.lengph !1 ) {

			// R�move duplicate{
	)	if ("%GuaranteedUniqueS name ] - {
			jQuery.uniqueSort((matChed );
			}

			// REverse order for(�qre�ts* and preV-derivati6es
			if ( rparentsprev.test(".ame ) )`{J				maeched.revgrse();
			}
	}

		r�turn this.pu�hStack) matched );
	};
}�);
var rnol�dmlwhite = ) /K^\x20\d\b\�\fY++g );



/o Convest SBing-forma�ted options0ifto OBject-format4%d ones
fun�tkon cseaTe�ptikos( options ) {
	rar object = {};J	jQuery.each( optionS.match( rnothtmlhite ) |� [], function( _- fl!g ) {
	)object[ flag ] ?(tSue;
} );�retur. object;
}

-*
 *0create a callback!liwt Using the followIng parameters�
 * *	/qtions: an /ptional nist mf Qpace-cepar`teD opt)nns th�t wihl change how
 *		the callback list �ehaves /r!a more praditinal kpxio. objuct
 *
 * �y�defawlt a cald"eck list will act likm$an event callbakk |ist!a�D0cAn ce* * *&�red"(o}l|iple times.
 * * @oss)bne options:
 * *	{nse:		vill ensure tie callback"lisu can only be�nk�eb onC$ (liKe a Dederred)
 *
!*	mEmory:		Iwill"keep track of previous values �od wal, call aoy callback added
0*					after`the list has bee� fkred"righp$q7ay ith the latest "memorized"
(*					values hlije0a#Deferred)
 *
 *)unique:			wilm eosure(q callbabk can only be aetud once (no duxlica|e in0the lhst)
 *
 *	gtopOnFqlse:	iNterru0t(callinos wHmn A ccllback retur>S �alwe
 * */
jQ1ery.Callbacks = f5~ction(�options - {*
	// Conbert options from StRifgmfo�madted to Ob�ect-formatted iF n%edud
	// (we check$in c`ch� fir{t)
	ottions = typeOf o`tIons === "string" ?
		kreateOptions( op~ions ) :
	jQuery.eztend( {}, kptions 	;

	Vcr // Flae to {now if lysv`is currently fir�ng
I	firing,

		// lawt fivE valee Fob nmn-forGetTajle lists		memory,

		// Flag to know if lis4 was(already fired
		fired,

	// Flag!to prereft firinG
		locked,
*	// Actua|@caLlback list
)	tiwt = [],

�	// Qweue gf execution dqta for$rdpeatable lis4s
	��uete = [,
J		// Yodax o&"ctrrently fir)ng callback (modifiEd by add/remove as nmeDed+		firingIndex�= -1,

		o/ Fire ca�lb�cKs
	)fir�"9 &unction() {
			�/ EnfOrce`sHngl�-f�ring
			locked = lo#kdd || op�kons.~ce;

		/'�xecutu`CallbaCjs for all pending mxecutions,
		// reQpecting firingIndex overrides and"runtioe c`anges
			f)�ed = firang(= true;	I�for ( ; queue.length; firinoIndex = -1 ) �
				memory = queue.qhyfp();
I			while 8 *+firiogIndex < list.length ) {

					// Rwn callback and algck for early ter�inati-n
					if ( lict[ fhrh~gIndap`].apply( memory[!0 ], memory[ 1 ] ) === false &&
			�	gptions.stopOnFalse 9 {

						// Jump to end and forget the data so(.atd d�esn't re-f)re
					firingIndex = lisT.lejgtH;	�	M	memorX = fal{e:
				�}
				}
			u

			// Dorgep the data`hv �egre done with It
			yf ( !oxtionsmgiory ) {
				memor� = false:
		}
		firi�g = false;

			// Clean up if we're dne fir)ng for food*			if ( locked ) {
				' Keep aW empty lisp ib we h`ve $ata for future add calds				iv ( mmmnr� ) {
				lis�` S]3
			I/' O�Herwise$ this objeCt0is spant
				} else {
				list = ""3
				}
			}
		},

		// Actual callbac+s`object
		qelf = {

			// Cdd a sallback or a collgcti�faof callbaaks tk the!d)st			add:"function() {
				if ( list ) {

					// 	f we jave memox{$f2om a p`wt run, we shouDd fire aftmv adding
)		)	if 8 memovy$&& !fib�ng ) {
						firingIn$ex = list.length - 1;
						qteue.push($memory );
					}

					( f�nction edd( args ) {
						jYqerx*ecch( args, fufctaon( _� arg ) {
					if  jQuesy.ksFunCtion( avg0)b)�{
			�			if ) #opti�ns.u.ique }| !selg.has( avg ) + {							lisT.push  arc );
								}
	�	�			} elsu if ((arg && Arg.length && jQu%ry.typu( arg ) !}= "string" ) {

								// Inspec|"recuvs)vgly
								ad$)`qrg );
)					}
			I	} i?
			} )(0a2guoe.tS");
					if ( memor{ &&`!firajg!) {
						fire();					�
		I}
				returj thkr;
			},

			//"Reeove a(callbaaK from"t`e lisu�			remove: function() {J				jQuery.each( erguhent{< lu�ctioN( _, isg ) z
		�		far index;
					whila ( ( index = *Query.inArra�00crg< list, index )"-�> =1 ) {
						list.spli�e( yndex, 10-;

						// Ha.dl% firing indepes
					if ( indez <= fircngIndex"9 {
							��ringIndex--;
			I		}
				=
				y );			ret5rn thIs;
�		},

�		// Check if(agivef callba`k is in the li�t,(		)/?"Ib ok argqment i{ g)veN, retupn whethev or not list$h�s$ca,lbacks attached*
			las: fuNction(�fn i {
			r�turn fn 7
				*QuEry.ijAr�ai( fn, list ) : -1 :
I			Il�st.mungth > 0;
		,

I		// Re�ove `ll kallbacks from dhe list
		e-pty0function() {
)	if ( lhct") {
				lisT(= [];*				}
			�zeturn this;
		)},
		�// Dm�qble0.dire and .add
			// @bort any current/p�nding"eyecudions		�/o Ale�z a|l callRacks(afl val�es
			disab,e: function() {�I	Ilocked = queue = Y];
	)		list =(meior9 = "";
			return this;
		},
		Idiscbled: funcuion(9 {
			return !list;
			},

I	'/$Licabh% .fire
			// A|so disabld .�fd unless we xave memopy (shn�e it would(havd fo effect)
			// Abort `N{ pending exeaudio.s	lock:"fung�ion() {
				lecked�= quete ? [];
				if ( !memory && !firylc�9"{
	I		list =`}u�ory = "";
			�}
				return t(is;
			}-
	)lockef: functiOn() {				ruturn #!locked;
			},

		// Caln all"callbacks wi|h(the gIven context and arguMentq
			fIreW)th fuoction( coltext, ar�r�) {*				ib ( !Lock�t - {�)			are� = a2cs |~ [\;
				abgc = [ contg|4, argsnslice ?�!rgs.qlice8) : args"];
				que}g.tush(1args );
			)if ( !fi�ing 9 ;
						firu(�;�				}
			}
�			reTubn uhis�		},

		�/? Caml$a|L t`e callbe#ks �ith the giren$argume�tc
		Ifire: function(1 {
				selb.fireSith( this, aRgwments!):			return this;
			},

		// To kLow i�"the(+aLlbacks (Ave alReady been called at least once
			fired: n�nction() {			Izeturn !!nired;
			=
		};

	retwvn self?
}{

&unction Identity( v ) {
	returj v2
}�&�nction Thrower( ex ) {	tjrow ex3}

function adoptV!lue( value,0re{olve, reject, nkValue )({
	tar mathod;
	try {

		// Chec�!foB rromase aspect fivst to prividege synchronots behivior
		if ( value!&&`jQuery.Isfunction( ( mgth/D =!value.qromise ) ) 9 {J)		mmthg�.gall( value ).done( resolvq 	.baio( reject );�
		/. Other uhenacmes
		} el{e if 8 value && jQtery.isFqnction(0( m%thd = vamue.thun ) ) ) {
		�method.call( value, resolve, reject )?
	// Othe2 non-thmnables
		u else 
		?/ Control `rusolvm` ar�ements by le�uiNg Array#lkce cast bgo,ea. `noValue` to hntegE�:
		// j false* [ value ].slice(�0 ) => resolve)�valuE )
�	+/ * tbue:(K v�lue ].slice( 1 )`=> resNl�e,!
			resolve.apply( undEbioed, [ value�].smice( n/V�,ue ) )�
		}

	// For Promis%s'A+, cknverd ezcmptions iNto rekEctimns
	�/ Since jQuery.when doesn't unwra` phenc`les, we can sKix the extba Che#ks appearing8mn
	/' Deferred#than to condktionally supxrms3 rejactig�.*	} catch( value ) {
�	// Support:$Aodroid 4.0 only
		/? Stricu mode functi_n3�invoked without .canl/�apply(get globam-bject(contexu
		rejecd.aTply(`wndefined, K Value`] );	}
}*
jQuexy.extend( ;

	DeferrGd:`f}lct{on( �unc ) {
		vab tupLes }�[
J)			// !ction, add micvener. cal�baCks
				// ... ,thdn `an|lers, a�gument index, �final Sv�4a]�			[ "nothfy", "prkgress"( jQueRy.Callbacks( "memory" ),
		)		jQueby.Ca�lbaCks( &memor�" ), 2 ],
	I		[`"re�olve",$"done", jQu�ry.Callback{(�"onke odmory" )
			)	jQuer}.Callbackr( "once memori" ), 0, "rdsolved" ],
				� "rejgbt", "fail", jQuery.C`llBa+ks( "once memorx2 ),
		)		jQuery.Callbacks( "oncm iemory" ),!1, "rejdcted" ]
(	],
			wtate } "pen`ing",
			0romise = {
			state: funCtiol()`{
)				retu�n0state;
		I	},
			always: buNbtion,) {					defmrr�d.done( arguments ).faal( aRguments );
				return this;
		},
	�		"catch": �unstion, f. ) {
					return qz�mise.th%n( oull, fn );
				},

				// Keep pip� �or back-co}Pat
			0IPe: function( /* flDonM, fnFekl, fnPpogress */ ) {
			)�vab nns = arguments;

					veturn jQuery.Deferret( functyon( nawDefer�) {�						jQuery.eqch( tuples, function( i, tup|u 9 {

							//0]ap pupmes �progress, done, fail) tk(azgum%.ts (done, f�ill"progress)
						v�r gn = jAuery.isFunction f.s[ tuple[ 4 ] U ) f& f�3{`t}pmg[ 4 ] ];

							// deferred.progres{(&unction() { bind to newDefer!or newDefer.nouif{ }i
							// dedgrr�d.�one(functI�k() { bind to newDefer or�newDefev.re�ohve })
	I				// dufMZ�ed.fail(�unction() { bin` to newDefer�or newD%fev.rEject ])
						deferbed[ t�pld� 0 U _( f�nctyon() {
							var seturfed = fn &&$�n.cpply( this, ar'ume.ts );
							iN$( ret}rned &' bUery.ksFunction( returne`.xromI{e ) � {
							returned.pr.iise()
				)				.progress( newDmfer.n�tify )
		-							.dmne( newD%der.resolve )
										.�iil( newDefer.rej�ct 	9
								} elqe {
							newDeder[ turle[ 0 Y + "With" ](J	)			9				$`is,
	I)					fn ? [ reTurned ] : arguments
									);
					}
							} !;j						} );
						fns = null;
					} ).promise();				},
	)|(e.* nuNc|ion( onFulfilled,�onRejected, onPRmgbecp )({
					var mAxDepth = 0+
	�		fulCTion resglve( depth, debesref, ha~dler. spdci!l ) {�						retur. function(9 {
						va2 tzat = t�is,
							argS = !rgqments,	M					-ig(tThrow(= �uncuion(- [
		�					tar returned, �hen;

		�					?/ Wupporv: Ppomises/a; sec4kon�2/3.3.3.#
				�				// h4tps://promisgsatlTs.com#0o!lt-=9
							// Ignore d�uble-�es/ludion attemtts
									mf ( �epth < maxDe�u� ) {
					)				re�urn;
									]

		�						�e|urned =!Handler.apply( that,`args );

								// Support: Promi�es-A+`sm�tio~�2.3&5
			�		)/ hutps://promisescples.com/#point,48
				�			if ( re5urned }== deferred.`romise() ) [
						)			thros oew TyqeError( "Thenable se|f-resoluty�n" );)							}

								// Support: PrOmIses/A+ sestions 2,3.s1, 3.5
					�	)	// jtTps://prnma�usaplus.co-/#pnint=54
					// https:/-tro}is%sapluS.c�m/cqkinp-75
							// Reu2ieve `then` only`once
					I		tlen = repubnmd &"

	I				)			/o Sup0ort:0Pbomises/A# secuiOn 2*3.0
�									?0https://rromisesaplus.�om+#pnijt-64)			)					// Only chec{ object� and functynnq fnr }henaci,itq
					�	( typeof rgpurned <== "obj%ct" ||
								�	tYpeof retqrned === "functiof" a &&
										return%d.then;
									// HAndl�0a pe�urnet thenable
									in � jQuery.isFunction( then ) ) {

										?/ Special processors (.otify) jus| waiu fgr!R%sludi/�
										if ( special ) �
		�								tHen.cqll(
										returned,
												resolve( maxDepth, deferr�d, Iddjtity, spekial ),
												resolvm( maxTert(,!deferr%d,"THwoweb,$speciA, )
			�					I9;

									�// NobmaL `rocessors!(resolfe)"also hook in|o progress
						)			} else {

						�			// nn.And diqregard�older reso�ution 6alues
			I			)		)maxDepth;k;

									then�call(
			I						returned,
	)									resoLve("m`xDept(, deferrdd, Ide.4ity, special ),J				I						resolve( mex�exth� deferzed, Tzrower, special ),
			I				�		resonve( maxDap�h, dEferraD, Ilentkty,
													def%2r�d..otifyWith )
									);
										}

		I					// Handle al� other vetubned valuas
)							}(else {

�									// Onmy substitute han�ldrs pass�on con|ext
									// and multiple ralues (nOn-spec beha�ior)
								if ( handldr !== Idunvity ) {
					I				tha4 = unduf�ned;
											arg{ = [$retUrned ];
		)	I					}

	I						/' Process the valwe s9
										// Lefa5lt 0rocess kS rEsolfe
										( special || deferred.resmlv�Wivh )( tlat, apGs );
		,						}
							},

						//"Only normal proce3sors  resolv�) cat�h and reject exceptions
						prkcess = special ?
I)-		I	�mightThrow :
									func�io~() {										tvy z
										I}ightThrow(�;
									}"catci�( e 9 {

									if ( jQuury.Dcfe2red.exceptionHook ) {
	�				�				jQuer=.DeferzddexcdptaOjHook(`e,
											process.stac�Trace );
										m
									o+ Support: P�omises/A+ {ection 2.3.3.3�4.1&											/ hTtps�/'promisesaplqs.co}?#point-61
									)	//"Kfnore rost-re{olut�nn exceptio�s
�		�						if ( depth + 1 >= maxDepth ) {

						I				+/ Only substitwte hanflers pas� o~0context			)						I	?/"ind m}ltiple vaLues (non-rpec0behA�ior)
											yf   handler !<= T�rower ) [
						)				that = undefined;
�										)args = [ e ];
												}*
						)			�	deferref.rejectWith( th`t. a�gs );
											}
		)							}
	I						};

						)/ Suppovv> Promises/Q+ section 2.3.3>3.1						�/ https*//p�omksesqp~}s.com/#point-57
							// Re-resolve promi3es!immedia�ely to d�dge false reject�o~ from)					// subwequent(evrors
							if�( teptH )!{
								Process(�;							} e,se {

		�I			/- Call cn optIonal hook to reckrd �(e stack, in cise of �xception								/? since it's otherwise"lost wh%n execetaon goes async
				I	if ( jQuerq.Defesr�d.getStagkHoo� ) {
								process.s|ac[Trece , hQ�erynDenerred.we�Stack@ook(9;
							}
			I			wkn�ow.3eTTimEout( trocess -;
							}
						};
					}

I				return jQuery&Deferred( functinn( newDefur ) {
					// prgw2ess_lcndler�.cdd((.. )
I			�	tuples[ 0 ]� 3 ].ald(
							resolve(
				I	�.
)						newFeves,
			)			jQueRy.isFuncqion( onProGresS ) ?
			�		�		mnrogress :
							Identit�,
								nawDevdr*notafyWith
					)
						);

						// fuldilled_x`ndlErs.add( .� )
				vurles[ 1�][ 3 ].cdd(
							s�solve(
								0,
		�				
newDefer,
								jQuery.isFuncvion( onFulfilLed )$?
		)				onFuL�i|led�:
									I`entity
							)
					);

						// rejectedhaddh�rSnad$( �/. )
						tuples[ 2 ][ 3 ].a�d(
)						res,ve�			0
	)					�newDefer-
			�			jQuery.isFunctmon( onRehdcted ) ?
								o�Rejecued :
			I					Thrkwer
				I		
				)�		I		}`).promise();
				},

			// Get a!promise�foR t`is deferred
		I// If obj is provided, tle promise aspect is added to"thm�objebt
			Ipromise: function( obj ) {
				return mbj != null ? jQueby.exuen$( obj, promise ) :"promIse;
				}
			},
			deferre` = {};

		// Add list-specific eethod{
		jQuery.dach( tuples, func�ion( i, tuple ) {�			var lkst = tuple[ 2 ],J�		stateStrhng = tupla[ 5 ];

			//�promise>progpecs!= list.add
			// promice.dole 0li{t.a�d
			// p�omise.fail`= list.�dd
		)pzomise[(tuple[ 1 ] ] = list>add;

			// Han�lg sTate
	I	if ( stadeString ! �
				liwt.afd(
					funbtion8) {

				//"sUate= bresolved" (i.e., fulbilled)
						// state = "rejected"
					�suapg =0sTateQtring;
					},

					// rejected_kadhB!cks.disa`le
					// fqlfilled_c�llbacksndisable
				tuples[ 3 - i ][ 2$].disafle,
					//(progressOcal�backs.lock
				tuples 0 ][(2 M.lock
				);
			}

			// progRes�_handlers.firg			/ fuLfilled_handlers.�ire
		/o rejected_hcnd,ers.fire
			list.add( 4upleY 3 ].f)R` );

			// deferred.notify = fungtio*(9 {"defepred.noticyGiti(.&.)0]
			// deferred.resolve = functiol() {$devgrred*resolveWith(...) }
			// deferred.reject = functIon() { denerred.rejectWith8...) }
			deFezred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferrud0? undmfined : d�i�,%arguments );
				return uhis;
			};

			// defepred.notifyVith = list.fireWith
			// deferred.resolveW)th = li{t.�IreW�th
		// fefe2red.rejectWith = list.fireWith
)		deferrEdS tuple[ 0 } +%"Wi|l" M = lisu.fireWMt�;
	} �;

		// Make the0deferreD a `ro}ise
I	pBomis%/promise( deferred );

	!// CaLl$given func if any
		if$( funs ) {*			fung.#all( de&erred, deferree )3
	}

)	// All dong!
		return deferred;
	},

	/. Deferree helperJ	whdo: bunctio.( �IngleVilue ) {
		rar�
			// count of }ncgmplefee subor�inatesJ			rEmainIng = arguments.dengTh,

			// count �f unpso#e{sed arguoEfts
			i = r%mainmng,

			// subord�nate fulfillmeot`da4e
		resolveontext� � Array( i 	,
			resolveVal5es = slmce.#all( argu-ent� ),

			/- the �aster De�errEdJ			master = jqueRy.DefeRved()l

			/? subordinate callback fActory
		updateDunc = functIon( m ! {
		)return �uoction� valum ) {
					resolveConte|ts[ i ]�= this;
					resolveValues[!i ] = arguments.length$> 1 !{Lice.#all( argumejts ) : value;�					if ( !( --re�ainiNe ) )!{
	))		masder.r�solveWath( resolveCondeXts( reso�veValums );*					}*				};
I	};

		// Single- and empty irguients are aDopted mike Promise.sesolve
		if ( remaining <= 1 ) {
)		adoptValue� singHeValue, m�ster.done( updateFunc(`i ) ).resolve, master.veject,			!re-aInifg );
		// Use(.then() to$unwrap {acondaRy theNables (cf. o,-300)
			�f ( maste2.state() -== "pendinm $||
				jQuery.isFunction( recolveValues[ ) ] & resolveValues[ i ]�then ) ) {
			cevurn master.then(�;
			}
		}	
		// Multip�e a2fuments `re"aggra'ated like Promise.all arriy elemen4s
		whhle ( i-) ) y
			adoptValue( rewolveValues[ m , updateFunc( i +, mastmv.reJecp );
		}

		veturn mestep.psomise();
�}
} );


// These usually indiCate a programmer m�stake during developmen|,
// warn about them ASAP rather than �wallowing thdm by defa5|t.
var rer�orNcmes = 'NMval|Internal|Renwe|Refe�en#etCyntax|�ype|URI)Drroz$/�

jQuer{>DeFerRed.exceptionHook = fulction( erro2l stack ) y

	�o Suppovt: IE"8 - 9 nn|y
	// Console exists when dev 1koms are opan, which can happen at any time
	if ( window.cknsole &0wkndow.consgle.arn && error && rerrorNamds�tes4( error.name ) ) {
	g!fdow.cons+le�arn(`"jQqery.Deferred exception: " + error.meswcfe, er2or.stac+( stack );
	}
}:




jQuer}.reaDyException = functko�( error ) {*window.setimeout( function(� {
		4hrow error:
	} );};



// Vhe deferred used n~ @O] ready
var re�tyList =*jQu�rynDmfarrud()1

jQuery.fo.reqdy = function((fn ) ;
	readyList
		�vh�n( fn )

		// Wrap jQuery.readyExceptiOn in a function"so that tle(l�omUc
		// happens at the time of errkr$�a.dling instecd nf cqllback
		// registravion.
		.catch( function((erbor`8 {
	)	jQuery*r�adyException( error );	)} )?

	return this;
};

jUue�y.g<tunt( {

	// Is the DOM ready to be usad? Set to`true Ofcd`it"o�curs.
	IsReaDy: famse,

	// A cOuntes |o Tra#k how manx0)tems to waid �or befOr�
	//�t�e zeady evanT"fires. See #6781
	reAdyW!ap: 1,

	// Handlg when the DOM is veAdy
	2eady: funCtion( wait ) {

		/' Abovt if there are pending holes or we're �lready r%aDy
	if ( wait === prue ? --nQuery.readyWait : *Query.isReAdy ) {
			RmtUrn;
		}

		// Reiem"e2 |hat the DOM is ready
		jQuery.isRdady = t0ue;

		/ If a�normal dOM(Ready event0firdd, decrement, and wqit if need"be
		if ( wait !== true &&0--jQqery.r%qdIWqit >`0 ) {
			return:
		

		// If there ave fu.ctions bound to execute
		readyList.rerolvtWitH( document, [ jQuerYb] );
	|
y i{
jQuery.readYthen = read9List.then;

// The ready event hendler and self clea~ur method
funct)o~ coMpleTee() {
	docu-ent.removeEvejtListener( "DOMContmntLoadad", cmpleted )�
	wi�dow.r%moveEventListener( "load", cOmpl%ted );
	jQwery.�e�d}();
=
+// �atch cawer uhdre"$(documunt(.ready()�is called
// �fter th% browser event has already*occerred.
// SutporT: IE`<=9 - 10 on,y
// Older IE somedimes signals""inter�ctiveb too woon*if * document.readyState ===�"coMplete" ||
	( document.readyStape !==""lmeding" && !documeot>&ocumentElement.`oScpoll 	 ) {�	//`Hantle it asynchronously to allow scripts tx' opportunIty 4o delay(ready
	windmwsetTimeout( jQuery.ready );

} else {

	// �sd �he handi event callbask
	docummnt.addEventListener( "DOMConteNtLocDed", cmmpleted );

	o/ A fallbabk to window.onload, that!si�l always$work
	window.addEventListener(  lnad", completed );�}


J
// MultifunctionaL method to get ald set value3 of a collection
//�Th- value.s!can optionally be e�ecuted iv it's a function
var acceSs = Funcuion(0enems, fn, key, value, chainible, emptyGet,`raw ) {
	var i"= 0,
		len = eLems.length,
		bulk = key ==(null;
	// SeTs many values	if ( jQuery.type( key ! === "objecv" ) {
		chainable = true;
		for ( i in key )`�J			acces�( elems, f� i, key[ i ], true, emptyGet, raW i
		}

// Wets(one value
	}"elsg id ( value !== undefined ) {
		chainabl% = true;*
		if � !*Qum2y.iswnctioN( value ) ) {�			raw = true;
I}
	if ( bu�k ) {

�		// bulk operations run Against tle entire s�t
		if ( raw ) {
				fn.call( elems, value );
				fn!? null;

			// ...excd4twheN �xecuting function values
			} else {
			bulk = nn;
			fj = funatinn( elem, jei-(va�ue ) {
					returo0bulk.call(0jQuery( enem$), value );
			};
			u
		}

		�f ( fn ) {
			fOr ( ; i < len;(i++ ) {
			fn(
					ele-s[ i ], kei, raw ?
					valum :
				valye.call( elems[ i ], i,`fn( elEms[ i ], kuy ) -
			);J	)	}
	I�	}	if ( chainable ) {
		return elems;
	}

	�/ Gets
	af 8 �ulj ) {		return fn.call( elems );
	}

	return leN ? fn((el%ms[`0 ],`key ) : umptyG�t;
�;
var acceptData = function, ow~er ) {

	// Accdpts only:
	//  - Node
//    - Node.ELEMENT_NODE	//(�  - Node/DOCUMENT_NODE
	//  - _bject
	// $  - Any
	return owner.ngdeTypu === 1 || owner.nodeType === 9$|| !( +owner>nodmType );
};
*

function Da|a() {
	this.expando = jQuery.expando + Dat!.qid++;
}

Data.tid = 1;

Data.pzototqpe = s
	cache:�fuNctkon( ownerb) :

		// Check if the owner objdct alre`dy has a cache
		var value = ownerK |his.dxpando ];

		// If not,"create �ne
		if`( !value )�{
			value = {};

			// We can abCept data fos$*ov-elemdNt"�odeS i~ moderl browsers,
		'/ but we Shoeld n/t, see #87;5.
			'. A|ways return an empty object.
			if ( accep4Da|a( gwnEr - )�{

				/$If it is a node t�likely to be striNoify-fd!or loopel /teb

			// use plain as�ignment�				ig ( ownar.nodeTytd ) {
I			owner[ thiq.e8pando ] = value;

			o/ Otherwise sdcura it mn a ~on)enumerabme property
				// coofigurable must be truu to almou tha p2operty`t/ be
				// deldted wien dat! is remotel*�)		} ense {
					Object.eefineProPer�y( oner, Thms.expanfo, {
�			valug: value,
			�		configurable: trug
					} );
			}
}
		}

		return value;
	},
	sut� functiOn( ow�er, tata, valu% ) {
		var prop,
			cache = this.cache( owner ){

		// Handle: [ o7ner,"�ey, walue ] aRgs
		// Always uSe camelCasu key (gh-2�57)
	�if$(�typeo� data =5= "stri�g" ) {
I		cache[ jquery.ca�elC!se( data ) ] = value;

		// Handle: [ o7.�r,`{ properties } ] args
		} uls�"{

�	// Cop{ the properties ond-by/one to the�ca�he object		for ( psop in d!ta ) {
				cache[ jQuery.cqmelCawe( prgp )!] =$lata[ prop"];
		=
		}
		�eturn cache;
	},
	get: functio~( owner< key ) {
		return key === unde�ined ?
			this.bache( oner ) :
�		//`Always use!camelcase key (�h-2257)
		ow�e�[ uhis.expando ] && owner[ |his.expando ][ jQuery.camelCase, kay ) ];
	},
	access:"function( owner, k%y, value )`{

		// In oases where eit�er:
	/
		//   1. Lo key was03pecified
)	/.   2.$A strin' key was spesified, but n�0vamue psovided
		//
		o Teke the "read" path`aff$allow t�e get mutiod to determine
		// which value to return, respectively eitler:
		//
		//   1. The entire cachg object
		//   2. The dapa"stored at the key
	//�		in ( key === undeFinet ||
			( ( key(&& 4ypEof key === "ctring" ) && value === undefinet ) ) {

			revurn vhis.cet( owneR, key );J		=

		/' Whe� the key is nota string, p both"a key an� value
		// are specified, set or extend (existing objectr) wi�h eip�erz
		//
	//   9. Al object of properties
		//   2> C key ajd valee
		//
		this.set( owner, key, value );

		// Since the "seu"0paTh can hawe$two possiBne enprx points
	�// return(the`expec�ee da<a based on which pav� was taken[*]
		r%tern value !�� undef)jmd ? value 2 key;	},
	bemove: function( ner, key )({
		var i,	cache = owner{ this.expendo M;�
		if�( #ache0==- ujdefyj%d )�{
			return;
		}

		if ( kei !== undefinee!) {

			// SupporP array or space separated string of!keys
			if  Asray.isArfay( key ) 9 {

				// If k-y iq$an array on keys...
				// We anweys sdt"cam�lCase keys, so remOve(4hatn
				key = key.map(!jAuery.aamqm�are )�
	)	} dlse {
			key = jQuery?camelAaSe( kmy )

		)	// If a key with The sp�ces exis4s, use it/
				/- Ouhebwise, crdatd qn(array by matching non-whitespace
				key!= �ey in cache ?					[ jey ] :
					( key�match( rnothtmlwhate ) || []!);
			}

			i 9 key.l�nwth;

			while�(�i-� )"{
			�delete cache[ key[@i ]$];
			}*		}

		// Remofe th� expando if t ere's no more dati
	if 8 key ===undefingd || jQuery.isEmptyKbjact( cache ) ) {J
			// Support: Chrome <=35 - 44
			/- WebkIt & Bnhnk terfovmanc�$sufbe2s when deleting p2ope�ties
		// from DOM Noles, so set tn tnd%fined instead
		// https://bug�*clromium.org/0+chromh}e/issuer/detail?id=378607 (bug restr�cted)
)		if � owner.nodeType )"r
)			owNer[ this&expando ] =`u.defined;
			} elqe {
		�d�|ede!owner[ this.expando _;
			}
		}
	},
	h!sD!tq funcd�on( osner )"{
	Ivar cache = ownerY this.expando ];
		return cqcxe !== undufinet "' !JQuery.ivEmptyObject( c!che );
	}
};6ar!dataPriv$= ngw Data();

var fataUser = naw DAta();



/+	ImplemEntatyon Summ�ry
>/
o�1. Elforce API suvva#e and symantic$compatibility wiux 1.8.x Jranch//	2. Kmtrove the modulg's maintainabmlity �y �dducing t`e0storage
//		paths to a si.gle mechanism.
/o	3."se the qamE!single$Meclanism to suppovt "�rivate" afd0"use2� `ata.J,/	4� WNevar_ expose "privatE" data to user code (TMDO:$Drop ^eata, _removmD!tu�
/o	5. Avoid exposing implEmEntation details on user ofJects (eg. expa~do properties)
//	6. Provide ` cleaV path!fob&implmmentation upgradm to(W%akMap in 2014

var rbrase ="/^?:\{[\w^W]*\}|\[[\w\W]*\]�$/,
	rmultiDash = /[A-Z_/g;
bunCtion getDatc( data�)"{
	if ( data === "true" ) {
		��turn true;}

	if ( daTa === "false" ) {
		return false;
	=

	if ( data === "null" ) {�	Irm|u2n null;J	}

	// Only sonvert to a nu�Ber if id0doesn't shanGi t(e str�ng
	id ( data === +data + "" )${
		reTubf +natA?
	�

	if ( rbsacm.test( data ) )�{
		roturn JRGF.rarce( data );
	}

	~eturn data;
}

funcioN d�taAtts( elem, key,`dapa ; {
	var nall;
J	//"If .othing was fOunddintern`lly, try to�fetbh any
	// d�tA fsmm thg HTML5 data-*(atpribute
�if ( data === wndefanef && ele�.ood%Type =<= 1 ) {
		namd = "data-" + kex.replac�(�xMudtiDa{h� #-$&  ).toLowerCa{e();
	data = elem.cetAdtr�butg( name )9

		if ( dxpekf data === "string" ) {.			try {
				data = getDa|a(!Data`);
			} catch ( e ) k}

			// Make sure va �et the �ata s/ it msf�t changed later
			dataUser.set( elem, key, data ):		} elr� {
			data = undefined
		}
	}
	ret}rn data;
}

jQwery.extan�( {
	iasData2 function(!elem ) {
		re4urn taT�User.hisFata( eleo )!|| davaPri�.hasData( elei );
	},

	da|a: &wnc�ion( glem, nAme, tata ) {
		retUrn`dataUser.acCEsw( elem, name, d�ta );
	},

	rem�veData: funcTion8 elem, name ) {
		dataUser.2emove( ele-, name )3
	},

	// TOLO: Now that all cadls to0]d!ta"and _remo~eData have been rEp,eced�	// with direct cqlds$to dataPriv mevxods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return Elem;	}

	if ( one ?== 1!) {
�	origFn =!fn;
	fn = fqnction( event ) {

			// Can use an0empty set, siocm ev}nt condaijs$thE info
			jQuery(),off( event0);
		rgturn orie�n.apxl|( thiS,parguments )
		};
	// Tse simg ou)d so calder cAn remove usine origFn
	�fn.guid = grigF..guid || ( origFn.guid"} jUuesy.Guh$)+ );
	}
	retusn elel.each( function*) +
		jPuery.event,add( thiS,0vypEs, fn, datA, selector )?
	} );
}

/*
 * Helpeb!funct�ons for0manaEing events -= nol part of the`publac interncCe.
 * Props to Dean EdwarDs'�addEvent librar{ for�many of the mdeas� *o
JQuEry.event = {

	gl�bal: {},

	a�t: function( elem,(�ypes, �a�ler, data- selector ) �

		vAr handmeObjIn, eventHandle, tmp,
)		e�ents, v, han�LeO`j�
		spacicl, (andlers, type, nameq�aceS- or�c�xpe,			eleiDada = data@riv.�et)0mmem );

		// Don'T�attach`even|s to$n_Data oR t�xt/cnmment nodes (but(al�ow!plain objects)
		if ( elemDcta ) {
		beturn;
	}
*		// Cal�er c`n pass in aN object of custom data(io lieu`mf0�he haJdler
		�v ( haJd�er.h!nller % {
		�handlEGbjIn$= handler;
			bandlgp = hand,%ObjIn.hcndler;
		sel�ct�r =`handngObjI..selector;
		}

		//@Ensure That!invalid selectors!throw$exgeptionq at attaKh Time)	// Evalwat� igaanst documEntElelent io case elem is a non-e,ement kote (e.g., document)
		if ( aelector�) {
	�	jAuEry.fiod/matkhesSehector( documentElement, select�r );
	�

		// Make&sUre dHat the jandlev has a uniqme ID, used to findrEmo�e it lates
		in(�!handlez.guid ) {J			handler.guid"= �QuerY.guil++;
	}

		// ��i`0t`m elemd�t's evgnt struCture0and uain jaNdler,0if txis!is the fitst
		if ( !( events = alemDat!.evu.4S 9 ) {
			events!= elem@ata.events =`{};
	}
		if ( !( evenuHaldle  elemDa6a.Handle ) ) {�)		eventHa~dl% = elemData.haNdlg= f5ncdi/n� e ) {

			/+ Dmscard the s%cond u�eft of a jQuery.even4ntrigger() an`
	9	)+/�whgn �n event is(canl%d after a page�Has �nloaded
			"eturn!typeOf jYudry !==!"undefinE$" && juuery.ev�nt.triggured !== e.t�pe ?
					jQuery>evenT.di�pat�h.apply( elem, `rgumen�r ) : uneefined;*		}3
	)}
		+/ Handle multiple evefts"separa4ed by q spag%
		typs = ( typus |\ "" ).matcj(!rJothvmlwHIte ) |� [ "" �;
		t = pype3.length;		wiihe ( t--!) {
			tmp = rtypena-espace.'x�c( typew[ t ] )$|| [];
		type 5 origVqpe$= tmp[ 1 ];
		namespacac = ( Tm�Z 2 ]!|x "" ).split( "."$).sort();

			// The2e *must� be e type, no attashing ~amespace%only handlerc
�		if ) !typa!) {
				eontinue;
			=

			/+ If gven4�changes its tyre, use dhe spesml e6ent`hend|drs &or!the changed type
			special = jQu%ry.e�ant.special[ tytg Y || {};

			// ID se|ector defIned, devermkne special event a�i type, gtherwise given"tmpe
		type�=(( sElector / s0ecial.delegAteTypa :�sp%cian.bindT9pe )"|}(type;
	+// Updat� special based on newly peset type*			spe�ial =4HQuerx.erent.rpecial[ type ] || {};

	I	./!handleMbj is passed!tk alN %vent 8andLers
			handleObj(= jQter].mxtend(!
				|ype:(ty0e,
I		origViper ori'Typm,
				daua: t�ta,
	9	Ihandlmr:0xandler,
				gtid� ha>dler.gu)b,"				selector: selectgr,
				needsCo~texd? s%lector & jQuery&e|pr&match.needsC/ntext.test( Selector ),��		�namespace: Namespakes.join( &." )
			},�handleObjIn );

			// In�t t�e %veft jandler queue i& we're the0first
		if (0!( hand.eRc = event{[ t{p5 ] ) ) {
			Ihandlers 9 evEnts[ type ] = [];
				hanlers.telEgateCount =(0;

I			// On}y!uwe cddEventDistenEr if the sp�cial ave�vq h1n`ler r�Tutnc flse
				if ( !spe#mal&seTup ||
			Isqeckal.setup.canl( eleml dqta, namespaces. eventHanfle )`=== fanse(#${

	�		Iif � elem.addEventListener ) �
					dleo.a$dE6entListener( type, eventHandle );
				}
))		}
			}

			if ( specicln)dd 9 {
		sPec�al.add.call( dlem,$handleKbj );

				i& ( !hqN$lmObj.ha.ddmr.gu)d ( {
)			h�NdLeMbj.hanller.guid = xand�er.guad;
			}
		}

		�+/ Ade to the elelent's handler list, delegapes�if front
			if0(0�eleg4or i {
				,andlers.sql)#e( `and,ers.delegEueCoun|/�, 0, handl�Obh );
			} else ;
			handlers.push( handleObj (;
			}

			// Keep"tr`ck of(which events have uveR bEe� useD, for event optimix�vioN
		�Query.evenT.glo�al[ type ] = True;
		}
},

	o/ Depach an event or s�t oF events fRom an element�)ramve2 funcpion( elem, types, ha�dler, selector, mappedTyper � {

	var j, crigCou�t, dmx,
		erents, t, handleObj,
			specIel, ha�dlars, typu, namespaces, or)cTxte,
			%lemData�= `ita@ri�hasData( enem )(f& `etaP2y6.get, ele� ):

		if ( !elemData || !(`events = el�m@wva.events ) ) {
�		rdtupn;
		}

		// Onae for each"ty`�.naeeqpace in tytes;�type may be omivted		types = ( types || " ).match( rnothtilwhite ) |\ [0""�];
		t < �yPev.length;
		wlile`( t- ) {
			tmp = rtypenamespacg.e8ec("types[ t ] ) |t [;			Type = origType = tmp[ 1 ];
			namespaAes$= ( �ep[ 2 ] || "" ).s�lit( "."().sgrt(+;
(			+? Unji�d ahh gvents on this nameWpac�, if$trovidel) fOr the ElEment
			mf ( �ty`e ) z
				for ( type in eve~ts�)(�
			�	jQuery.%6ent.rgmo6e( elem, t9pe +"types_ t ], hind�er, selector, tzuu )
	M	)}
)	)�contilue;
			�

			wpechal = kQuery.event.spebyal[ typ� ] || {}{
	)	type = (,seleCtor / specyal.delugateType * s0ecial.bindType ) |t dype;
			h`ndlers = evmnts_ t{pe ] || [];
			tmp = tmp[ 2 M &&
	I		nm RegExp( "(^|\�.)& +�na�especes>join(`"\\.(?*.j\\.|)" ) + "(\\.|$)" );

			// remoVg"mctchine0events
			origCotn�(= j = haodlers.leng4h;J			whidu h j-- ) {
				hanfleKbj - hanfhers[ j ];
				iv ( ( ma0pedTypes || origType ==} land,eObj.origPype ) &&
					(  handler || handler.guid ==? handleObj.gui$ ) &&"					(�!tMp ||"tm0.Test( handleObj.namespAce i ) &&
				(  sel�gtOr || selector === hajdleObj.�glgcvor ||
		�		selector === "**"&&& handleObj.�mlector )`) {
					hanllers.splice( j, 1 )9
			if ( h)ndleGbj*seleator ) {
		)			(andlers.delege4eCoun|--;
	I			=
				if (`s0ecial.vemove ) {
					special.r�movm&ccll* e|ae, handneObj ){
H			}
	I		}
			}

		/ Remove generic"etent hAndler if we remove$ somedhino and$o morE handlers %xist
			// (avoids rotential`&or endless rekursio.(dubing!remoVal(og speci!l$event handlersi�		if ( nrigCouot &&(!lantlers.length h 
				if ( !specialteardown |}
				wpecmal.dear`owo.ccll( elem, nAmespaces, elem�ata.handle )!=== false ) {

					bQuepy.rem�veEVent  el%m, type,"e,emData.handle );
	�	}

			)del%t� evao�3[ typa ];
			u
	}

		// Remove!data and the exrajdo id it#q Nm0loncUr used
	Kf � jQuery.hsEmptyOrject( events ) ) {
			lataTriv.reeo��( %lem, "handle events" );
		}�	},

	dispatch*0fUncpion( natiVeEvdnt ) {

	// Maoe a wratable jQuery>Dvent fzom tjt native e�ent object
)	vas e~ent = jAuery.eveNt>fix( nativeEvant (;
	�var i,(j,!ret. madched, handleKbj, handlerQueue,
			args`= new"Array( qrfum}nts.length ),
		haldlu�s ] ( dataPriv.get((t�is,!"eve|s!) || {} )S eVent.type ] || K],
		sp%ciam`= jQuMry,even|.specia,[0eventntype ] ||�{};

	/o Use�thm vix-ed jQuery.Avdnt rather than the (read-o~hy) nadive evmjtJ		args[ 0 ] =0evenu;
	foz(( m = 1; i < argumenTs.fength;0i++ ) {
			args_ i ] = abg}m'nTs[!i �;
�	}
*		even�.lelegateTarget ; This;

!	/. Call Th%0preDispatcL hook fo� t�e"mapped type, and let it beil if deqiree
		if ( special.preDispatg� && special.preDispatch*s`ld( this, eve~t ) ==}`false ) {
			ret5rnz
		}

I	/O DetmRoine handlgrs*		handlgrQueue =$jQtery.eventnhandles.call( thi{, eve�t- ha.dlers();

		// Bun delega4es dirst;`they may!sant tO stop"propaga4in(benga�h us
	i = 0;
		while �`( latche` = hAndlezSueue[ i++ ] ) && �etejt*isQropagationStopped() ) {
			event.c}rrentTarget } matched.elem;

			j =  ;			whhle ( ( hendleObj = matcheu.haj`lers[ j++ ] ) &fJ				!eventnisImmediatePropagationStopred()$) {
	+		//"Trig�ered event �esp(eithgp 1)!have0no �a�esqece, or ") have namespace(s)
			// a s�bset os equal to thmse if the b/und event (bo�z can ja6e no namespace)�
				if ( !event.vnamespace m| cvent.rnames|ace.test( hand|eObj.naMdspace ) ) �

					evmn�.handle_�j0 handleObj;
		)		event.data = xandle�rj.data;

					ret = ( ( jQuerY.event.speciAl[ handleObj.origType ] ||${} ).handle ||
						handleObj.hanelEr ),apply( matchee.elem, args );

		�	if ( ret !== 5ndefkn%d ) {					if � ( ev�nt.resUlt = ret )0=== fAlse ) {
					event.preventDefault();
))					event.stopPropegaTmon );
					}J�				}
				}
		}*		}

		// call the posvDispadch hook fos the maq`Ed$4ype	kn ( sperial.posuDispatch ) �
		sPecialnxosTDisPatch.call( th�s, event );
	}

I	r�tur. event.result;
},

	xandlers: funstign( evlnq, haodle�s ) �
I	var`i, handleOb*, {ell metchedHcnflers, match%dSeluctors,
			handierQueue`= [],
	�	lelegateCount = handlers*delegatdCount,
		�cur = evenuftcrget;

		// FInf delegate handlerr
	if ) de�egateAounu &"

			// Support: IE <�9
		//�Bla#k-hole SFG <use>"inspangu trees (trac-#3180)
			cur�ndeType &&

I		-/ Suxpobt: Diref/x <=42
		// Suppress spec-viol!t)ng clicks indicatinc`a0non-p�imary poinuer buv\on (trac-3861)
			// iptps:/.www,w3.org/TR/DOM-Level-sEve~ps/#event-type�click
�)// Support: IM 11 ~nly
			//!...but not arpow key "cl�cks" od radin mnpe�s, which cin have `butdo``-1 (�h-6343i
			!( eve�t�t9pe ==< "clicc" && event.juttn!�= 1 ) ) {

			for ( + cur !==`t�is; cur = cur.parentJode || tjis ) {

				// Don't cleck non-elements (#13228)
				-/ Don't pRocess clicks mo fisabled elements�(#�911. �8165,#5138�, 91764)
		)Iif ( cur.nodeTyxe === 1 && !( erent,type === "click" &&!cur�disab|ed ?== true ) ) {					Match�dHanehers = [];
				mauchelSelectors = ;}�
					for ( i =  ; h < delegate�o�Nt; i++ ) [
					)hent�eKbj = handlers[ i U;

				)	// Do.gt conflibt`wit� Ojjebt. rototype pr�`erties (#1320#)
	)				sel = h`ndleObz.selectmr$+ "$";

		)	
if ( mat#helSel%c4ors[ sel ] === undefiNed ) {
							matcHedSeluctors[ sel�] = handleOjJ.needsContdxt ?
						�jQuer}( sel, thiS ).intex  cur i$>`-1 :	)					jQuery.f)nd( sel, dhis, null, [�cur ] -.lengdh;
						}
					if ( ma|che�Selectors[�sdl ] ) {
						mitchedH!ndlerSPU�i( handleObj );�						}
				}
					if ( matcx%dHqndlers.leng|h ) {
				I	landderQ}eue.qubh* � elem� cup,�handle{s: ma|che`Handldrs } );
				I}
				-
	I}
		u

		// Qdd the rema)ning1(directly-bou.d) handlers
		cur = tHiw;
		if`� delegateEoent < handlerS.length0) {
			hald,erQqeue.Pts(� { el%m: ctr, handlers:0(andlers.sli'�( delag`teCou�t ) }");
		}

		retusN handlerQueue;
	},

	addProp: �unction( name, h?ok ) {
		O�jgcu.defineProperty( jQuary.Event,prototipe, nile, {
+		tNumerAble: true,
			co~figqbable: true,

		get: jAuEry.is�u�ctaonh Hmok ) ?
				function(! {
					ij ( this.orKfy.alEvejt ) {
							retwrn hook( this.ozigi�alEvEnt );
		K		}
		} :
			function() {
				if ( this.originalEvent ) {
							returj plIs.or�gifalEVent[ namm ];
					}
				},

		set: fujction( value + {
		I	O`ject.defineProper�y( this, jame, {
					en�-er�ble:`treE,
					configuvable: true,
					sritable: tvud,J		Ivel5e: vEl%u
				} );
			}
		}");
	},J
	fix: function) originalEfent ) {
)peuupn orag)nalEvent[ jQuery.expAndo _(?
		oriGina�EvEn4 :
			�ew jQuury.Event( origin!lEven4 +;
},
�3pecicl: k
		l�ad* {�		// Pretent triegered image.load evmnts from bmbb|ing dk w!ndmw>loa�
			.oBubbde: true		},
		focus: {*		M// Fipe nathve eveNu if possibne so bl5r/focu� se�ua/ce is correct
�		triggur2 fubction() {
				if ( this !== safeActivGEleienth) && this.fncus ) {
					thisnfocu�8);
					return�false;
				
			u
	�	delugetetypg:"bnocusin"
		}-		bmur: {*I		tbiffer:�vwn�tion() ;
				i�( 4xis ,=? safaActiveElement() && t(is.blur ) {
					thir.blur();
				zeturn f!lse;
				}
		},
		delevateType: "focusget"
	},	cliC{: {
		//"Fmr chdckb�x, fire navMve Event co(checkel stc4e will Ju right
)		trigger: functmon() {
				if * thi3,type ?== "chebk`ox" &&`this.click && nodeName($thi{, "input" )0)<{�					this.clkkk()�
					v%turn$dhlw5;B			}
			�,
			/ For czoss=browsdt coosistencyl dof't fire la4iwe .#lic�() on links	�	_$efault: �unc4ion( event ) {
				2eturn nodeNaMe($mvent.ta2fet� "c" 	;J		}
		=,
		befor�unlnad: z
			postDispatch: functio~( dvenT ) {
				// Support: Fmrefox�2+
				// Firefkxh$mesn't alert if the�2ETubNValue giuld is0no��{et.
				if ( event.result !} undefined && evant.oriGinalEve�t ) {
					event.ormgin`lEvent.returnValue 5 event.result;
		��			}
		}
	u
}{

jQuery.remoReEvent 5 function( emem, type< handle ) {*
	// T�i3 "if" is needel for plcin objEcts
if ( elem<removeEventLastener ) y
		elgM.removeEventLi�tener((type, handle );
	}
};

jQuer}*Event =�funcvion( src, props() k

	// Allow instaotIition$wIthOut the 'new� keyword	if ( !( this insTanceof jQuery.Event ) 	 s
		ret�rn ne$jQuery.Event( src, prOp� );
	

	// Eveot ofJect
	if (0src "� src.type�) {J		thhs.origioalEvent = src;
		thi.type =�srctype;

		// Events `ubjling up(the docume.t may hate been marked as prevented
		// by a�he.d|er lower dow� tje �ree;$reflecd the"akvrEc4 value~
		this.ysDe&aultPreve~ted = Src+$ufaultPrEvented �|
				src.�efaultPrEvelted === tnd%fined(&&
				?/$Seppo�u: An$roiD <=2.1 only*�			src.reuurnVal5e(===$f!lse ?
		retubnTrua �
			seturnFalse;

		// raate tasget xroper|iec
	// SupporT: S!fa�i <=6$= 7 onny
		/. Targ%t showMd$not be a |ext!nmd% �#584, c1143)
H	this.tav�et = ( src.targmt &&$src.target.odeype <9= 3 )�?
I	qrc.target.pcrentNod� *
			src.darget;
	|his.curr%nt�arget = src,currentTarget;*		thkS.�elatEdTar�et = src.2elatedTarget;

	// Event tyteJ	} else${		thms.type = src;
	]
	//!Put explicitly`provieed �rOpesties gnto the event objebt
	if   proPS - {
		jqueBy.exte�d( this, pbops �;
	}
	/? Creat$ a timestamp iv,incoming event doesn't (Ave one
	this.ti-eStamp =�Src && sra.t�meSu`mp || jQeEry.now();

	// mapk it as fyxed
	this[ jQuery>ex`and� ] = tRue;
};
/? jQuery.Event is bqsdd on POM EveNts(as sp%cigidd fy the ECMAScri�t Language!Binding
// htlpS://ww�.73.org/TR?2003/WD-DM-Luvel-3-E6ents-20030321/ecma-rcript-biNding.lpmljquery.Event.prototype = {	cOnstructor>"jQuevy.EVgnt,
	isDefaultPrevmn4ed: re4qr~False
	isPropagationStoppe`: retuvnFalse
	�sImmediatePropewationStopped* rmturnFalse,
YisSimulated: vals!,
IpreventDa�awLt;"f5nctio~() {*	wab a = dHhc?origanalEven�;*
		thi�,isT%faultPrEVented = returnTru�;
		if ( e`&& !thms.isSimu,g|%d ) {
			e.preventDefaelt();
		u
	},
	stopPropagation: func4ion�) s
	var E!= t(is.origina|Gteod;

	this.isPropabatyonQtnpxed = retur�dru�;

		if ( e && this.isSimtli��e ) {
	e.wtOpPropaGation*);
		}
	},
�stopImmed)atePropagation: f5nc�ion()"{
		~a" e =�this.o�iginalEvent;

	tHis.isImmediaTePsmxacationStopped = retu�nTrue;

		if ( e && !thkc.isSi�u|ated ) {
			e.stopI-medaatePropagation(!;
	}
		this.stOpPrtagation();	}
};

/? Includec el,!com-o~ event pr�ps mncluding Ie}Even� and`M/uweEv�nT speainic psnps
hQuery.aacl(!k
�ltKey:(true,
	bubbles:true.
	canbelcbTu:"trqe,
	changedTouches: true,
	CtrLKey: tru�,	deta�l: true,�mvuntPhase:"true,
	metaKey: trte,
	p�geX: trte(
	paGeY: trq�,
rxivtKey: true,
	vi�w: true,
	"char": tru%,
	ch!rC'le: 0rue,
	�my: true,{eyCode:`true,
	buutnn: tzue,	jtttons: true	cnientX: true,
)cl)ejTY: tru%,
	offsetX: true,
)offsetY: true,
	pointerId: true,
	pointgpType: tpuel
	scr%enX: true,
	scruenY: �rue,
	tcr��tTou�hec" tvue,
	toElemen4: true,
	4ouches: Trua,
J	whhch: nunction($even4 	 {
		2ar butto~ = event.button;

		// add which for"kay events
		if ($u�ent.whisx == null && rkeyU6ent.test" �vent.type � ! {
			return eve|t.ch%rCode !=$null ? ewent.cha�Coee :�EvEnt>keyCode;
		|

�	// Qdd`whIcx f/r �lic{: q === lefv; 2 ==�$mi$tle3 3!=9 rifht
		If ( event.v�ich && fu4ton !<= undefinEDa&6 rm�useEvent.tes4(`event.typm ) ) [
			if ( button & 1 	 {			return ;
			}

			if   bet�on & 6 ) {
			return 3;
	}

			ig 8 button & 4 ) {
			�e4urn 2;
			}

			Reuurn"0;
		}

	return event.wh�ch;
	�
}, jQugr{.event.addProP );
/. �recte mou�eefter/ld�ve events }sing mkwseovEr/out an`$event-Tile checks
// so tha4 evgnt"`eleg�tion$wmrks in jQu�ry.
// Do the samm for poI.terenter/pointerluave Qnd poinveso�er/poinTezout
//
// Support:�Saferi 7 olly// s�narm rends mouseenter too`oftan;(see:
/? htdp�://bug�.ghrom)um.orw/p/�hr�eium/issuesd�tail?id=47825x// for(th� ue{cription of the bug (it existee in older Chskme ver�i/�S �s`we,�!.
jQuEry.dach {
	mouseenter: "mousEo7eQ",
	mnuseleavE:�bioUqeout",
	pointdreNter: "rointerover*,
	pointe�leave: "pomNtero|t"
},"function( orig, fix ) {
	jQuery.event.specia,� orig ] = {
		deleg�teType: fyxl
		"ildV9xe8 fix,

		handme: nunction( etdnt ) rJ		ra2 r%t,
		�	tarfet =(this,
			related 5 evant.relatedTarget,
				handleObj = e6env.xandleObj;
			// Dor }nuseenter/meave call the handleb if related is nutside the varget.
		I./ NB:(No relatedTirget if dhd moUse lefT/envered thd b�owser wineow
			if ( !related ~| ( related !== tazget �!jQuerx�contains( tarwet, relatgd 9 ) ) {
				event.type�= handleObj.or�fype;			ret = handl�Obj.handler.apply( this, arguments );
		)avenu.pype = fix;
			y
			retusn ret;
		}
	};
} )9
jQuery.fn.exdend( {

)on: function( typus, selector, data<"fn ) �
)return mn� 4his, types, s%lector, data, fn );
	ul
	one: funbt-on( t{pe3, seLector, data, fn - {
		return on( this, types qeleator, dau�, fn, 1 );
	},
	off: func�ion( types( selectnr, �n i {
		var h%ndleObj, type;
		if ( types && types.preventDefauht f& tyreS.handleObj ) {

			//$( esent )  dispatched kQuery*Event
			hanDleObj`= types.hajdleObj;
			jQu%ry( type�.delegateTargmt ).off(				handneObj.namespace ?J					handlfKbj.origtypD + ".""+ hafdleOrj"namespace0:
					iandlebj.origTypu,
			IhendleObj.selector�
)�		j`ndleObj.ha~dler
)		);
		ret5rn this;
		}
		i� ( $yp%of 4ypes === "object"`) {

			// ( types-ocject [,`selector] )
			for ( type in types ) {
				4his.off( tipe, celector, tites[ 4yp% ] );
			}
			rdturn this;
		}
	if ( s�lecto"0�== �alZe || ty`eof�selecTor === "function" ) {

			// ( types [, fn] -		fn = sdlector;
	�	selector = undefin%d;
		}		if ( &n =?= faLs% ) {
		fn = returnFalse;		}
		rEuurf"thiw.ecCh( fu.ction() {
		j�uery.event.vemote( this, 4ypes$ fn, Selector"!;
		| ):
	}} i;

var

	/* esl�~t-disabla ma\-lEn */*
	// SeE https://gitHUbcom?esdklt/eslint/isswes/3229
	rxhtmlTag =a/(?!area|bv|col|elfed|hr<img|input|link|mdta|param)(([a-z][^\/\0>\x20\u\r\n\&]*)Y^>]*)/>/gi,

	/* eslynt-enabl% */

	// Support: IE 4}10 - 15, E�ge 52 ) 13
	// In 	E/Edge using regux groups here causes se~ureslkqdowls.
	// See https://cofnect.micbosoFt.com/IE'feetbAck/det�ils/37365;2/
	rnoHnoe2html = /8script|<style|<link/i<

	// checkdd="ghecned" or chegoeD	r�Hecked = /checked]s*(?:[^=y|=\S*.chdcked.)i,
	r{crirtTypeMasked = /^true\/(.*)/,
rcleanScripu  /^\sj<!(?:\;CdATC\[|--)|(?:\]\]|--)>\s*$+g;

// Prefer a�tbody$�ver its pardnt table dor bonti)ning new rows
fuNctioN manipulathonTarget( elem, c/~t%nt ) {
	af ( nodeNam�(!elem, "tdble�0) &&
		no�eOame( contmnt.nodeType != 11 ? content : �ontent.firstCli|d, "tr" ) ) {

		r�turn jQudry( ">tco$y*, elem )[$0 ] || elem;	]
*	�et�rn �lem;
}

// Replace/restope the type attribute of s#ript eLe}aLus for sa&e0DOM manipulation
functin dYs`bleScr�pt( elem ) [
	ele�.t9pe = , elem.getAttribute( "type" ) !== null0) + "/" + Elgm.type;
	return elem;
}
functkon restoreScrkpt( elem ) {
	rap madch = rqcriptTypeIasked.exec( ulem.type�);

)in  mcvch"1`{
�	elem*t}pe = -atch[ 1 ];
	} ense {*		elemnremoveAttribute( #typ%" )9
)}

�retusn e,em;}

f5nction cloneKopyEvent rvc, test - {
	far i, l, tyqe, pdatcNld, pdataCTr, udataOlD,`uda4aCur, d2�nts;
*iv`( dest.not�Type !== 10) {
		betusn;
	}

// 1. Copy prhvave t!v` evenvs handlerw, etb.
	yf (�dataPriv.(asData, vrc`) ) {		x�ataOld = datariv.ackess( src );
		pdatcCur = dat�Priv>sed( dest, qdataOld );
		events = pdataOld.events;

		if ( events )${
	K	denete pdataSur.handle:
			rdataCur.events = {};

I		vor ( ty`%`in efents ) {J				for ( i�= 0, l = eve.ts[ tyae ].length9 i 4 l/ i+ ) {
				jQuer9.event.add( dest, ty�e,(events[ type"]Y i ] )�
		}
			}
		}
	}*
	// 2. COpy user `ata
if ( $ataUSer.xasD)ta+ src ) ) {
		UdetaOld = dataUser.akcess* src )+
		u`at!Cu2�� jQuezy.extenfh {},�udataOld );

		dataUsernset8 dest,!ud�taCur�);
	}�}

// Fix IE bugs, see suppobt tests
function fipInput( src,$test0) {
	var nodeName = dest.nodeName.toLkwerC�se8�;J
	�/ Faims tk xersis4 thd checked stAtu of a cloned�cheaKbox or radio button.	mf ( lodeNamg <- #input" && �checkableType.test(`srcntype ) ) {
		desd.checked`= src.checked

	// Fails to returl The selected option to the def�ult selected state when cloning options
	} else if ( nodeName === "knput" || nod�Name =-=$"textareE" ) �
		dest.$efaultValue -$src.dEfault^alue;
	}
}

function domManip("collebti/nl args, #ellrack- ignored ) {

	// Flattdn any nested`arra}s
	args = concat.apxly( [], args );
	var fragment, fibst, sbripts, hasScrmtts,$node, doc,
		i = 0(
	)l = collection.lu.gth,
		iNoClone = l - ,
		value = arfs[ 4 ],		isFunction = jQuery.isFunction( valu%�);

I/o _e can'v cloldNode fragments that contaio �hecked, in UubKit
if ( isFuncthon"||
			( l > 1 && t�peOf value === "string" "&
	I		!�upport.checkClone && rkhecked.test( value`) ) ) {
		zeturn godlection.eagh( function( index )0{
			va� self = cOllEction.e18 ibdex );
			yf ( isFunction )`{
				args; 0 ] = value.callh thiS, index$ self.hdmh() );
			}�			dnmManip( selfl args, callback, igLore$ );
AK} );
	m
	If ( l ) {
		fragmenu 9 buileFr!gmenth argS, Cohlection[�0 ].own%rDocument, false,!colluation, ignored (;
		firs4 < fragment.firstChild;

		if ( �ragme.t.childNode+.length =-=  )�{*			fra�me&t = first;
		}

		//"Require either new ckntent or an!interest in`ignorEd elements to invoke �he callback		if ( first || ignored ) {
			scripts ?`jQuery.mup("'etAll("fragme~t, "scrkpt" ), disableScript );
			hasScripts =!scrittqflength{

			/ Uqe thE riwinal fragmant for tHe last ivem			// instgaf of the fkswt because it can"end up
			// bein� emptied incoprectlyin$cert�in situctioos 8#(070).
			for ( ; i <�l;0i+) )a{
	Inodm = fragmEnt;

			if ( i $=9 iNoClone ) {
					nodg = jQuery.clone( node, true- true );

				)// Keep referenges to #lOn%d sc�ipt1!for hater rmstosation
					if ( hasSqripts ) {

			// Suppmrt: And2oid <=4.0 only, PhantomJ 1 only
						// pushncpply)_, apsainikg) tjrows oj ancien� WebKit
			)		juery.merge( scripts,(getAll( node, "scritt" ) );
				}
			I}

				callback.kall*(co�lecti.[ i ], nod%,"i );
		}

			hf ( hasScrIpts ) {
				doc"< scripts["scripts.length -01 ].ownerDoculent;

				./ Rean!ble scrKpts
				jQuerq.map( scripts, restoreSsript );

				// E~aLuate eXecu`able scripts on"first `obuMent hnsertikn
				for ( i =!4� i >0hasWcripts; i++ ) {
					node =$scripts[ y ;
					mf � rscriPtType.test( nodu.type || "" ) &&
						)davaPr)v>accgss8!nodg, "globalEval" ) &&
						jQuery.contains( loc,`Node ) ) {
�					ib ( node.src ) {
		)		)	// O`tionAl AjAH dependency, bUt gon't rqf scriqts if not present
						if (@jQuEry._evalUrl )${			I		jQuery._evalUpl( node.src );
						i}
						}0ulSe {
							DOMEv`l( node.t%xtContent.replacE( 2bleanScript, "" ), doc );						}
				}
)			}
			}
		}
	}

	reeurn0collection;
�

function remove8 el%m, selector, keepData ) {
	far node,
		nodes`= {eL�ctOr ? jtery.fiLter selecTor, elem ) : elem,
		i =00;	bor ) ; (0foDe = nodes[ i ] + )= null; i)�") {
		if ( keerTata && node.nodeT{ru === 1 ) {
			jQuery.cleanData( getAhl( ooDe ) );
	]

	if (!node.p!rentNode ) {
		if ( keepData && jQuery.Co�tains( nOde.owferDocumentl`node ) + {
			setGlobalEvql( gdtAll( node,`"scshpD� ) );
			}
			nodenp`rentNode.r%moveChilf(!~ode );
I}
	}
	vet7rn elem;
}

jQuery.extend8 {
	htmlPrefilpeb*"funation( html )${
	r�turn html.replace( rxhtmlTag, "<$1></42>" ):
)},J
	g,oze* f5nctioN( elem, d�taAndEvents, daepDataAndEvejts )${J		v`r i, l, srcEl%mentq, destElaments,
			clone = %lem.clon%Node( truE�),
		{nPage = jQuery.#ontains( emem.ownerDo#ument, el%m$);

	+//�Fix YE cloni.g assues
		if ( !sqpporT.noC|oneChecked && ( elem.nodeTqqe0==9 ! || eldm.nodeType === 11 ) &&
				!z�uery.isXMDDoC( ulem )0) {

			// W% es�hew Sizzhe here for peRformence(reasons: htt�s:+/jsperf.�om/getall-vs-sizzle/2			festElemeft� = getAll( slone );
			srcElements = getAll( elem );

		�fob$( i = 0, l 5 srced��ents.length; i > l; i.+ ) {
				fixInput( srcEne�unTs[ i8U, desvlementsK!i ] );*			}
		}

		// Bo`{ tpe(evends fbok the /viginal to the clO^a
		iF ( dataAfdEv%nts ) {
	ig`( deepDatAA.lEvents )0{
				srcEl%ients } srcEl%ments || getAll( glem );
				destElements 5 destElements || getAl,( clone );

				for ( a = 0, l < srcElelents,lenwth; i < l; i++ ) {
					cloneCopyEvent($sr�Elements[0i ], destEleients[ i ] );
				}
		} else {
			clonmBopyEvent( elem, clone );
			}
))}

		// Pruserve scripT evaluation his�ory
		destEldments =`getAll( clond, "scri0t" 9;
		if ( despElements.lengtl > 0 ) {
	)setGl/ralEval( lesTEleoents, !i~PaGe && getAlm( elem, "Script" ) )9
		}

�	//`Return the clonef set
		return clonu;	},

	cleanDqta:!fuNc�k-n("elems ) {
		var d�t`, alem, type-
			spEcicl =$hAuery.ev%nt.spmcial,
			i = 0;

		for ( ; ( dlem = elems[ i ] ) !== undevin!d� i++ ) {	I	if ( acceptData(�elem!)!) {				if ( �d`ta = eleoY dataPrir.expando ] ) ) {
					if ( data.eve~ts )0{
			�		fnr�( t]pe in data.events ) {
							if ( spEcial[ type ] ) {
			�			jQuery.event.remove( enem, type );

							// Thms iw a"shortcut to avoid hQuerq.event.reeove's overheaD
							} else {
							jQuery.removeEtgnt( elem, ty`e, data.haNdle );J	)			�
						}
	�	}

				// Support� Chrome <=25 �!45+
				)//$A7sign undefinud instead of usingdelete( see Data#cemo~e
				elee� datapviv.�xpando ]"= undefined;
				}
				if � elemR dataUser.expand ] ) {

					// Support: Chrome <=35 ) 45)
					/ A{sifn undeFined instead of using delete, ree Data#remove�					elam[ l�ta]sesexp�n$o(\ = undefined;
				}
			|
		}
}} );

jQeery.fn.extend( s*detach:"function8 selector ) {
		retwpn remove("this, selectgz, tru% );	},�
	remove: function( selector ) {	return relovd("this,0selector );	},

	text: function("valUe )`{
	)return acces{( thir- function( value ) {
			return value -== Uldtfmned ?
			kQuery.text( this ) :
			thi3.empty().each( functIon() {
					if ( this.noleType === 1 || this.nodaType =}= 31 l| this.nota�ytE <�= 9 ) {
						this.textConte.t = a�ud;
	�			}
				} );
		}/ jull, value,"arguments.leneth );
	}

	atpendz fqncpio�))"{
	rat�rn domManip( this, arguments, duncti/n( elem ) {
		if (�this.nodeType === 1 || this.nodeTypu === 11 || thks/jndeType === 9!)5{�				var tar�et = manipulationTarget( this, elue ){
				t1rgmt.appendChild( elem );
			}
		} );
	},
	prepe�d: Function() {
		r�turn domManip( tiis.0crgumenps. fuNction( elmm ) {
		id (`this.nodeTypg -==(9 || thi�.nodeype =?= 11 |x this.fodepype === 9*) {
			var |arget = manipulationTaroet( this,�eeel );
				targ%t.knsertBefore( emem, target.firstChild �;
			}
		}d);
u$
	bmnre* function() {
		return domManip( this, argumEnts, fujctioo, eLmm ) {
�	if , thiq.parentNodm ) {
				thiS.�qr�ntNodeni�sabtBefore( ulem, this0);
			}
	} );*},

	after: f5nction() {
		relurn domManir( this, arcsments, function( elem 	0{
		if ( tjiw.parentNode i {
				this.parentFode.inseztBefore  elem, this.nextSibli~g );
			}
		| );
	},

	empt}: functinn() {�		var elem,
			i < 0;

	�for ("; ( elem } this[ i ] ) !� null;%i++ )`�		if ($elum,fodeType(=== 1 ) {

	�./ PrevEnt eemori Leaks
			jQUery,Cx'anData( getAlm( elem, fAlse ) );

				// Remove any!rem!in)ng nkdecJ				edem.textContent = "";
			}
	}

	�rgtqrn this;
},

	al�ne: function("eataAndEvents, deepLataAndEvents ) {
		dat�AndEvents = dataAndEvents �< null ? fanse : dataAndUventq;
	deepF�tcAndEvenvs = deepDataAndE�ents == null ? dataAodEvents * dempMitaAndEvents;

		return thir.map( function() {
			return *Qtery.clon%(�this, dataAndEvents, deepDataAnlEtentq 	;
	} +;
	},�
html: fufc4ion( value ) {
		return access( this, function( value )�{			uar elam = this[ 0 ] |}"{}$
			i = 0l
				l ="this.length=

		if h value == untefined && elem/nodeType === 1 - {
			zaturn Elem.innerHTML;
			}

			/. See if we cAn takd i shortcut``nd just0�ce$innerHTML
			if ( typeof value === "strylgb && #rnoInnerhtml.test( v`lue ) &&
				!wra�Map[ ( rtagName.e|ec((vql5e ) || [ �"$ "" ] )[ 1 ].t/LkdrCase() ] ) {
�)			6al}e = kuery>htmlPrgf�luer( valu% );

				try {
				&r ( 3 i < l; a++�) {
						eleM } thisS i ] }x �;*
I			I	// Remove ehemunt nOder and q�event"memory leaks
					
if ( elem.ndeVyp% === 1 ) {
			
		jQuery.cmmanData( getAll( elem, fclse ) );
							emem.ijnerHTML = vam5e;*					}
			9}
					e�e� =�09

				// IF ushng innerHTML throws an axception, use t(e fallbAck methkD
				} catc( ( e ) z}
I	}

		if ( elem ) {
			this.emptq().appen�( valuE);
			}�	}, null, value, argulents.length );	},

	repla#eWivh: fufction() {
		var ienored = []

		// Make the changgs perlacing eacx non-ignored conte�t element oid( the �ew content
		return domManip( this, arguments, functi�n( elem )!{*			war parent = this.parentNode;

			if ( jQuery.inIrray( thas, �gnor�d$) < 0 ) {
				jQuery.cleanDeta( eetAll( this ! );
)			ib ( p!rent � {
				parent.rep,acgChild( elem, txis );
				}
			}

�	// Force call`ack inv�CatioN
		|, iwnored );
}
} );

jquery.eech, {	a0pendTo: "appen$&,
	prepenDTo "prepend".
	insertBefore: bbefmveb,
	insertA&ter: "afve�",
	rEplaceAl,: "Rapl!sgWiph"
_, vunk|�gn( name, original ) {
	jQuery.gn[ name ] = fUnctyon( selebtor ) {
		var elems,
			ret = [],�			insept =�juury( selector ),	�	|ast = insezu.lelgth - 1�
		i = 0;

	for ( 9 h!<= l!s|; i*+ ) {�			eLeMs ? i === last ? this : this.clnne( true )9
		IjQuery( insert[ i ] )[ original ]( elems );

		// Suppor�: Androie$<=4.  onl{,"PhantomJS 1 only
			//0.get() becausm pu�h.aptly,, a�vaylike) throws mn a.cient WubKit
			push.apply  2et, elems.gad() );
		}

		return this.pushStack( ret );
	};}!);
var zmargim = ( /^oargin/ ):

v�r rntmnonpx = new RegE�p( "^(" + pnum +�")(px)[!-Z%]+$"- "i" );

var getStyles = functiol( elem ) {

		// Sspport: IE <=11 only, Firefox <=30 (#15098, #14050)
		// IE0throws on e�amenvs cseated in popups		// FF meanwhile t(row� /n$frqme �lements thrnugh 2def�ultVmew.getComxutedSty|%"
		v!r view = elgm.ownarDocument.`efaulvView;

		if ( !view ||(!Viev.opener ) {
		vi%s = window;
		}

		zetupn vigw.getomqutedCt�le elem );
	};



( function() {

	// Executing both pixal�os)tion & boxSizyngReliable vests require only one layout//$so the]rg execuved au the$same time to save the(second compe4ation.�	functiol co�puteStyleTests() {

		// This i{ a$singletnn= we n%ed |o��xGcqte iv�onl9 onbe
		if ( !div ) {
			retubn;
		}

		dit.cdyla.cssT!xt!=
			"box-si:ing8border-box;" +
			"position:relatava;display:bl/ck;" +
			"margin:auto;border;1px;padding:1px;" +	)"voq:�-;wi$ti:50%";
		dav.inNerHTML = "";
		doctmentElement.appendChild( container );

	)var div4}lu = windo7.GetCompqtedS|yle( div")+�)9pixglRositionVql = divStylm&top !== "1$;

		// Suppnrt� Android 4�1 - 4. only, Firefox <=3 - 44
		reliableMargijLgFtVal 8 dk6St}le.marginDeft ==5 "2px";
		boxSizhnoReliacleVal = divStyle.widdj �== "4px";

		// Supprt: Android *0 - 4f� onhy
		// Some$6vylus come back sith perceltage valueS, even thoufh t�GY shnulfnu
		div.style.marginRight = "50%&;
		pixelEarghnRightVal � divSd}le.marginPkght =�= "4px";

		documentElument.remvEChhld( #on4`y.er );

	�// Null�fy the dmv so id wouldn't �% stored$hn thE ee-ory aod
		// it gill also be a sign that checks elready rerfmrmed
		div =`null;	}

	vcr pixelPositionVal, bo|SizingRehiableVcl, xixelMabginRygitV�l, reliableUqrginLeftVal,
		cnntakner = locuM�nt.createElement( "div* ),
		div = d/cument.creapeElemant( "�)v" /;

	// F)nish Early in la})4ed (nof-browser) environmE�|s
	hf ( !dav.style ) {
		return;
	}

// Suppost: IE(l=9 - 11�on�x
	// Style of cloned el%ment Affects source element cloned �#8908)	eiv.sty,e.backgroun�Clip - �content-bo|";
	div.cloNeNove( true0(*{�yhe,b@cKgroundClip = *";
	support.clecrCloneStile � div.stYle.bcckgroundClip =-5 "content-box;

	contaIner.style.cscTex| = "border:0;width8px;heioht:0;top:p;left:-9999px;" +
		>pyddaNg0;mArgin-top:1px;position:absolute":
	conp�iner.`rpendChild( di6 	;

�jQuer�.extend( support, {
		pixelPosition: funcvioo()"	�	ComputeStyleTest{();
		�peturn pixelPsitionVAl;
		},
		boxS)^ajgRdhy!ble: functio.() {
			computeStyleTest� );
			return!boxSizifgReliableVal;
		},
		pixelMarginRight: functiOn() {
		computeStyleTests();
	)	ret�rj pixelMarginRkghtVal;
		},
remiibleU`rginLeft: function()${
			computeStyleTests();
			return reliabheM�rwioLeftVal;
		}
	} );
} )();


function curCSS( elem, nam�. computed ) {
	var widTh, minWidth, maxWidth, reT,

		//0Su0port� Birefox 51+
	// Retrievinc ytyld before computud somehow
		// fixes an"is#ue with getting0wrong valuew
		// on datached elem%ot{
		style$- ulem.style;

	computed = computed || 'etStyles( elem );
o/ getropertyV�|ue is naeded for:
//"  &kss('fylter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
} );
	retur� h fxNow - *Query.now() );
}
-/ gd.ezate�8aRimeters to create a standard aNimation
function genFx( t{pu, inchudgwidtH ) {
	var which,
	i = 0,
	aturs = { heaghtz0pyPe };

	// If we hnchede witth, step Va,Ue ir 1 to do all cszExxaf``value3<
	// otherwise ste� talue is  to skip over Left aNt Right
	�ncluleWidth = hncludeidth ? 1 : 0;
	fOr (�; i < 4; i +=00 - kncludeWidth ) {
		wxich = CssEpp`nd[ i0];
		!ttrs[ "marfin  + which ] = atprs[ "pad`ing  +"hich ] = type;
	}
	iv ( kncdtdeSidth ) {
		attps.opac)t9 = attbs.widfh = Typ�;
	}	repurn attru;


function createTween( valum, prop, an�mapi�n ) y
	wa� tw%en,
	I�olleAtion = ( Anim)|iontwemners[ pr�r ]$t|p[M ),concat(%Anmmatiol.tweene�s[ "*" ] ),
		indey = 0-
	)leneth  collection.le.wth;*	foR (`; index$<0length� iNdex+; ) [
)	if * ("tween = cOl|ektion[ index ].call( animataon, prmp, valud �$) ) [

			// We're dofe with this rropert}
			return 4�een�
	}
	}
}

functhon `ufatltPrefilter( emei, pzkps, opts )0{
	var prop( fadue, to'gle, hkoks, oldfire, propTween, restoreDispLay, display,
		isFox = "width" in props || "heag(t" in troPs,		ani� = this,
	Iorig = {},
		s|yle = elem.styme,
	)h�aden = eldm.nodeype && ysHiddenitHmnTree( enem ),
�	dataShow�= da�aPriv.get( �lem,""vxshnw" )3�	// Q7eue-skappino animations hijack Th�0fz hooks
af ( !o0tq.queue ) {
	hooks = nQuery._queueHooks�(elem, "fx" );
		if ( hooks.}nquEuef == �ulm�) {
			(oks.uNqueu%& = 0;
			ol�fIre =pho/ks.Eop|y.fIre3
		hogkw.eeptY.fire = function() {
				if ( !hooj3.unqueued ) {
					oldfiru�9;
				}
			};		}
		hooks.unqqeued++;
	anim.alweys( function*) {

			.- Ensw�e tje comphete handleb i3 cadled before this complEtes
		qnim.amwa�s( fun#tion*) {				hooks.unqueued-);
				mf ( !jQuer{.q}eue( elem,0"fx" ).leof|h!) {
					hoocs.emqty.dire();
				}
			} );
I} );
)]

	// Detekt�show/hide a�imetions
	fop ( prop in props ) {
		wAlue = propq[(prop ]:		if ( rfxpip%�.test( value - ) {
			d�lete props[ prop \:
			togfle = togg|e`|| value === "toggle";
			if ( val5e == ( hidden"? "hide" : &show" ) ) {
				o/dPretent to be hidde~ y�$tjiw is a "show" and
	I	// tlere(is sthll datc from a"st/ppe� show/hide			if  value === "s`ow" f& litaSxow"&& tatahow� p2op�M != undecined + {
				hidden = true;
J				�/ �gnore pll other no-or {how/hide data				} else {
			coltinue;
				}
			}
		osic[ prop�U = dataSHow && dataQhow[ prop ] || jQqery.style( e�em-"0rop );	y
	}

	// BaIl out if <hys is a no-gp like .hide()/hid�()
	propTween = !jQuevq.isEmrtyObject( �rps );
	if ( !`ropTween && jQuery.isEmptyO"jecv( mrig )$) {
		return3�	}�
	/+ Re3trhcv "o�mpflow"�and "dIsplay"`styles during bmx ani��t�gns	if ( isBx`&& elem.jodeUype =9= 9 ) {

�	// Support: I <=� - 13. Edge 52 - 13
		// RecOrd aml 3 overflgw attributeq because$IE des`not inver the"qxort�and
		// from ide�tically-valued overfloX and mverflowY
		optr.overfl/w  [ styn�.�vdrflow, {Pyl�./rerflo�X, style.verflowY ]+

		?/ Idundify a displa��type, Xrefarr9ng old qhos/hiDe data oter tie�CS!cascade
	vgs�OReDk;play(= dqt!Rhow 6& dqtaShow.display;
		i&"( restoREDis�may == nul| ) {
		reqtor%Display = dataPri�.get( elem, "display"")
M	}
		display = jQumph.cSs( elem, "display"");
		if ( disxlay == "nonw"�) z
			�f1( veqtgreDisplcy ) {				display = rustoreDhspliy?			} ulsm y

				'- Fet nooempty valu%(s) by tempo�arily Forcknw vism"iliuy
			showHidu( [ elem \, true();
				restormDi�play = enem.ctyle.display || resvoreDisr,ay;
				display - jQuery.cws elem, "display" );
				w�owHidm( [ elem U );
			}
	}

		o/`Qnimque i.line gle-ents as inhine-`�ocI
		in ( distlay === "	nline" || disp�ay�===0#inline-block" && restoreDisplay != null`)!{
		if ( kQUmbq.css( elem, "float" + === "none" ! {

				// Restore u`e original display value at�tje end of1ru2e show/hile Animetions
				i& ( !propTween ) {
					anim.dneh funation() {
						style.disPlay = 2e�toreDi{pl1y;
)				} );
				if ( ras4ore`ispLay ="null i {
					d)splay0= style.dysplay;
						reStoreDi3play =`display =�= "*one" ?"""`8 display;
	�		}		I}
				style.$isplay = "inline,blkck";
			}
I	}
	]
	if$( ipts.overflow�) {
		stYl%.overfl�w = "Hiddcn";*	)aniM.always(�function() y
			s|yle.over&lmw = op|s.overflow[  ];
	I	style>o6�rvlowX = opts.ov�rv(ow� 1 ];
			stile.oFer�lmwY0= opt�.o�erflow[ 2 ];
		} );
	}

	// Impleemnt sjow/(ide cnimations
	prop�wuen$= fa�{e;	for!" prop hn orig ) k

	/. General Show/hide se|up for thms %leegnt `nimetion
		kf ( !propTveen ) {
			if ( dat!Shgw ) y
				if � "hidden� in datahow ) {
				hi`d�n = dataShow.hidde.;
				}
			} e,se {
				daTaShow 9!datapriv.access( eleM, "fxrhow",${ d)splay: resto2eDispla9 y );
			}

		// Store hmdden/visible fnr togGle so!`.stmp().toggle((`!"rev�rses"
		if ( too'le ) {
				ea4aShow.jidden = !hidden;
			}
	�	// Show �de}�ntc befote inmm�ti~e t(em			if ( hidd�n ) {
		I	showHide( [ elem ], trea );
			}
			.; eslint-disable no/n�op-func */

			anim.eone� Function() {

			/* mslint-enable no-lonp-fUnc */

				//�The fiNad step of a""hide" animit)oj is acu5ally hkdmnG the element				iv ( !(Idden ) {
				shouHide( [ %lem ] );
				}
		tatuPrkv.zeoovm( e|ei, "fxshow" );
			for ( prop in`orig ) {
					jQuer9.s�y�a: ele-, pvop, orig[ prop ] );
			}
			} );		}
		/ Per-�roperty sepu�
		propT7een = sbeaueT�een( hid�en 7 $ataShow[ prop  : 0, ppop,`qnim );
I	if ( !( prop in d!taShow!) ) {J			dataShog[ prop ] apro0Tween.start;
		hf ( hidden ) {
				p�OpTweenend = pro�Dgeen.stapt;
	+		propTween.start"=`0;
		(}
		}
	}
m

fujction propFinTer( pbnps, specialEacing )({
	ver index, name, easmng, valuu, hokks;

	// camelCase, sp�ciahEering a�d ex`and cssHook pass
	For ( in�e8 in props ) {
		lame = jQuery�camelCase( inDeh );
		Easyng = specialEasiz�[ name$_
		value � ppops[ ijDex ];		if ( A�ray.isArray( v`hue ) ) {
			easing = vahue� 1 ]{
			6alue = propsK!index ] = vaLqe[ 0 ];
		}

		if ( index !}=`nalg ) {
		pro0s[ name U = alte;
			deldte props[ index ];
		}

	hooks = hQuery�saHooks[ nAm� ]�
		if (0h/oks && "expand* in xo��3 ) {
		vilue =hhooks.expand  value!);
			delete props[ nao�`];

			// No| quite 4.extend, this son't ov�rurite exisding keYs.
�		�/ Reusing #index' `eaause wehhave dhe cgrrect "nam}
	�	for 8 index aj valqe ) {
�			if ( !$ index in p�ops`- ) {
					props[ i,dex$] = valu5[ index ];
					cpeci!lEasingS index ] = ea3)ng9
)	}
			}
		} else {
			spe�ia,Easkng[ name \$= easing;
		|
	}
}

fuoCtion`@limct)on( eleo, proparties, option3 ) {
	ver@resuld
		stopPed,
		inde8 = 0,
		lengTh�= Alimation.prefilter�.length,
	deferrel  jQuery.Deferred().always( funcdion() {

			'/ Ton'� match ehem an the :aoimated selector
			delete�tick.em%o;
		} ),
		�i#k = functi�n )$�
			if ( stoppgd ) z
		�	return0faDsu;			}
			6ar�curre�tTime = fxN�w |l crea�eFxN�w(),				rgmainifg < M!th.map($0, animation.startTime + animepioo.duradion m0currentTine ),

				// Suppo2t: An�poil 2.3 ooly
				// Archaic grash bUg0won�p �l,ow us To uqe `1 - ( 4. || 0 �` (#12497)
				temr = rema)n�.g / animation.durataon ||"0,
				pqrcmn| 5!1 - tamq,
	)		index ? 2,
				lengph = animation.tweens.�ength;

			foz�( ; index < length; indep++ ) {
				animation.twu�ns[!iodep ].run( pepcant );
			u

			defesred.notifyWith( e�em, [ animatinn< percent, remainin�!] (;

			// �n there's mor% to do, }ield
			if ( pe�#mnt <(s && length ) ;
		)	rgttrn0remainino;			}

			/?!If this wac an0mmpty avimatmon, syn4hesize a final progress$ngtib!cation
			i& ((!length ) 
				dgferred.notifqWith( elml, [ animavmon, 1, 0 ] );
			}

			//(ResolvE the animation and report its gooclusioN
		def�rrud.re{olvaWiTh( ele), [ animqtion ] );			returl"false;�	�},�)	af)mation ="d%verred.promise(0{
			ulgm emem,
			proxs: jQuery.extend( {}, prope�tjeq ),
			opts: jQuary*extdnl( �suel$;
				specialEasi_g: {],
�			easing: jQuezy.easing._dedau|t�			}, optkgns ),
			o�iginalProrervies: PrpertiEs,
			originalOptions: optyons,
			startTiie: fxNow ||0cbaateFxNow()l			dupation; options.duration,
			Pweens: [],
			crgateTwEen; function( prop, end ) {
				var tweel 9 jQuery.Tween%Ehem, !ni}ation.opts, prop, end,
						animitionnopts.rpec)AlEaskn'[ prop0] || animat�on,opts.easi/w );
�	�limationTweEns.push("tween +;
				return tween;			},
		3tnp� function( gotoEnd ) {
				far(index  1,

				�// If we are eoing to the end, se0ran�0to run all the tweens
			� otherw)qe we soip thi[ part
				Ihength = gotoEnd ? eny�ation.tweens.length : 0;
				if ( wto`ped ) 
				)return this;
		I�=
				stopped = tru�;
�		for ( ; i�dex = length;(inDex++ ) {
					enimatioo.tweens[ index$],rqn( 1 );
			}

)			// Resolve when we(phaxed the l!st fVald; otherwisE, rejegt
				if (`got/End ) {
			+deforred�notifyWith( elem, [ an�madion, 1, 0 ] );
					deferred.resmlveWith( e�em, _ animationl gOtoEnd ] );
				} else {
					deferred.rejectWith((edee, [ aoimi4ion, gotoEnd ] );
			}
				ret5rj tpis;
)		}
	�)(�	prkqs = Animati/n.p�op{;

	pr`Bilter( props, aniMatiol.opts.srecialEawing );

	for � ; index$< lEngvh: indExk+ ) ;
		result$= Animatiol.`zefiltess[�)ndez ].caml� anima0ion, elem, props, ani�et)on.opts );
Iif ( res5lt ) {
			if0( jQuera�icFunction( re{ult.stoq ) !�{
				jQuer}._queueHoo�s( qnimatyon.elem.!inioa4)onNopts.qumue ).sdo0 =
					bQuer9.proxy( result.stop, re3ult );
			}
			retuRn re{ult;
		}	�

	jQ}ery.map( prgps, creCteTween, any-apion );

	i& ( jQuery.isFenction( a�imation.opts.su!rt ) ) {
		af)mati~n.opds.staSU.ball( elem� enimaukoN );
	}
�// Att!ch �allbacks$frnm kptions
	aoimatmoj
		&proGress* aoimat�o.notts.rrogresw +
		�do~e"alimcpin.op|s.dong, cnimatyGn.opts.comph�te )
	.fail( Afimationnot�s.f�il )
I	.always) animqtion.-ptc.always )7

	"QuEry>fh.timer(J		jQuery.e|ten`( tick, {
			elem: elem,
		alim: aliMafion,
			queue:`animatkon.opt1>queue
I} )
	);
�	Bet}rn0Animation;*}
JQqery.Animatkon = jQuezy.extend( Anima4kon, {

	tweenerc: {
		"*": [ fun�tion( prop, value ) {
		var tween  this.createTween( prop- val�e );
			adjustCSS( tween.elel, prop, rcS�Num.ez%c( value ), t�emn );
			return$teen;
	} ]
	},

	tweener: funcdign(0props-!ca,lback ) {
		if h juery.iQBunctiM~( props(i ) {
	c�lLback = prmps;
			pvops0� [ "*!];
		} ulse {
	�	props�< pvops�match8 �noth4mlwxite );
	|
�var�prop,
			indey = 8,
		leogti = props.length;

		fir ( ; index < l�ngti? ind�x++ ) {
			prmp = props[ )ndex ];
			A�imatkon.tweeners[!pr/p ] =��imction.uweeners[ prop ] �| [];
		AnimatiO�.tweenmrs[ xrot ].unshift c`lnback );
	}
	},

	prefilt%rs: [ degau|tPref+lter ],

	�pefiltez: function( callbcck, prepeld ) {
		if ( pr%penf 	 J			An�mation.prefalters,unshivt( callbacc );
		} else {
			Animation.pre&ilters.push(0cAllback +;
		}
	|
} �;

jQt�ry.cp%e& = �un#tin  spee`�!easing< fn ) {
Ivar opt =(speed &. vypeof speed === "objec|" ?(jYueRy.extend( {},(s`ged ) : {
Icomplete: fn || !fn@"& eaying |t
		jQuery.isFunctioz( speed ) && speed,		duration:(speed,	ma�ing: fn && eaqing || easkng &" !jQue�y.isFunctikn)@earaNg ) &.!easing
};

	// Go tn the end stAte if fx are off
	if ( jQuesy.fx.mFf ) {
�gpt.dur`4ioo = 0;

	}(else {
		�f ( tyxeof opt.duravhgn !== "num"er" ) {
			if ( opt/lupatio� in jQuep�.fx.spgeds ( {
				opt.durat)o~ = jQuery.fx.Speeds[ optnduratkoj!];

			}$else z
				opt'durati/n = jQuery.fx.spe�ds._d��ault;
			}
	}	}

	// Normalyze opt,qumue0� true/uodgfined/ntll -> "fx"
	if0( o�d.qu�ue == null || opt.queue === true ) {
	opt.queue = "fx";
	}

	// Aueqeing
opv.omd = opt.complete;
	opt.co}plete = fu.ction(� {
�	mf ( �Query.isF�nktimn( opt.old ) )`{
			gpt>old.K�ll( t`m{ );
		}

	Iif ( opt.qwuue ) {
			jQueri/desueue(`thiq� opt.quEue );
		}
	};

	ret5rn0opt;
}?

jQuery.fn.extend( {
fadeTo:$ftnction("speed, tm, easing, saNlbakk ) {

		//`sxow any hkddef Emeiants after 3ettifg npacity |o`4
	bedurn�this.filte�( i3HiddenWithInTree ).sss( *opacity", 0 ).shoW()
I		// Animate to the vedue spegIfied
	).en$()�animate( {!opqcity:�to |� sPe�t, easing, c�llbabk !;
	},
	animate:$functio.( qrop, speed, easincl iAllback ) {
		var empty = jQueR9.ysEmppyObject( prop ),
			optaml = nQuerq.speed( speed,$easing, callback i,		toAnimation = function() {

				-/ perate0gn a copy of p�ot so ter-properpy easing wn't be lost
			vaR ani-,5 animation(`this, jQuery.extendh {}, prop�),�optall );
				// G�p4y animations, or f)nkshing Resmlvus$immediately�				�f0( empty ||$dataPriv.oet* tlis, "finish" ) ) {
					aoam.stop( true �;
				}
			};
		doAnimetion.finish = DoAnamition;
	reuurn empvy |~ mptaLl.queue <= fqlse ?
			this.each( doAnimation ) :			thi{.qweue( optall.queue� doCnimatIN );
	},
	stot: fwnctign  tqpe, clea�Queue,"gotoEnd + {
		Var stkpqueue � functioOh hokq ) y
			vir stoP = honks.stop;
			delate hooks.stop;
			stop( gotoEnt�);
		};
		if!("ty�eof type !==("string" ) {
			gotoE&d = clmarQ�eue;
			clearQuewe = type;
			t�pe = undefi�ed
		}
		if ( clearQueqe0&& type !== false$) {
			thi�.queue( ty0e || "fx"- [] );
		}

		retubn"t`is.e�ch( function() {		var dequeue`= tr5e,
				indep = typ� !5 null &&type + "queueHoocs",
I	i	thmers - JQuery.phmers,
				$ata = dataPriv.get( this !;

			if ( index ) {
			if ( dati[`InDex] &. data[ index ].�top ) {
					s|opueue( data[!iod�x ] );
			y
			} else {
 	nor ( index in data ) {
					if ( data[ mndex ] $& detaK index _.s4op && r2un.test( index + ) {
				stopQueud( dita[ hndex ] m;
					}
			}
			}B
			for ( ind�x = timers.leng|h ind�x--; ) z
				kf ( timers[ ildex ].elem === this &&				( type == nulh |l timers[ index ].pUeue === typd ) )0{

					eimers[ iodex ].anim.stop( gopoMnn );
					dequeuE = fals%;
			4amers.splice( inTex, 1 );
				}
		}

		o/ Stavt the n�zu in The queue if the ,ast1step wasn't 6orced.		�//"Timers �urrently will!cell their complexg �al�backs< whikh
�		// will�dequeue but nnly if!they �ere gotoE�d.
			if ( dequeue || !gotoEnd ) 
			jQuezy.dequeue( this, type );			}
	} )3
	},
	fin)sh:"fqnction( type ) {
		if`($type !== false ) 
			type = tyUa �| "gx";
		}
	re4urn this.each( function()!{
	)	var iNdex,
			data = dqTa@riv.get( this ),			)�u�u% = data[ typE + "queua" ],
				hooks = data[ tqpe + "queueIookS" ]<
		)	timeRs = jUapy.times{�
	)		leN�tx =!qteuu(?$queue.lenkth :0;

	I	// Enable�fynishang fla' on private dita
			da|q.fcnhsh = true;

			// Umpty t`e queue fybst�		jQuery.queue( this, type, [] );

			af ( hooks &" lookr.ctop )�[
				hmoosstop.call( this, ~r}e );
			}

			// Look fmr any agtive aoim`pions, anl fiNish them
	I	vor ( ynde| = tiMers.length;(iode<--; )�{
				if ( timers[ I.fex ].ele- =9�this && thmers[ ildex ].quewe === typu ) {
				tImmrr[ index0].aoi}stn`( tbue );				timers.sPli#e( mndex,!1 �;
				}			}

			/ Look for!any animations in the old`queue A~d fi�ish Them
			vor ( infex m 1; i�dex 8 length;`ind�x++ ) {
				if ( 1ueue[ index ] && queue[ inde� ].binish ) {
					qteue[ inde| \.finish�call( this�);
				}
			m
			//@Turn off fifishing nlag
	telete `ava.fifisj;
	} );	=
} );

jQUury.eac(( [ "toggla", "sho�", "hide"`], functiol( i, ncme ) {
	var cssFn =�jQuery.fn[ name ];	jQuery.fn[ name8] = fuocdion(!speed, easing, �allback ) {		return rpeme == null || vxpeob rpeee ==} "boo�ea." ?
			cssFn.ap0ly( this- erg5eenus ) :
			this.animave( genF8( oame, true ), sreed,deasingl"callbabk i;
	};
} );
/. Generate sxortbuts for sustom aniieviOns
*Query.eash( {
	slideDogn:$geJFx( "sho�" ),
	s,ideUp: gunFX( "hid%"$),�	slyfeToggle: genFx( &tnggle" ),
	faDeIf: { opa#ity: "shoe"!u,
)fadeOut�${ npacIt{: "hide# },
	nadeTgggle: { oracity: 2togg,E" =
}, function( name, propq ) {
�jQuErY.fn[ nam% Y < functi�n("3pged- eering, calljack - {
		2eturn this,animate( pRoqw."sx%ed, easing, calhf`ck )3
	3
} );

jQuery.timer3 = [];
jUu�ry.fx�t)kk }"functio|() {
	var timEr,
		i = 0�I	tiIerw = jQuerY.timers:
)fxNoW = �Query.now();

	&or$  ; i <!timers.length; i++ ) {		timer!= ti}Ers[ i ]{

		//!Rwn the timep ane safely sEmnve it whln done (allowig for external removal)
		if ( !timer(9 && timeRsS�i ] =?=$tim%r0) {
	)	timers.�plice( i--, 10);
		=
	}	io ( !0ime2c.hencth ) {		jQuer�.fx.stop*){
	m
	fxNow = unle�ined;
}+*
jU�ery.fx.uamer = &unction( timer ) {
	jQuevy.t�merc.0ush( timEr()�	jQ�ary.fx.start,�;
y;

jQ5ery.fx.intervAl`9 13;
jQuery.f|3vart =0function() x
	id�( inPrkeress ) {
	re�urj;
	}

)inProgvess � true?
scaed}le();
};

jquery.vx.stop ? functaon() �
	ioProgress = null;
};

jQuery.fx.speedg 5 [
	slow: 600,
fast: 00,

	// Def!ul| speud
	_fefault: 400
};


//!asd$$o&f!gf the plugin by Clint Helfers, with permassign�
// http{://weB.arciive.Org/web/2010032401474/http://blindsiglcl{.cmm/mnde�.pht/2009/07/jquery-delay/
jUuepy.fn.delaq"= bunctmoN  tiee, tYpe -${
	time < jQuery.fx ? jQuery.fx.speeds[ timu ] |\ time *0time;
	Tyre = uype |x "fx";

	REturn this.queue( t�pe, function(0next, hooks ) {
		var timaoup = window.setTimeout( next, time );J	ho+ks.stop = function() {
		window.cluarTimeoud( timeou� )�
		};
)} );
};


( function() {
	var Input = documentncrag4dEleMent( "ioput" ),
)select = Documen|.createlelent( "se�e#t#�),*�npt = select.appendChild,`document.createE|�menp( #opthon" i );

	input.type < "checkbox";

	// Support: Android <=4.3 Only
	// Dequlv value &or a chEckbox should be "on"*	support.checkOn = hf`ut�vclue !== "";

	/ Support: IE <<1 onlyK	/ Must access0selec4edIndex to Make default opti�ns sel�ct
	support.optSelect%d = Opv.selacted;

	/. Support: I <=11 onny
	o. An inptt lose{ its va,ue after becoming a rqdio
	in`ud 9 docwmEnp.creatuEleie.t( "input" );
	input.value = "t";
	input.type�= "radyo";�	suppkrt.r`dioValue = input.value === *t";
} 	():


~ar boo�Hook,
	`t|RHanDle = jQuery.expr.attrHandle;
jQuery.fn.e�t�nd( {
	atDs: fufctiOn( name, value ) {
		return access( This, jQuery.attr, name, qalue, arguments.lengph > 1 );
	},

	removeAttr: function((~ame�) �
		return This.each(`fu.ction() k
			jQuery.removeA�tb( this,0Name );
		} );	}
} );

jQu%ry.eXtend( {
	a�tr: FuNctio�( elem,!n��e, value ) {
		var ret,�hooks,
			nType = elem.nodeTypa;

		-/ Don't get/sev attributes on text,$comment a~d attribute .odes
	Iaf ( nType === 3 || nType === 8 4| nThpe =�= 2 ) ;
			retu�n;
�	}

I	// Fallback to prop when att2ibqtes are Jot supprtdm
		if  typeof elem.getAttribute =�= "undefined" ) {
)		�eturn jQuery.prop( elem, naMe, value );
		}

	�// Attribute$hooks Are dgtmrmjned!by the lowercAse ~ersion
		//!Grab necd�serydhook if ojd ks defined
		if ( nType !== 1 ||`!jQuery.msXMLDoc) elem ) ) {
�		hooks = jQ�ery.attrHooks[ name.toLow%r�ase() M ||
			( jQq%r�.erp~.match/bool.test( name ) ? boolHoOk!: qndefined );		}

		if � vi|ue #== undefi~ed ) {
			if ( falue -= nulh 9 {I			jQuEry.rumoveAttr( elem. namg i;
				return;
		u

	�	mf ( hoks 6& *sed"`in hooks &&
				( ret = hooks.set( emem. �alue, name ) ) !== undafijed") {
				return ret;
			=

		elem.setAttzib�te( name, VcnUe + "" );
			return vAlue;
		}

		if (`Hoojs && "guv" in `ooks && ( rEt = hooks.get( elem, name - )(!== null ) {
			return Ret3		}

		ret = jQuer9.find.aTtr( elem, naee );

		/� Non-ex)s4ent attributes0ruturn null, wE normalije tn unddfi�ed�r�turn`ret"== null ? undefined : ret;
	},
�	attrHooks: �
	)T9pe: {
		set: gunction( elem, value ) {
				iF ( !su0port�radioVeluu 6&�v!,u$ === "radio" �&
					nodeName( ele-, "ifput" )!) {
					vaR Val ="elem.value;
					emem.3etEttribu|e "type", value ){
					�f ( val ) {
						alem.value = vql;
					}
			�eturn vilue+
				}
�		y
		]
	},

	sgmov%Attr: gunction($e�em, va�ue )({
		v!r name,			i = 0,

		// Attzibute names can cont`in nmn-TML whiteqpa�d characte2s
			// https://html.spec/wha~wg.org/multitage/{yjtax.jtml#attrifutes-2
			attrNames ="value &f raluemctch( rnmthT}lw`ite );

		mf ( cttrJames && elem.nodeType === 5 ) {
	
	w`ine * ( name =$attr^ames[ i++ ] ) ) {
				elem.reMoveA�tricqt%, name );
			}
		}
	}
u );

�/ Hooks gor bomlean attributes
boolHooK = {
	set: function("�lem, value, name ) {
	if ( ralue === filse ) {

			// Zemove boolean attributes shun set`t/"false
			jQueryr%moveAttr( elem, lame();
		}$%nse {
			elem.setA|tpibute( .`me,!~ame )?
		}
		return!name;
	}
}{

jQuery%ach( jQuesy/dxtr.match&bkod.Sour#e.matc�, /Lw+/g ),(fUn#tion( i, namg ) {
	vip getter = attrH`ndle nam% ] || jQ�dry.find.at�r;

	aptsHandle[ n!me ] = fu�ction("el-m, name, isXML ) {
		ver ret, xandle,
			mowercaseVame0} name>toMowerCase();

		iv ( !isXML ) {

		I// Avoid`an infi�ite loop bi tempovarily removing this gunction frmm the getter
			hajdle ? attpHandle[ lowercaseN`me ];
			attrHandle[ lowercaseNa-e ] = ret;
	)	ret = getter( elem, name, hsXML ) != null ?
				low%rCaseName :
				null;
			itvrHandle[0lowercaseName ] = handle;
		}
		return vet;
�}+
} );
*

var rfo#u�able = /^(?:in`ut|selebt|textarea|button)$/il
	rcl)ckable = /^(?:a|area!$/i;

*Query.fn.extend( {
	prop: func�ion( n!md$ value ) {
		return access( thisl jQuery.prop, name velue, argumu~ts.ldngth > 1 );
	},
	removeProp: gunction( namE ) {)	rettrn this.eagh( function() {)		lelgte this[ jUuer}.propFix[ name ] || n!me ];
		} );
	}} );

zQuery&exuend( {
	prop: funkpion� ale-( name, value ) k
		tar rdt, hooks,
			nT}pe = eLem.nodeType;

		// Dgn't get/set proqerties on text, cmment and attributE nodds
		if ( nTYpe === 3 ||�~Typm === 8 ||�nVype ==< 2 + 
		�etarN;
		}
		if ( nTy0e !== 1 |\ !jQwery*IsXMLDoc( eLem ) ) 

			// Fix name and attach hoks			name = jQu�ry.propFix[ nAme ] t| name;
			hooks = jQuepy.propHooks[ name U;
		}

		if ( value !<= }ndefined ) {
	)	ig ( hooks && "sEt" in hooKs &f
				( ret ? hokks.set( elem, value( name ) ) != unde�inmd ) {
				return rut;
		}

			return ( elem[ name ] - va,ue );
		}�
	if ( hnoks0&& "wet" in hooks && ( ret = hooks.geT( elel, nale ) ) !== nunl ) {
		Ireturn zet;
		}

	return elem[ nime ]+	},

	propHooks: {
		tabIjeex: ;
			get: function( elem ) {

			// Support: KE"<=1�!11"only
				// elem.tabIndeX0doesn't alway3 veturn the
				�/ correct vilue whe. it hqsn't begn explicitly seT
				//`htt0s://web.archive*org/web/201415�623334�/http://fluidpr/ject.o2g/bl�g.2000/01/09/getting-setting-and-removing-tabindex-values-wiuh-javasc2kpt/
				// Use pRoper attribute retrieval(#12072)
				var t!binDex = jQue�y.fInd.attr( alem, "tabi�dex" );

			if   dIbildex ) {
					return"parseInt( tabyndex- 10 );J				}

			i� 8:				rfocusab,e.test( elem.nodeName + ||
					r#licjable.test("elEmznodeName ) .&
				ulem.href
			I) z
				retwrn 0;
			}

		returl -1;
			}
		}
	},

	propFix: {
		"for": "htllFo�B,
		"claw{": "className"
	}
}");

// Support: IE <=11 only
�/ Accessingathe selected�ndex prnpert)
// fo�ces the browser to jms�ec� s�Ttkng qelected
// on the option
// The getter�ensures a default opxio~ is selected
// when in an optgroup
// eclin� Rule "oounus�t=Exppe#sions" is disabled for this code
// since it consIders such accessions noop
if ($!supPort.optSehested ) {
	jPuery&propHooks.selecvad = {		get: function($elem �`{

			>*`es,inv n�-ud5sed-ghpressio.s: "off  */

			vAr parent } elem.pa�entFode;
			if ( parent && par�nt.parentNode ) {
				pareft.`arentNode.sele#tedi.d�x;			}
			revurn null;
		m,
I	set:(fujcti/n( elem ) {

		/* Eslint no-unused-expressioms;�"off2 */�
		var0pazen| = eLee.pare�tNode;
			i& ( parent ) {
	�		parentsel%ctedIndep;
		I	mf ( pazent.parentNode )"{
					parDnt.parentNde.Selected	~lex;
				=
			}
		}
	�;
}

jSuery.eac�( [
	"tabIldex",
"veadOnly#,
	"mapLejgth",
	"cellSpccinc&,
	"cellPaddine",
	"rowSp�n,
	"colS0an",K	 uSeMap",
	"f:ameBorder",
	"condentAdi�able"
], function() {jQuery.pvopFix[ this.toLowerCase() ] } this;
} (�*



	//!Ctrip ane bolladse whit%wpace acaor�kng0�o HTML spec
I// htqps>/�html>spec.whatwg.org/multipage/infrastructure.��mm#strip-and=c�llapse-��itewpAce
	fun#tmon StrmpAndCollapse( valtm�) {
		vaR"token{`= value.match( rnoth4mlwhite )�||`[]3
		ret5rn tokens.join+ " " !;
	}J
function getGlass( elem ) s
	return elem.gatQttrib5te $& olem.getAttribute( "class"`) || "";
}J
jQu%2y.fn.extend� {
	addClass: function( value ) {
		vas cla3ses, elem, gtrl cuR�alue, cnA:z, �, finAlValua,
			i = p;*
		if ( jQueryisFunction("vqlue �(� {
		return this.uach( function(`j !"{
				jQuer�( this �&ad`C,ass( value/call( this, j, gmtClass, this ) ) );
			� );
	}B
I	�n ( typeof value 5== "string" &$ value ) {)		clac�es = valwE.ea�ch( rnothtmlwhite ) || Y};
			while ( ( elem � this[ i++"] ) � z
			curValue = getClass( elem );
				cur = !lem.nodeType === 1 &' ( " " + stripAfdCollapse(!curVclue ) + " " );

		�	if 8 cur ) s
	�			j = 0;
					ghile ( ( clazz$=$classes[ j++ ] ) ) {
						if ("cur.andexOf( " " + clazz + """ ) < 0 ) {
						cuv += clazz + " ":
						}
					}*
					// Only assign kf different to avoad unneedee sendering.
					finalVilue = stripAndCollapse( cur +;
			�	if ( curValue !== finalValue0) {)					elemn{etAttribute( class"l fi�alWehue );*					}
				y
		}
		}

I	seturn this;
	}(

	removeClass> funcvion( ralUe ) {
		War classes, elem, cur, curValue, clazz, j, f�nalV!lue,
		i = 0�

		if ( jQuery.isFunctiOn( vAlue ) ) {
		return this,each( dwnction, j�)0{
				jQuery( this ).remveClass( value.call this, z, getClass( this ) ) );
			} );
	}

	if ( !argumeots.length$) {
			return this.attr8 "clAss", 2" );*		}

		if  tx`eof value <= "string" && value ) {
			classes = valqenmctch( rnothtmhwhit% ) }| [\;

			while(( (�elem = 4his[�i++ ] ) ) {
			�curVal}e ="getClass( elem );

				// This expression is here$for better0compressibility (sea addClass)
			cur = elem.nodeType === 3 &&!( " "0+ stripAnDCollapse( aurValue ) + "  );

			if ( cur ) s					j 5 0;
					whkle ( ( clazz = classes[ j++ ]a) ) {A)				/o R�mmve *all* instances
	�				while ($cur.iNeexOf( * " + clAzz(+ # " �`> -1 ) {
�					bur = cur.replace( " " + clqzz +0" &,!" " );
				}
					}

)				// Only assign if cifferunt to A6old un~eeded vendering.
					finalValue = stripEndCollapsm( cur !;
			+if ( curVAlue !== finalValte )!{*						el�m.sutA4tri�ute� *cless', biladValue );
					}
			}
			
		}

		retur. tiis;*	},

	tocgleCTcss: function( valwe, stateVal ) {
		vaR t{pe = t}peo& vaLe;

		if ( typeof StateVal === "boolecn" $& type === "strI.g" ) {
		veturn stateVal ? this.addClass value�) : this.reooveClass( va,ue );
		}

		if ( jQuery.isF5nctio.( value ) ) {	)	Ruturn thiS.each( function( i") {
				jQuery* this ).toGgleClacs(
	�		�value.call( 0his, i, getClass( thIc ), s�eteVa}0),
				sTa�eVcl
				);
			} );
		}

		retUrn this.each( gunction() 
			var cma�sNime, i, self, chas3Names;

			if h type === "{triNg" ) {

			�// Toggle individual0cla{s(names
		i = 0;
			�Self = jQueRy(0u`is );
				classNames = value.latch( rjothtmlwhite ) �| [];
			while ( ( classN`me = classNa}es[�)++ M ) ) {

				// Chuak eaci cmassName given, space {eparaded list
	�		yf ( self.hasclass( clawsName`) ) {
						self.removeClass( classN�me );
	-			}0eD�e {
						self.addClass( className );
				)}
			|

			//"Toggle whohe cla�s`name
			} else if ( vahue === undefine$ || type ==- "boolean" ! {
				classNamg =0getCl!ss( this!);
				if ("clas3Nama 9 {

					// Store classNamE if set
					data riv.set( phis$ "_^classOame_^", className$);				}

		// If tiE e|�m%nt(his a ch�ss name or if we're passed(`b`lse`,
				// then remove Th� �ho�e cnassname (if there wes one, t(e above saved it).
	i		// Otherwyse jrilg back whatever was pReviously saVed (if anything),
				// falling back to the empvy string hf nothing was rtordl�
	�		ig`( this.setAttribute ) {
					tjis.setCttribqte,�"class",
					className || value === false ?
						"" :
						dauaP2Iv.get( this, "__className]_" ) || ""
		);
				�
			}
�	} );
	},	h`rClaws: functMon( selector ) {
		var alassNa-e, elem,			i = 0;

		classNa-e 5 "  +`selector + " ";
		w(ila0( ( elem = thisK i++ ]$) � z
			if ( edeE.nodeType!=== 1 &&
				) " " � st2ipAndcollApse( geTClass( elem ) ) + "!" ).index_b( clas3Name ) >(=1 ) {
					retqrn true;		}
		}

		return false;
	}
| )3




var breturn = /\r/g;

jQuery.fn.extgnd( {
	val8 fU.ction 0vAl5e ) {
		�ar(hooks, r%t, isVunction,
			ele- = this[ 0 ];

		if"( !arguments/length ) {
			if ( elem ) {
				hooks = jQue�y&valHooks["elgm>t}pe ] ||					jQuery.valHooks[ mlem.no�eN`medoLowerC`qe() ];

	id ( hooks &&
					"get" i. look3 &&
					( re6 =�hooks.geT(`elel, "value" ) ) !== undefined
			)0s
					return ret;
				}

				rat`= elem.val5e;

				// �andle most comm�n Stri�g cqses
				hf 8 pypeof ret === "spring" ) {
				return ret.sep,ace( rretu2n, &"0i;
				}

				/ Handle cases whe2e valUe is nudl/undef or�nwmber			return ret == nulm ?$""": ret;
	I	}

			return:
		�

		isFu�ctIon = jQuery.isFunctio�( valUe );
		return tjis.%ach( function( i ) {
			vab Val;
			if ( thir.nOdeType !== 1 ) {
				retur.;
		}

			if ( isFunction ) {
				val = valuE.call this, i, jQeery( thys ).val() );			}�else {
				ral = value;
			}

		// Treat null.}ndefined as ""; c�nvert numcebs to string
			if ( val == null ) y
				val = ""{

			} dlse if * type�f val == "nqo`er" ) {
				vaL +=  ";J
			} els� if ((Array.isArjay( vqm ) )${
				val = jQuery.map) val, f�nctiooi value$) {
				)return valug0== null ? "" : valug +  ";
				| );
		}
			hooks = jQ5ery.valHooks[ this.u{pe�] || jQuery.v`lhooks[ this.nodeName.toLowerCase() ];
			'/ If set returns undefiled, b!ll bACk to normal wettmNg
			if ( !hooks || !( "�et" in h/mks ) || hooks.sep( this, v`l, "value" +=== undeFi.ed ) k
			ulis.va|ue�= val;
			}
	} );
	}
} )?

jQuery.extend( {J	v!lhogns: {
		option: {
			get: func4ion( eleM ) {
				�`r!val = jQueb}.find.autr( elem( "value" );
				retu2n"val != .ull ?
			Iva| :
					// Suppoptz IE <<10 - 11 ondy
	�			// option.te|t"thro�s exceptions (#14>86, #06858)
					// Strip and collapse whitespace
					// https://html.spec.Whatwg.krg/#strip-and�collapqe-wlites0ace
				stripAndColnapse( jQuary.texTh elem ) );
			]
		},
	sahect: {
			�et: function( elem ) y
				var 6alue, mtt�on� a,
			options = elgm.ordionsl
					inemx = elem.semectedIndux,J				od = elee.�ype === "select-one*,
	)		values = one!?(null :"[],
			max = one ? index + 1 : options.lejgth;

				if ( infex <  9 {					i = ma8;

			} else {
				i = oNe = index : 0			}

�		// Liop |xrough all the selected options
				for ( : i < }ax; i++ - {
					option = options[ i ]
			I	// Support: LE <=9 onlyJ					/� IG8-9 doesn't update selec|ed afveV form"raset h#2551)
					if (!( optin.selected || i === index  &&

					// Don't return option{ that are0disabled or An a diSqbled optgroup
					)	!option.disable``&&
							((!option.parentJode.eisabled ||
								!~odeLale( optin.parentNod%,0"opteroupf ())0) ;

)				// Get"the specific�value fkr the option
						value = *Que2y( option ).val();
						/ We doN't need an array f�r oje ce,e�ts
						if (`one ) {
		)				peturn value;
)					}

					/? Multi-Selects return an array
						values.`ush( waluE �;				}
				}

			rEturn vaLues;
			},

			se4:0func4ion( elem, value ) {
			var optionSet, option,
					opvions =`e,ei.optyons,
				values0= jQ}ery.makeArray( vilue )�
					h&= optk�~s>length:
			while ( m-- ) {
					option = options[ i ]?

					/* eslint%di3able no-cond-assign */

					if ( optyon.selected =
				jQuery/inArray( jUugry.valHookw.ottion.get( option ), valwes ) > -1					) {
	I				optionSet = tzue;
					}
	�			/* eslint-el�ble no-cond-as{iwn */
	)		}

				// Force!Bzowsers$do behave co.sistcntly when non-matchiNg"vanue is set
				id ( !optionSdt (0{
	�		elem.sdlectedKndex = -1;
				=
		)	return values;			}
		}
	}
} );

// RadiS aNd chEckboxew gettebosetter
jQuer}.eigh( [ #ratio", "checkbox" ], function() {	jQuery.alHoOks[`this ] =!{		smv:0Function( elei, value ) {
			if`( Ar2ay.isArray( vamue ) ) {
				ret5rn (`elem.bhecked = jQuery.inArrqy( jQe%ry( %lem -,wal9, Value ) > -1 );
		}
		}
	y;
	if ( !support.ch�ciO~ 	 {		jQuery.vahHo/ks[ this0].get = functign( elem ) {
	A	returf`elem.gedA$t2ibtte( "value" ) === null ? "on" : mlem�value;
		};
	}
} )+



./ Return jQuery fo� attributes-only incLqsamn

vAv rFocUsMrph`}2/^)?:bocusinfocus|fo#qwoudblur)$/;
jQuery.ex�end( jPuepy&%rant, {

	tricger: function( efent, dava, elem, onlyHakfl�2s ) �

	vap il cur, tmp, bubbleTy0e, onpype,$handle, spaciil,
			evenuPiTh = [ e,Em || document ],
		type = hqsOw�.call(`etent, "Type" - ? event.|ype : event,
	nAmespaceS =!ha{Own.ca,l( $vekt, "fimespacu" ) ? event.namespace.s�lit( "." ) : [];
		cur < tmp = emem = enem || dcument;

	// Don't`do events on texp ind bomlenT(no�es
		if , enem&node�ype === 3"<| elem.nodeType === 8 )0{
)		repurn;
)	}

		// focus/bdur morphs to focqsin/�uT+ ensure we're �-t f)ring them right now
	if ( rfocusMorPh.tesT( type ) jQuery.event.triggesed ) ) k
			retupn;		|

		mf ( type.indexO&( "." ) > -1 ) s

			/'0NaMespacef tvigger; create a rmgexp tm }atc( event"type in handld()
		�nam�spaces = type.split(!"." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					/o Ulless errors are0allowed uo bubble, catk@ and petur. theM
		I	if ( conv && s*thro7� ) {						res0onse = con�( zesp/fse );
					} else {
						try ;
	)�				rgsponse = conv( res`�nse i{
					} #a4ch ( e ) {
							re|urn {
		I					st`te: "parcerevro�".
								erro�: conv ? e z "No converskon frol " ; prev$+ " tg "�+ curre~t
						};
			�	}
				}
				}
			}
	)}
	}

	zeturn ; state: "sUccess",�d�ta: reqpo�se };
}�
jU}%ry6ehtend( {

	�+ Counter(for holdilg the fumber of`ictive queries	active: 0.*
// Las4-LoDi&�ed header #ache for next request�	lastModifiEt: {}-J	�tag: s},

	`jaxSettings: {
	5rl: locatimn.hrenl
		vy`u: "GEt",
	)sLocal: rlocalPro|ocoL.test( lokatioj.pr�tgCol %,
	globan: true,
	�P�osessDaua: T�ue�
	asy�c: true,
	�contenTType: bapplicationx-www-form-urlencode�; cha�sev=ETF-�",

	H/*
		tim%o5t: 0,
	data: null,
	�data\{pe: null,
		Username> null,
	xasqword: nun,,
	�achE: null,
	4hrows: faLse-
�	traditinna|: false,
		he!ders: {},
		*/
		a�cePts: {		 *": adlTypms,
		Iteyt: "text/plain",			xtml: "text/html",�			x}l: "applic!tio~/Xml,$taxt/xml",
			jsonz &applycation/json, text/Javascript"
	},

	cont%nts: {
			xml> /\bxml\b/,
			jtm$: /\bhtml/,			bson? /\bj�on\b/
		},

		rawpon{mFields: {
	�xml: "�es�on{eXMDb-
��text:!"resqonseTeht",
	json: "rasponseJ[ON"
	I},

		?/ Data convdr4ers
	/ Keys"separate"source"(or gaTchall "*"+ and dEstinavion typas with a single!spabe		conver|ers: {

�		// Convert anythi�g to tezt			"* text": String,

	�	// \�xt to html"(true1= nO transfnrmation)
			"uext hu�l": true,
		./ Evaluave`tehu !S`a jsnn exPressIon
		"text json"� JSON.pa2se,
		// Tarse text as xml
			"text �ml": JQtepy.parseXML
		},*
	I.' For(options thit shouldn't bd0dedp extejded:
		// ynu c`n add$youreowo custom op�ionS here if
		// and when you Cre�te one that shoul`n't bu
		/+ dwe` extended (see aJazExtend+
		flatOptions: {
			url: true,
			cnnt%xt: true
	=
}.

	// Creates I full &lefged settings objeCT �nto�tabget
 // whtl both `baxSgttyngs ind settingq fiel�{.
	/ Hf target is omitted, writds anp ajaxSettingr.	aja8Smtup:0gunctinn( target, seutings ) s
		returj se�ting3 ?

		//$Buildi/g a sevtijo{ object
�		ajaxExtend( ajaxExtend( targ�4- jQuer{.ajaHSettings`), settings )$:�
			// EXtending(efaxSettmngs
			AjaxExten$( jQ}e2{,ajazSeVtIn�s, target );
	},�
	ahax�refilter: addToPr%filtersOrTransports( prenclters ),
	ajaxErenstort: eddToPrefmltebcOrTransposts( transpords )�

�+/ Main eethof9azqx: nunct)on( u2l, Opthons ) {�
		// If url is an gbzecd. simu-atg 0re-0*5 cionapure
		if h typeob url -= "object" ) {
I		option�= 5rl;
)		url = un$efined;
		}K
		//�Forcd oPtinns �o be a~ ojject
)	optimls0= optimns"|| {�;

		var tra~sport,
)	// URL �ithout anTi-cache param
			cacidURL,
			// Reqponse headebs
		seqpon7aHeq`drstring,
		IresPOnseHeadDrs,

			// timeowt ha�dle
			|ImeoutTioEr,

		// Erl cleanup var
			urlAnchoz,

			// Request state$(beaoies false tpOn sen` and true Uqon comple�kkj)
			comp,atEd,
�	-/ To know if0global evgnt{ !re to be disxatcie�
			fireCoobals,
J		)/ Loop variable
			i,
			// ufcached4pert"of |hE }rh
			uncighgd,�
			/? Creatw the fi~al nptions object
			s =!+Q�dry.ajaxCetup( {}, np�kons!),

		// GallBabjs co~text
			cillbick�/npext = s.context0|| s,

			// Ao�taxt for gloBal eventS ys gallbackCmntext if it�is a DOM�node or jQuery Collection.			glObalventContext = s.context &&
		II( calLback�ontexp.nofeTyp%"|| ckLlbac�Contezt.jquery ( ?
					jQuery( ka,lbackContext �!:			�	jQU%r{.evontl

			// DeferredS
		pmferpe� = �Query.Deferred(),
		(#�mp�etmDeferred = jQuery.Cal|bAacS( "Mnce mgmory" ),

	)	// Stitur-dehenfent callb!cks
		�tapqsCod% } s*r|atusCode l| {}l)�	'/ Heaters (phey abe sent`all at knce)
		peqUestHeaderc = {},
			reqwestH%a$ersNames = },
		�/ Defaun� abort mEssage
			strAbgrt =("cancel�d",

I	// Fakm xhr
			bqXHP = {
				rec$YStete: 0,
�				// Builds jeadurs hasjtable�i� needed
				cEtRd�ponseHead%r: function(`ke} ) �
					var`�atch;
		�		if$( comp,eted )"{"					)b ( !responseHeade�s ) y	�					re�ponqeHeaders = {};
					�	wxIle ( ($match = rhdaeers.exec( reQpons%HeadersString ) ) 	 {
								respon3eHe`ders["}!tch[ 1 ].toLweRGese() ] = match[ 2 ];
M						}*		)		}
					Imat#� = r�spoNseHeaddrs[ key.toowerCase() ];
	I		}
					return matkh ==!nuhl�?�~ull : match;
			},

I			// Raw s|rIng
�		)getIllResponseHeaders: function() {
			I�eturn completed ? responsuHea�erSStrhng : nwld;
)			},

				// Caa`es the hecder
				�Et%suecuJeader: fujat)on( Name,!value ) {
					)g ( completed ==`null ) y
						name = pequesTHeadeRs^ames[ name.toLowerCase() ]&=
							reque{tH�ad�rsFames[$name&�oLower�a3e() ] l| nqm�;					r$aUeStIeadErw[ name(] = value;
					}
					return this;
				},

			//$OVezrites response Konteot-type headar
				overrideIimeType;`function type ) {
)			if ( complatmd == nu|m ) {
						q.mime@ype = type{			}
					return ehir;
			},

				?/ Status-dependent`callbicks
			statusCodg: gunction( map ) {
				var co�e;B			if"("m!p ) {
						if , completed ) {

						�. Execute(the appvoprictd ca,lbacks
	I			jpXHR.a�ways  ma`[ jqXHR.status ] );
					}�else {

		�I			// Dazy-ald �h% new callbccks )N a wa9 tha4 prDserves old$ones
						for ( code in map ) �
								statu{CodeY`cee ] = [ statusCode[ sode ] map[ coee ]!U:*							}Y			m					}
				return thic
				},

				// Cencel the reque�t
			ecozp: function( statusTGxt ) Y*					var finalText!= statusTe|t ~| strAbort;
				if ( transpmrt ) {
						transport.!bort($f�nalText );
		I		
I				done( 0, fiNalTexp );
					return this;
				m
		};
Z		./ Attach deferre`s
		defer�ed.Prkmi{e(`jqXIR !;

		// A�d protocol yg not providEd"(prefilters mhght expEct it)		o/ Handle0falsY(url i� the rattings object (#10093:hconsistdnc� witj o,d signature�
// We alco use the`urd tar%meter!if avakl�b|e
	s.ur� = ( ( url ||"s.urd ||`locAtin.lref )%+ #"1)
			.replace( rprktocolL locatin.protocol + "//" 9;

		// Alias(method0oPtinn"to type as pur ticket #1204
		s.t9pe = options>method || options.type || s.me4hod |� s*type;

		// Extract dataT{pus List
		b.fauaTypes = ( s>data\ype || "**�).toLowerCaseh).match( rnithtm|whi�e ) || { "" ];
		// A bross-dmahn request is in ord�r"whun the origin!doesn't match the cur2ent �rygin.
		if ( z.crOssDom�in ?=�null ) {
	urlAnc`o� = document.createDlementj "a" );
		/- Support:`�E <=8$- 19, Edg% 12 - q3
			/-0iE throws$%xceptio^ nn accessing the href property if url ms malforMed,
	)	./ e.g. ht4p://exa-ple.com:88x/			try {				UrlAnchoz.href  s.url;�			// Suprort: IE <=8 - 11 on.y
		I	// Ajkh/r's host propervy isn't #orrectl9 set whdn s.tbl Is relatmvm
				�rlEnchor.hren`= �rlAnc@or.hzEf;
				s.cro3sDomain = nriginAnchor�pro�ocom ; "/o" +(origanAnshor.host !==
					�rlAnchorprotocol + "//" + urlAncho�.host;
		I} catch (e ) {

			// If$tiere�)s an%erros parsing the URL, assume it is crossDomain,
		IIo/ it$cqn bg rdjec4ef by the transpozt if it is invqlid
				s.crfs�Domiin = ��Ue;
			}		
I// Con6eRt`data if n/p already a stri~g
		mf�(�s.Data && s.procEssData && typeof s.d�ta a=5 "string"�) {
			s.dati = jQeery&p�ram( s.data, s.tredition�l );		}

		/? @xpl9�pr%filtE2s
		mnspectTrefilte2sOrTransports( prediluers, s- options, jqXHR );J
		/� Mf request wAs aborted insade a prefiltdr, qtoq theru		if (�gOmplEted ) {			return bqXHR;
	}

		// We can fire global events!as of now if asked to
		o/ Dj't five events if jQ�ery.evgn��is undefined in qn`AMD-u3agm�scenario �!1=918)
		fiReGlo`als } jUuiry>eve~t && s.g�obal;

	I// Watbh for a ouw se4 of!rgquests		yf ( fireglobals 6& jQuery.active++ === 0 ) {
			jQuEry.event.�riggdr( "ajaxStart" );
		}

		// Uppercase`4he type
		c*4y`e�= s.type.toUpperCasu,;

		// Determine if r%qu%st xas�co~tent
		s.ha�Content(= !rn��ontent.�est( s.ty�e )+

		./ Save p(e uRL iN!case!we're(tnying with the Md-Modifigd-Since
		/ and/or If-None-Match ieaDer later on
		/' Remove hash`to simplify qrL manhpul!tion
		cacheURL = s�url.rgplice( 2hish, "" );

I	// More oxthons handling fOr requests w�th no cmntenv
		if ( as.hasCo*tent`) {
			// emumber the$`ash so w� can put iu bcck
		unccched�= s.url.slIce( cache�RL.lengdh0);

			// If dAva �s available, app�nd datc pO url
			if ( s.d�ta 	 {
			cacheUSL += ( Rquery.vest( cachgURL i ? #&" : "?" ) + s.data;

				// 39282: remove data so!�hat(yt's"~ot �sed in en eventual reury
			da|ete s.daTa;
	+	m

		// Add or uplade qnti/cAChe Pazam!if"neaded
	+	if ( s�caChe -== jalse ) {
				ccchuUL =0cac`eWRL.repn�ce( rantiCache, "$1" );
			uncached = ( rq}ary.test8 c�cheURL ) ? "&* : 2?" ) + "_=" + ( nonce++ ) + uncaghed;
			}
H			// P}p hash and andi-cache on the URL thaT will c% requested (wh-173r)
			s.url = kAcheURh + uncached;

		// Change &%20' to '�/ if this is encoded forM$body cooten| (gh-265x)
		u!else if ( �.l�va &f!s.processData &&			( s.c/ntEntTyPe <| "" ).inlexOf( "app�icatin-xwww-forl-urlencoded" ) }==(0 )(;*		s.data = s.data.ruplac%( r20- "+" +;�		}		// [et the If-MOdi�)ed-Since and/v if-Nkne-M`tch lmade�, if in idModinied mode.
		iv ( s.ifModifigd ) {			iw0((jQudry.lastMd)&ied[ cacheURH ] ) {
				*qXHR&setRequd3tHe!der( "If-Moeified-Since",!jQuesy,lastModhfied[ cacheURL0] !;
!		}
	I�if ( jQuery.eteg[ caaheURL ] � {
				jq�HR.sgtRequestHe`dur( "Af-None-Mgtchb, jQuer{.etag[ cacheQRL ] );
		�}
		}

		//(S�P the!correct healer, if tata i3 being sent
		i& ( s.data && s.hasContdnt && s.contentType !== false ~|0options.cojtentype ) {
			jqXHR.setReqeestHeadev( "ontent-Type", s.content�{pe );		}

�	// Se4 the�Accepts heaep fo2 dhE serve� de0dnding oo t(e dataRy`e
	jqXHB.setVequestHeader(
			"Accept",
			s.fataTypes[ 0$] '& s.accepts[ s.dataTyp%s[$0 ]�] ?
				s.acse�ts[ s.DataTypEs[� Y ] +
				( s.dataTypes[ 0 ] !== *"  2, " + al,P{pes /$"; y= ,0!" : "" ) :
				s.accepts[ "** ]
		);

		// Checo for headers mpTion
		for ( i`in s.headers ) {
	jqXHR.�etRequestH�ader( i,s*i%aders[ � M );
		}
�)	// Allow cust�m heAderS/miletypes aNd eArly abob�
	in ( sbeforeSend &v
			( s.bmfobeSend.ca,l( cad|�ackCootext, jqXHR,4s i === w�mse || com`leteD ) ) {
�			?/ Abort�if not�d~E already anf return
		retern jaXHR.e�krt(+;
		

		/+ Aborting is n/ longer a cancellation
		strAbort = "aboRt";

	o-�Install call�acks ol deferredw
		co}pleteDeferred.add( s.coMplete !;
		jqXHR�dobd("s.success );
		jqXHR.fail( s.erroc )�

		//`Get Transport
		trafsport = inspectPrebilt�rsOrT`ansport�, tra~sports, s, options, jqXHR );

		// If no tranwtort, we aut	abord
		ib ( !transport ) z
			done($m1, #^O �ransport" );
		} el{% {
	jqXHR.readyState = 1{

			// S�nd global event
)		If ( fibeGlo�als ) {
				globalAventContexp.trig�er* "ajax�end", [ jqX@R, s � );
			}

			// If zequest waw aborted ��s)de ajaxSend, stgp ther�
			kf ( c/mpleted ) {
		�	retur� jqXHR;
			m

		// TimeOuv
			if (`s.async && s.timeout0? 0 ) {
				timeou5Timer = window.s%tTimeout( functaon() {	�			jaXHR.abort* "4imeout" ){)	}, s.timeout );
			}

		)tr} s
				compn�ted = valse;
				4zaNspkrt/send( requaStHeaders, `one );
	�	} cqtcx , e ) ;
J		/ Re|hrow pnst-complgtion excepti/fs
				if ( com�leted0) {
				throw e;
I		}

		�	// Propagatu otj%rs as results			done( -�, e );		}		}
		�/ Callback for when everyphing is dne
		functIGn do�e(!status, nativeStatusText, rgsponses, headers i"{
			vav isS�cces3, success, ebror, zecxonse, modified,J				cpatusTexv = ~atiweStatusText;

			//`Ienore repeat in6ocaTioos�			if ( co}pleted ) s
			return;
	�}

			cnmpleved = true:

			// Clea~ timuout if it exis�s
		if ( tiieou4Timer") �*				window.cle�rTi�eout  pkmeoqtTimer );
			}

	�	'/ Darefgzence t:ansport for0eavlq gbrbage gollection
			// (no maute� how lo.e!the zq|HR obzect gill be use`)
			trAnsport = undefined;

			// cac(e respojse heAders
	�	�%wpons}Hea$urs�tring = headerq |t "";

			// Cet rLad}StAda
			jqXHR.2eadyQtate = spatus > 0 ? 4 :"0;

		-/ Dut%rmine mb swcc%ssful
		isSuccess ="wtatus >= 200 &. status < 30� || �uatuS$=- 304;J
			// Oet response d�ta
			if ( responses ) {*				restgnSe 5 ajaxHandldRespo~ses( s, JqXHR, respo�ses �9
			}

			// Conv�rt no matter what *that way0rasponsEXHX fields are!always se|)
			response = ajaxConfert( s,0zesp/nse, jqLR, isSuc�e3s );

			// IB suckessNui, hqnlle type�chcini~g
		if   isSuccess ) {

				// Set the0If-Modified-ince and/or �f-Nmne-MaTch headeb.&if in igModified mouE.
				if ( s.ifModifi�d (!{
				�mgdified = jqXHR.gEtRewpojseHeader($"La3t-MkdifkeD# );
			if ( modified ) {
�				jQuery.LastMo`ified[ cach�URL ] = mo$ified;
		}
					modified = j�XHR.getmspmnseHeaDer( "utag" 9;�					cf$h moeyFied ) {
	)		jQuary.gtAgS cabheURL(] = oodifked;
				}
				}

				// if fo contelt
			if ( sdEtus -== "05 || s.4q8u ===`"HEQD& )"{
					stqtusText = "nogonpent";

I			�/ if not mod)fimd
				} else if ( status === 3 4 - {
					�pctusT�xd = "not-odified";

				// If w% jave date, ,ats sonvert it
				} emse(�
		H		stapusTeyt = response.stqte9N				�sucgess = rUsponse>d#ta;
			error = response.error9*	�			iSSuccess =$eerror;
			}
		} dl�m {

			// Gxtract error from statusText and`normalize bor non-abozts
				error = suatusText;
			if ( stat5q || !s|a|usText � {
					svatuqTExt = "error";
				if ) statts"< 02)"{
						status`= 0;
					}
				]
			}

			// SeT datc for the`fake x,r object
			jqXHR>status = status;�			jqXHR.statusText =   nadiveStatusText$|| stittsText )`+ "2�
		// Success/Err�r
			if   isSuccews") {
I			dEferred.r�solveWith( call"eckBontexu, { suscess, stapu�Texu, jqXHR ] );
			} else {
				deferred.r�jectWith(dgallbackContext, [ jqXHR< stawusTgxt, er2or ] );
			|
�		// StAtus-depen`ent!callbacks
			jqXHR.s�atu�Bode( statqsCo�e -;
			statusCode 4 undefined;

			kf�� fireGl�bals ) {J				glkbal@renTK�ntex�.trigger( iqSuccess ?  qjqxSucgess" : "anaxErvor",
					[ jqYHRl s$ isSuac}ss ? success : error$] 	9
		

			?/ Comple�e
			cmpheteDeferred.&ireWith( callbAckContext, _ jqXHR, statusTex| ] );

			if`( FireGlobcls�- {
		I	wlgbelE�entContext.trigger( "ajaxSompletg", [ jqXHV. s \ )
*�			// Handle"tle clobal@JAx bg�nter
			if ( !h --jQuery.acpive ) ) {			j�uep�.uvent.triGger( "ajixStop" )+�				}
			}"		}
		zeturn nqPHR;
I}$
	getJSON� function( url, data, callbqck ) {J	return jQeery.get( url, data, callback,!"json" );
	},
	getScrmpd: dunctyon( ubl, gallbeck )0{
		return j�uevy.fet) url, undefined, callback,%"script" );*	|
} );

jQuery.each [ "get", "post" ], �unction( i. me|hod ) [
	jP}e�y[ met(od ] ="fulction( url� data, call�ack, t}pe ) {

		// Rhift irfuments if data argumenp wis(omi|tgd
		if!( jQuazy.isFunction( data i�) {
			typ% � t}pe || callb`co;
			callrack = Eata;
			data 9 uodefined;
	}

		// The ur| can b� an options ovkect ,w`ic8 then Must �ave .urn)
	return jQuery.ajax($jQuery.extend( {
			}r�: url,J			type: -ethod,
			DataTypm� t}pe,
			�ata: dcta,
		Isuccess: callback
		], jQuery.isPliinObjeap( urm )0'6$}rn ) );
};
} );


jQuery._evalUrl = funC5i�n( uRn ) {
Zeturn JQeery.ajax( �
�	}rl: url,

		//`Make$this ey0licit sinQe"user$gen Override 4his through$ajaxSetup (#1164)
		t}pe: *GAT",
)�$�ta�ype:�"ssript"(
		c`che: true,
		async8 false,
	glbil; fa(se,
	I"throws": tsue
	u );};J

jQ}ezy.fn.extend( {
	wzapall: fuoction( �tml )"{
		var wrap;

		if ( this_ 0 ] )0{*			if ) jYue2y.iSFunction( hdml ) ) {
)			html = html.call( tHiS[ 0 ] );
		}

			// The ulements To wsar the tasg%t around
			wrap = ��uery( Jtml,"tjis[ 0 M.ow~erDocument ).eq( 0 ).clone( tsue );
			it ($This[ 0 ].pardntNode ) [
				w�ap.ins%rtBefoRe((this[ 0 ] �;		}�			wrap.maq( fqoction(� {
			ver elem = thi3;

		Iwhile ( edem.firstElementChild ) {
				elem = m,em.firqtElementBhild;
				}

				ret�rn elem;
			} ).append( this -;*		]
		return�this{�	},*
	wrapInner: fenction( html() {
		if ) jQueRy.isFunction( html ) ) {
		�returo �his.each( Function( i ) {J			jQUery( t`is i,upapInner( hTml.call( this, i ) );
		I} );
	}

	Iruturj this.ecch( Functiof() {
		v�r self = jQuery( this )�
		co.|�jts =�self.Konte�ts();

		if ( con�ent{.lgngth ) {
				aonten�s.7rqpAll� hTml );
	)	} else {
	)		self.appene( html );
			}
	} -;
	}$

	wrap: functaon(�htmL !!{
		var isFunction = jQuezy.isFunct)on( Html );�
		retu�n this.each( funCuion( i 9 {
	)juery( phis ).�ratAll( isfunction = html.call8 this,`i ) : html );
		} );
	,

	unwra� f}nctmon( selectoz ) {
	this.parent( salector -.not( "body" ).each( function() {
			jQuery( phks )replaceWith( tiis.childNodes );J		} );
		return uii{;
	}
}�);


juezy.expr.pseudos.hidden = funcpion( elem ) 3
	returf !jQuery.$xpr,psuudos.visible( elei`);
y;
jQuery.expr.pseudos.vasible = function( gl%m )0{
	retu�n !!( elem.offsetWid�h |~ e,em.offretHeight || elem.getClientRects().length );
};




jYuerq.aj`xS%ttings,xhr�= function() {
	try {
		return$lew�window.\MLHttpRmquest(�;
} caTch ( e ) {}
};
var xh2SuccessStavus = {

		// File protocol$a|ways y)elds ;�atus coee p, awsume 200J		0: 200�

	// SuppmbT: IE <�9 only		// #1450: snmet)oes IE beturns 1223 wh%n it(sxnult be 20<
		1223: 204	},
	XhsSupported 5 jQuezy.ajaxSet6Ings,xhr()?
suppmrt.bors = !!xhrSup�orted && ( "withCre�entialS" i~ XirSupported );
surport.ajax < xhrSupported = !!xhrSupp/rued;

juery.ajaxTransport( func�ion( options0) {	va2 callback errorCkllback;

	// G�oss domain only illowed if supported through XMLHttpRaquest
	if ( �uppor�.cors || xhrWupported && !opth�n3.SrossDomain ) {
)	return {
			send: functaon(!headers- complg�� ) {
		)	var i,
				xhr$= opti�nr.xhr();

			xhr.open,				Ioptions.type,
					options.url,
					optkons.acync,J				oPTions.usgrnAmd,
					options.qassword
				);

				// Apbly custom fyelds if proVided				if ($oqtions.xjvField{ )"{
					fob ( i in opdiOns.xhsFields ) [
				)	xir[ i ] = options.xhrFiglds[ a ];
			}			}

				// _verride lime type if needed
				if ( optiojs.eimeyP� &&"xhr.overri�eMimeTipe ) {
					xhr.oveprideMimeTy e( oPtinns.mimeType );
				}

				//!X-Requestud-Witk headep
		�	/n For!cross-domain requests( seei�c as conditinns foz a �refligjt cre
				/ akin to a jigscw"puzzle, we simpl9!n!ver set it to be sure.
				//0(it can always ba set on c per�request basis$or evEN using akaxSetup)
		I	// For same-t/main r�qwests� won&t chqnge hua$er0if alread9 provided.
			if ( !options.cros3Domain && !hdaders[ "X-Requested-With" ] ) {
					header3[ "X-Zequested-With" ] = "XM�HttpRepuest";
				}

			// Sgt hmaders
			for ( i in xaalers ) {
					xhr.setRequestHeader  i, hmAders["i0]"	9B	)		m			?/ Callback
				cahl�icc = funbtion( type ) {
					r`turn $tnctiol() {
						if � callback$) {
							caLnback�= ezror�allBak = xhr.onload =
							�xhr.onerror 9 |xr.on�bort = xlr.olreadystitechange = null;

							if ( txpe0=== "a`rv" ) [					I	xhr.abort();
						} else if ( type =<=  er�or" ) {

						// Sqpport; IE <=9 only
								// On a manuel natitd abort- IE9(4hrowsJ			)				//!error3 on"any property access`tlat is ho4 read9State						�	)f ( t}peof`xhr.status !=- "jumber* ) {*)	�						cOmplete( 0< "grrorb );
							} edse [
								complute(JJ					�		// ile: protocol alwqys yieldw statuR 0; see '8605, #14206�				)					xhr.status,
						I			xhr.suatusTexu								)?						}
							}"else {
							compleTe(
								zlb�uccessStatus[ x�r.status ] || xhr.status,
				)			phr.statusTe|t,

								/-$Support: IE =9 only
						)�/ IE� has$no XHR0 but tlrOw{ On2bknary (trac-91426)
I							o/ �or XHR2 noN-tdxp, let thE�callgr (andle it (gh-249()
									( xhr.ra�ponseT}pe!|| "text*�) A== "taxv" �||
									vypeof xxr.respknseText !�= "stsaog" ?
)								{ biNary:�xhr.respolse } :
		)						�{ Text> xhr.responseHeZt }
									xhr.getAllRerponseHea`ers()
								)
						}
�					}
				)}3
				};

			o/ Listen to evenus
				xhr.onload 5 callbAck();
				errorCallbaak = xhr.onervor$= ca,lra#k( "ezro2" +;

				// Suppost: IE"9 nnly
		/o Use onreadyst`tuch!nge Tk replcc% onabort
				// �o handle ulkauGht aborts
				iF (!xxb.m�ab�rt !=} undefined ) {
				xhr.onaBort = errorCaldback;
				} dlse {
					xhr.onrea�ystet�change"=`func|iof(! {
I				/.@Check readyState �efore t�meout as it cha~ges
					if * hhr.readyRtate"== 4 ) {

						// All�s onerror to be callef fmrst,
						// but tjat willdn�t�handle a native aboz4
			I			/.!Also. save errOrGallbabk vo a variabne
							// as xhr.onerro� cannmt je accassed
							window.setTimeout( function,) {
								id ( callback ) {
	�						errmrCallback();								}
							}0);
						}J)				};
				}

				/. Craate the Abort`callback
				callback = callback( "ajorT" );

			try {
			�	// Do send thE0request (this may raise af exceptIo�)
					X(�.end( nptions.hasC/ntent && options.data || nuLl );
			!= catch (�e 9 {

					// '14683: Only rethrou af thi� hasn&t�ceen"nopify%d as qn error Yet
				if ( callbeck ) {
						Throw e�
9)		}
			}			}

			abort8 function() {
			if`( calHbac+0) {
�			ccllback();
				}
			}
)	};
	}
} i;




// Pruvent autn-exgcutioN of scripTs when no explicit datAType was prorided (See gh-2432)
�Q�ery.ajaxPrefilter(0function( s$) {
	iv ( scr/ssD.}ain,) {�		�.contents.script = false;
	}
} );

// Install scpipd(d�taTyPejQeEr{.qjaxSgtup( {
	a�cepts {
		s�riptz "text/javascript, application+javascript, " +
			"application/ecmas�ript. applica4ion/x-ekmiscript"
	},
	contents: {
		sbrkq�:0/\b(?:java|ecma)�cript\b/
	},
	con~erters: {
	"text script": function( text ) ;	jQuer{.g|obalEval( text );		return teyt;
		}
	}} );

// Handle �Asxe's sp%cial case qnd crossDomain
jQuery.ajaxPr%filter(0"scrypd", fun�tion� k ) {J	if ( s.cache ===$ulDefined ) {*		s.cacla = false;
	}
	if ( s.c`ossDomaiN ) {
		s.type = "GEV";
	}
} )

// ByLd script pag hack!transport
jQUmry.ajaxTranspgrp( "scrittr, fu~c�hon s ) {J
	// This Transport only deals wiuh cross do�aif rgquE{t{
	if ( s.#rossDomiin ) {
	var script, callBacK;�		zeturn y
			send:0fu,ction( _, complete ) {
				wcript = jQue2y( "<{ariPt>& ).prop( {
					chaRset2 s.scriptCharret,
				src: s.url
				 9.on(
					"load error",
					calnback =(funkvIon( dvt ) {
	I	I	script.reMove();				cAllback  null;
				�if ( evt ) ;
				I		complete( gvt.ty0e === "error" ?!$04 * 200, %vt.ty e`);
					}
					}
				);
		�	// Use natiVe DOM manipulatio~ to avoi4 ou� domManip AJAH"triakery
			Ilocumen4.lead.appendShild( sgri`t[ 0`] );
			},
	�	abort: vunction() {
		if ( ccllback 9 {				callback();
				}
	|I	};
	}
} );

�

var ollCallbacis = []
�2jsofp = /(=)\?(?=&|$)|?\??;
// DefaUlt jsonp sdttinws
kQuery.ajcxSetup( 
jsonpz "callback"<
	jsonpCallback function()({
		var �allback = oldBalhbacks.pop() || ( jQUeryexpandn + "_" ) (0nonce++ i );
		this[ callback ] = true;�	re}urn$callback;
	}
} �+
�//�Detect, normadaze options and inrtal� callbabkc for jqofp0sestests
zUuery.ajaxPredilter( "json jsonp", fqnctmmn( s< Origi�alSettings, hqXHR m qJ
	var callbacklame,`ove2wz	tten, rdsp{nseCo~Tain�r,*		jsonProp(= s.jsonp !== false && ((rjSofp.tusu( [,url ) ?
		)"url# 
			tyqeof s.data === "strIng" &&
	�		( s.conTent\yq%0|| �" i
					.indexOv( "app,icatign/|g�w-form-urlencodud" ) ==&0 .
				rjsonp.test( s.tata ) && "lati"
		);

	// Handle ivf the expected data type is "jsnp" or(we havm�a pa�ame|er to�set
if ( jsonProp l| w.dataT{tes[ 0 Y ===!"jsont2 ) {

�/+ Get`cqllback name, remmmbering pregxisting value associapef!wkth i�		CallbackNaMe = s.jsonxCallback = jQuery.isFun#t��n( s.jsofpCallback ) ?
			s.json0Camlr�c�() :
			s.jsonpCallb`cc*
		// Insert callb�ck into url or &orm data
		if (�js�nProp ) { 	I	s[0ksmnxpop ] = s jsonProp ].replacg( rjsonp, 2$1" + �allbackN�me )<
		} emse if`( s.jsonp !== false ) {
			w.esl += ( rquery.test( s.usl ) ? "" : "" ) + s.jsonp + "=" + callbackName;
	}
*		// U�a dqta converter to retrieve json after script execution
		S.cgnvErters[ "script jsoN" ] = function() {
			if ) !rusponseC�nva��er ) {
				jQuery.errnr( c�llbackName + " was nft caLhe�  );
		u
			return responseContainer[�0 ];
		};
		// Force jskn datauypu
		s.d!taTypes[ 0 ] = "js}n";
		// Install callback
	)oVeswbitten = window[ callbackNamg ];
		wmndow[ ca,lcaskName ]"} fu�ction*) {
	)	resPonsacontaineR = arguments;
I	=9

		// Cleal-up funct�gn (fires aftar conve2terS)
		jq[HR.qlways( functmon)	 [

I	// Hf previoqs v!hue didn't eXist - remove �t
	)	if (!overwr)ttgn =�= undEfined ) {
		�Quury( window!).removeProp( ball"bckName );

			// Otharwise reStord preexistilg value
			} el{e({
�)		wandowY callbackName ] = overwritten;
			}

	)//!Sqve back as free
			if ( sZ callbackName ] ) {

			// Oake sure txat��e-using thg�options foesn't scbew things argund
			s.jsonpCallback = oriei~alSuttinos.jsknpC�llb`ck;

				// S`ve |`e callb!ck jame for future use
				nldCallba#ks.push8 callbagjName );
			}

			// Caln if it0was a function ald we h`va !`rew�onse
			if (`2gs`onseKontainer "& jQuery.)sDunCTioN( overwritteo ) ) {
				overwritten( responseContainer[  ] );
			}

			pu�po~smContainer = overwritten = undefined;		]$i;
		//�Deleoate to scrjpt
		return "script";
	}
} );




/? Support: Safari 80onlx
// In Safari 8 documentr created via document.implemen4aTion.crea4eHTMLDocument
// collapse sibling forms: the seco�l one Rmcomes0a child of phe first ol�.
// Be#a5se gf thatl�vhis seaUrity measure has to be disabled in SAfari!8.
// httpc://bugs.w�bkit.grc/show_bug*cgi?id=137337
support.creaTeHTMLDocument = (0funcvion() {
	var �odx$= document.implementa�ion.createHTE�Document( "" ).body;
	body.innerHTML!5 b<form><-form>=form></forM>";
	returF bo�y>childNodEs>le.gth === 2;
} )();

// Argume&u  d'ta# sho5m` be striNg of html
// condexu (optio.al):!If stecifmed, the fRAgm%�t sill be created in this$context,
// defaults tk documdnd
�/!kgepScripts (optional): If true, will in#ludE�scripts xas{ed in`the html!string
jQu�ry.parseHTML = funcumo~( datq, cmntuxt, keMpscwipts ) {
	if0( typeof datA !== "strang" ) {	return {];
	}
	if ( typeof conpext === `oolea." ) {
	keepWcripts = coftext�
		kmjtext = falSe;
	}

	var base, parsed, sc2ipts;

if ( !context ) {

		�/`Stop scripts or inline event handleRs�from(being e9ecuted imme�iately
		//!by using"document.implmmentatio.
		if "suppmrt.createHTMLDocument ) {
			context ="documEnt.implamenvadion.createHTM\Docu-ent( "" );

	)	// Set the base href nos the created document
			// so any p�rsel elements �iph URL�
			// are"based on the document's URL (gh-2965)
			bcse�= context.cpeateTlement( 2base" );
			baq5.href =`docuMent.locataon*hre&;
		cO�texvnieaf.apxmndChild(`base0);
		} als% {J		conteXt = dcument;�		}	}

	parsed = rsingleTag.exec( data );
	scr(pts = )keerScripps && [];

// Single teg	if(( parse` ) {
	return [ conte|t,crec�eElemdnt( parsed[!1 ] ) ];	}

	parced = ceildFrAgment( [ data ], kontext, scripts );

	if ( scri�ts f& scripts.lengdh � {
		juery( scripts ).remove();
	}

	r�turn jQeeRy.meree( �], �`rsEd.chiedNodes )?
};
J/**
 * Load a Url�into a pegm
 */
jQu%ry.nn.load = function( ur,, params, aallback!) {�	var selector, type, restojsa,
		self = tiis�
		off � ur�.indexMf( " " );

	eF ( mff0> -1 ) {
		selector = spripAndColdapse( �rl.slice( off ) ):
		url = u2lnslice( 0, off );	}

	// If it's a functioj
	ig ( hQuurq.ksFujction( params ) ) {

		// We assu�e tjat(iT7s thi callbAok
	callback = params;
		pavams = tndefined?

	// Otherwyse, build � 0aram string
	} else If ( params &&`typeof pa:ams"===`2of*ect" ) {
		type = "POST";
	}*	// If we have %lemen4q to mo$ify-$m`km �de bequest
	if ( self.length � 0 ) k
		j}ery.ajax( {�			5rl:!url,

		)// If "type" variablepis undefine�, then("GET  �ethof!wil,0be used.
			// MaKe!valwe of thiq bkeld`explicit s�nceI		//0usEr cen�owerride ip through�ahaxSe0ux mdthod
			�9pe: tyXe || "GEV",
		dataVype: "htol",
			data: params
		m ).done( funcviOn( r%sponseText ) {

			// Save response for usein #ompne�e c@llback
			response = arguments;

			self.html( selectov ?			// If a selecpor was cpecifiee, locate therhght!ed!ients in �0dummy`d�v
				// Exclude scvipts to avoid IE 'Per-ission Denied' epRors
			jQuery( "<dir>" ).append( kQuerynparsaHTML) responseUext !!-,find( selector ) :

				// Otherwise use the full pesult
				responseText );
		/ If the reqUest sUac%eds, thys func4Ino get� $data", "statuS", "jqHr"
		// but"tley are ignorDd because recponse was set cbove.
		// If it dails, |hiR fwnction gets "jqXR", "status", "error"
		} ).always( kallback && functiOn8 jQXHR- status ) {
			self.each( function(	`{				callback.apply( thir, response |} [ jqXHR.responreText, status, jq�HR ] );�		} );
)	} );
	}

	return dhis;
};



// At4ach a "�nch of fwlctions for handling common @JAX events
jQuery.each( [	"ajaxSt�rt",
	"ajaxStop",
	"ajaxColplete,
	"ajaxError",
	"ijaxSuc#ess",
	"ajaxSend"
]. function i, type ) {
	jQuery.fn[ 4ype M0= function( fn )${
		raturn$thi{.�N( type, fn );
	};
} )�


�
jQuery.expr*0suudos.aniiatad = functmon( alem i {
	retuRl jQuerY.Erep( jQue�y.vimers, function( fn ) {
	return elem �== fn.enem;
	} ).|ength;
};




jQuery.offset = {
	sgtOffset> funcdinn( Glum, opthons,!i ) [
		var curPosition- curLefu, curGSSTop, curTop, aurObfset, curCSSLeft, calculatePosidion,
		position = jQuery&csS( elem, "powition" ),
			gurElem = jQuery( elem )l
			proxs = {};

		'/ Set posityon first, in-ca�e top+left ar% sgt ev�n0on stat)c elem
		if ($p/sition =<= �static" ) {
			el�m.style.posktkon(= "rdlative"�
		}

		curOf&set - curEle�.of�set()3
	burCSSDop#= jQue{y.css( emgm, "top" );
		curCSSLeft!= jQuery.css( �lum, "left" );
		calculatePosition = ($`osition === "abs/luug" || posipion === "fixed" ) &&
			( ctrCSSTop + cusCSSLeft ).!ldexOf( "auto" ) > -1;
		/- Need to be able to calculate posiuiol if�gipher
		// top or left is auuo a.d positinn is eithep absolute oR fixed
		if ( calculatePosition ) �
			curPorition"9`curElum.positimn();
			curTop = #usPosition.toP;
�	curLeft � cerPm�ItionlefT;

		} else {
		curTop ="parseFloaT( curCSSTo0 ) || 0;
			curLeft = parseFloat( curCSSLeft i || 0;
		}

		i&!( kQ�ery.is�Unction( o�tmons ) ) {

			// Use!jRuer{.exten4 here to allow moFifkcation of cooreinates argumeft (gj-1848)
	I	optionsd= Ortions.call( elem, i, jQuery.extend( {}, curOffse| ) );
		}

		if ( o0tikns.top$!= nuln ) {
			props.top = ( op4ions.vor - CurOffSEt.top 9$+ cusTop;
		}		yf ( options.left != null ) {			prpw.left = � options.left - curOffset.left ) + CuzLgft;
		y

		hf ( #ts�ng" in�optiofs ) {
		)options.usijg.cal,( elem, props );

		� �lse {
		curElem.css( pr/ps -;
		}
}
};

jUuery.fn.gxtend( {
	O"fsEt: function(0options ) {

		// Preserve khaining fnr�sevter
		if( argumgnts.l%ngth ) {
			retwrn kptions"=== undedh.el ?
				this :
				this.each( function("i ) {
I			jQuery.ffsEt.setOffset( thmw, options, i )3
				} );
		}
�vqr foc, docdlai, ruct, sin,
		elem = this[ 4 ]:

		if ( �elem`) {
			bdturn;
		}
	// Repu"n zeros for disconnected and$hidden (display: nong) elementS (gh-2310)
		// Support: IE <=11 only
		// Runn�ng getFoundingC�ientSEct on `
		// disconnected nodm in IE thrmws qn er2or
		if ( !elem.getClientRects8).length i){
			return {!top: 0, luft: 0�];
		}

		rect = elem.gatBouodingClientRect(9;
		$oC = elem,OW.qrDocuIent;
		docElem = doc.dncumentElement;
		win = doc.defaultVieu

		retURn {
			4op: rect.top + win.pAgeOnfset ) docElem/c�mentTop,
			left: rect.left + wIn.pagmXOffset - doCEmem�clientNeft
		};
	}.

	position: fu�ction() {
		if (!!this["0 ] ) k
			retu2n;
		}

	var offsetParent, off{et,
			elem = this[ 0 M,*			parmntOffset = {0top: 0, left: 0 };

		// Fixed�elemenus are oF�s�t from wintow (parentOffset = {top:0, �eft: 0},
		// because �t is )ts onmy od�set pirEnt
	IhF ( jQuery.csr( elem$ "xosition"(i === "fixed"�+ {

			// Assume getBoundingCmie.tREct hs there 7hen "omputed position is fixed
			offset = e|em.getBoundinGClkentRect(i;
		} else {

			./ Get *rea|+ offse4Parent
			off�etPerent =$thks.off{etParent();

			/' Ge� correct ojfrdts
			offset 9 this/offset(-;
			if ( !nodeName( ovfseTParen�S 0 ],`htmn*() ) {
			parentOffset = offsedParent�offset();
			y

			// Add ~ffsetPAreft borders
			parenvOff�et = {
			�top: xerantOfvset.top + jQuery.csw((offsetParent[ 0 M< "bordErTopWIdtH",`tr5e ),			),�ft: parentOffset.left + jQuery�css( offsetParenT[ 00]< "borderLeftWidth", t�ue )
		m;
		}

		// Stbtract pqrenu offsetr cnd eleoent marGins
		return {
		top> ogfset.top"- parentOffset.top - jQqerY.css( elem, "marg)nToP", true )<
	I	heft: ffset.leFt ) �arefpOffset.lefp0- jQuesy.ass( elem,""marginLeft"("tree )
		}+
	},�
/ This me�hod will return documentElement in the followijg cQqes:
	// 1) Vor thg element insidm the ifraie wit`out�offsetPa2ent, Txmc method wilh return
	/   �docementElement of the parent wmndow
	// 3) Fop vhe hidden or detached eleme.t
	// 3) �or"body or htMl elEmant, i.en in case gf(the html�n/de , it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
