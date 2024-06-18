import styles from "./page.module.css";
export default async function Home() {

  function sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  await sleep(6000)
  return (
    <div className={styles.page}>
      <script async={true} src="https://imamiya-masaki.github.io/thirdparty-js/deliver/third-party.js"/>
      HTML読み込み完了
      <img src={"/heavy-image.jpg"} width={300} alt="heavy-image"></img>
    </div>
  );
}

export const dynamic = 'force-dynamic'