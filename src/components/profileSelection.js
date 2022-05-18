import avatars from "../assets/index.js"
import ControlArrows from "./controlArrows.js"
const profileSelection = ({ setProfile }) => {
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
            <div class="media-element animate__fadeInTopLeft animate__animated">
              <img
                src={avatars.kids.dash}
                onClick={ e => setProfile(e.target.getAttribute("src"))}
                alt=""
              />
            </div>
            <div class="media-element animate__fadeInUp animate__animated">
              <img
                onClick={ e => setProfile(e.target.getAttribute("src"))}
                src={avatars.kids.violet}
                alt=""
              />
            </div>
            <div class="media-element animate__fadeInDown animate__animated">
              <img
                src={avatars.kids.dory}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element animate__fadeInUp animate__animated">
              <img
                src={avatars.avengers.groot}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element animate__fadeInTopRight animate__animated">
              <img
                src={avatars.lionKing.nala}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <a class="next" href="#2" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>


          {/* StarWars */}
          <div class="media-group" id="2">
            <a class="previous" href="#1">
              <svg>
                <use href="#previous"></use>
              </svg>
            </a>
            <div class="media-element">
              <img 
              src={avatars.starWars.bb8}
              alt="" 
              onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.starWars.c3po}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.starWars.r2d2}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.starWars.kylo}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.starWars.drth}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <a class="next" href="#3" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          {/* Simpsons */}
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
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.simpsons.lisa}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.simpsons.bart}
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.simpsons.marge}
                onClick={ e => setProfile(e.target.getAttribute("src"))}
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

          {/*  Avengers */}
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
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.avengers.tony}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.avengers.groot}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.avengers.tchalla}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.avengers.peter}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <a class="next" href="#5" aria-label="next">
              <svg>
                <use href="#next"></use>
              </svg>
            </a>
          </div>

          {/* Lion King & Mulan */}
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
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.kids.pumba}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.lionKing.rafiki}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.lionKing.mulan}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
              />
            </div>
            <div class="media-element">
              <img
                src={avatars.lionKing.mushu}
                alt=""
                onClick={ e => setProfile(e.target.getAttribute("src"))}
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
