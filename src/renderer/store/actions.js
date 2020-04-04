import fs from 'fs'
import path from 'path'
import findit from 'findit'
import * as mm from 'music-metadata'

let songsData = []
let mp3Files = []

async function extractAndStoreMetaTags (commit) {
  for (var i in mp3Files) {
    let mp3File = mp3Files[i]
    let metadata = await mm.parseFile(mp3File)
    let commonMetadata = metadata.common
    let tags = {
      src: mp3File,
      title: commonMetadata.title,
      album: commonMetadata.album,
      artists: commonMetadata.artists,
      genre: commonMetadata.genre
    }

    if (commonMetadata.picture.length) {
      tags.picture = `data:${commonMetadata.picture[0].format};base64,${commonMetadata.picture[0].data.toString('base64')}`
    } else {
      tags.picture = '@/assets/mjam-default'
    }

    songsData.push(tags)
  }

  commit('addSongs', songsData)
}

function cacheData () {
  if (!fs.existsSync('./.mjam-data')) {
    fs.mkdirSync('./.mjam-data', { recursive: true })
  }

  fs.writeFile('./.mjam-data/songsData.json', JSON.stringify(songsData), (err) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Files saved')
    }
  })
}

export default {
  fetchSongs: ({ commit }, sourceDir) => {
    console.log(sourceDir)
    let finder = findit(sourceDir)

    finder.on('file', (filePath) => {
      if (path.extname(filePath) === '.mp3') {
        mp3Files.push(filePath)
      }
    })

    finder.on('end', () => {
      cacheData()
      extractAndStoreMetaTags(commit)
    })
  }
}
