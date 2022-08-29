var obj = JSON.parse($response.body);

obj = 

{
  "item" : {
    "id" : "el_zari",
    "profile" : {
      "bio" : "Hey there! I am using Spotistats",
      "pronouns" : null
    },
    "hasImported" : false,
    "customId" : null,
    "disabled" : false,
    "orderBy" : "PLATFORM",
    "syncEnabled" : false,
    "socialMediaConnections" : [

    ],
    "image" : "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-1/221354993_10226757335663612_3278847620123177728_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=0c64ff&_nc_ohc=N9ZL4GjpHHkAX9lxRd4&_nc_ht=scontent-ams4-1.xx&edm=AP4hL3IEAAAA&oh=00_AT8-arUx6WJo6D44ZEC3mcklcm0kWfZ6uY1-xtUVJXmeew&oe=63108158",
    "privacySettings" : {
      "streamStats" : true,
      "currentlyPlaying" : true,
      "leaderboards" : true,
      "topTracks" : true,
      "recentlyPlayed" : true,
      "topAlbums" : true,
      "topArtists" : true,
      "profile" : true,
      "topGenres" : true,
      "streams" : true
    },
    "isPlus" : true,
    "email" : "el_zari@hotmail.com",
    "displayName" : "Federico Munoz Fernandez",
    "country" : "IN"
  }
}
$done({body: JSON.stringify(obj)});