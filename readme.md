# ghost recon breakpoint stats

## howto
Tools I used were logging in through browser on my ubisoft account and open view and display stats on my profile. Then view network tab for endpoints and view the responses recieved.

### how to get them in POSTMAN

[https://public-ubiservices.ubi.com/v1/profiles/stats](https://public-ubiservices.ubi.com/v1/profiles/stats)

Then in order to get the responses in postman and more controlled get data through Postman:

Headers needed to fetch stats:
- Ubi-SessionId
- Ubi-Appid
- Authorization

Find your own spaceId, and identify your friends profileIds. 

Then finally queryParams needed to get the data you want: 
https://public-ubiservices.ubi.com/v1/profiles/stats?spaceId=<YOUR_SPACE_ID>&profileIds=<YOUR_FRIENDS_PROFILE_ID_COMMA_SEPARATED>