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
  useGetKesehatanSiswaQuery,
  useUpdateKesehatanSiswaMutation,
} from "../../../slices/siswaApiSlice";
import DetailInformationGrid from "../../Form/DetailInformationGrid.jsx";
import { InformationDialog } from "../../Dialog/InformationDialog.jsx";
import ConfirmationDialog from "../../Dialog/ConfirmationDialog.jsx";

const KesehatanSiswa = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetKesehatanSiswaQuery(props.id);

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

  const [update, { isUpdateLoading }] = useUpdateKesehatanSiswaMutation();
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
                  title="Golongan Darah"
                  inputValue={formData.golongan_darah}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Penyakit yang pernah diderita"
                  inputValue={formData.penyakit_pernah_diderita}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Kelainan Jasmani"
                  inputValue={formData.kelainan_jamani}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Berat Badan"
                  inputValue={formData.berat_badan}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Tinggi Badan"
                  inputValue={formData.tinggi_badan}
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

export default KesehatanSiswa;
