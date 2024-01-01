# API specs siswa

## create Siswa

Endpoint: POST /api/siswa

Request Body :

```json
{
  "nama": "arip",
  "NIS": "12335434",
  "jenis_kelamin": "Laki Laki",
  "NISN": "0390489585",
  "tempat_lahir": "wonogiri",
  "tanggal_lahir": "12 Januari 2004",
  "NIK": "298238383",
  "alamat": "Batang",
  "email": "halo@gamil.com",
  "nama_ayah": "aripin",
  "pekerjaan_ayah": "dokter",
  "nama_ibu": "siti",
  "pekerjaan_ibu": "nganggur"
}
```

Response Body Success:

```json
{
  "data": {
    "nama": "arip",
    "NIS": "12335434",
    "jenis_kelamin": "Laki Laki",
    "NISN": "0390489585",
    "tempat_lahir": "wonogiri",
    "tanggal_lahir": "12 Januari 2004",
    "NIK": "298238383",
    "alamat": "Batang",
    "email": "halo@gamil.com",
    "nama_ayah": "aripin",
    "pekerjaan_ayah": "dokter",
    "nama_ibu": "siti",
    "pekerjaan_ibu": "nganggur"
  },
  "meesage": "siswa berhasil ditambahkan"
}
```

Response Body Failed:

```json
{
  "errors": "data tidak lengkap"
}
```

## Update Siswa

Endpoint: PUT /api/siswa/:id

Request Body :

```json
{
  "nama": "arip junior", //optional
  "NIS": "12335434", //optional
  "jenis_kelamin": "Laki Laki", //optional
  "NISN": "0390489585", //optional
  "tempat_lahir": "wonogiri", //optional
  "tanggal_lahir": "12 Januari 2004", //optional
  "NIK": "298238383", //optional
  "alamat": "Batang", //optional
  "email": "halo@gamil.com", //optional
  "nama_ayah": "aripin", //optional
  "pekerjaan_ayah": "dokter", //optional
  "nama_ibu": "siti", //optional
  "pekerjaan_ibu": "nganggur" //optional
}
```

Response Body Success:

```json
{
  "data": {
    "nama": "arip junior",
    "NIS": "12335434",
    "jenis_kelamin": "Laki Laki",
    "NISN": "0390489585",
    "tempat_lahir": "wonogiri",
    "tanggal_lahir": "12 Januari 2004",
    "NIK": "298238383",
    "alamat": "Batang",
    "email": "halo@gamil.com",
    "nama_ayah": "aripin",
    "pekerjaan_ayah": "dokter",
    "nama_ibu": "siti",
    "pekerjaan_ibu": "nganggur"
  },
  "meesage": "siswa berhasil di update"
}
```

Response Body Failed:

```json
{
  "errors": "data tidak boleh kosong"
}
```

## GET Siswa All

Endpoint: GET /api/siswa

Response Body Success:

```json
{
  "data": {
    "nama": "arip",
    "NIS": "02938",
    "NISN": "0390489585",
    "tempat_lahir": "wonogiri",
    "tanggal_lahir": "12 Januari 2004"
  }
}
```

Response Body Failed:

```json
{
  "errors": "data masih kosong"
}
```

## GET Siswa Detail

Endpoint: DEL /api/siswa/:id

Request Body :

```json
{
  "id": "unique-id"
}
```

Response Body Success:

```json
{
  "data": {
    "nama": "arip junior",
    "NIS": "12335434",
    "jenis_kelamin": "Laki Laki",
    "NISN": "0390489585",
    "tempat_lahir": "wonogiri",
    "tanggal_lahir": "12 Januari 2004",
    "NIK": "298238383",
    "alamat": "Batang",
    "email": "halo@gamil.com",
    "nama_ayah": "aripin",
    "pekerjaan_ayah": "dokter",
    "nama_ibu": "siti",
    "pekerjaan_ibu": "nganggur"
  }
}
```

Response Body Failed:

```json
{
  "errors": "id tidak ditemukan"
}
```

## Delete Siswa

Endpoint: DEL /api/siswa/:id

Request Body :

```json
{
  "id": "unique-id"
}
```

Response Body Success:

```json
{
  "message": "siswa berhasil dihapus"
}
```

Response Body Failed:

```json
{
  "errors": "id tidak ditemukan"
}
```
