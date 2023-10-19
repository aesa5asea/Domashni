import PropTypes from "prop-types";

export const UsersComponent = ({ listOfUsers, error, deleteUser }) => {
  console.log(listOfUsers);
  console.log(error);
  console.log(deleteUser);
  return (
    <div id="users-component">
      {!error ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Actions:</th>
            </tr>
          </thead>
          <tbody>
            {listOfUsers.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.phone}</td>
                  <td>
                    <buton
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        padding: "0px 10px",
                        border: "2px solid black",
                        borderRadius: "4px",
                        cursor: "pointer",
                      }}
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </buton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>error</h1>
      )}
    </div>
  );
};

UsersComponent.propTypes = {
  listOfUsers: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  deleteUser: PropTypes.func.isRequired,
};
