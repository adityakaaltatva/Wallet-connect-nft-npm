async function generateRSAKeyPair() {
    try {
      const keyPair = await window.crypto.subtle.generateKey(
        {
          name: "RSA-OAEP",
          modulusLength: 4096,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: "SHA-256",
        },
        true,
        ["encrypt", "decrypt"]
      );
  
      // Export the public key as a JWK
      const publicKeyJWK = await window.crypto.subtle.exportKey("jwk", keyPair.publicKey);
  
      // Export the private key as a JWK
      const privateKeyJWK = await window.crypto.subtle.exportKey("jwk", keyPair.privateKey);
  
      return {
        publicKey: publicKeyJWK,
        privateKey: privateKeyJWK,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }