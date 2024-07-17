import fs from 'fs/promises'

export const deleteImage = async (imagePath: string) => {
  try {
    if (imagePath == 'public/images/users/default.png') return
    await fs.unlink(imagePath)
  } catch (error) {
    throw error
  }
}
