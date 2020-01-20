function cekHasil() {
            var tinggi = document.getElementById('tinggi').value;
            var berat = document.getElementById('berat').value;

            tinggi = Number(tinggi);
            berat = Number(berat);
            tinggi = tinggi / 100
            tinggi = Math.pow(tinggi, 2);

            var hasil = berat / tinggi;
            var ket
            if (hasil <= 17) {
                ket = "kurus";
            } else if (hasil >= 17 && hasil <= 23) {
                ket = "normal";
            } else if (hasil >= 23 && hasil <= 27) {
                ket = "gemuk";
            } else if (hasil >= 27) {
                ket = "obesitas";
            }

            document.getElementById('hasil').innerHTML = `anda ${ket}`;
        }