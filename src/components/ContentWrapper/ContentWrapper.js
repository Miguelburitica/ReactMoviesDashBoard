import React from 'react';
import TopBar from './TopBar/TopBar'
import ContentRowTop from './ContentRowTop/ContenRowTop'
import Footer from './Footer/Footer'

function ContentWrapper () {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
				<TopBar />
				<ContentRowTop />
			</div>
            <Footer />

		</div>
    )
}

export default ContentWrapper;