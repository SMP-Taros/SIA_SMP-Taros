import { apiSlice } from "./apiSlice.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

const GURU_URL = "api/guru";

export const guruApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGuru: builder.query({
      query: (data) => ({
        url: `${GURU_URL}`,
        method: "GET",
        params: data,
        credentials: "include",
      }),
    }),
    getDetailGuru: builder.query({
      query: (id) => ({
        url: `${GURU_URL}/${id}`,
        method: "GET",
        credentials: "include",
      }),
    }),
    updateDetailGuru: builder.mutation({
      query: (data) => ({
        url: `${GURU_URL}/${data.id}`,
        method: "PUT",
        body: data.data,
        credentials: "include",
      }),
    }),
    deleteGuru: builder.mutation({
      query: (data) => ({
        url: `${GURU_URL}/${data.id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetAllGuruQuery, useGetDetailGuruQuery, useUpdateDetailGuruMutation, useDeleteGuruMutation } = guruApiSlice;
