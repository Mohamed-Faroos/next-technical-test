import { axiosInstance } from "..";
import { HTTP_METHOD } from "../../common/enums";
import { SearchApiParams } from "../../common/interfaces";
import { SEARCH_API_URL } from "./endPoints";

export const getItunesSearchDataAPI = async (params: SearchApiParams) => {
    return await axiosInstance({
        "method": HTTP_METHOD.GET,
        "url": SEARCH_API_URL.replace("{term}", params.term)
        .replace("{limit}", params.limit.toString())
        .replace("{media}", params.media)
        .replace("{entity}", params.entities)
    });
};
