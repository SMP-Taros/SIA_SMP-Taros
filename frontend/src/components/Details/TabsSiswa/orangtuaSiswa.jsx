import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Button,
} from "@mui/material";

import { useTheme } from "@emotion/react";
import { tokens } from "../../../Theme";

import EditIcon from "@mui/icons-material/Edit";

import { useState, useEffect } from "react";
import {
  useGetOrangtuaSiswaQuery,
  useUpdateOrangtuaSiswaMutation,
} from "../../../slices/siswaApiSlice";
import DetailInformationGrid from "../../Form/DetailInformationGrid.jsx";
import { InformationDialog } from "../../Dialog/InformationDialog.jsx";
import ConfirmationDialog from "../../Dialog/ConfirmationDialog.jsx";

const OrangtuaSiswa = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetOrangtuaSiswaQuery(props.id);
  const [openConfModal, setOpenConfModal] = useState(false);
  const [infoModal, setInfoModal] = useState({
    isOpen: false,
    msg: "Berhasil ubah data!",
  });

  let detail;
  var token = props.id;
  if (!isLoading && data) {
    detail = data.data;
  }
  useEffect(() => {
    if (detail) {
      setFormData(detail);
    }
  }, [detail]);

  const [update, { isUpdateLoading }] = useUpdateOrangtuaSiswaMutation();
  const [formData, setFormData] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setOpenConfModal(true);
  };

  function updateData() {
    setOpenConfModal(false);
    var res = update({
      id: token,
      data: formData,
    }).unwrap();
    res.then((e) => {
      if (e.message === "siswa berhasil di update") {
        setInfoModal((prevState) => {
          return { ...prevState, isOpen: true };
        });
      } else {
        setInfoModal((prevState) => {
          return { msg: e.message, isOpen: true };
        });
      }
    });
  }
  return (
    <Box component="div">
      <ConfirmationDialog
        isOpen={openConfModal}
        content="Perubahan pada data siswa tidak bisa dikembalikan !"
        onAgree={updateData}
        onClose={() => {
          setOpenConfModal(false);
          setFormData(detail);
        }}
      ></ConfirmationDialog>
      <InformationDialog
        isOpen={infoModal.isOpen}
        content="Berhasil mengubah data !"
        onClose={() =>
          setInfoModal((prevState) => {
            return { ...prevState, isOpen: false };
          })
        }
      ></InformationDialog>
      <Grid item xs={12}>
        <form onSubmit={onSubmitForm}>
          <Box maxHeight="400px" overflow="auto" padding="10px">
            {formData && (
              <>
                <DetailInformationGrid
                  title="Nama Ayah"
                  inputValue={formData.nama_ayah}
                  inputName="nama_ayah"
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="NIK Ayah"
                  inputValue={formData.nik_ayah}
                  onInputChange={handleInputChange}
                  inputName="nik_ayah"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Tahun Lahir Ayah"
                  inputValue={formData.tahun_lahir_ayah}
                  onInputChange={handleInputChange}
                  inputName="tahun_lahir_ayah"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Pendidikan Terakhir Ayah"
                  inputValue={formData.pendidikan_terakhir_ayah}
                  onInputChange={handleInputChange}
                  inputName="pendidikan_terakhir_ayah"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Nama Instansi Ayah Bekerja"
                  inputValue={formData.nama_instansi_kerja_ayah}
                  onInputChange={handleInputChange}
                  inputName="nama_instansi_kerja_ayah"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Jabatan Ayah"
                  inputValue={formData.jabatan_ayah}
                  onInputChange={handleInputChange}
                  inputName="jabatan_ayah"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Penghasilan Perbulan Ayah"
                  inputValue={formData.penghasilan_perbulan_ayah}
                  onInputChange={handleInputChange}
                  inputName="penghasilan_perbulan_ayah"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Keberadaan Ayah"
                  inputValue={formData.keberadaan_ayah}
                  onInputChange={handleInputChange}
                  inputName="keberadaan_ayah"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Nama Ibu"
                  inputValue={formData.nama_ibu}
                  inputName="nama_ibu"
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="NIK Ibu"
                  inputValue={formData.nik_ibu}
                  onInputChange={handleInputChange}
                  inputName="nik_ibu"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Tahun Lahir Ibu"
                  inputValue={formData.tahun_lahir_ibu}
                  onInputChange={handleInputChange}
                  inputName="tahun_lahir_ibu"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Pendidikan Terakhir Ibu"
                  inputValue={formData.pendidikan_terakhir_ibu}
                  onInputChange={handleInputChange}
                  inputName="pendidikan_terakhir_ibu"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Nama Instansi Ibu Bekerja"
                  inputValue={formData.nama_instansi_kerja_ibu}
                  onInputChange={handleInputChange}
                  inputName="nama_instansi_kerja_ibu"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Jabatan Ibu"
                  inputValue={formData.jabatan_ibu}
                  onInputChange={handleInputChange}
                  inputName="jabatan_ibu"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Penghasilan Perbulan Ibu"
                  inputValue={formData.penghasilan_perbulan_ibu}
                  onInputChange={handleInputChange}
                  inputName="penghasilan_perbulan_ibu"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Keberadaan Ibu"
                  inputValue={formData.keberadaan_ibu}
                  onInputChange={handleInputChange}
                  inputName="keberadaan_ibu"
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Email"
                  inputValue={formData.no_hp}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="No Handphone"
                  inputValue={formData.no_hp}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
              </>
            )}
          </Box>

          <Box
            display="flex"
            justifyContent="flex-end"
            marginTop="30px"
            paddingLeft="40px"
          >
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              style={{
                background: colors.greenAccent[800],
                width: "100px",
              }}
              type="submit"
              disabled={isUpdateLoading}
            >
              Edit
            </Button>
          </Box>
        </form>
      </Grid>
    </Box>
  );
};

export default OrangtuaSiswa;
