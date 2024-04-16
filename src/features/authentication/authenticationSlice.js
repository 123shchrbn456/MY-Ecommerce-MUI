import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { apiSlice } from "../api/apiSlice";
import { db } from "../../firebase";

export const authenticationApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation({
            async queryFn({ email, password }) {
                console.log(email, password);
                try {
                    const auth = getAuth();
                    const userCredential = await signInWithEmailAndPassword(auth, email, password);
                    return { data: userCredential.user };
                } catch (err) {
                    console.log(err);
                }
            },
        }),
        signUp: builder.mutation({
            async queryFn({ formData }) {
                try {
                    const auth = getAuth();
                    const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                    updateProfile(auth.currentUser, {
                        displayName: formData.name,
                    });
                    const user = userCredential.user;
                    const formDataCopy = { ...formData };
                    delete formDataCopy.password;
                    formDataCopy.timestamp = serverTimestamp();
                    await setDoc(doc(db, "users", user.uid), formDataCopy);
                    return { data: formDataCopy };
                } catch (err) {
                    throw new Error(err);
                }
            },
        }),
    }),
});

export const { useSignInMutation, useSignUpMutation } = authenticationApiSlice;
