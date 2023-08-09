// Step 1: Import React
import * as React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { Link } from "gatsby"

// Step 2: Define your component

const Home = () => {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>yunji Lee </h2>
          <h3>develop</h3>
          <p>sjdhbfjhsdbfjhsdbfj</p>
          <Link className={styles.btn} to="/projects">
            my portfolio projrct
          </Link>
        </div>
      </section>
    </Layout>
  )
}
// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetsdata {
//         description
//         title
//       }
//     }
//   }
// `

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default Home
