import React from 'react';

const Link = ({className, href, children}) => {
   const onClick = (event) => {
       if (event.metaKey || event.ctrlKey) {
           return; // just open a new tab because we don't want to prevent default behavior 
       }
       event.preventDefault();
       window.history.pushState({}, '', href);

       const navEvent =new PopStateEvent('popstate');
       window.dispatchEvent(navEvent);
   };
   
    return (
   <a onClick={onClick} className={className} href={href}>
       {children}
   </a>
   )
}

export default Link;