import { useEffect } from 'react';
import PageContent from '../PageContent';
import { Outlet } from 'react-router-dom';

function Page({ currentPage }) {
    currentPage = currentPage.substring(1);

    useEffect(() => {
        document.title = currentPage;
    }, [currentPage]);

    return (
        <section>
            <h2 className='flex-center'>{currentPage}</h2>

            <PageContent>
                <Outlet />
            </PageContent>
        </section>
    );
}

export default Page;