import React from 'react';
import TopBar from './TopBar/TopBar'
import ContentRowTop from './ContentRowTop/ContenRowTop'
import Footer from './Footer/Footer'
import MoviesTable from './MoviesTable/MoviesTable';

function ContentWrapper () {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
				<TopBar />
				<ContentRowTop />
			</div>
			<MoviesTable />
            <Footer />

		</div>
    )
}

export default ContentWrapper;