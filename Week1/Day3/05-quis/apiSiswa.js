import Siswa,{ Beasiswa, Reguler } from "./siswa.js";

export const jumlahSiswa=()=>{
    return  Siswa.jumlahSiswa;
}



export const jumlahInsentif=()=>{
    return  Beasiswa.jumlahInsentif;
}

export const jumlahNetPrize=()=>{
    return  Reguler.jumlahNetPrize;
}



export const jumlahGolang=()=>{
    return  Siswa.jumlahGolang;
}

export const jumlahPhyton=()=>{
    return  Siswa.jumlahPhyton;
}
export const toBootcamp =(value,...list)=>{
    let count = 0;
    for(const i of list){
        //  regulerasep.       NodeJs
        if (i.bootcamP ===value){
            count++
        }
    }
    return count;
}
