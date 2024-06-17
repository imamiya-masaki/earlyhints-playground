import styles from "./page.module.css";

export default async function Home() {

  function sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  await sleep(3000)
  return (
    <div className={styles.page}>
      <script async={true} src="https://imamiya-masaki.github.io/thirdparty-js/deliver/third-party.js"/>
      読み込み
    </div>
  );
}

export const dynamic = 'force-dynamic'