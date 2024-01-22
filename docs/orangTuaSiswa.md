# API specs orang tua siswa

## create orang tua Siswa

Endpoint: POST /api/siswa/orangtua/:SiswaId

Request Body :

```json
{
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
}
```

Response Body Success:

```json
{
  "data": {
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
  },
  "meesage": "data orang tua berhasil ditambahkan"
}
```

Response Body Failed:

```json
{
  "errors": "data tidak lengkap"
}
```

## get orang tua Siswa

Endpoint: GET /api/siswa/orangtua/:SiswaId

Request Body :

```json
{
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
}
```

Response Body Success:

```json
{
  "data": {
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

Endpoint: PUT /api/kesehatan/:SiswaId

Request Body :

```json
{
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
}
```

Response Body Success:

```json
{
  "data": {
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
  }
}
```

Response Body Failed:

```json
{
  "errors": "id salah"
}
```
