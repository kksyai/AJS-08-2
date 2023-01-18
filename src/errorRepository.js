const errorRep = new Map;
class ErrorRepository {
    constructor(code, description){
        this.code = code,
        this.description = description

        errorRep.set(this, {
            code,
            description
        })
    }

    translate(code){
        return errorRep.get(code);
    }
}

const err1 = new ErrorRepository(923, 'name error');
const err2 = new ErrorRepository(14, 'x error');
const err3 = new ErrorRepository(10001, 'insert data error');

console.log(errorRep);
console.log(errorRep.has(14)); // falue ???
//console.log(errorRep.translate(130));