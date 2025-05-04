class Base64 {
  static encode(password) {
    return Buffer.from(password, "utf-8").toString("base64");
  }

  static comparison(inputPassword, storedEncoded) {
    const encodedInput = this.encode(inputPassword);
    return encodedInput === storedEncoded;
  }
}

const password = "Passrishabh";
const encoded = Base64.encode(password);

console.log("Encoded (Base64):", encoded);
console.log(
  "Match with correct password:",
  Base64.comparison("Passrishabh", encoded)
);
console.log("Match with wrong password:", Base64.comparison("xyz", encoded));
