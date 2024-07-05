import * as React from 'react';
import "./metabar.css"
function MetaBar() {
  return (
    <div className='meta-container'>
          <img className='logo' src={process.env.PUBLIC_URL + './meta.png'} alt=''/>
    </div>
  );
}
export default MetaBar;
