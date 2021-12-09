import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import FBSicon from "./img/FBSicon.png";
import home from "./img/home.png";
import styles from "./css/genre.module.css";

function Romance() {
    const APIKey = "b210e3265bcca5ec82f422ab1b91f9d5";
    const Romanceurl = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=10749&language=ko&page=2`
    const [Romance, setRomance] = useState([]);
    const getRomance = async () => {
        const json = await (
            await fetch(Romanceurl)).json();
        setRomance(json.results);

    };
    useEffect(() => {
        getRomance();
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
         <h1>로맨스, <span>연애 세포 자극하는 달달함 가득</span></h1>
         <hr></hr>
     </div>
     <div className={styles.containwrap}>

        {Romance.map((rom) =>
            <div key={rom.id}>
                <Link to={`/${rom.id}`}><img className={styles.containimg}
                src={`https://image.tmdb.org/t/p/w500/${rom.poster_path}`} />
                </Link>
            </div>)}
            </div>
            <footer className={styles.footer}>
                FiveBirdSilver ⓒ 2021 All rights reserved.
            </footer>
       </div>
    );
}
export default Romance;
