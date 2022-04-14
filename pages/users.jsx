import styles from '../styles/Users.module.scss'
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const MyComponent = ({users}) => {
    return (
        <MainContainer keywords={'users'}>
            <h1>List of users</h1>
            <ul className={styles.user_list}>
                {users.map(user =>
                    <li key={user.id} className={styles.userList}>
                        <Link href={`/users/${user.id}`}>
                            <a className={styles.listItem}>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default MyComponent;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {users},
    }
}