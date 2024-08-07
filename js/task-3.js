
class StringBuilder {
  #value;

  constructor(str) {
    this.#value = str
  }

  getValue() {
    return this.#value;
  }

  padStart(strPart) {
    this.#value = `${strPart}${this.#value}`
  }
  padEnd(strPart) {
    this.#value += strPart
  }

  padBoth(strPart) {
    //* variant 1
    this.#value = `${strPart}${this.#value}${strPart}`

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
