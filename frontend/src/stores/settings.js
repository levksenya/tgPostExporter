import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const inputText = ref('')
  const notes = ref([{ before: '', after: '' }])
  const photoNote = ref('')
  const defaultNotes = ref('')
  const blacklist = ref('')

  const response = fetch('http://localhost:8083/settings', {
    method: 'GET'
  })

  response
    .then((data) => data.json())
    .then(
      ({
        inputText: storedInputText,
        notes: storedNotes,
        photoNote: storedPhotoNote,
        defaultNotes: storedDefaultNotes,
        blacklist: storedBlacklist,
      }) => {
        inputText.value = storedInputText
        notes.value = storedNotes
        photoNote.value = storedPhotoNote
        defaultNotes.value = storedDefaultNotes
        blacklist.value = storedBlacklist
      }
    )

  return { inputText, notes, photoNote, defaultNotes, blacklist }
})
