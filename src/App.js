import react, { useState } from 'react';
import MovieList from './comp/MovieList';
import Add from './comp/Add';
import Serch from './comp/Serch';
import './App.css';

function App() {
  const movies = [
    { title: "The Equalizer", description: "In The Equalizer, Denzel Washington plays McCall, a man who believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when McCall meets Teri (Chloë Grace Moretz), a young girl under the control of ultra-violent Russian gangsters, he can't stand idly by -- he has to help her. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.", rate: 7.2, posturl: "https://imgsrc.cineserie.com/2016/08/14090.jpg?ver=1" },
    { title: "Sounds Like Love", description: "Fashion assistant Maca has just about got her life together after a devastating breakup, when Leo, the man who broke her heart returns. Seeking support from best friends, Adriana and Jime, all three will learn love can be complicated.", rate: 5.3, posturl: "https://m.media-amazon.com/images/M/MV5BNjQ0M2ZhZmItMGE5OC00NmQxLTk3NzAtOTY2NTViMTc2ZjI3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg" },
    { title: "Venom", description: "Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drake's experiments, Eddie's body merges with the alien Venom -- leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.", rate: 6.7, posturl: "https://media.services.cinergy.ch/media/box1600/7f6b8d288c124a6a4bf086439ca7685ac816ad3a.jpg" },
    { title: "The Boss Baby", description: "DreamWorks Animation invites you to meet a most unusual baby. The Boss Baby is a hilariously universal story about how a new baby's arrival impacts a family, told from the point of view of a delightfully unreliable narrator, a very imaginative 7-year-old named Tim. With a sly, heart-filled message about the importance of family, The Boss Baby is an original, broadly appealing comedy for all ages.", rate: 6.3, posturl: "https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_.jpg" },
    { title: "Long Story Short", description: "Serial procrastinator Teddy (Rafe Spall) wakes up the morning after his wedding to discover that every few minutes he's jumping forward to the next year of his life. Watching his future flash before his eyes, Teddy must make every second count if he is to win back the woman he loves in this feel good comedy about second chances.", rate: 5.4, posturl: "https://upload.wikimedia.org/wikipedia/en/5/5e/Long_story_short.jpg" },
    { title: "Jumanji", description: "In the brand new adventure Jumanji: Welcome to the Jungle, the tables are turned as four teenagers in detention are sucked into the world of Jumanji. played by Dwayne Johnson, Jack Black, Kevin Hart, and Karen Gillan.  They’ll have to go on the most dangerous adventure of their lives, or they’ll be stuck in the game forever…", rate: 6.9, posturl: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" }
  ]
  const [moviesFin, setMoviesFin] = useState(movies)
  const handleAjout = (newMovie) => {
    setMoviesFin([...moviesFin, newMovie])
  }
  const [Xserch, setXserch] = useState({serchTit:"",serchRat:0})
  const handleSerch = (NewXserch) => {
    setXserch(NewXserch)
  }
  return (
    <div className="App">
      <div className="all">
        
        <div className='f'>
        <Add handleAjout={handleAjout} />
        <Serch handleSerch={handleSerch} Xserch={Xserch} />
        </div>
        <MovieList movies={moviesFin.filter(el => el.title.toLowerCase().includes(Xserch.serchTit.toLowerCase())&&(el.rate>=Xserch.serchRat))} /> 
        
      </div>
    </div>
  );
}
export default App;
