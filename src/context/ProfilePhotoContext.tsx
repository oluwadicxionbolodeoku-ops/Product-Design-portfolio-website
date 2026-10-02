import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProfilePhotoContextType {
  photoUrl: string;
  updatePhoto: (file: File) => void;
  resetPhoto: () => void;
}

const DEFAULT_PHOTO_PATH = '/Dicxion Profile picture.jpg';
const STORAGE_KEY = 'dicxion_hd_profile_photo';

const ProfilePhotoContext = createContext<ProfilePhotoContextType>({
  photoUrl: DEFAULT_PHOTO_PATH,
  updatePhoto: () => {},
  resetPhoto: () => {},
});

export const ProfilePhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.startsWith('data:image/')) {
        return saved;
      }
    } catch {
      // localStorage may fail in restricted mode
    }
    return DEFAULT_PHOTO_PATH;
  });

  const updatePhoto = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoUrl(result);
        try {
          localStorage.setItem(STORAGE_KEY, result);
        } catch {
          // ignore storage limit
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const resetPhoto = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setPhotoUrl(DEFAULT_PHOTO_PATH);
  };

  return (
    <ProfilePhotoContext.Provider value={{ photoUrl, updatePhoto, resetPhoto }}>
      {children}
    </ProfilePhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(ProfilePhotoContext);
