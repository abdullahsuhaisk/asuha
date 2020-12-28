import Welcome from "../Components/Welcome";
import MyResumeContainer from '../Components/Resume/MyResumeContainer'
import MySkillsContainer from "../Components/MySkillsContainer";
import LetDiscuss from "../Components/LetDiscuss";
import HomeBlogContainer from '../Components/Blog/HomeBlogContainer';
import HomeContactMeContainer from "../Components/ContactMe/HomeContactMeContainer";

function Home() {
  return (
    <>
      <Welcome />
      <MyResumeContainer />
      <MySkillsContainer />
      <LetDiscuss />
      <HomeBlogContainer />
      <HomeContactMeContainer />
      <div style={{ width: '100%', backgroundColor: 'pink', height: "100vh" }}>
      </div>
    </>
  )
}
export default Home;