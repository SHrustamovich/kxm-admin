import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCfkv8s3Uh8SmrHr_in3ETROEGomwTiqUk",
    authDomain: "my-first-projec-8fbc6.firebaseapp.com",
    projectId: "my-first-projec-8fbc6",
    storageBucket: "my-first-projec-8fbc6.appspot.com",
    messagingSenderId: "704943876208",
    appId: "1:704943876208:web:ce23b73c7ae6dafc1becb5"
  };
 const  app = initializeApp(firebaseConfig)

 const storage = getStorage(app)
 
 export  {storage,app}