import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Button, Typography } from '@mui/material';

function Home() {
    const { t } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18next.changeLanguage(lng);
      };

    return (
        <>
            <Typography variant="h1">
                Portal
            </Typography>
            <Typography variant="inherit">
                {t('title')}
            </Typography>
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
                <div>
                    <Typography variant="h1">
                        h1. Heading
                    </Typography>
                    <Typography variant="inherit">
                        p. Inherit
                    </Typography>
                    <Typography variant="h2">
                        h2. Heading
                    </Typography>
                    <Typography variant="inherit">
                        p. Inherit
                    </Typography>
                    <Typography variant="h3">
                        h3. Heading
                    </Typography>
                    <Typography variant="inherit">
                        p. Inherit
                    </Typography>
                    <Typography variant="h4">
                        h4. Heading
                    </Typography>
                    <Typography variant="inherit">
                        p. Inherit
                    </Typography>
                    <Typography variant="h5">
                        h5. Heading
                    </Typography>
                    <Typography variant="inherit">
                        p. Inherit
                    </Typography>
                    <Typography variant="h6">
                        h6. Heading
                    </Typography>
                    <Typography variant="inherit">
                        p. Inherit
                    </Typography>
                </div>
            </div>
        </>
    );
}

export default Home;