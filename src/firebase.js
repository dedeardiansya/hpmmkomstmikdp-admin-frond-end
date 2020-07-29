import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

const app = firebase.initializeApp({
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FB_APP_ID
})

export const { TimeStamp, GeoPoint } = firebase.firestore

export const db = app.firestore()

export const auth = app.auth()

if (location.hostname === 'localhost') {
  app.functions().useFunctionsEmulator('http://localhost:5001')
  db.settings({ host: 'localhost:8000', ssl: false })
}
