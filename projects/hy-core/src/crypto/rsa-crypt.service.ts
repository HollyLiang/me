import { Injectable } from '@angular/core';
import JSEncrypt from 'jsencrypt';

@Injectable({
  providedIn: 'root'
})
export class RSACryptService {
  DEFAULT_KEY_SIZE = '2048';

  keyObj: JSEncrypt;

  publicKey = `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCyY8YvkQdTbcJlfOAH2CujS992
  k5ESWdP++9d7JKjL703hsl8v4iEjSVyH9UvFWt3foxnqLE093mbLxPh+7kmpY9xm
  6oWVq4RXkHHY6UYuJRBaL1XZ8homG4hCdSbGHLSNUvl433lCz3fm8xXOolSte5KA
  vpRUnZNacecO2Olf8QIDAQAB
  -----END PUBLIC KEY-----`;

  privateKey = `-----BEGIN RSA PRIVATE KEY-----
  MIICXAIBAAKBgQCyY8YvkQdTbcJlfOAH2CujS992k5ESWdP++9d7JKjL703hsl8v
  4iEjSVyH9UvFWt3foxnqLE093mbLxPh+7kmpY9xm6oWVq4RXkHHY6UYuJRBaL1XZ
  8homG4hCdSbGHLSNUvl433lCz3fm8xXOolSte5KAvpRUnZNacecO2Olf8QIDAQAB
  AoGAJ01yMbKrQYdSKBf+J9xJqP2jazWR5dAis+/6hqgKBHxh1VL+Q8d3c5XLLC0w
  F3gwoAAISp6eGf5w+X4ZHaYUVj4w/oZWvmgtFXt64Sc1jcWuclEKG7zSxvQy284G
  c8LAMOkVASw/K3JR0H+t9ryql0XWZEjsY+CVe40WKBwZD/0CQQDnkbJHRjF6tmtu
  mVOojPfIhsA0v8+WQNreYmowwLmuKyrMEkmRu0ndOJ0P1KphSM8stanYTgKnSs8y
  zchexzQ3AkEAxTXKHsio4I0Ah3diuz3HMRP27WfFDerZriAMDtCSn+7AfWbDfAvP
  wFneZrHXofOP3S91PQg77KZU+7sXYeBJFwJAS7l6OhJ7Jay3jvA2yjxm3r0p51X+
  FR1aNTSrkwvC7HCTSy6DvlMngV79BWs+2BdOIEm7o89G0NwGy489gbjUmwJBALm+
  Bdakq9qDM4JjwYwVjaz93s6PtBt9nPTRnkm9zLvxxT7XMTt+bHgArOYQjsYsfs2W
  y1dmj/o+V0CZYFaBRpUCQGQrBNlcmnfDBRS07Qihk8XaHZlEOkquHYH/qP10GUcn
  YLuZHpK+nbj6rP9zo3Cpvm6asnbqdHYeQu8GS05AzVE=
  -----END RSA PRIVATE KEY-----`;


  constructor() {
    this.init();
  }

  init(){
    this.keyObj = new JSEncrypt({ default_key_size: this.DEFAULT_KEY_SIZE });
    this.keyObj.setPublicKey(this.publicKey);
    this.keyObj.setPrivateKey(this.privateKey);
  }

  encrypt(message) {
    return this.keyObj.encrypt(message);
  }

  decrypt(data) {
    return this.keyObj.decrypt(data);
  }

}
