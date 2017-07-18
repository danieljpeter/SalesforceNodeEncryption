public class Encrypt {

    private static final Blob KEY = EncodingUtil.base64Decode('LHDK5bekAHJOFfXXzkd5uR/AoLBNPDNLIMAK8M0xss8=');    

/*

//execute anonymous example:

String secret = 'Shhhh..  This is a secret.';
System.debug('1: ' + secret);

String encrypted = Encrypt.encryptString(secret);
System.debug('2: ' + encrypted);

String encryptedAgain = Encrypt.encryptString(secret);
System.debug('3: ' + encryptedAgain);

System.debug('4: ' + Encrypt.decryptString(encrypted));
System.debug('5: ' + Encrypt.decryptString(encryptedAgain));

String encryptedfromNodeJS = 'cLaipdqsdGM/z+e+QjpqjUKeeQR26XSJdpUvgNE1areZHhB8DeAA+9xOgZO+wEe9';
System.debug('6: ' + encryptedfromNodeJS);

String encryptedfromNodeJSagain = '1NfNnjF5ROu3W9O8G14yzpjbpLDlEYjOjg/v1or5f7OgNZj+p/v3gdj5+NCR6olD';
System.debug('7: ' + encryptedfromNodeJSagain);

System.debug('8: ' + Encrypt.decryptString(encryptedfromNodeJS));
System.debug('9: ' + Encrypt.decryptString(encryptedfromNodeJSagain));

*/
    
    public static String encryptString(String clearText) {
        String encryptedText = null;
        Blob encryptedBlob = Crypto.encryptWithManagedIV('AES256', KEY, Blob.valueOf(clearText));
        encryptedText = EncodingUtil.base64Encode(encryptedBlob); 
        return encryptedText;
    }
    
    public static String decryptString(String encodedCipherText) {
        String clearText = null;
        Blob encryptedBlob = EncodingUtil.base64Decode(encodedCipherText);
        Blob decryptedBlob = Crypto.decryptWithManagedIV('AES256', KEY, encryptedBlob);
        clearText = decryptedBlob.toString();
        return clearText;
    }            
    
}