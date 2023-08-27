import './App.css'
import TwitterFollowCard from './TwitterFollowCard'
export function App() {
  
  return (
    <section className="App">
    <TwitterFollowCard initialIsFollowing={true} userName='Alan3' name='Alan'/>
    <TwitterFollowCard initialIsFollowing={false} userName='Dura32n' name='asdas'/>
    <TwitterFollowCard initialIsFollowing userName='unknow' name='unknow'/>
    <TwitterFollowCard initialIsFollowing userName='davidguetaa' name='davidguetaa'/>
    </section>
  );
}
