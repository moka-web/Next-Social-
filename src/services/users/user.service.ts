const API_URL = "http://localhost:8080/api"
const  API_PUBLIC_URL = `${API_URL}/public`
import { MessageType } from "@/types/message.types"
import { PageType } from "@/types/pagination.types"
import { TrendingUserType, UserType } from "@/types/user.types"
import httpinternalapi from "../common/http.internal.service"
import httpexternalapi from "../common/http.external.service"



    class UserApi {
       
        getMeInternal = async (accessToken : string ) : Promise<UserType> =>httpinternalapi.httpGet(`/me`,undefined,accessToken);   

        getUserData = async (username : string ) : Promise<UserType> =>httpinternalapi.httpGetPublic(`/users/${username}`);

        getUSerMessages = async (username : string ) : Promise <PageType<MessageType>> =>httpinternalapi.httpGetPublic(`/users/${username}/messages`);
        
        getUserMessagesRplies = async (username : string) : Promise <PageType<MessageType>> =>httpinternalapi.httpGetPublic (`/users/${username}/messages/replies`);
           
        getUserFollowes = async (username : string ) : Promise <PageType<TrendingUserType>> =>httpinternalapi.httpGetPublic(`/users/${username}/followers`);

        getUserFollowings = async (username : string ) : Promise <PageType<TrendingUserType>> =>httpinternalapi.httpGetPublic(`/users/${username}/following`);
        
        
    }


const userApi = new UserApi();
export default userApi; 
