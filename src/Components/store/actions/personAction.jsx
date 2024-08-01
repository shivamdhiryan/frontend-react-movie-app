import axios from "../../../utils/axios";
import { loadperson } from "../reducers/personSlice";
export { removeperson } from "../reducers/personSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);

        let theUltimateDetails = {
            detail:detail.data,
            externalid:externalid.data,
            combinedCredits:combinedCredits,
            movieCredits:movieCredits,
            tvCredits:tvCredits
        }
        console.log(theUltimateDetails);
        dispatch(loadperson(theUltimateDetails));
    }
    catch (err) {
        console.log("err", err);
    }
}