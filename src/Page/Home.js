import Welcome from "../Components/Welcome";
import MyResumeContainer from '../Components/Resume/MyResumeContainer'

function Home() {
  return (
    <>
      <Welcome />
      <MyResumeContainer />
      <div style={{ width: '100%', backgroundColor: 'red', height: "100vh" }}>
      </div>
    </>
  )
}
export default Home;