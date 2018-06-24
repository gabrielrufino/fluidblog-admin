import firebase from 'firebase'
import Rebase from 're-base'

const config = {
  apiKey: 'AIzaSyB5UNUHxvyOiikdeM07yuDqntv8tNxpJDk',
  authDomain: 'fluidblog-87fd7.firebaseapp.com',
  databaseURL: 'https://fluidblog-87fd7.firebaseio.com',
  projectId: 'fluidblog-87fd7',
  storageBucket: 'fluidblog-87fd7.appspot.com',
  messagingSenderId: '64923059485'
}

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export default base
