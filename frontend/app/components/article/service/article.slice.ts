import { createSlice } from "@reduxjs/toolkit";
import {
  deleteArticle,
  findAllArticles,
  findAllArticlesByBoardId,
  findArticleById,
  modifiedArticle,
} from "./article.service";
import { initialState } from "./init/articleState.init";

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllArticles.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(findArticleById.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(modifiedArticle.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(deleteArticle.fulfilled, (state: any, { payload }: any) => {
        state.array = payload;
      })
      .addCase(
        findAllArticlesByBoardId.fulfilled,
        (state: any, { payload }: any) => {
          state.array = payload;
        }
      );
  },
});

export const getAllArticles = (state: any) => state.article.array;
export const getArticleById = (state: any) => state.article.array;
export const getModifiedArticle = (state: any) => state.article.array;
export const getDeleteArticle = (state: any) => state.article.array;
export const getAllArticlesByBoardId = (state: any) => state.article.array;

export const {} = articleSlice.actions;

export default articleSlice.reducer;
