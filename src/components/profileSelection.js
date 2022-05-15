import avatars from "../assets/index.js"
import ControlArrows from "./controlArrows.js"
const profileSelection = ({ setProfile }) => {
  return (
    <div className="profiles">
      <div class="media-container">
        <div class="media-scroller">

          {/* Character Group */}
          <div class="media-group animate__animated animate__fadeIn" id="1">
          <a class="previous" href="#5">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            <button onClick={ e => setProfile(e.target.getAttribute("src"))} class="media-element animate__bounce animate__animated">
              <img
                src={avatars.lionKing.nala}
                alt=""
              />
            </button>
            <div class="media-element animate__bounce animate__animated">
              <img
                src={avatars.kids.simba}
                alt=""
              />
            </div>
            <div class="media-element animate__bounce animate__animated">
              <img
                src={avatars.kids.dash}
                alt=""
              />
            </div>
            <div class="media-element animate__bounce animate__animated">
              <img
                src={avatars.kids.violet}
                alt=""
              />
            </div>
            <div class="media-element animate__bounce animate__animated">
              <img
                src={avatars.kids.dory}
                alt=""
              />
            </div>
            <a class="next" href="#2" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          {/* Character Group */}
          <div class="media-group" id="2">
            <a class="previous" href="#1">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            <div class="media-element">
              <img src={avatars.starWars.bb8} alt="" />
            </div>
            <div class="media-element">
              <img
                src={avatars.starWars.c3po}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.starWars.r2d2}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.starWars.kylo}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.starWars.drth}
                alt=""
              />
            </div>
            <a class="next" href="#3" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          {/* Character Group */}
          <div class="media-group" id="3">
            <a class="previous" href="#2">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            <div class="media-element">
              <img
                src={avatars.simpsons.homer}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.simpsons.lisa}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.simpsons.bart}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.simpsons.marge}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.simpsons.maggie}
                alt=""
              />
            </div>
            <a class="next" href="#4" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          {/* Character Group */}
          <div class="media-group" id="4">
            <a class="previous" href="#3">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            <div class="media-element">
              <img
                src={avatars.avengers.bruce}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.avengers.tony}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.avengers.groot}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.avengers.tchalla}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.avengers.peter}
                alt=""
              />
            </div>
            <a class="next" href="#5" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          {/* Character Group */}
          <div class="media-group animate__animated animate__fadeIn" id="5">
          <a class="previous" href="#4">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            <div class="media-element">
              <img
                src={avatars.lionKing.scar}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.kids.pumba}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.lionKing.rafiki}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.lionKing.mulan}
                alt=""
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.lionKing.mushu}
                alt=""
              />
            </div>
            <a class="next" href="#1" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <ControlArrows/>
    </div>
  );
};
export default profileSelection;
