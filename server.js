var request = require('request');
var Lame = require('lame');
var Speaker = require('speaker');

var text = 'Say hello to my little friend';

while (text)  {
	var url = 'http://translate.google.com/translate_tts?tl=en&q=' + encodeURIComponent(text);
	request(url).pipe(new Lame.Decoder).pipe(new Speaker);
	request('http://www.iheartquotes.com/api/v1/random').pipe(text);
        text = text.substring(0, text.indexOf('[code')).trim();
}
