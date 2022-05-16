import avatars from "../assets/index.js"
import ControlArrows from "./controlArrows.js"

const userPermissions = ({ setProfile }) => {
  return (
    <div>
      <div class="media-container">
        <div class="media-scroller">

          {/* Kids */}
          <div class="media-group animate__animated animate__fadeIn" id="1">
          <a class="previous" href="#5">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            <button onClick={ e => setProfile(e.target.getAttribute("src"))} class="media-element animate__fadeInLeft animate__animated">
general
            </button>
            </div>
            <div class="media-group animate__animated animate__fadeIn" id="1">
            <button onClick={e => e} class="media-element animate__fadeInRight animate__animated">
admin
            </button>
            </div>
            <a class="next" href="#2" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
            </div>
          </div>
      <ControlArrows/>
    </div>
  );
};
export default userPermissions;
