import { UsersComponent } from "./UsersComponent";
import { fetchUsers } from "./duck/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUsers } from "./duck/actions";

export default function UsersContainer() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const error = useSelector((state) => state.usersReducer.error);

  const handleDeleteUsers = (id) => {
    dispatch(deleteUsers(id));
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div id="users-container">
      <UsersComponent
        listOfUsers={users}
        error={error}
        deleteUser={handleDeleteUsers}
      />
    </div>
  );
}
