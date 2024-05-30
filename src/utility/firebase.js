/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCpJdby5QnzQbXQt8-8adBkBxHBFFeVRMM',
  authDomain: 'movie-gpt-64294.firebaseapp.com',
  projectId: 'movie-gpt-64294',
  storageBucket: 'movie-gpt-64294.appspot.com',
  messagingSenderId: '630505451506',
  appId: '1:630505451506:web:642d461feb104b41d3c56b',
  measurementId: 'G-GFM2NCDMRT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
