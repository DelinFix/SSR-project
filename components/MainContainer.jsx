import A from "./A";
import Head from "next/head";
import styles from '../styles/Main.module.scss'

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords ={ "next.js," + keywords + ' '}></meta>
                <title>Main page</title>
            </Head>
            <div className ={styles.navbar}>
                <A href={'/'} text="Main"/>
                <A href={'/users'} text="Users"/>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;
