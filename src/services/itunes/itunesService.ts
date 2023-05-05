import { axiosInstance } from "..";
import { HTTP_METHOD } from "../../common/enums";
import { ISearchApiParams } from "../../common/interfaces";
import { SEARCH_API_URL } from "./endPoints";

/* get itunes data api call */
export const getItunesSearchDataAPI = async (params: ISearchApiParams) => {
    return await axiosInstance({
        "method": HTTP_METHOD.GET,
        "url": SEARCH_API_URL.replace("{term}", params.term)
            .replace("{limit}", params.limit.toString())
            .replace("{media}", params.media)
            .replace("{entity}", params.entities)
    });
};
