import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Posts', 'Users'],
  endpoints: builder => ({
    getAllPosts: builder.query({
      query: () => ({
        url: '/posts',
      }),
      providesTags: ['Posts'],
    }),
    getPostInfoById: builder.query({
      query: id => ({
        url: `/posts/${id}`,
      }),
      providesTags: ['Posts'],
    }),
    getUserById: builder.query({
      query: userId => ({
        url: `/users/${userId}`,
      }),
      providesTags: ['Users'],
    }),
    getCommentsByPostId: builder.query({
      query: id => ({
        url: `/posts/${id}/comments`,
      }),
      providesTags: ['Posts'],
    }),
    addNewPost: builder.mutation({
      query: post => ({
        url: `/posts`,
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostInfoByIdQuery,
  useGetUserByIdQuery,
  useGetCommentsByPostIdQuery,
  useAddNewPostMutation,
} = postsApi;
