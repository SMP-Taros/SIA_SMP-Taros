const columns = [
  { id: "nomor", label: "No", minWidth: 50 },
  { id: "nip", label: "NIP", minWidth: 80 },
  {
    id: "nama",
    label: "Nama",
    minWidth: 170,
  },
  {
    id: "mapel",
    label: "Mata Pelajaran",
    minWidth: 170,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 80,
  },
];

function createData(nomor, nip, nama, mapel, action) {

  return { nomor, nip, nama, mapel, action };
}

const rows = [
  createData("1", 902989, "Budi Santoso", "Bahasa Indonesia", "tes"),
];

export { columns, rows, createData };
