import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCj3tYutwUjYJAMcXLrUTRuWlmRrs-Wf3w',
  authDomain: 'zebra-ae4da.firebaseapp.com',
  projectId: 'zebra-ae4da',
  storageBucket: 'zebra-ae4da.appspot.com',
  messagingSenderId: '529547221196',
  appId: '1:529547221196:web:7cb55fd9d1dbcf06acca69',
  measurementId: '${config.measurementId}',
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()
export { db, auth, storage }
