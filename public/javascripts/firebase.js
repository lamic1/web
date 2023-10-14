  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCqGHtzsiclptcmP2P4u8fIjcl_kneZdEg", //다른사람깃 클론할때 
    authDomain: "fir-38933.firebaseapp.com",
    projectId: "fir-38933",
    storageBucket: "fir-38933.appspot.com",
    messagingSenderId: "907324601301",
    appId: "1:907324601301:web:0eeec96cd8922a2f88435c",
    measurementId: "G-5LR63FNZF6"
  };

  // Initialize Firebase
  // 외부에서 사용하는거라서 export 필수
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);