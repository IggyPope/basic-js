const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    if (message.length > key.length) {
      key = key.padEnd(message.length, key);
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;

    let encryptedMessage = message.replace(/[A-Z]/g, (char) => {
      const charOffset = char.charCodeAt(0) - 'A'.charCodeAt(0);
      const keyOffset = key.charAt(keyIndex).charCodeAt(0) - 'A'.charCodeAt(0);

      const encryptOffset = (charOffset + keyOffset) % 26;

      keyIndex++;

      return String.fromCharCode(encryptOffset + 'A'.charCodeAt(0));
    });

    if (!this.isDirect) {
      encryptedMessage = encryptedMessage.split('').reverse().join('');
    }

    return encryptedMessage;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    if (encryptedMessage.length > key.length) {
      key = key.padEnd(encryptedMessage.length, key);
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let keyIndex = 0;

    let decryptedMessage = encryptedMessage.replace(/[A-Z]/g, (char) => {
      const charOffset = char.charCodeAt(0) - 'A'.charCodeAt(0);
      const keyOffset = key.charAt(keyIndex).charCodeAt(0) - 'A'.charCodeAt(0);

      const decryptOffset = (charOffset - keyOffset + 26) % 26;

      keyIndex++;

      return String.fromCharCode(decryptOffset + 'A'.charCodeAt(0));
    });

    if (!this.isDirect) {
      decryptedMessage = decryptedMessage.split('').reverse().join('');
    }

    return decryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
