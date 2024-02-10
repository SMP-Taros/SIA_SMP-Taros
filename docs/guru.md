# API specs guru

## create Guru

Endpoint: POST /api/guru

Request Body :

```json
{
  "nama": "Sri",
  "nuptk": "12335434",
  "jenis_kelamin": "Perempuan",
  "tempat_lahir": "wonogiri",
  "tanggal_lahir": "12 Januari 2004",
  "nipy": "0390489585",
  "nik": "298238383",
  "no_kk": "2023837",
  "status_kepegawaian": "PNS",
  "jenis_ptk": "none",
  "alamat": "Batang",
  "no_hp": "02928272",
  "email": "halo@gamil.com",
  "sk_pengangkatan": "file.sk",
  "tmt_pengangkatan": "file.mt",
  "status_perkawinan": "Menikah",
  "nama_pasangan": "Rahman", //optional
  "pekerjaan_pasangan": "nganggur" //optional
}
```

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "nama": "Sri",
    "nuptk": "12335434",
    "jenis_kelamin": "Perempuan",
    "tempat_lahir": "wonogiri",
    "tanggal_lahir": "12 Januari 2004",
    "nipy": "0390489585",
    "nipy": "298238383",
    "no_kk": "2023837",
    "status_kepegawaian": "PNS",
    "jenis_ptk": "none",
    "alamat": "Batang",
    "no_hp": "02928272",
    "email": "halo@gamil.com",
    "sk_pengangkatan": "file.sk",
    "tmt_pengangkatan": "file.mt",
    "status_perkawinan": "Menikah",
    "nama_pasangan": "Rahman",
    "pekerjaan_pasangan": "nganggur"
  },
  "message": "guru berhasil ditambahkan"
}
```

Response Body Failed:

```json
{
  "status": "error",
  "message": "NUPTK sudah terdaftar tidak lengkap"
}
```

## Update Guru

Endpoint: PUT /api/guru/:id

Request Body :

```json
{
  "nama": "Sri rejeki", //optional
  "NUPTK": "12335434", //optional
  "jenis_kelamin": "Perempuan", //optional
  "tempat_lahir": "wonogiri", //optional
  "tanggal_lahir": "12 Januari 2004", //optional
  "NIPY": "0390489585", //optional
  "NIK": "298238383", //optional
  "no_kk": "2023837", //optional
  "status_kepegawaian": "PNS", //optional
  "jenis_ptk": "none", //optional
  "alamat": "Batang", //optional
  "no_hp": "02928272", //optional
  "email": "halo@gamil.com", //optional
  "sk_pengangkatan": "file.sk", //optional
  "tmt_pengangkatan": "file.mt", //optional
  "status_perkawinan": "Menikah", //optional
  "nama_pasangan": "Rahman", //optional
  "pekerjaan_pasangan": "nganggur" //optional
}
```

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "nama": "Sri rejeki",
    "NUPTK": "12335434",
    "jenis_kelamin": "Perempuan",
    "tempat_lahir": "wonogiri",
    "tanggal_lahir": "12 Januari 2004",
    "NIPY": "0390489585",
    "NIK": "298238383",
    "no_kk": "2023837",
    "status_kepegawaian": "PNS",
    "jenis_ptk": "none",
    "alamat": "Batang",
    "no_hp": "02928272",
    "email": "halo@gamil.com",
    "sk_pengangkatan": "file.sk",
    "tmt_pengangkatan": "file.mt",
    "status_perkawinan": "Menikah",
    "nama_pasangan": "Rahman",
    "pekerjaan_pasangan": "nganggur"
  },
  "message": "guru berhasil di perbarui"
}
```

Response Body Failed:

```json
{
  "status": "error",
  "message": "data tidak boleh kosong"
}
```

## GET Guru All

Endpoint: GET /api/guru

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "nama": "Sri rejeki",
    "NUPTK": "12335434",
    "jenis_kelamin": "Perempuan",
    "tempat_lahir": "wonogiri",
    "tanggal_lahir": "12 Januari 2004",
    "NIPY": "0390489585"
  }
}
```

Response Body Failed:

```json
{
  "status": "error",
  "message": "Belum ada data"
}
```

## GET Guru Detail

Endpoint: GET /api/guru/:id

Request Body :

```json
{
}
```

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "nama": "Sri rejeki",
    "NUPTK": "12335434",
    "jenis_kelamin": "Perempuan",
    "tempat_lahir": "wonogiri",
    "tanggal_lahir": "12 Januari 2004",
    "NIPY": "0390489585",
    "NIK": "298238383",
    "no_kk": "2023837",
    "status_kepegawaian": "PNS",
    "jenis_ptk": "none",
    "alamat": "Batang",
    "no_hp": "02928272",
    "email": "halo@gamil.com",
    "sk_pengangkatan": "file.sk",
    "tmt_pengangkatan": "file.mt",
    "status_perkawinan": "Menikah",
    "nama_pasangan": "Rahman",
    "pekerjaan_pasangan": "nganggur"
  }
}
```

Response Body Failed:

```json
{
  "status": "error",
  "message": "guru tidak ditemukan"
}
```

## Delete Guru

Endpoint: DEL /api/siswa/:id

Request Body :

```json
{
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "guru berhasil dihapus"
}
```

Response Body Failed:

```json
{
  "status": "error",
  "message": "id tidak ditemukan"
}
```
