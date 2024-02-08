# API specs siswa

## create Siswa

Endpoint: POST /api/siswa

Request Body :

```json
{
  "nama": "arip"*,
  "NIS": "12335434"*,
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
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "siswa berhasil ditambahkan",
  "data": {
    "nama": "arip"*,
    "NIS": "12335434"*,
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
    "nisn": "0959595"*
  },
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "message" : error.message
}
```

Process Failed:

```json
{
  "status": "error",
  "message": error.message
}
```

## Update Siswa

Endpoint: PUT /api/siswa/:id

Request Body :

```json
{
  "nama": "arip"*,
  "NIS": "12335434"*,
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
  "nisn": "0959595"*
}
```

Response Body Success:

```json
{
  "status": "success",
  "message": "siswa berhasil di update"
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

## GET Siswa All

Endpoint: GET /api/siswa

Response Body Success:

```json
{
  "status": "success",
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
  "status": "fail",
  "message": "data masih kosong"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": error.message
}
```

## GET Siswa Detail

Endpoint: DEL /api/siswa/:id

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "nama": "arip"*,
    "NIS": "12335434"*,
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
    "nisn": "0959595"*
  }
}
```

Response Body Failed:

```json
{
  "status": "fail",
  "messages": "id tidak ditemukan"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": error.message
}
```

## Delete Siswa

Endpoint: DEL /api/siswa/:id

Request Body :

Response Body Success:

```json
{
  "status": "success",
  "message": "siswa berhasil dihapus"
}
```

Response Body Failed:

```json
{
  "status": "success",
  "message": "id tidak ditemukan"
}
```

Process Failed:

```json
{
  "status": "error",
  "message": error.message
}
```
