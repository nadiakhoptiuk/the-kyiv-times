import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    // getPokemonByName: builder.query({
    //   query: name => `pokemon/${name}`,
    // }),
    getAllPosts: builder.query({
      query: () => ({
        url: '/posts',
      }),
      providesTags: ['Posts'],
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
  useAddNewPostMutation,
  useGetCommentsByPostIdQuery,
} = postsApi;
