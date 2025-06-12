import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCmnZj4YkwVeqMGy25llCnRR_T2d77SPQU",
    authDomain: "coffeefuel-f922b.firebaseapp.com",
    projectId: "coffeefuel-f922b",
    storageBucket: "coffeefuel-f922b.appspot.com",
    messagingSenderId: "254628733148",
    appId: "1:254628733148:web:f4363b8a11b182d2a05419",
    measurementId: "G-KN2KWD76XM"
};

const app= initializeApp(firebaseConfig);
export default app;