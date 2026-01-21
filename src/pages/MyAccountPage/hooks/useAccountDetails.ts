import { useState } from 'react';

export const useAccountDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handlePasswordEdit = () => {
    setIsEditingPassword(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handlePasswordSave = () => {
    setIsEditingPassword(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsEditingPassword(false);
  };

  return {
    isEditing,
    isEditingPassword,
    handleEdit,
    handlePasswordEdit,
    handleSave,
    handlePasswordSave,
    handleCancel,
  };
};
