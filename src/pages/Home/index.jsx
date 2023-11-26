
import Header from "../../components/Header";


const Home = () => {
    return (
      <>
        <Header />

        <main className="section">
          <div className="container">
            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-2">Skills</h2>
                <p>HTML, CSS, JavaScript, ReactJS, Redux, Git</p>
              </li>
            </ul>
          </div>
        </main>
      </>
    );
}
 
export default Home;