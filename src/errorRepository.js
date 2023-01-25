export default class ErrorRepository {
  constructor() {
    this.data = new Map();
    this.data.set(923, 'name error');
    this.data.set(14, 'x error');
    this.data.set(10001, 'insert data error');
  }

  translate(code) {
    return this.data.get(code);
  }
}
