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
  "status": "success",
  "message": "data orang tua berhasil ditambahkan",
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
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": error.message
}
```

Process Failed:

```json
{
  "status": "error",
  "message": error.message
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
  "status": "success",
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
  "status": "fail",
  "message": "siswa tidak ditemukan"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": error.message
}
```

## update Orang tua Siswa

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
  "status": "success",
  "message": "orang tua siswa berhasil di update"
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message": "siswa tidak ditemukan"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": error.message
}
```
