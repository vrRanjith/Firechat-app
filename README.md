# FireChat App
1.this app was created using vite.
2.once the app is created install node_modules using "npm install".
3. next do "npm i" to install the dependencies in the package.json.
4.this app uses #"FireBase" to store the user and chat data, so you need to create you'e firebase account and copy paste the "firebaseConfig" after the account is created.
5.create a file named "firebase.jsx" under "src" folder and copy paste your "firebaseConfig".next in the same file copy paste the below
"// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
"
we are just creating few required firebase instances to be in the same file, so as it keep it relevant and simple.
6. once everything is done, do "npm run dev" in command line and the app should be up and running.
