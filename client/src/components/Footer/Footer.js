import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer>
            <img className={styles.resize} src='https://w0.peakpx.com/wallpaper/273/635/HD-wallpaper-new-logo-formula-1-new-logo-f1-leather-texture.jpg' />
            <p className={styles.sameRow}>Kristiyan Pazachev Softuni 2022 &copy;</p>
        </footer>
    );
}