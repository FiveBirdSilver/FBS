import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FBSicon from "./img/FBSicon.png";
import home from "./img/home.png";
import styles from "./css/indetail.module.css";

function Indetail() {
    const APIKey = "b210e3265bcca5ec82f422ab1b91f9d5";
    const [Indetails, setIndetails] = useState([]);
    const { id } = useParams();
    const getIndetail = async () => {
        const json = await (
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=ko`)).json();
        setIndetails(json)
    }
    console.log(Indetails);
    useEffect(() => {
        getIndetail();
    }, [])
    function Cal() {
        if(Indetails.runtime > 120) {
            return (Indetails.runtime - 120);
        }
        else return(Indetails.runtime - 60);

    }
    return (
        <div className={styles.body}>
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
                <img src={`https://image.tmdb.org/t/p/w500/${Indetails.backdrop_path}`} />
            </div>

            <div className={styles.containwrap}>
                <div className={styles.poster}>
                    <img src={`https://image.tmdb.org/t/p/w500/${Indetails.poster_path}`} />
                </div>
                <div className={styles.description}>
                    <span>{Indetails.title}</span>
                    <span>{Indetails.tagline}</span>
                    <span>{Indetails.release_date} 개봉 · {Math.floor(Indetails.runtime / 60)}시간 <Cal />분</span>
                    <span>{Indetails.overview}</span>
                    <div className={styles.descriptionwap}>
                        <p>⭐</p>
                        <p> 평점 </p> 
                        <p>{Indetails.vote_average}</p> 
                    </div>
                </div>


            </div>
            
        </div>


    );
}

export default Indetail;