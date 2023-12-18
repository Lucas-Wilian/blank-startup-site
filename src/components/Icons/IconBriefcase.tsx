// icon:briefcase | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from 'react';

function IconBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 512 512'
      fill='currentColor'
      height='1em'
      width='1em'
      {...props}
    >
      <path
        fill='none'
        d='M336 80H176a16 16 0 00-16 16v16h192V96a16 16 0 00-16-16z'
      />
      <path d='M496 176a64.07 64.07 0 00-64-64h-48V96a48.05 48.05 0 00-48-48H176a48.05 48.05 0 00-48 48v16H80a64.07 64.07 0 00-64 64v48h480zm-144-64H160V96a16 16 0 0116-16h160a16 16 0 0116 16zM336 264a24 24 0 01-24 24H200a24 24 0 01-24-24v-4a4 4 0 00-4-4H16v144a64 64 0 0064 64h352a64 64 0 0064-64V256H340a4 4 0 00-4 4z' />
    </svg>
  );
}

export default IconBriefcase;