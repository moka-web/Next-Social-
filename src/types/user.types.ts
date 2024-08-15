
 export type BaseUser = {
	"id": string,
	"username": string,
	"name": string,
	"photoUrl": string,
	"followersCount": number,
}


export type UserType = BaseUser & {
	"bio": string,
	"createdAt": string,
	"followingCount": number,
	"messageCount": number
};


export type TrendingUserType = BaseUser;