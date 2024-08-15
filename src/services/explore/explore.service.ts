import { PageType } from "@/types/pagination.types";
import { TrendingUserType, UserType } from "@/types/user.types";
import { TrendingHashtag } from "@/types/hash.types";
import httpinternalapi from "../common/http.internal.service";
import httpexternalapi from "../common/http.external.service";
import { headers } from "next/headers";



class ExploreApi {
  getTrendingHashtags = async (
    page: number,
    size: number
  ): Promise<PageType<TrendingHashtag>> => {
    return httpinternalapi.httpGetPublic(
      `/explore/trending`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
  };

  getFollowRecomendations = async (
    page: number,
    size: number
  ): Promise<PageType<TrendingUserType>> => {
    return httpinternalapi.httpGetPublic(
      `/explore/follow-recommendations`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
  };

  getMyFollowRecomendations = async (page: number,size: number,accessToken:string): Promise<PageType<TrendingUserType>> => {
    return httpinternalapi.httpGet(`/explore/follow-recommendations`,new URLSearchParams({ page: `${page}`, size: `${size}` }),accessToken)};
}

const exploreApi = new ExploreApi();
export default exploreApi;
