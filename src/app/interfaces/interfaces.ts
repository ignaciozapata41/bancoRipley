
export interface Avances{
    monto: number;
    numCuotas: number;
    cae: number;
    ctc: number;
}

export class User{
    rut: string;
    name: string;
    email: string;
    password: string;

    constructor(rut: string,name: string,email: string,password: string, ) {
        this.rut = rut;
        this.name = name;
        this.email = email;
        this.password = password;
      }    
}

export interface httpResponse{
    msg: string;
    data: any;
}
