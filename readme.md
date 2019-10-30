# ghost recon breakpoint stats

## howto
Tools I used were logging in through browser on my ubisoft account and open view and display stats on my profile. Then view network tab for endpoints and view the responses recieved.

### how to get them in POSTMAN

[https://public-ubiservices.ubi.com/v1/profiles/stats](https://public-ubiservices.ubi.com/v1/profiles/stats)

Then in order to get the responses in postman and more controlled get data through Postman:

### Headers needed to fetch stats:
- Ubi-SessionId
- Ubi-Appid
- Authorization


### Users
87d2039c-5822-4284-8ac6-37fe3f1a2277,88cd2ba8-86ef-49db-9664-b672a6c36519,16c30c5f-4e97-455b-8123-3e6743bda427,c6f91dbf-4414-48b9-a9ac-a37d5cf8a2ab,01b979a8-8a1d-4d36-84a7-4baccf098e44

### Params
Breakpoint: e5af8b3f-a867-4ed4-8804-229b50c9bb1f 
Wildlands: 429a8e76-f469-4b2e-9d74-c1b35ee0ddad

Find your own spaceId, and identify your friends profileIds. 

Then finally queryParams needed to get the data you want: 
https://public-ubiservices.ubi.com/v1/profiles/stats?spaceId=<YOUR_SPACE_ID>&profileIds=<YOUR_FRIENDS_PROFILE_ID_COMMA_SEPARATED>