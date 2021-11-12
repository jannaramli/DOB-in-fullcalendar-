export class Header {

    name: string;
    alamat:string;
    alamat2:string;
    negeri:any;
    bandar:string;
    poskod:number;
    kad:number;
    dob:number;
    nikah:number;
    mas:number;
    attach:any;

    constructor(name='', alamat='', alamat2='', negeri='',bandar='',poskod=0,kad=0,dob=0,nikah=0,mas=0, attach='') {
        
        this.name = name;
        this.alamat = alamat;
        this.alamat2 = alamat2;
        this.negeri = negeri;
        this.bandar = bandar;
        this.poskod = poskod;
        this.kad = kad;
        this.dob = dob;
        this.nikah =nikah;
        this.mas= mas;
        this.attach = attach;
      }
}

