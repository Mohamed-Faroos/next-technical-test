import { ItunesData } from "..";

export type ItunesState = {
    data: ItunesData,
    loading: boolean,
    error: any
}