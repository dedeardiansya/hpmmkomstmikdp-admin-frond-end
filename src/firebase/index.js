import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyAl6lO06pk2VgVDGJmJ70NqZt6d3bwBznY',
    authDomain: 'hpmmkomstmikdp.firebaseapp.com',
    databaseURL: 'https://hpmmkomstmikdp.firebaseio.com',
    projectId: 'hpmmkomstmikdp',
    storageBucket: 'hpmmkomstmikdp.appspot.com',
    messagingSenderId: '246118162433',
    appId: '1:246118162433:web:16f96de8e4cb204c966000'
  })
}

export const db = firebase.firestore()
export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
