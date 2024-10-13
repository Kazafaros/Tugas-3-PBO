// Super Class nya adalah Kapal
class Kapal { 
    constructor (nama, jenis, panjang, lebar){
        this.nama = nama,
        this.jenis = jenis,   
        this.panjang = panjang,    
        this.lebar = lebar, 
        this._status = 'tidak tersedia' 
}

// Penerapan encapsulation
getStatus (){
    return this._status 
}

setStatusTersedia (){
    this._status = 'Tersedia' ;
    return `Kapal ${this.nama} dengan jenis ${this.jenis} ${this._status} `
}

infoKapal (){
    return `Kapal ini bernama ${this.nama} dengan jenis Kapal ${this.jenis} 
    memiliki ukuran panjang ${this.panjang} meter dan lebar ${this.lebar} meter`

    }   
}

// Subclass 1 
class KapalPenumpang extends Kapal {
    constructor (nama, jenis, kapasitas, panjang, lebar, tujuan, waktu){
        super (nama, jenis, panjang, lebar)
        this.kapasitas = kapasitas
        this.tujuan = tujuan,
        this.waktu = waktu
        
    }

    infoKapalPenumpang(){
        return `${this.infoKapal()} dan mampu berkapasitas ${this.kapasitas} orang dengan tujuan ${this.tujuan} pukul ${this.waktu}`
    }

    berangkat(){
        return this._status = 'berangkat'
    }
}

// Subclass 2 
class KapalKargo extends Kapal {
    constructor (nama, jenis, kapasitas, panjang, lebar, muatan){
        super (nama, jenis, panjang, lebar)
        this.muatan = muatan
    }

    infoKapalKargo(){
        return `${this.infoKapal()} dengan muatan ${this.muatan}`
    }

    bongkarMuatan(){
        return this._status = 'bongkar muatan'
    }
}

let kapalPenumpang = new KapalPenumpang ("KM Sangiang", "Penumpang,", 500, 200, 100, "Kab. Bandung", "15:00")
console.log(kapalPenumpang.infoKapal()+ " Berstatus " + kapalPenumpang.berangkat())

let kapalKargo = new KapalKargo ("Marina Cargo", "Kargo,", 900, 500, 250, "500 TON")
console.log(kapalKargo.infoKapal() + " Berstatus " + kapalKargo.bongkarMuatan())

// Subclass 3 menggunakan polymorphism
class KapalPesiar extends Kapal {
    constructor (nama, jenis, panjang, lebar, jumlahKabin){
        super (nama, jenis, panjang, lebar)
        this.jumlahKabin = jumlahKabin
    }

    infoKapal(){
        console.log(`Kapal ${this.nama} dengan jenis ${this.jenis} memiliki ukuran panjang ${this.panjang} meter dan lebar ${this.lebar} meter dan memiliki ${this.jumlahKabin} kabin`)
    }

}

// Subclass 4 menggunakan polymorphism
class KapalTanker extends Kapal {
    constructor (nama, jenis, panjang, lebar, kapasitasTangki){
        super (nama, jenis, panjang, lebar)
        this.kapasitasTangki = kapasitasTangki
    }

    infoKapal(){
        console.log(`Kapal ${this.nama} dengan jenis ${this.jenis} memiliki ukuran panjang ${this.panjang} meter dan lebar ${this.lebar} meter dan kapasitas tangki ${this.kapasitasTangki} kg`)
    }
}

// Subclass 5 menggunakan polymorphism
class KapalTunda extends Kapal {
    constructor (nama, jenis, panjang, lebar, dayaTunda){
        super (nama, jenis, panjang, lebar)
        this.dayiTunda = dayaTunda
    }

    infoKapal(){
        console.log (`Kapal ${this.nama} denga jenis ${this.jenis} memiliki ukuran panjang ${this.panjang} meter dan lebar ${this.lebar} meter dan daya tunda ${this.dayiTunda} kg`)
    }
}

// Subclass 6 menggunakan polymorphism
class KapalPerang extends Kapal {
    constructor (nama, jenis, panjang, lebar, jumlahRudal){
        super (nama, jenis, panjang, lebar)
        this.jumlahRudal = jumlahRudal
    }

    infoKapal(){
        console.log (` Kapal ${this.nama} dengan jenis ${this.jenis} memiliki ukuran panjang ${this.panjang} meter dan lebar ${this.lebar} meter dan memiliki ${this.jumlahRudal} rudal`)
    }
}

let kapalPesiar = new KapalPesiar ("Disney Cruise Lines", "Pesiar", 200, 100, 10)   
let kapalTanker = new KapalTanker ("Crude carrier", "Tanker", 300, 150, 100)
let kapalTunda = new KapalTunda ("Tugboat", "Tunda", 400, 200, 200)
let kapalPerang = new KapalPerang ("Bismarck", "Perang", 500, 250, 50) 



kapalPesiar.infoKapal() 
kapalTanker.infoKapal()
kapalTunda.infoKapal()
kapalPerang.infoKapal()

// document.getElementById("info").innerHTML = kapalPenumpang.infoKapalPenumpang()
// document.getElementById("info2").innerHTML = kapalKargo.infoKapalKargo()
// document.getElementById("info3").innerHTML = kapalPesiar.infoKapal()
// document.getElementById("info4").innerHTML = kapalTanker.infoKapal()
// document.getElementById("info5").innerHTML = kapalTunda.infoKapal()
// document.getElementById("info6").innerHTML = kapalPerang.infoKapal()

