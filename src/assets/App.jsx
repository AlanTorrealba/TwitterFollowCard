import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const users = [
  { userName: "unknow", name: "unknow", isFollowing: true },
  { userName: "Alan", name: "Alan", isFollowing: true },
  { userName: "Pedro", name: "Pedro", isFollowing: false },
  { userName: "ElonMusk", name: "ElonMusk", isFollowing: true },
];
export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
        key={userName}
         userName={userName} 
         initialIsFollowing={isFollowing}
         >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
