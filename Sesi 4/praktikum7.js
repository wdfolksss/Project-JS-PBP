let produk = {
    nama: "Mouse",
    harga: 100000,
    stock: 10,
    diskon: 0.1,

    tampilProduk: function() {
        console.log(`Nama Produk: ${this.nama}`);
        console.log(`Harga: ${this.harga}`);
        console.log(`Stock: ${this.stock}`);
        console.log(`Diskon: ${this.diskon * 100}%`);
    },

    beliProduk: function(jumlah) {
        if (jumlah <= 0) {
            console.log("Jumlah pembelian harus lebih dari 0");
            return;
        }

        if (jumlah > this.stock) {
            console.log(`Stock tidak mencukupi! Tersedia ${this.stock} item`);
            return;
        }

        let total = this.harga * jumlah;
        let totalDiskon = total * (1 - this.diskon);
        this.stock -= jumlah;

        console.log(`Total harga: Rp${total}`);
        console.log(`Total setelah diskon: Rp${totalDiskon}`);
        console.log(`Pembelian ${jumlah} item ${this.nama} berhasil`);
        console.log(`Sisa stock: ${this.stock} `);

        if (this.stock === 0) {
            console.log("Stock habis, segera lakukan restock");
        }
    }
};

produk.tampilProduk();
produk.beliProduk(5);
produk.beliProduk(6);