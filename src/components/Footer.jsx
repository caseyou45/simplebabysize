import React from "react";


import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
} from "react-share";



function Footer(props) {

let url ="simeplebabysize.com";
let week = props.displayDate + 1;

let title = "I'm at " + week + " Weeks! Look how big my baby is!";

if(props.displayDate === 41){
  title = "This website shows how far along I am!";


}
if(props.displayDate === 0){
  title = "I'm at " + week + " Week! Look how big my baby is!";

  }

  


  const year = new Date().getFullYear();
  return (
    <footer>
        <FacebookShareButton
         url={url}
         quote={title}
         className="icon"

        >
          <FacebookIcon
            size={32}
          />
        </FacebookShareButton>
        <TwitterShareButton
         url={url}
         quote={title}
         className="icon"

        >
          <TwitterIcon
            size={32}
          />
        </TwitterShareButton>
        <RedditShareButton
         url={url}
         quote={title}
         className="icon"

        >
          <RedditIcon
            size={32}
          />
        </RedditShareButton>
        <EmailShareButton
         url={url}
         quote={title}
         className="icon"

        >
          <EmailIcon
            size={32}
          />
        </EmailShareButton>
  
        <p>Copyright ⓒ {year}</p>

    </footer>
  );
}

export default Footer;
