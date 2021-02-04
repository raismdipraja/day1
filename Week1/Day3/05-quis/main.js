import Siswa,{Beasiswa, Reguler} from './siswa.js';
import {jumlahSiswa,jumlahInsentif, jumlahNetPrize, jumlahNodeJs, jumlahGolang, jumlahPhyton} from './apiSiswa.js';

function main() {

    //beasiswa
    const beasiswaasep = new Beasiswa("Asep","Bandung","S1","3.45","Beasiswa","NodeJs","1","2019","3",100000);
    console.log(beasiswaasep);
    const beasiswaami = new Beasiswa("ami","Bogor","S1","3.10","Beasiswa","NodeJs","1","2019","3",100000);
    console.log(beasiswaami);
    const beasiswabudi = new Beasiswa("Budi","Depok","S1","3.25","Beasiswa","Java","2","2020","3",100000);
    console.log(beasiswabudi);
    const beasiswacindi = new Beasiswa("Cindi","Jakarta","D3","3.30","Beasiswa","Java","2","2020","3",100000);
    console.log(beasiswacindi);
    const beasiswadedy = new Beasiswa("Dedy","Bekasi","S2","2.98","Beasiswa","NodeJs","1","2019","4",100000);
    console.log(beasiswadedy);

    //reguler
    const regulerdesta = new Reguler("Desta","Jakarta","S1","3.15","Reguler","Golang","3","2021","3",5000000);
    console.log(regulerdesta);
    const regulersinta = new Reguler("Sinta","Jakarta","S1","3.15","Reguler","Golang","3","2021","4",5000000);
    console.log(regulersinta);
    const regulermeita = new Reguler("Meita","Jakarta","S1","3.00","Reguler","Phyton","3","2021","4",7000000);
    console.log(regulermeita);


    console.log("Total Siswa :"+jumlahSiswa());
    console.log(`Total Beasiswa : ${Beasiswa.totalBeasiswa}`);
    console.log(`Total Reguler : ${Reguler.totalReguler}`);
    console.log("jumlah Insentif : Rp."+jumlahInsentif());
    console.log("jumlah NetPrize : Rp."+jumlahNetPrize());
    console.log("Jumlah Node Js :"+jumlahNodeJs());
    console.log("Jumlah Golang :"+jumlahGolang());
    console.log("Jumlah Phyton :"+jumlahPhyton());



}

main();