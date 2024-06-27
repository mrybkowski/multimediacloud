import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Button from '@mui/material/Button';

function Home() {
    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18next.changeLanguage(lng);
      };

    return (
        <>
            <h1>Portal</h1>
            <p>{t('title')}</p>
            <Button variant="outlined" onClick={() => changeLanguage('en')}>English</Button>
            <Button variant="contained" onClick={() => changeLanguage('pl')}>Polski</Button>
        </>
    );
}

export default Home;