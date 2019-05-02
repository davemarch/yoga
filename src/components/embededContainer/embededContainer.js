import React from 'react';
import './embededContainer.css';



const EmbededContainer = (props) => {

    return (
    <div className = "embededContainer">
        {/* <div class="instagram-feed">
            <iframe  id="insta" src="//lightwidget.com/widgets/a856c3fbc02f5ae69eda3dcd561aee2e.html" 
            scrolling="no" 
            allowtransparency="true" 
            class="lightwidget-widget" 
            >
            </iframe>
        </div> */}

        <div class="fb-page" 
            data-href="https://www.facebook.com/lunayogastudio1" 
            data-tabs="timeline" 
            data-width="600" 
            data-height=""
            data-small-header="false" 
            data-adapt-container-width="true" 
            data-hide-cover="true" 
            data-show-facepile="false">
            <blockquote cite="https://www.facebook.com/lunayogastudio1" class="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/lunayogastudio1">Luna Yoga</a></blockquote>
        </div>
    </div>
    )
};

// 

export default EmbededContainer;