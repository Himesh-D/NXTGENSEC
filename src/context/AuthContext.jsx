import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  signInWithPopup,
  updateProfile as fbUpdateProfile
} from 'firebase/auth';
import { auth, googleProvider } from '@/services/firebase/firebase';
import { localDB } from '../services/localDB';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up with Local Data persistence
  const signup = async (email, password, displayName, role) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const fbUser = userCredential.user;
      
      await fbUpdateProfile(fbUser, { displayName });
      
      const userData = {
        uid: fbUser.uid,
        email: fbUser.email,
        name: displayName,
        role: role || 'Participant',
        skills: [],
        github: '',
        bio: '',
        createdAt: new Date().toISOString()
      };
      
      // Save to localDB instead of Firestore
      localDB.upsert('users', userData);
      
      setUser(userData);
      return fbUser;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userData = localDB.getById('users', userCredential.user.uid);
    return { userCredential, userData };
  };

  const loginWithGoogle = async (selectedRole = 'Participant') => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const fbUser = result.user;
      
      // Check if user exists in localDB
      let userData = localDB.getById('users', fbUser.uid);
      
      if (!userData) {
        userData = {
          uid: fbUser.uid,
          email: fbUser.email,
          name: fbUser.displayName,
          role: selectedRole,
          skills: [],
          github: '',
          bio: '',
          createdAt: new Date().toISOString()
        };
        localDB.upsert('users', userData);
      }
      
      setUser(userData);
      return { result, userData };
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  const updateProfile = async (updatedData) => {
    if (!user?.uid) return;
    
    try {
      // Update localDB
      const newUserData = { ...user, ...updatedData };
      localDB.upsert('users', newUserData);
      setUser(newUserData);
      
      if (updatedData.name && auth.currentUser) {
        await fbUpdateProfile(auth.currentUser, { displayName: updatedData.name });
      }
    } catch (error) {
      console.error("Update profile error:", error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        // Fetch from localDB
        const savedData = localDB.getById('users', fbUser.uid);
        if (savedData) {
          setUser({ ...savedData, email: fbUser.email });
        } else {
          // Fallback if record missing locally
          setUser({
            uid: fbUser.uid,
            email: fbUser.email,
            name: fbUser.displayName || fbUser.email.split('@')[0],
            role: 'Participant',
            skills: []
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loginWithGoogle, updateProfile, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
