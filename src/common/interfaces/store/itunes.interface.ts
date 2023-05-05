import { TUNES_DATA_TYPE } from "../../enums";

export interface Itunes {
    wrapperType: TUNES_DATA_TYPE,
    artistName: string,
    artworkUrl?: string,
    collectionName?: string,
    trackName?: string
}