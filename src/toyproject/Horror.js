import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import FBSicon from "./img/FBSicon.png";
import home from "./img/home.png";
import styles from "./css/genre.module.css";

function Horror() {
    const APIKey = "b210e3265bcca5ec82f422ab1b91f9d5";
    const Horrorurl = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=27&language=ko&page=5`
    const [Horror, setHorror] = useState([]);
    const getHorror = async () => {
        const json = await (
            await fetch(Horrorurl)).json();
        setHorror(json.results);

    };
    useEffect(() => {
        getHorror();
    }, [])
    return (
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
            <div className={styles.contain}>
                <h1>공포, <span>심장 쫄깃 등골 오싹</span></h1>
                <hr></hr>
            </div>
            <div className={styles.containwrap}>

                {Horror.map((hor) =>
                    <div key={hor.id}>
                        <Link to={`/${hor.id}`}><img className={styles.containimg} src={`https://image.tmdb.org/t/p/w500/${hor.poster_path}`} />
                        </Link>
                    </div>)}
            </div>
            <footer className={styles.footer}>
                FiveBirdSilver ⓒ 2021
            </footer>
        </div>
    );
}
export default Horror;
