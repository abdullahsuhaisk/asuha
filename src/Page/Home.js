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
    </>
  )
}
export default Home;