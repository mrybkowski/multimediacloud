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
            <div className="d-flex">
                <div>
                    <Button color="primary" variant="contained" onClick={() => changeLanguage('pl')}>Polski</Button>
                    <Button color="secondary" variant="contained" onClick={() => changeLanguage('en')}>English</Button>
                </div>
                <div>
                    <Button color="primary" variant="outlined" onClick={() => changeLanguage('pl')}>Polski</Button>
                    <Button color="secondary" variant="outlined" onClick={() => changeLanguage('en')}>English</Button>
                </div>
                <div>
                    <Button color="primary" variant="text" onClick={() => changeLanguage('pl')}>Polski</Button>
                    <Button color="secondary" variant="text" onClick={() => changeLanguage('en')}>English</Button>
                </div>
            </div>
        </>
    );
}

export default Home;