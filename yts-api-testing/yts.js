async function getMovieInfo (url) {
    console.log("started");
  const response = await fetch(url)
  const data = await response.json()
  return parseMovieData(data)
}

function parseMovieData ({ data }) {
  return data.movies.map(({ title, medium_cover_image, imdb_code, torrents }) => {
    let torrent = ''
    torrents.forEach(({ quality, url }) => {
      if (quality === '720p') {
        torrent = url
      }
    })

    return { title, coverImage: medium_cover_image, imdb_code, torrent }
  })
}

export {getMovieInfo}