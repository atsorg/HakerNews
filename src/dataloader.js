import { useQuery } from "react-query";
import { getStoryDetail, getTopStories } from "./api";


export function useGetStories () {
    return useQuery("stories", ()=>getTopStories())
}
export function useGetStoryById(id) {
    return useQuery(["story",id], ()=>getStoryDetail(id), {
        enabled: Boolean(id)
    })
}
