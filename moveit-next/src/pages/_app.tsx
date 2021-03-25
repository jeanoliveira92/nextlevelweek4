import '../styles/global.css'

import { ChallengeContext } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeContext.Provider>
      <Component {...pageProps} />
    </ChallengeContext.Provider>
  )
}

export default MyApp
