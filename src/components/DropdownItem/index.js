import React from 'react';
import CustomLink from '../CustomLink';

const DropdownItem = ({baby}) => {
    return (
        <CustomLink className="f6" value={baby.id} to={`/dashboard/${baby.id}`} >
            {`${baby.name} ${baby.lastName}`}
        </CustomLink>        
    );
  };
  
export default DropdownItem;