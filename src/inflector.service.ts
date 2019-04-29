import { Injectable } from '@nestjs/common';

@Injectable()
export class InflectorService {

  plurals = new Map([
    [/([nrlm]ese|deer|fish|sheep|measles|ois|pox|media)$/ig, '$1'],
    [/^(sea[- ]bass)$/ig, '$1'],
    [/(m)ove$/ig, '$1oves'],
    [/(f)oot$/ig, '$1eet'],
    [/(h)uman$/ig, '$1umans'],
    [/(s)tatus$/ig, '$1tatuses'],
    [/(s)taff$/ig, '$1taff'],
    [/(t)ooth$/ig, '$1eeth'],
    [/(quiz)$/ig, '$1zes'],
    [/^(ox)$/ig, '$1$2en'],
    [/([m|l])ouse$/ig, '$1ice'],
    [/(matr|vert|ind)(ix|ex)$/ig, '$1ices'],
    [/(x|ch|ss|sh)$/ig, '$1es'],
    [/([^aeiouy]|qu)y$/ig, '$1ies'],
    [/(hive)$/ig, '$1s'],
    [/(?:([^f])fe|([lr])f)$/ig, '$1$2ves'],
    [/sis$/ig, 'ses'],
    [/([ti])um$/ig, '$1a'],
    [/(p)erson$/ig, '$1eople'],
    [/(m)an$/ig, '$1en'],
    [/(c)hild$/ig, '$1hildren'],
    [/(buffal|tomat|potat|ech|her|vet)o$/ig, '$1oes'],
    [/(alumn|bacill|cact|foc|fung|nucle|radi|stimul|syllab|termin|vir)us$/ig, '$1i'],
    [/us$/ig, 'uses'],
    [/(alias)$/ig, '$1es'],
    [/(ax|cris|test)is$/ig, '$1es'],
    [/(currenc)y$/g, '$1ies'],
    [/s$/g, 's'],
    [/^$/g, ''],
    [/$/g, 's'],
  ]);

