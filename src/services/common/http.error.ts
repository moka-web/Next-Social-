


export class AccesDeniedError extends Error {
    constructor(message :string){
        super(message)
        this.message = 'AccesDeniedError';
    }
};



export class ConflictError extends Error {
    constructor(message :string){
        super(message)
        this.message = 'ConflictError';
    }
};



