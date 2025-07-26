import { readdirSync, writeFileSync, existsSync, readFileSync } from 'fs'
import { join, dirname, extname, basename } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const galleryDir = join(__dirname, 'src/gallery')
const outputPath = join(__dirname, 'src/assets/galleryData.json')

const imageExtensions = ['.jpg', '.jpeg', '.png', '.svg']
const videoExtensions = ['.mp4']

let existingData = []
if (existsSync(outputPath)) {
  try {
    const raw = readFileSync(outputPath, 'utf-8')
    existingData = JSON.parse(raw)
  } catch (err) {
    console.warn('Could not parse existing galleryData.json.')
  }
}

const files = readdirSync(galleryDir)

function getTypeByExtension(ext) {
  return videoExtensions.includes(ext) ? 'video' : 'image'
}

function findCaption(filename) {
  const entry = existingData.find((item) => item.filename === filename)
  return entry ? entry.caption : null
}

const galleryData = files
  .filter(
    (file) =>
      imageExtensions.includes(extname(file).toLowerCase()) ||
      videoExtensions.includes(extname(file).toLowerCase()),
  )
  .map((file) => {
    const ext = extname(file).toLowerCase()
    const type = getTypeByExtension(ext)

    const existingCaption = findCaption(file)
    const caption = existingCaption !== null ? existingCaption : ''

    return {
      filename: file,
      type,
      caption,
    }
  })

writeFileSync(outputPath, JSON.stringify(galleryData, null, 2))
