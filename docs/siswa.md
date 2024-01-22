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
