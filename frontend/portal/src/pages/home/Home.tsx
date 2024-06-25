import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Home() {
    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18next.changeLanguage(lng);
      };

    return (
        <>
            <h1>Portal</h1>
            <p>{t('title')}</p>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('pl')}>Polski</button>
        </>
    );
}

export default Home;