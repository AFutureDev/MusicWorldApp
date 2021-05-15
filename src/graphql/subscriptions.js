/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbumCategory = /* GraphQL */ `
  subscription OnCreateAlbumCategory {
    onCreateAlbumCategory {
      id
      title
      Albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistHeadlines
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAlbumCategory = /* GraphQL */ `
  subscription OnUpdateAlbumCategory {
    onUpdateAlbumCategory {
      id
      title
      Albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistHeadlines
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAlbumCategory = /* GraphQL */ `
  subscription OnDeleteAlbumCategory {
    onDeleteAlbumCategory {
      id
      title
      Albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistHeadlines
          albumCategoryId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
      id
      name
      by
      numberOfLikes
      imageUri
      artistHeadlines
      songs {
        items {
          id
          imageUri
          url
          title
          artist
          artwork
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        Albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
      id
      name
      by
      numberOfLikes
      imageUri
      artistHeadlines
      songs {
        items {
          id
          imageUri
          url
          title
          artist
          artwork
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        Albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
      id
      name
      by
      numberOfLikes
      imageUri
      artistHeadlines
      songs {
        items {
          id
          imageUri
          url
          title
          artist
          artwork
          albumId
          createdAt
          updatedAt
        }
        nextToken
      }
      albumCategoryId
      albumCategory {
        id
        title
        Albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      imageUri
      url
      title
      artist
      artwork
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistHeadlines
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      imageUri
      url
      title
      artist
      artwork
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistHeadlines
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      imageUri
      url
      title
      artist
      artwork
      albumId
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistHeadlines
        songs {
          nextToken
        }
        albumCategoryId
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
