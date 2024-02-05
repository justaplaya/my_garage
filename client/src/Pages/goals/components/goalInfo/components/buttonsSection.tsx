import { ButtonsContainer, CreateButton, DeleteButton, EditButton } from '../style';
import { Loader } from 'Components/Loader';
import { Props } from '../types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDeleteGoal } from '../../../api';
import { useNavigate } from 'react-router-dom';

export const ButtonsSection = ({ setIsCreateModal, setShow, goal }: Props.ButtonsSection) => {
  const navigate = useNavigate();

  const onDeleteSuccess = () => {
    navigate('/goals');
    setLoadingDelete(false);
    toast.success('Delete successful');
  };

  const { mutate: deleteGoal } = useDeleteGoal(onDeleteSuccess);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleEdit = () => {
    setIsCreateModal(false);
    setShow(true);
  };
  const handleCreate = () => {
    setIsCreateModal(true);
    setShow(true);
  };
  const handleDelete = () => {
    deleteGoal(goal.id);
    setLoadingDelete(true);
  };

  return (
    <ButtonsContainer>
      <CreateButton onClick={handleCreate}>Create new</CreateButton>
      <EditButton onClick={handleEdit}>Edit</EditButton>
      <DeleteButton onClick={handleDelete}>{loadingDelete ? <Loader /> : 'Delete'}</DeleteButton>
    </ButtonsContainer>
  );
};
