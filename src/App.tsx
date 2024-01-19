import { Profile } from "./components/Profile"

function App() {
  
  return (
    <>
      <Profile 
        img= "https://randomuser.me/api/portraits/men/75.jpg"
        name="Arthur Morgan"
        bio="Full-stack javascript developer at RDR2"
        email="arthur.morgan@email.com"
        phone="+5511987654321"
        githubUrl="https://github.com/"
        linkedinUrl="https://www.linkedin.com/"
        twitterUrl="https://twitter.com/home"
      />
    </>
  )
}

export default App
