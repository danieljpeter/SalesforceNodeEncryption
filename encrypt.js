var KEY = Buffer.from('LHDK5bekAHJOFfXXzkd5uR/AoLBNPDNLIMAK8M0xss8=', 'base64');
const crypto = require('crypto');

var secret = 'Shhhh..  This is a secret.';
console.log('1: ' + secret);

var encrypted = encryptString(secret);
console.log('2: ' + encrypted);

var encryptedAgain = encryptString(secret);
console.log('3: ' + encryptedAgain);

console.log('4: ' + decryptString(encrypted));
console.log('5: ' + decryptString(encryptedAgain));

var encryptedfromSFDC = 'eFSWOcUjUiXKcfM+szX9HnjOZNTTCTUrxu82cwV0KR6AHNmp4X9PmNX8eQf4H1fG';
console.log('6: ' + encryptedfromSFDC);

var encryptedfromSFDCagain = 'Ed2oiBbyhZYm7P3kDvT7jYkg1p5e6Tb4xEEGaOPe/UznnZxEbr9pEmY6WVTWlWL6';
console.log('7: ' + encryptedfromSFDCagain);

console.log('8: ' + decryptString(encryptedfromSFDC));
console.log('9: ' + decryptString(encryptedfromSFDCagain));

function encryptString(clearText) {
	var encryptedText = null;

	var textBuffer = new Buffer(clearText, 'utf-8');
	var iv = crypto.randomBytes(16);

	var cipher = crypto.createCipheriv('aes-256-cbc', KEY, iv);
	var encryptedBuffer = cipher.update(textBuffer);
	encryptedText = Buffer.concat([iv, encryptedBuffer, cipher.final()]).toString('base64');

	return encryptedText;	
}

function decryptString(encryptedText) {
	var clearText = null;

	var encryptedBlob = new Buffer(encryptedText, 'base64');
	var iv = encryptedBlob.slice(0, 16);
	var textBuffer = encryptedBlob.toString('base64', 16);

	var decipher = crypto.createDecipheriv('aes-256-cbc', KEY, iv);
	clearText = decipher.update(textBuffer,'base64','utf-8');
	clearText += decipher.final('utf-8'); 
	
	return clearText;
}