  singulars = new Map([
    [/([nrlm]ese|deer|fish|sheep|measles|ois|pox|media|ss)$/ig, '$1'],
    [/^(sea[- ]bass)$/ig, '$1'],
    [/(s)tatuses$/ig, '$1tatus'],
    [/(f)eet$/ig, '$1oot'],
    [/(t)eeth$/ig, '$1ooth'],
    [/^(.*)(menu)s$/ig, '$1$2'],
    [/(quiz)zes$/ig, '\$1'],
    [/(matr)ices$/ig, '$1ix'],
    [/(vert|ind)ices$/ig, '$1ex'],
    [/^(ox)en/ig, '$1'],
    [/(alias)(es)*$/ig, '$1'],
    [/(alumn|bacill|cact|foc|fung|nucle|radi|stimul|syllab|termin|viri?)i$/ig, '$1us'],
    [/([ftw]ax)es/ig, '$1'],
    [/(cris|ax|test)es$/ig, '$1is'],
    [/(shoe|slave)s$/ig, '$1'],
    [/(o)es$/ig, '$1'],
    [/ouses$/g, 'ouse'],
    [/([^a])uses$/g, '$1us'],
    [/([m|l])ice$/ig, '$1ouse'],
    [/(x|ch|ss|sh)es$/ig, '$1'],
    [/(m)ovies$/ig, '$1$2ovie'],
    [/(s)eries$/ig, '$1$2eries'],
    [/([^aeiouy]|qu)ies$/ig, '$1y'],
    [/([lr])ves$/ig, '$1f'],
    [/(tive)s$/ig, '$1'],
    [/(hive)s$/ig, '$1'],
    [/(drive)s$/ig, '$1'],
    [/([^fo])ves$/ig, '$1fe'],
    [/(^analy)ses$/ig, '$1sis'],
    [/(analy|diagno|^ba|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/ig, '$1$2sis'],
    [/([ti])a$/ig, '$1um'],
    [/(p)eople$/ig, '$1$2erson'],
    [/(m)en$/ig, '$1an'],
    [/(c)hildren$/ig, '$1$2hild'],
    [/(n)ews$/ig, '$1$2ews'],
    [/(n)etherlands$/ig, '$1$2etherlands'],
    [/eaus$/g, 'eau'],
    [/(currenc)ies$/g, '$1y'],
    [/^(.*us)$/g, '$1'],
    [/s$/ig, ''],
  ]);

  specials = new Map([
    ['atlas', 'atlases'],
    ['beef', 'beefs'],
    ['brother', 'brothers'],
    ['cafe', 'cafes'],
    ['child', 'children'],
    ['cookie', 'cookies'],
    ['corpus', 'corpuses'],
    ['cow', 'cows'],
    ['curve', 'curves'],
    ['foe', 'foes'],
    ['ganglion', 'ganglions'],
    ['genie', 'genies'],
    ['genus', 'genera'],
    ['graffito', 'graffiti'],
    ['hoof', 'hoofs'],
    ['loaf', 'loaves'],
    ['man', 'men'],
    ['money', 'monies'],
    ['mongoose', 'mongooses'],
    ['move', 'moves'],
    ['mythos', 'mythoi'],
    ['niche', 'niches'],
    ['numen', 'numina'],
    ['occiput', 'occiputs'],
    ['octopus', 'octopuses'],
    ['opus', 'opuses'],
    ['ox', 'oxen'],
    ['pasta', 'pasta'],
    ['penis', 'penises'],
    ['sex', 'sexes'],
    ['soliloquy', 'soliloquies'],
    ['testis', 'testes'],
    ['trilby', 'trilbys'],
    ['turf', 'turfs'],
    ['wave', 'waves'],
    ['Amoyese', 'Amoyese'],
    ['bison', 'bison'],
    ['Borghese', 'Borghese'],
    ['bream', 'bream'],
    ['breeches', 'breeches'],
    ['britches', 'britches'],
    ['buffalo', 'buffalo'],
    ['cantus', 'cantus'],
    ['carp', 'carp'],
    ['chassis', 'chassis'],
    ['clippers', 'clippers'],
    ['cod', 'cod'],
    ['coitus', 'coitus'],
    ['Congoese', 'Congoese'],
    ['contretemps', 'contretemps'],
    ['corps', 'corps'],
    ['debris', 'debris'],
    ['diabetes', 'diabetes'],
    ['djinn', 'djinn'],
    ['eland', 'eland'],
    ['elk', 'elk'],
    ['equipment', 'equipment'],
    ['Faroese', 'Faroese'],
    ['flounder', 'flounder'],
    ['Foochowese', 'Foochowese'],
    ['gallows', 'gallows'],
    ['Genevese', 'Genevese'],
    ['Genoese', 'Genoese'],
    ['Gilbertese', 'Gilbertese'],
    ['graffiti', 'graffiti'],
    ['headquarters', 'headquarters'],
    ['herpes', 'herpes'],
    ['hijinks', 'hijinks'],
    ['Hottentotese', 'Hottentotese'],
    ['information', 'information'],
    ['innings', 'innings'],
    ['jackanapes', 'jackanapes'],
    ['Kiplingese', 'Kiplingese'],
    ['Kongoese', 'Kongoese'],
    ['Lucchese', 'Lucchese'],
    ['mackerel', 'mackerel'],
    ['Maltese', 'Maltese'],
    ['mews', 'mews'],
    ['moose', 'moose'],
    ['mumps', 'mumps'],
    ['Nankingese', 'Nankingese'],
    ['news', 'news'],
    ['nexus', 'nexus'],
    ['Niasese', 'Niasese'],
    ['Pekingese', 'Pekingese'],
    ['Piedmontese', 'Piedmontese'],
    ['pincers', 'pincers'],
    ['Pistoiese', 'Pistoiese'],
    ['pliers', 'pliers'],
    ['Portuguese', 'Portuguese'],
    ['proceedings', 'proceedings'],
    ['rabies', 'rabies'],
    ['rice', 'rice'],
    ['rhinoceros', 'rhinoceros'],
    ['salmon', 'salmon'],
    ['Sarawakese', 'Sarawakese'],
    ['scissors', 'scissors'],
    ['series', 'series'],
    ['Shavese', 'Shavese'],
    ['shears', 'shears'],
    ['siemens', 'siemens'],
    ['species', 'species'],
    ['swine', 'swine'],
    ['testes', 'testes'],
    ['trousers', 'trousers'],
    ['trout', 'trout'],
    ['tuna', 'tuna'],
    ['Vermontese', 'Vermontese'],
    ['Wenchowese', 'Wenchowese'],
    ['whiting', 'whiting'],
    ['wildebeest', 'wildebeest'],
    ['Yengeese', 'Yengeese'],
  ]);

  transliteration = new Map([
    ['Á', 'A'],
    ['Ă', 'A'],
    ['Ắ', 'A'],
    ['Ặ', 'A'],
    ['Ằ', 'A'],
    ['Ẳ', 'A'],
    ['Ẵ', 'A'],
    ['Ǎ', 'A'],
    ['Â', 'A'],
    ['Ấ', 'A'],
    ['Ậ', 'A'],
    ['Ầ', 'A'],
    ['Ẩ', 'A'],
    ['Ẫ', 'A'],
    ['Ä', 'A'],
    ['Ǟ', 'A'],
    ['Ȧ', 'A'],
    ['Ǡ', 'A'],
    ['Ạ', 'A'],
    ['Ȁ', 'A'],
    ['À', 'A'],
    ['Ả', 'A'],
    ['Ȃ', 'A'],
    ['Ā', 'A'],
    ['Ą', 'A'],
    ['Å', 'A'],
    ['Ǻ', 'A'],
    ['Ḁ', 'A'],
    ['Ⱥ', 'A'],
    ['Ã', 'A'],
    ['Ꜳ', 'AA'],
    ['Æ', 'AE'],
    ['Ǽ', 'AE'],
    ['Ǣ', 'AE'],
    ['Ꜵ', 'AO'],
    ['Ꜷ', 'AU'],
    ['Ꜹ', 'AV'],
    ['Ꜻ', 'AV'],
    ['Ꜽ', 'AY'],
    ['Ḃ', 'B'],
    ['Ḅ', 'B'],
    ['Ɓ', 'B'],
    ['Ḇ', 'B'],
    ['Ƀ', 'B'],
    ['Ƃ', 'B'],
    ['Ć', 'C'],
    ['Č', 'C'],
    ['Ç', 'C'],
    ['Ḉ', 'C'],
    ['Ĉ', 'C'],
    ['Ċ', 'C'],
    ['Ƈ', 'C'],
    ['Ȼ', 'C'],
    ['Ď', 'D'],
    ['Ḑ', 'D'],
    ['Ḓ', 'D'],
    ['Ḋ', 'D'],
    ['Ḍ', 'D'],
    ['Ɗ', 'D'],
    ['Ḏ', 'D'],
    ['ǲ', 'D'],
    ['ǅ', 'D'],
    ['Đ', 'D'],
    ['Ƌ', 'D'],
    ['Ǳ', 'DZ'],
    ['Ǆ', 'DZ'],
    ['É', 'E'],
    ['Ĕ', 'E'],
    ['Ě', 'E'],
    ['Ȩ', 'E'],
    ['Ḝ', 'E'],
    ['Ê', 'E'],
    ['Ế', 'E'],
    ['Ệ', 'E'],
    ['Ề', 'E'],
    ['Ể', 'E'],
    ['Ễ', 'E'],
    ['Ḙ', 'E'],
    ['Ë', 'E'],
    ['Ė', 'E'],
    ['Ẹ', 'E'],
    ['Ȅ', 'E'],
    ['È', 'E'],
    ['Ẻ', 'E'],
    ['Ȇ', 'E'],
    ['Ē', 'E'],
    ['Ḗ', 'E'],
    ['Ḕ', 'E'],
    ['Ę', 'E'],
    ['Ɇ', 'E'],
    ['Ẽ', 'E'],
    ['Ḛ', 'E'],
    ['Ꝫ', 'ET'],
    ['Ḟ', 'F'],
    ['Ƒ', 'F'],
    ['Ǵ', 'G'],
    ['Ğ', 'G'],
    ['Ǧ', 'G'],
    ['Ģ', 'G'],
    ['Ĝ', 'G'],
    ['Ġ', 'G'],
    ['Ɠ', 'G'],
    ['Ḡ', 'G'],
    ['Ǥ', 'G'],
    ['Ḫ', 'H'],
    ['Ȟ', 'H'],
    ['Ḩ', 'H'],
    ['Ĥ', 'H'],
    ['Ⱨ', 'H'],
    ['Ḧ', 'H'],
    ['Ḣ', 'H'],
    ['Ḥ', 'H'],
    ['Ħ', 'H'],
    ['Í', 'I'],
    ['Ĭ', 'I'],
    ['Ǐ', 'I'],
    ['Î', 'I'],
    ['Ï', 'I'],
    ['Ḯ', 'I'],
    ['İ', 'I'],
    ['Ị', 'I'],
    ['Ȉ', 'I'],
    ['Ì', 'I'],
    ['Ỉ', 'I'],
    ['Ȋ', 'I'],
    ['Ī', 'I'],
    ['Į', 'I'],
    ['Ɨ', 'I'],
    ['Ĩ', 'I'],
    ['Ḭ', 'I'],
    ['Ꝺ', 'D'],
    ['Ꝼ', 'F'],
    ['Ᵹ', 'G'],
    ['Ꞃ', 'R'],
    ['Ꞅ', 'S'],
    ['Ꞇ', 'T'],
    ['Ꝭ', 'IS'],
    ['Ĵ', 'J'],
    ['Ɉ', 'J'],
    ['Ḱ', 'K'],
    ['Ǩ', 'K'],
    ['Ķ', 'K'],
    ['Ⱪ', 'K'],
    ['Ꝃ', 'K'],
    ['Ḳ', 'K'],
    ['Ƙ', 'K'],
    ['Ḵ', 'K'],
    ['Ꝁ', 'K'],
    ['Ꝅ', 'K'],
    ['Ĺ', 'L'],
    ['Ƚ', 'L'],
    ['Ľ', 'L'],
    ['Ļ', 'L'],
    ['Ḽ', 'L'],
    ['Ḷ', 'L'],
    ['Ḹ', 'L'],
    ['Ⱡ', 'L'],
    ['Ꝉ', 'L'],
    ['Ḻ', 'L'],
    ['Ŀ', 'L'],
    ['Ɫ', 'L'],
    ['ǈ', 'L'],
    ['Ł', 'L'],
    ['Ǉ', 'LJ'],
    ['Ḿ', 'M'],
    ['Ṁ', 'M'],
    ['Ṃ', 'M'],
    ['Ɱ', 'M'],
    ['Ń', 'N'],
    ['Ň', 'N'],
    ['Ņ', 'N'],
    ['Ṋ', 'N'],
    ['Ṅ', 'N'],
    ['Ṇ', 'N'],
    ['Ǹ', 'N'],
    ['Ɲ', 'N'],
    ['Ṉ', 'N'],
    ['Ƞ', 'N'],
    ['ǋ', 'N'],
    ['Ñ', 'N'],
    ['Ǌ', 'NJ'],
    ['Ó', 'O'],
    ['Ŏ', 'O'],
    ['Ǒ', 'O'],
    ['Ô', 'O'],
    ['Ố', 'O'],
    ['Ộ', 'O'],
    ['Ồ', 'O'],
    ['Ổ', 'O'],
    ['Ỗ', 'O'],
    ['Ö', 'O'],
    ['Ȫ', 'O'],
    ['Ȯ', 'O'],
    ['Ȱ', 'O'],
    ['Ọ', 'O'],
    ['Ő', 'O'],
    ['Ȍ', 'O'],
    ['Ò', 'O'],
    ['Ỏ', 'O'],
    ['Ơ', 'O'],
    ['Ớ', 'O'],
    ['Ợ', 'O'],
    ['Ờ', 'O'],
    ['Ở', 'O'],
    ['Ỡ', 'O'],
    ['Ȏ', 'O'],
    ['Ꝋ', 'O'],
    ['Ꝍ', 'O'],
    ['Ō', 'O'],
    ['Ṓ', 'O'],
    ['Ṑ', 'O'],
    ['Ɵ', 'O'],
    ['Ǫ', 'O'],
    ['Ǭ', 'O'],
    ['Ø', 'O'],
    ['Ǿ', 'O'],
    ['Õ', 'O'],
    ['Ṍ', 'O'],
    ['Ṏ', 'O'],
    ['Ȭ', 'O'],
    ['Ƣ', 'OI'],
    ['Ꝏ', 'OO'],
    ['Ɛ', 'E'],
    ['Ɔ', 'O'],
    ['Ȣ', 'OU'],
    ['Ṕ', 'P'],
    ['Ṗ', 'P'],
    ['Ꝓ', 'P'],
    ['Ƥ', 'P'],
    ['Ꝕ', 'P'],
    ['Ᵽ', 'P'],
    ['Ꝑ', 'P'],
    ['Ꝙ', 'Q'],
    ['Ꝗ', 'Q'],
    ['Ŕ', 'R'],
    ['Ř', 'R'],
    ['Ŗ', 'R'],
    ['Ṙ', 'R'],
    ['Ṛ', 'R'],
    ['Ṝ', 'R'],
    ['Ȑ', 'R'],
    ['Ȓ', 'R'],
    ['Ṟ', 'R'],
    ['Ɍ', 'R'],
    ['Ɽ', 'R'],
    ['Ꜿ', 'C'],
    ['Ǝ', 'E'],
    ['Ś', 'S'],
    ['Ṥ', 'S'],
    ['Š', 'S'],
    ['Ṧ', 'S'],
    ['Ş', 'S'],
    ['Ŝ', 'S'],
    ['Ș', 'S'],
    ['Ṡ', 'S'],
    ['Ṣ', 'S'],
    ['Ṩ', 'S'],
    ['Ť', 'T'],
    ['Ţ', 'T'],
    ['Ṱ', 'T'],
    ['Ț', 'T'],
    ['Ⱦ', 'T'],
    ['Ṫ', 'T'],
    ['Ṭ', 'T'],
    ['Ƭ', 'T'],
    ['Ṯ', 'T'],
    ['Ʈ', 'T'],
    ['Ŧ', 'T'],
    ['Ɐ', 'A'],
    ['Ꞁ', 'L'],
    ['Ɯ', 'M'],
    ['Ʌ', 'V'],
    ['Ꜩ', 'TZ'],
    ['Ú', 'U'],
    ['Ŭ', 'U'],
    ['Ǔ', 'U'],
    ['Û', 'U'],
    ['Ṷ', 'U'],
    ['Ü', 'U'],
    ['Ǘ', 'U'],
    ['Ǚ', 'U'],
    ['Ǜ', 'U'],
    ['Ǖ', 'U'],
    ['Ṳ', 'U'],
    ['Ụ', 'U'],
    ['Ű', 'U'],
    ['Ȕ', 'U'],
    ['Ù', 'U'],
    ['Ủ', 'U'],
    ['Ư', 'U'],
    ['Ứ', 'U'],
    ['Ự', 'U'],
    ['Ừ', 'U'],
    ['Ử', 'U'],
    ['Ữ', 'U'],
    ['Ȗ', 'U'],
    ['Ū', 'U'],
    ['Ṻ', 'U'],
    ['Ų', 'U'],
    ['Ů', 'U'],
    ['Ũ', 'U'],
    ['Ṹ', 'U'],
    ['Ṵ', 'U'],
    ['Ꝟ', 'V'],
    ['Ṿ', 'V'],
    ['Ʋ', 'V'],
    ['Ṽ', 'V'],
    ['Ꝡ', 'VY'],
    ['Ẃ', 'W'],
    ['Ŵ', 'W'],
    ['Ẅ', 'W'],
    ['Ẇ', 'W'],
    ['Ẉ', 'W'],
    ['Ẁ', 'W'],
    ['Ⱳ', 'W'],
    ['Ẍ', 'X'],
    ['Ẋ', 'X'],
    ['Ý', 'Y'],
    ['Ŷ', 'Y'],
    ['Ÿ', 'Y'],
    ['Ẏ', 'Y'],
    ['Ỵ', 'Y'],
    ['Ỳ', 'Y'],
    ['Ƴ', 'Y'],
    ['Ỷ', 'Y'],
    ['Ỿ', 'Y'],
    ['Ȳ', 'Y'],
    ['Ɏ', 'Y'],
    ['Ỹ', 'Y'],
    ['Ź', 'Z'],
    ['Ž', 'Z'],
    ['Ẑ', 'Z'],
    ['Ⱬ', 'Z'],
    ['Ż', 'Z'],
    ['Ẓ', 'Z'],
    ['Ȥ', 'Z'],
    ['Ẕ', 'Z'],
    ['Ƶ', 'Z'],
    ['Ĳ', 'IJ'],
    ['Œ', 'OE'],
    ['ᴀ', 'A'],
    ['ᴁ', 'AE'],
    ['ʙ', 'B'],
    ['ᴃ', 'B'],
    ['ᴄ', 'C'],
    ['ᴅ', 'D'],
    ['ᴇ', 'E'],
    ['ꜰ', 'F'],
    ['ɢ', 'G'],
    ['ʛ', 'G'],
    ['ʜ', 'H'],
    ['ɪ', 'I'],
    ['ʁ', 'R'],
    ['ᴊ', 'J'],
    ['ᴋ', 'K'],
    ['ʟ', 'L'],
    ['ᴌ', 'L'],
    ['ᴍ', 'M'],
    ['ɴ', 'N'],
    ['ᴏ', 'O'],
    ['ɶ', 'OE'],
    ['ᴐ', 'O'],
    ['ᴕ', 'OU'],
    ['ᴘ', 'P'],
    ['ʀ', 'R'],
    ['ᴎ', 'N'],
    ['ᴙ', 'R'],
    ['ꜱ', 'S'],
    ['ᴛ', 'T'],
    ['ⱻ', 'E'],
    ['ᴚ', 'R'],
    ['ᴜ', 'U'],
    ['ᴠ', 'V'],
    ['ᴡ', 'W'],
    ['ʏ', 'Y'],
    ['ᴢ', 'Z'],
    ['á', 'a'],
    ['ă', 'a'],
    ['ắ', 'a'],
    ['ặ', 'a'],
    ['ằ', 'a'],
    ['ẳ', 'a'],
    ['ẵ', 'a'],
    ['ǎ', 'a'],
    ['â', 'a'],
    ['ấ', 'a'],
    ['ậ', 'a'],
    ['ầ', 'a'],
    ['ẩ', 'a'],
    ['ẫ', 'a'],
    ['ä', 'a'],
    ['ǟ', 'a'],
    ['ȧ', 'a'],
    ['ǡ', 'a'],
    ['ạ', 'a'],
    ['ȁ', 'a'],
    ['à', 'a'],
    ['ả', 'a'],
    ['ȃ', 'a'],
    ['ā', 'a'],
    ['ą', 'a'],
    ['ᶏ', 'a'],
    ['ẚ', 'a'],
    ['å', 'a'],
    ['ǻ', 'a'],
    ['ḁ', 'a'],
    ['ⱥ', 'a'],
    ['ã', 'a'],
    ['ꜳ', 'aa'],
    ['æ', 'ae'],
    ['ǽ', 'ae'],
    ['ǣ', 'ae'],
    ['ꜵ', 'ao'],
    ['ꜷ', 'au'],
    ['ꜹ', 'av'],
    ['ꜻ', 'av'],
    ['ꜽ', 'ay'],
    ['ḃ', 'b'],
    ['ḅ', 'b'],
    ['ɓ', 'b'],
    ['ḇ', 'b'],
    ['ᵬ', 'b'],
    ['ᶀ', 'b'],
    ['ƀ', 'b'],
    ['ƃ', 'b'],
    ['ɵ', 'o'],
    ['ć', 'c'],
    ['č', 'c'],
    ['ç', 'c'],
    ['ḉ', 'c'],
    ['ĉ', 'c'],
    ['ɕ', 'c'],
    ['ċ', 'c'],
    ['ƈ', 'c'],
    ['ȼ', 'c'],
    ['ď', 'd'],
    ['ḑ', 'd'],
    ['ḓ', 'd'],
    ['ȡ', 'd'],
    ['ḋ', 'd'],
    ['ḍ', 'd'],
    ['ɗ', 'd'],
    ['ᶑ', 'd'],
    ['ḏ', 'd'],
    ['ᵭ', 'd'],
    ['ᶁ', 'd'],
    ['đ', 'd'],
    ['ɖ', 'd'],
    ['ƌ', 'd'],
    ['ı', 'i'],
    ['ȷ', 'j'],
    ['ɟ', 'j'],
    ['ʄ', 'j'],
    ['ǳ', 'dz'],
    ['ǆ', 'dz'],
    ['é', 'e'],
    ['ĕ', 'e'],
    ['ě', 'e'],
    ['ȩ', 'e'],
    ['ḝ', 'e'],
    ['ê', 'e'],
    ['ế', 'e'],
    ['ệ', 'e'],
    ['ề', 'e'],
    ['ể', 'e'],
    ['ễ', 'e'],
    ['ḙ', 'e'],
    ['ë', 'e'],
    ['ė', 'e'],
    ['ẹ', 'e'],
    ['ȅ', 'e'],
    ['è', 'e'],
    ['ẻ', 'e'],
    ['ȇ', 'e'],
    ['ē', 'e'],
    ['ḗ', 'e'],
    ['ḕ', 'e'],
    ['ⱸ', 'e'],
    ['ę', 'e'],
    ['ᶒ', 'e'],
    ['ɇ', 'e'],
    ['ẽ', 'e'],
    ['ḛ', 'e'],
    ['ꝫ', 'et'],
    ['ḟ', 'f'],
    ['ƒ', 'f'],
    ['ᵮ', 'f'],
    ['ᶂ', 'f'],
    ['ǵ', 'g'],
    ['ğ', 'g'],
    ['ǧ', 'g'],
    ['ģ', 'g'],
    ['ĝ', 'g'],
    ['ġ', 'g'],
    ['ɠ', 'g'],
    ['ḡ', 'g'],
    ['ᶃ', 'g'],
    ['ǥ', 'g'],
    ['ḫ', 'h'],
    ['ȟ', 'h'],
    ['ḩ', 'h'],
    ['ĥ', 'h'],
    ['ⱨ', 'h'],
    ['ḧ', 'h'],
    ['ḣ', 'h'],
    ['ḥ', 'h'],
    ['ɦ', 'h'],
    ['ẖ', 'h'],
    ['ħ', 'h'],
    ['ƕ', 'hv'],
    ['í', 'i'],
    ['ĭ', 'i'],
    ['ǐ', 'i'],
    ['î', 'i'],
    ['ï', 'i'],
    ['ḯ', 'i'],
    ['ị', 'i'],
    ['ȉ', 'i'],
    ['ì', 'i'],
    ['ỉ', 'i'],
    ['ȋ', 'i'],
    ['ī', 'i'],
    ['į', 'i'],
    ['ᶖ', 'i'],
    ['ɨ', 'i'],
    ['ĩ', 'i'],
    ['ḭ', 'i'],
    ['ꝺ', 'd'],
    ['ꝼ', 'f'],
    ['ᵹ', 'g'],
    ['ꞃ', 'r'],
    ['ꞅ', 's'],
    ['ꞇ', 't'],
    ['ꝭ', 'is'],
    ['ǰ', 'j'],
    ['ĵ', 'j'],
    ['ʝ', 'j'],
    ['ɉ', 'j'],
    ['ḱ', 'k'],
    ['ǩ', 'k'],
    ['ķ', 'k'],
    ['ⱪ', 'k'],
    ['ꝃ', 'k'],
    ['ḳ', 'k'],
    ['ƙ', 'k'],
    ['ḵ', 'k'],
    ['ᶄ', 'k'],
    ['ꝁ', 'k'],
    ['ꝅ', 'k'],
    ['ĺ', 'l'],
    ['ƚ', 'l'],
    ['ɬ', 'l'],
    ['ľ', 'l'],
    ['ļ', 'l'],
    ['ḽ', 'l'],
    ['ȴ', 'l'],
    ['ḷ', 'l'],
    ['ḹ', 'l'],
    ['ⱡ', 'l'],
    ['ꝉ', 'l'],
    ['ḻ', 'l'],
    ['ŀ', 'l'],
    ['ɫ', 'l'],
    ['ᶅ', 'l'],
    ['ɭ', 'l'],
    ['ł', 'l'],
    ['ǉ', 'lj'],
    ['ſ', 's'],
    ['ẜ', 's'],
    ['ẛ', 's'],
    ['ẝ', 's'],
    ['ḿ', 'm'],
    ['ṁ', 'm'],
    ['ṃ', 'm'],
    ['ɱ', 'm'],
    ['ᵯ', 'm'],
    ['ᶆ', 'm'],
    ['ń', 'n'],
    ['ň', 'n'],
    ['ņ', 'n'],
    ['ṋ', 'n'],
    ['ȵ', 'n'],
    ['ṅ', 'n'],
    ['ṇ', 'n'],
    ['ǹ', 'n'],
    ['ɲ', 'n'],
    ['ṉ', 'n'],
    ['ƞ', 'n'],
    ['ᵰ', 'n'],
    ['ᶇ', 'n'],
    ['ɳ', 'n'],
    ['ñ', 'n'],
    ['ǌ', 'nj'],
    ['ó', 'o'],
    ['ŏ', 'o'],
    ['ǒ', 'o'],
    ['ô', 'o'],
    ['ố', 'o'],
    ['ộ', 'o'],
    ['ồ', 'o'],
    ['ổ', 'o'],
    ['ỗ', 'o'],
    ['ö', 'o'],
    ['ȫ', 'o'],
    ['ȯ', 'o'],
    ['ȱ', 'o'],
    ['ọ', 'o'],
    ['ő', 'o'],
    ['ȍ', 'o'],
    ['ò', 'o'],
    ['ỏ', 'o'],
    ['ơ', 'o'],
    ['ớ', 'o'],
    ['ợ', 'o'],
    ['ờ', 'o'],
    ['ở', 'o'],
    ['ỡ', 'o'],
    ['ȏ', 'o'],
    ['ꝋ', 'o'],
    ['ꝍ', 'o'],
    ['ⱺ', 'o'],
    ['ō', 'o'],
    ['ṓ', 'o'],
    ['ṑ', 'o'],
    ['ǫ', 'o'],
    ['ǭ', 'o'],
    ['ø', 'o'],
    ['ǿ', 'o'],
    ['õ', 'o'],
    ['ṍ', 'o'],
    ['ṏ', 'o'],
    ['ȭ', 'o'],
    ['ƣ', 'oi'],
    ['ꝏ', 'oo'],
    ['ɛ', 'e'],
    ['ᶓ', 'e'],
    ['ɔ', 'o'],
    ['ᶗ', 'o'],
    ['ȣ', 'ou'],
    ['ṕ', 'p'],
    ['ṗ', 'p'],
    ['ꝓ', 'p'],
    ['ƥ', 'p'],
    ['ᵱ', 'p'],
    ['ᶈ', 'p'],
    ['ꝕ', 'p'],
    ['ᵽ', 'p'],
    ['ꝑ', 'p'],
    ['ꝙ', 'q'],
    ['ʠ', 'q'],
    ['ɋ', 'q'],
    ['ꝗ', 'q'],
    ['ŕ', 'r'],
    ['ř', 'r'],
    ['ŗ', 'r'],
    ['ṙ', 'r'],
    ['ṛ', 'r'],
    ['ṝ', 'r'],
    ['ȑ', 'r'],
    ['ɾ', 'r'],
    ['ᵳ', 'r'],
    ['ȓ', 'r'],
    ['ṟ', 'r'],
    ['ɼ', 'r'],
    ['ᵲ', 'r'],
    ['ᶉ', 'r'],
    ['ɍ', 'r'],
    ['ɽ', 'r'],
    ['ↄ', 'c'],
    ['ꜿ', 'c'],
    ['ɘ', 'e'],
    ['ɿ', 'r'],
    ['ś', 's'],
    ['ṥ', 's'],
    ['š', 's'],
    ['ṧ', 's'],
    ['ş', 's'],
    ['ŝ', 's'],
    ['ș', 's'],
    ['ṡ', 's'],
    ['ṣ', 's'],
    ['ṩ', 's'],
    ['ʂ', 's'],
    ['ᵴ', 's'],
    ['ᶊ', 's'],
    ['ȿ', 's'],
    ['ɡ', 'g'],
    ['ᴑ', 'o'],
    ['ᴓ', 'o'],
    ['ᴝ', 'u'],
    ['ť', 't'],
    ['ţ', 't'],
    ['ṱ', 't'],
    ['ț', 't'],
    ['ȶ', 't'],
    ['ẗ', 't'],
    ['ⱦ', 't'],
    ['ṫ', 't'],
    ['ṭ', 't'],
    ['ƭ', 't'],
    ['ṯ', 't'],
    ['ᵵ', 't'],
    ['ƫ', 't'],
    ['ʈ', 't'],
    ['ŧ', 't'],
    ['ᵺ', 'th'],
    ['ɐ', 'a'],
    ['ᴂ', 'ae'],
    ['ǝ', 'e'],
    ['ᵷ', 'g'],
    ['ɥ', 'h'],
    ['ʮ', 'h'],
    ['ʯ', 'h'],
    ['ᴉ', 'i'],
    ['ʞ', 'k'],
    ['ꞁ', 'l'],
    ['ɯ', 'm'],
    ['ɰ', 'm'],
    ['ᴔ', 'oe'],
    ['ɹ', 'r'],
    ['ɻ', 'r'],
    ['ɺ', 'r'],
    ['ⱹ', 'r'],
    ['ʇ', 't'],
    ['ʌ', 'v'],
    ['ʍ', 'w'],
    ['ʎ', 'y'],
    ['ꜩ', 'tz'],
    ['ú', 'u'],
    ['ŭ', 'u'],
    ['ǔ', 'u'],
    ['û', 'u'],
    ['ṷ', 'u'],
    ['ü', 'u'],
    ['ǘ', 'u'],
    ['ǚ', 'u'],
    ['ǜ', 'u'],
    ['ǖ', 'u'],
    ['ṳ', 'u'],
    ['ụ', 'u'],
    ['ű', 'u'],
    ['ȕ', 'u'],
    ['ù', 'u'],
    ['ủ', 'u'],
    ['ư', 'u'],
    ['ứ', 'u'],
    ['ự', 'u'],
    ['ừ', 'u'],
    ['ử', 'u'],
    ['ữ', 'u'],
    ['ȗ', 'u'],
    ['ū', 'u'],
    ['ṻ', 'u'],
    ['ų', 'u'],
    ['ᶙ', 'u'],
    ['ů', 'u'],
    ['ũ', 'u'],
    ['ṹ', 'u'],
    ['ṵ', 'u'],
    ['ᵫ', 'ue'],
    ['ꝸ', 'um'],
    ['ⱴ', 'v'],
    ['ꝟ', 'v'],
    ['ṿ', 'v'],
    ['ʋ', 'v'],
    ['ᶌ', 'v'],
    ['ⱱ', 'v'],
    ['ṽ', 'v'],
    ['ꝡ', 'vy'],
    ['ẃ', 'w'],
    ['ŵ', 'w'],
    ['ẅ', 'w'],
    ['ẇ', 'w'],
    ['ẉ', 'w'],
    ['ẁ', 'w'],
    ['ⱳ', 'w'],
    ['ẘ', 'w'],
    ['ẍ', 'x'],
    ['ẋ', 'x'],
    ['ᶍ', 'x'],
    ['ý', 'y'],
    ['ŷ', 'y'],
    ['ÿ', 'y'],
    ['ẏ', 'y'],
    ['ỵ', 'y'],
    ['ỳ', 'y'],
    ['ƴ', 'y'],
    ['ỷ', 'y'],
    ['ỿ', 'y'],
    ['ȳ', 'y'],
    ['ẙ', 'y'],
    ['ɏ', 'y'],
    ['ỹ', 'y'],
    ['ź', 'z'],
    ['ž', 'z'],
    ['ẑ', 'z'],
    ['ʑ', 'z'],
    ['ⱬ', 'z'],
    ['ż', 'z'],
    ['ẓ', 'z'],
    ['ȥ', 'z'],
    ['ẕ', 'z'],
    ['ᵶ', 'z'],
    ['ᶎ', 'z'],
    ['ʐ', 'z'],
    ['ƶ', 'z'],
    ['ɀ', 'z'],
    ['ﬀ', 'ff'],
    ['ﬃ', 'ffi'],
    ['ﬄ', 'ffl'],
    ['ﬁ', 'fi'],
    ['ﬂ', 'fl'],
    ['ĳ', 'ij'],
    ['œ', 'oe'],
    ['ﬆ', 'st'],
    ['ₐ', 'a'],
    ['ₑ', 'e'],
    ['ᵢ', 'i'],
    ['ⱼ', 'j'],
    ['ₒ', 'o'],
    ['ᵣ', 'r'],
    ['ᵤ', 'u'],
    ['ᵥ', 'v'],
    ['ₓ', 'x'],
  ]);

  /**
   * Converts an underscored or CamelCase word into a English
   * sentence.
   * @param {string} words
   * @param {boolean} ucAll whether to set all words to uppercase
   * @return {string}
   */
  titleize(words: string, ucAll: boolean = false): string {
    words = this.humanize(this.underscore(words), ucAll);
    return ucAll ?
      words.replace(/^(.)|\s+(.)/g, v => v.toLocaleUpperCase()) :
      words.slice(0, 1).toLocaleUpperCase() + words.slice(1);
  }

  /**
   * Returns given word as CamelCased.
   *
   * Converts a word like "send_email" to "SendEmail". It
   * will remove non alphanumeric character from the word, so
   * "who's online" will be converted to "WhoSOnline".
   * @see variablize()
   * @param {string} word the word to CamelCase
   * @return {string}
   */
  camelize(word: string): string {
    return word.replace(/[^\p{L}\p{N}]+/ug, ' ')
      .replace(/^(.)|\s+(.)/g, v => v.toLocaleUpperCase())
      .replace(' ', '');
  }

  /**
   * Converts a CamelCase name into space-separated words.
   * For example, 'PostTag' will be converted to 'Post Tag'.
   * @param {string} name the string to be converted
   * @param {boolean} ucAll whether to capitalize the first letter in each word
   * @return {string} the resulting words
   */
  camel2words(name: string, ucAll: boolean = true): string {
    const label = name
      .replace(/(?<!\p{Lu})(\p{Lu})|(\p{Lu})(?=\p{Ll})/ug, ' \0')
      .replace(/-|_|./g, ' ')
      .trim()
      .toLocaleLowerCase();
    return ucAll ? label.replace(/^(.)|\s+(.)/g, v => v.toLocaleUpperCase()) : label;
  }

  /**
   * Converts a CamelCase name into an ID in lowercase.
   * Words in the ID may be concatenated using the specified character (defaults to '-').
   * For example, 'PostTag' will be converted to 'post-tag'.
   * @param {string} name the string to be converted
   * @param {string} separator the character used to concatenate the words in the ID
   * @param {boolean|string} strict whether to insert a separator between two consecutive uppercase chars, defaults to false
   * @return {string} the resulting ID
   */
  camel2id(name: string, separator: string = '-', strict: boolean | string = false): string {
    const regex = strict ? /\p{Lu}/ug : /(?<!\p{Lu})\p{Lu}/ug;
    if (separator === '_') {
      return name.replace(regex, '_\0')
        .replace(/^[_]+|[_]+$/g, '') // trim(_)
        .toLocaleLowerCase();
    }

    return name.replace(regex, separator + '\0')
      .replace(/_/g, separator)
      .replace(new RegExp(`^[${separator}]+|[${separator}]+$`, 'g'), '') // trim(separator)
      .toLocaleLowerCase();
  }

  /**
   * Converts an ID into a CamelCase name.
   * Words in the ID separated by `separator` (defaults to '-') will be concatenated into a CamelCase name.
   * For example, 'post-tag' is converted to 'PostTag'.
   * @param {string} id the ID to be converted
   * @param {string} separator the character used to separate the words in the ID
   * @return {string} the resulting CamelCase name
   */
  id2camel(id: string, separator: string = '-'): string {
    return id
      .replace(new RegExp('[${separator}]', 'g'), ' ')
      .replace(/^(.)|\s+(.)/g, v => v.toLocaleUpperCase())
      .replace(/ /g, '');
  }

  /**
   * Converts any "CamelCased" into an "underscored_word".
   * @param {string} words the word(s) to underscore
   * @return {string}
   */
  underscore(words: string): string {
    return words.replace(/(?<=\p{L})(\p{Lu})/ug, '_$1').toLocaleLowerCase();
  }

  /**
   * Returns a human-readable string from $word.
   * @param {string} word the string to humanize
   * @param {boolean} ucAll whether to set all words to uppercase or not
   * @return {string}
   */
  humanize(word: string, ucAll: boolean = false): string {
    word = word.replace(/_id$/g, '').replace(/_/g, ' ');
    return ucAll ?
      word.replace(/^(.)|\s+(.)/g, v => v.toLocaleUpperCase()) : // ucwords
      word.slice(0, 1).toLocaleUpperCase() + word.slice(1); // ucfirst
  }

  /**
   * Same as camelize but first char is in lowercase.
   *
   * Converts a word like "send_email" to "sendEmail". It
   * will remove non alphanumeric character from the word, so
   * "who's online" will be converted to "whoSOnline".
   * @param {string} word to lowerCamelCase
   * @return {string}
   */
  variablize(word): string {
    word = this.camelize(word);
    return word.slice(0, 1).toLocaleLowerCase() + word.slice(1);
  }

  /**
   * Converts a class name to its table name (pluralized) naming conventions.
   *
   * For example, converts "Person" to "people".
   * @param {string} className the class name for getting related table_name
   * @return string
   */
  tableize(className: string): string {
    return this.pluralize(this.underscore(className));
  }

  /**
   * Returns a string with all spaces converted to given replacement,
   * non word characters removed and the rest of characters transliterated.
   *
   * If intl extension isn't available uses fallback that converts latin characters only
   * and removes the rest. You may customize characters map via $transliteration property
   * of the helper.
   *
   * @param {string} text An arbitrary string to convert
   * @param {string} replacement The replacement to use for spaces
   * @param {boolean} lowercase whether to return the string in lowercase or not. Defaults to `true`.
   * @return {string} The sluggablized string.
   */
  slug(text: string, replacement: string = '-', lowercase: boolean = true): string {
    const sluggablized = text.split('')
      .map(s => this.transliteration.has(s) ? this.transliteration.get(s) : s)
      .join('')
      .replace(/[^0-9a-z]+/iug, replacement);
    return lowercase ? sluggablized.toLocaleLowerCase() : sluggablized;
  }

  /**
   * Converts a table name to its class name.
   *
   * For example, converts "people" to "Person".
   * @param {string} tableName
   * @return {string}
   */
  classify(tableName: string): string {
    return this.camelize(this.singularize(tableName));
  }

  /**
   * Returns the singular of the `word`.
   * @param {string} word the english word to singularize
   * @return {string} Singular noun.
   */
  singularize(word: string): string {
    let singularized: string;
    this.specials.forEach((value, key) => {
      if (value === word) {
        singularized = key;
        return;
      }
    });
    if (singularized) {
      return singularized;
    }
    this.singulars.forEach((replacement, rule) => {
      if (rule.test(word)) {
        singularized = word.replace(rule, replacement);
      }
    });
    return singularized || word;
  }

  /**
   * Converts a word to its plural form.
   * Note that this is for English only!
   * For example, 'apple' will become 'apples', and 'child' will become 'children'.
   * @param {string} word the word to be pluralized
   * @return {string} the pluralized word
   */
  pluralize(word: string): string {
    if (this.specials.has(word)) {
      return this.specials.get(word);
    }
    let pluralized: string;
    this.plurals.forEach((replacement, rule) => {
      if (rule.test(word)) {
        pluralized = word.replace(rule, replacement);
      }
    });
    return pluralized || word;
  }

  /**
   * Converts number to its ordinal English form. For example, converts 13 to 13th, 2 to 2nd ...
   * @param {number} num the number to get its ordinal value
   * @return {string}
   */
  ordinalize(num: number) {
    if ([11, 12, 13].indexOf(num) !== -1) {
      return num + 'th';
    }
    switch (num % 10) {
      case 1:
        return num + 'st';
      case 2:
        return num + 'nd';
      case 3:
        return num + 'rd';
      default:
        return num + 'th';
    }
  }

  /**
   * Converts a list of words into a sentence.
   *
   * Special treatment is done for the last few words. For example,
   *
   * ```ts
   * words = ['Spain', 'France'];
   * console.log(this.inflectorService.sentence(words));
   * // output: Spain and France
   *
   * words = ['Spain', 'France', 'Italy'];
   * console.log(this.inflectorService.sentence(words));
   * // output: Spain, France and Italy
   *
   * words = ['Spain', 'France', 'Italy'];
   * console.log(this.inflectorService.sentence(words, ' & '));
   * // output: Spain, France & Italy
   * ```
   *
   * @param {string[]} words the words to be converted into an string
   * @param {string} twoWordsConnector the string connecting words when there are only two
   * @param {string} lastWordConnector the string connecting the last two words. If this is null, it will
   * take the value of `twoWordsConnector`.
   * @param {string} connector the string connecting words other than those connected by
   * lastWordConnector and twoWordsConnector
   * @return {string} the generated sentence
   */
  sentence(words: string[], twoWordsConnector?: string, lastWordConnector?: string, connector = ', ') {
    if (!twoWordsConnector) {
      twoWordsConnector = ' and ';
    }
    if (!lastWordConnector) {
      lastWordConnector = twoWordsConnector;
    }

    switch (words.length) {
      case 0:
        return '';
      case 1:
        return words.shift();
      case 2:
        return words.join(twoWordsConnector);
      default:
        return words.slice(0, -1).join(connector) + lastWordConnector + words.slice(-1).shift();
    }
  }
}
