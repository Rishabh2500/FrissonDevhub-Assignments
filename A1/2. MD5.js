const crypto = require("crypto");

class MD5 {
  static hashMD5(password) {
    return crypto.createHash("md5").update(password, "utf-8").digest("hex");
  }

  static verify(inputPassword, storedHash) {
    const hashedInput = this.hashMD5(inputPassword);
    return hashedInput === storedHash;
  }
}

const password = "passHello";
const hash = MD5.hashMD5(password);

console.log("Hashed (MD5):", hash);
console.log("Check for correct password:", MD5.verify("passHello", hash)); // true
console.log("Check for wrong password:", MD5.verify("wrongPass", hash)); // false
