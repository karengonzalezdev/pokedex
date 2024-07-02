import { useDispatch } from 'react-redux';
import { closeInformation } from '../app/actions';

const useListActions = () => {
  const dispatch = useDispatch(); // Initialize dispatch function from Redux

  const handlePrevList = () => {
    dispatch(closeInformation());
  };

  return {
    handlePrevList,
  };
};

export default useListActions;