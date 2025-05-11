export type items = {
      "kind": string,
      "etag": string,
      "id": string,
      "snippet": {
        "title": string,
        "assignable": boolean,
        "channelId": string
      }
}


export type VideoCategory = {
    kind: string;
    etag: string;
    items: items[];

}

export type MostPopularVideosType = {
    "kind": string,
    "etag": string,
    "items":VideoItems[],
    "nextPageToken": string,
    "pageInfo": {
    "totalResults": number,
    "resultsPerPage": number
  }
}

export type VideoItems  = {
      "kind": string,
      "etag": string,
      "id": string,
      "snippet": {
        "publishedAt": string,
        "channelId": string,
        "title": string,
        "description": string,
        "thumbnails": {
          "default": {
            "url": string,
            "width": number,
            "height": number
          },
          "medium": {
            "url": string,
            "width": number,
            "height": number
          },
          "high": {
            "url": string,
            "width": number,
            "height": number
          },
          "standard": {
            "url": string,
            "width": number,
            "height": number
          },
          "maxres": {
            "url": string,
            "width": number,
            "height": number
          }
        },
        "channelTitle": string,
        "tags"?: string[],
        "categoryId": string,
        "liveBroadcastContent": string,
        "defaultLanguage"?: string,
        "localized": {
          "title": string,
          "description": string
        },
        "defaultAudioLanguage"?: string
      },
      "contentDetails": {
        "duration": string,
        "dimension": string,
        "definition": string,
        "caption": string,
        "licensedContent": boolean,
        "regionRestriction"?: {
          "blocked"?: string[],
          "allowed"?: string[]
        },
        "contentRating": {},
        "projection": string
      },
      "statistics": {
        "viewCount": string,
        "likeCount": string,
        "favoriteCount": string,
        "commentCount": string
      }
    }
