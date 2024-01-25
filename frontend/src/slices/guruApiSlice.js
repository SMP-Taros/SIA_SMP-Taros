import { apiSlice } from "./apiSlice.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

const GURU_URL = "api/guru";

export const guruApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query({
      query: (data) => ({
        url: `${GURU_URL}`,
        method: "GET",
        params: data,
        credentials: "include",
      }),
    }),
    getDetail: builder.query({
      query: (id) => ({
        url: `${GURU_URL}/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetAllQuery, useGetDetailQuery } = guruApiSlice;
