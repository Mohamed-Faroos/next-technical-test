import * as TYPES from "./types";
import { ISearchApiParams, Itunes, ItunesData } from "../../common/interfaces";
import { getItunesSearchDataAPI } from "../../services/itunes/itunesService";
import { AppDispatch } from "../store";
import { TUNES_DATA_TYPE } from "../../common/enums";

const searchItunesDataStart = () => ({
    type: TYPES.GET_SEARCH_DATA_START
});

const searchItunesDataSuccess = (payload: ItunesData) => ({
    type: TYPES.GET_SEARCH_DATA_SUCCESS,
    payload: payload
});

const searchItunesDataError = (error: any) => ({
    type: TYPES.GET_SEARCH_DATA_ERROR,
    payload: error
});

export const searchItunesDataClear = () => ({
    type: TYPES.GET_SEARCH_DATA_CLEAR
});

export const searchItunesData = (payload: ISearchApiParams) => {
    return (dispatch: AppDispatch) => {
        dispatch(searchItunesDataStart());
        getItunesSearchDataAPI(payload)
            .then((res: any) => {
                const resultData = res.data;
                const dataList: Itunes[] = [];
                let allTunes : ItunesData = {
                    count: null,
                    tunes:[]
                };
                /* filter arrange required data to render list */
                resultData.results.map((tunes: any) => {

                    let data: Itunes = {
                        wrapperType : TUNES_DATA_TYPE.ARTIST,
                        artistName: tunes?.artistName,
                        artworkUrl : "",
                        collectionName: "",
                        trackName: ""
                    };
                    /* set data if wrapperType is artist */
                    if (tunes.wrapperType === TUNES_DATA_TYPE.ARTIST) {
                        data = {
                            wrapperType : TUNES_DATA_TYPE.ARTIST,
                            artistName: tunes?.artistName
                        };
                    /* set data if wrapperType is collection */
                    } else if (tunes.wrapperType === TUNES_DATA_TYPE.COLLECTION) {
                        data = {
                            wrapperType : TUNES_DATA_TYPE.COLLECTION,
                            artistName: tunes?.artistName,
                            artworkUrl: tunes?.artworkUrl100 ? tunes?.artworkUrl100 : tunes?.artworkUrl60,
                            collectionName: tunes?.collectionName
                        };
                    /* set data if wrapperType is track */
                    } else if (tunes.wrapperType === TUNES_DATA_TYPE.TRACK) {
                        data = {
                            wrapperType : TUNES_DATA_TYPE.TRACK,
                            artistName: tunes?.artistName,
                            artworkUrl: tunes?.artworkUrl100 ? tunes?.artworkUrl100 : tunes?.artworkUrl60,
                            trackName: tunes?.trackName
                        };
                    }
                    dataList.push(data);
                });

                allTunes = {
                    count: resultData.resultCount,
                    tunes: dataList
                };

                dispatch(searchItunesDataSuccess(allTunes));
            }).catch((err: any) => {
                dispatch(searchItunesDataError(err.message));
            });
    };
};