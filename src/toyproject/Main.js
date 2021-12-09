import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/main.module.css";
import FBSicon from "./img/FBSicon.png";
import home from "./img/home.png";
import thumnail from "./img/thumnail.jpg"

function Main() {
    const APIKey = "b210e3265bcca5ec82f422ab1b91f9d5";
    const [Loading, setLoading] = useState(true);
    const Besturl = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=ko&page=1`;
    const [Best, setBest] = useState([]);
    const getBest = async () => {
        const json = await (
            await fetch(Besturl)).json();
        setBest(json.results);
        setLoading(false);
    };
    console.log(Best)
    useEffect(() => {
        getBest();
    }, [])
    return (
        <div className={styles.body}>
            {Loading ? null : (
                <div>
                    <nav className={styles.navbar}>
                        <div className={styles.navbarlogo}>
                            <img src={FBSicon} />
                        </div>
                        <div className={styles.navbarhome}>
                            <Link to={`/`}><img src={home} /></Link>
                            <ul className={styles.navbarmenu}>
                                <li><Link to={`/action`} style={{ textDecoration: 'none', color: "whitesmoke" }}>액션</Link></li>
                                <li><Link to={`/thriller`} style={{ textDecoration: 'none', color: "whitesmoke" }}>범죄·스릴러</Link></li>
                                <li><Link to={`/romance`} style={{ textDecoration: 'none', color: "whitesmoke" }}>로맨스</Link></li>
                                <li><Link to={`/comedy`} style={{ textDecoration: 'none', color: "whitesmoke" }}>코미디</Link></li>
                                <li><Link to={`/horror`} style={{ textDecoration: 'none', color: "whitesmoke" }}>공포</Link></li>
                                <li><Link to={`/animation`} style={{ textDecoration: 'none', color: "whitesmoke" }}>애니메이션</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className={styles.thumnail}>
                        <img src={thumnail} />
                        <div className={styles.description}>
                            <h3>Don't Look Up<span>  (2021년 12월 8일 개봉)</span></h3>
                            <p> 도대체 어떻게 해야 세상 사람들이 하늘을 좀 올려다볼 수 있을까?!</p>
                        </div>
                        <Link to={`/646380`}><button>MORE ⇒</button></Link>
                    </div>
                    <div className={styles.contain}>
                        <h1>최고 인기작,</h1>
                        <h2>지금 나에게 필요한 인기 영화를 한 눈에</h2>
                        <hr></hr>
                    </div>
                    <div className={styles.containwrap}>
                        {Best.map((best) =>
                            <div key={best.id}>
                                <Link to={`/${best.id}`}><img className={styles.containimg}
                                    src={`https://image.tmdb.org/t/p/w500/${best.poster_path}`} /></Link>
                            </div>
                        )}
                    </div>
                    <footer className={styles.footer}>
                        FiveBirdSilver ⓒ 2021 All rights reserved.

                    </footer>
                </div>

            )}
        </div>
    );
}
export default Main;