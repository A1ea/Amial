
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyB7MHk6utNVEYXqIKLBjgiDOQbdmgilu84',
    authDomain: 'Amial.firebaseapp.com',
    databaseURL: 'https://Amial.firebaseio.com',
    projectId: 'amial-8b79c',
    storageBucket: 'amial-8b79c.appspot.com',
    messagingSenderId: '1055987009677',
    appId: '1:1055987009677:ios:c2699ffd7e974b3e1d3ac4',
  };
 

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;