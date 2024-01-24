import { apiSlice } from "./apiSlice.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

const SISWA_URL = "api/siswa";

export const siswaApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query({
      query: (data) => ({
        url: `${SISWA_URL}`,
        method: "GET",
        params: data,
        credentials: "include",
      }),
    }),
    getDetail: builder.query({
      query: (id) => ({
        url: `${SISWA_URL}/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetAllQuery, useGetDetailQuery } = siswaApiSlice;
