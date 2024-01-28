# API specs calon siswa

## create calon Siswa

Endpoint: POST /api/calon_siswa

Request Body :

```json
{
  "nama": "arip"*,
  "jenis_kelamin": "Laki Laki"*,
  "NISN": "0390489585"*,
  "tempat_lahir": "wonogiri"*,
  "tanggal_lahir": "12 Januari 2004"*,
  "NIK": "298238383"*,
  "agama": "islam"*,
  "status": "Anak Kandung"*,
  "anak_ke": "2"*,
  "jumlah_saudara_kandung": "3"*,
  "status_anak": "yatim",
  "alamat": "Batang"*,
  "jarak_rumah_sekolah": "500km"*,
  "asal_sekolah": "smp2"*,
  "alamat_asal_sekolah": "rejo"*,
  "membaca_alquran": "lancar",
  "jumlah_hafalan": "1 juz",
  "hobby": "main",
  "cita_cita": "badminton",
  "prestasi": "prestasi",
  "golongan_darah": "A",
  "penyakit_pernah_diderita": "asma",
  "kelainan_jasmani": "none",
  "berat_badan": "58",
  "tinggi_badan": "200",
  "nama_ayah": "aripin"*,
  "nik_ayah": "21231"*,
  "tahun_lahir_ayah": "21 desember 2023"*,
  "pendidikan_terakhir_ayah":"SMA",
  "pekerjaan_ayah": "dokter",
  "nama_instansi_kerja_ayah":"Rm",
  "jabatan_ayah":"dokter",
  "penghasilan_perbulan_ayah":"1000000"*,
  "keberadaan_ayah":"masih hidup",
  "nama_ibu": "ari"*,
  "nik_ibu": "221331"*,
  "tahun_lahir_ibu": "21 desember 2020"*,
  "pendidikan_terakhir_ibu":"SMA",
  "pekerjaan_ibu": "dokter",
  "nama_instansi_kerja_ibu":"Rm",
  "jabatan_ibu":"dokter",
  "penghasilan_perbulan_ibu":"1000000"*,
  "keberadaan_ibu":"masih hidup",
  "email":"ibu@gmail.com",
  "no_hp":"20220",
  "cara_bayar": "transfer",
}
```

Response Body Success:

```json
{
  "data": {
    "siswa_id": "1"*,
  "golongan_darah": "A",
  "penyakit_yang_pernah_diderita": "asma",
  "kelainan_jasmani": "none",
  "berat_badan": "58",
  "tinggi_badan": "200"
  },
  "meesage": "data kesehatan berhasil ditambahkan"
}
```

Response Body Failed:

```json
{
  "errors": "data tidak lengkap"
}
```

## get Kesehatan Siswa

Endpoint: GET /api/siswa/kesehatan/:SiswaId

Request Body :

```json
{
  "siswa_id": "1"*,
  "golongan_darah": "A",
  "penyakit_yang_pernah_diderita": "asma",
  "kelainan_jasmani": "none",
  "berat_badan": "58",
  "tinggi_badan": "200"
}
```

Response Body Success:

```json
{
  "data": {
    "siswa_id": "1"*,
  "golongan_darah": "A",
  "penyakit_yang_pernah_diderita": "asma",
  "kelainan_jasmani": "none",
  "berat_badan": "58",
  "tinggi_badan": "200"
  }
}
```

Response Body Failed:

```json
{
  "errors": "id salah"
}
```

## update Kesehatan Siswa

Endpoint: PUT /api/siswa/kesehatan/:SiswaId

Request Body :

```json
{
  "siswa_id": "1"*,
  "golongan_darah": "A",
  "penyakit_yang_pernah_diderita": "asma",
  "kelainan_jasmani": "none",
  "berat_badan": "58",
  "tinggi_badan": "200"
}
```

Response Body Success:

```json
{
  "data": {
    "siswa_id": "1"*,
  "golongan_darah": "A",
  "penyakit_yang_pernah_diderita": "asma",
  "kelainan_jasmani": "none",
  "berat_badan": "58",
  "tinggi_badan": "200"
  }
}
```

Response Body Failed:

```json
{
  "errors": "id salah"
}
```
