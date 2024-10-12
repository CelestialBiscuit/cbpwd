// app/page.jsx
"use client";

import { useEffect } from 'react';
import styles from './Storyline.module.css';

export default function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://celestialbiscuit.vercel.app/';
    }, 4500); // 5 seconds

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.storyContent}>
        <h1 className={styles.title}>GENESIS</h1>
        <p className={styles.paragraph}>
          Celestial Biscuit's trials have now closed, and the ancient knowledge remains safeguarded once more.
          The Guardians commend all those who dared to test their wits and courage against the complex puzzles.
          Only a select few have unlocked the secrets, and the path to the top 1% is sealed... for now.
        </p>
        <p className={styles.paragraph}>
          But fear not, for the celestial doors may open again. Stay vigilant and await your next chance to join our ranks.
          Until then, the secrets remain hidden, waiting for the worthy.
        </p>
      </div>
    </div>
  );
}



// // app/page.jsx
// import StorylineClient from './StorylineClient.jsx';
// import styles from './Storyline.module.css';

// export default function Page() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.storyContent}>
//         <h1 className={styles.title}>GENESIS</h1>
//         <p className={styles.paragraph}>
//           Celestial Biscuit contains ancient and rare knowledge—only accessible by those worthy of the club&apos;s secrets.
//           The Guardians have set complex password puzzles to protect this knowledge. You&apos;ve been chosen to face the trials and crack the password,
//           gaining access to the wisdom of the celestial founders, the key to being in the top 1%.
//         </p>
//         <p className={styles.paragraph}>
//           Are you ready to unlock the secrets?
//         </p>
//         <StorylineClient />
//       </div>
//     </div>
//   );
// }