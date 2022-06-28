const userPermissions = ({ setPermissions }) => {
  return (
    <div>
      <div class="container">
        <div class="grid">
          <div class="grid-group animate__animated animate__fadeIn" id="1">
            <button
              onClick={() => setPermissions('general')}
              class="permissions animate__fadeInLeft animate__animated"
            >
              general
            </button>
          </div>
          <div class="media-group animate__animated animate__fadeIn" id="1">
            <button
              onClick={() => setPermissions('admin')}
              class="permissions animate__fadeInRight animate__animated"
            >
              admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default userPermissions;
