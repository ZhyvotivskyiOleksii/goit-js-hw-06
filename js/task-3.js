
class StringBuilder {
  #str;

  constructor(str) {
    this.#str = str
  }

  getValue() {
    return this.#str;
  }

  padStart(strPart) {
    this.#str = `${strPart}${this.#str}`
  }
  padEnd(strPart) {
    this.#str += strPart
  }

  padBoth(strPart) {
    //* variant 1
    this.#str = `${strPart}${this.#str}${strPart}`

    //* variant 2
    // this.padStart(strPart)
    // this.padEnd(strPart)
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
