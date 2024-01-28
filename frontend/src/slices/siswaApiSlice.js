import { apiSlice } from "./apiSlice.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

const SISWA_URL = "api/siswa";

export const siswaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSiswa: builder.query({
      query: (data) => ({
        url: `${SISWA_URL}`,
        method: "GET",
        params: data,
        credentials: "include",
      }),
    }),
    getDetailSiswa: builder.query({
      query: (id) => ({
        url: `${SISWA_URL}/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    getKesehatanSiswa: builder.query({
      query: (id) => ({
        url: `${SISWA_URL}/kesehatan/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    getPencapaianSiswa: builder.query({
      query: (id) => ({
        url: `${SISWA_URL}/pencapaian/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    updateDetailSiswa: builder.mutation({
      query: (data) => ({
        url: `${SISWA_URL}/${data.id}`,
        method: "PUT",
        body: data.data,
        credentials: "include",
      }),
    }),
    deleteSiswa: builder.mutation({
      query: (data) => ({
        url: `${SISWA_URL}/${data.id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
    getOrangtuaSiswa: builder.query({
      query: (id) => ({
        url: `${SISWA_URL}/orang_tua/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetAllSiswaQuery,
  useGetDetailSiswaQuery,
  useGetKesehatanSiswaQuery,
  useGetPencapaianSiswaQuery,
  useUpdateDetailSiswaMutation,
  useGetOrangtuaSiswaQuery,
  useDeleteSiswaMutation,
} = siswaApiSlice;
