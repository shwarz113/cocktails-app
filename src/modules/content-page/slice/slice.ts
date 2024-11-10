import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoutesEnum } from "../../../shared/constants/routes";
import axiosInstance from "../../../config/axiosConfig";
import { RootState } from "../../../store";
import { mockCocktails } from "./mock";
import {
  CocktailItem,
  CocktailResponse,
  FormattedCocktailItem,
} from "./models";

type ContentByName = {
  [x in RoutesEnum]?: FormattedCocktailItem;
};

export interface ContentState extends ContentByName {
  loading: boolean;
}

const initialState: ContentState = {
  loading: true,
};

export const fetchCocktailByIdAction = createAsyncThunk(
  "fetchCocktailByIdAction",
  async (itemId: string) => {
    const mockResponse = mockCocktails[itemId as RoutesEnum];
    const fetchDataPromise = async () => {
      const { data } = await axiosInstance.get<CocktailResponse>(itemId, {
        params: { s: itemId },
      });
      return data;
    };
    const timeoutPromise = new Promise<CocktailResponse>((resolve) => {
      setTimeout(() => {
        resolve(mockResponse);
      }, 2000);
    });
    // mock и race добавлены, так как без впн не работало api cocktails
    return await Promise.race([fetchDataPromise(), timeoutPromise]);
  },
);

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktailByIdAction.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCocktailByIdAction.fulfilled, (state, action) => {
        state.loading = false;
        const key = action.meta.arg as RoutesEnum;
        const value = action.payload.drinks?.[0];
        const listOfIngredients: Array<[string, string]> = new Array(15)
          .fill("")
          .reduce((acc, _, i) => {
            if (value?.[`strIngredient${i + 1}` as keyof CocktailItem]) {
              acc.push([
                value?.[(`strMeasure${i + 1}` || "") as keyof CocktailItem],
                value?.[`strIngredient${i + 1}` as keyof CocktailItem],
              ]);
            }

            return acc;
          }, []);
        state[key] = {
          ...value,
          listOfIngredients,
        };
      })
      .addCase(fetchCocktailByIdAction.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const selectContent = (state: RootState) => state.content;
