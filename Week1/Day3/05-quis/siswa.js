export default class Siswa{
    static jumlahSiswa=0;
    static jumlahNodeJs =0;
    static jumlahGolang =0;
    static jumlahPhyton =0;
    constructor(fullname,city,education,grade,type,bootcamp,batch,year,skillPoint){
        this.fullname= fullname;
        this.city= city;
        this.education = education;
        this.grade= grade;
        this.type= type;
        this.bootcamp=bootcamp;
        this.batch= batch;
        this.year=year;
        this.skillPoint=skillPoint;
        Siswa.jumlahSiswa++;
        if(bootcamp == "NodeJs"){
            Siswa.jumlahNodeJs++;
        }else if(bootcamp == "Golang"){
            Siswa.jumlahGolang++;
        }else if(bootcamp == "Phyton"){
            Siswa.jumlahPhyton++
        }
        
    }
} 
    class Beasiswa extends Siswa{
        static totalBeasiswa = 0;
        static jumlahInsentif = 0;
        constructor(fullname,city,education,grade,type,bootcamp,batch,year,skillPoint,insentif){
            super(fullname,city,education,grade,type,bootcamp,batch,year,skillPoint);
            this.insentif = insentif;
            Beasiswa.totalBeasiswa++;
            Beasiswa.jumlahInsentif+= insentif
        }

    }

    class Reguler extends Siswa{
        static totalReguler =0;
        static jumlahNetPrize = 0;
        constructor(fullname,city,education,grade,type,bootcamp,batch,year,skillPoint,netPrice){
            super(fullname,city,education,grade,type,bootcamp,batch,year,skillPoint);
            this.netPrice = netPrice;
            Reguler.totalReguler++;
            Reguler.jumlahNetPrize+= netPrice
        }
    }

export {Beasiswa, Reguler}