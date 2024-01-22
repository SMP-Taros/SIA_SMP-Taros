# API specs kesehatan siswa

## create Kesehatan Siswa

Endpoint: POST /api/siswa/kesehatan/:SiswaId

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
