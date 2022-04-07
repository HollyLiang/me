import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AESCryptoService {

  secretKey = "YourSecretKeyForEncryption&Descryption";

  constructor() { }

  generateKey(){
    var salt = CryptoJS.lib.WordArray.random(128/8);
    return CryptoJS.PBKDF2('Secret Passphrase', salt, { keySize: 512/32, iterations: 1000 });
}

  encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
  }

  decrypt(textToDecrypt: string) {
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }
}
