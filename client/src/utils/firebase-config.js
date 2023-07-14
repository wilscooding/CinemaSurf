import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAr1c_r5ErAjko_RzoJuylgk3z1MQFzItc",
	authDomain: "cinemasurf-eb42b.firebaseapp.com",
	projectId: "cinemasurf-eb42b",
	storageBucket: "cinemasurf-eb42b.appspot.com",
	messagingSenderId: "55599295261",
	appId: "1:55599295261:web:5d72cd33f50f8a104b0ff4",
	measurementId: "G-EY8KCDXF64",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
