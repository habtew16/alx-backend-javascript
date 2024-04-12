/**
 * class course.
 */
export default class Currency {
  /**
   * creates class.
   *
   * @param {String} code - code of the corse
   * @param {String} name - name of the course.
   */
  constructor(code, name) {
    this.code = code
    this.name = name;
  }

  /**
   * Gets the name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of this course (in months).
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the length of this course (in months).
   */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = value;
  }

  /**
   * prints name and code
   * @return string of code
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`
  }
}
