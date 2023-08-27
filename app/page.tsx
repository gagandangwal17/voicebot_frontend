import css from "./home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <div className={css.root}>
            <div className={css.left}>
                <h2 className="text-4xl">Dr. Ted</h2>

                <p>
                    The paragraph here The paragraph here The paragraph here The
                    paragraph here The paragraph hereThe paragraph here The
                    paragraph here
                </p>

                <div className={css.field}>
                    <span>Input</span>
                    <textarea className={css.textarea} />
                </div>

                <button className={css.askbutton}>
                    <span className={css.icon}>
                        <FontAwesomeIcon icon={faMicrophone} />
                    </span>
                    <span className={css.text}>Ask my anything</span>
                </button>
            </div>

            <div className={css.right}>
                <div className={css.field}>
                    <span>Response</span>
                    <textarea className={css.textarea} />
                </div>
            </div>

            <div className={css.middle}>
                <img src="/doc.png" alt="doc" />
            </div>
        </div>
    );
}
