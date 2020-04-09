import * as React from 'react';
import cx from 'classnames';
import createSvgIcon from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

const BoldIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="8 8 16 16" className={classes.svg}>
      <g>
        <path
          className={cx(iconClassNames.outline, classes.outlinePart)}
          d="M11 23V9h5.1c1.6 0 2.8.3 3.6.9.8.6 1.3 1.4 1.3 2.4 0 .8-.3 1.4-.8 2-.5.6-1.2 1-2 1.2 1 .1 1.8.5 2.4 1.1.6.6.9 1.4.9 2.2 0 1.3-.5 2.3-1.4 3.1-.9.7-2.1 1.1-3.7 1.1H11zm3-11.7v3.3h1.4c.7 0 1.2-.2 1.5-.5.4-.3.6-.8.6-1.3 0-1-.8-1.5-2.3-1.5H14zm0 5.7v3.7h1.7c.7 0 1.3-.2 1.7-.5.4-.3.6-.8.6-1.4 0-.6-.2-1-.6-1.3-.4-.3-1-.5-1.7-.5H14z"
        />
        <path
          className={cx(iconClassNames.filled, classes.filledPart)}
          d="M16.4 23.5h-5.9v-15h5.6c1.7 0 3 .3 3.9 1 1 .7 1.5 1.7 1.5 2.8 0 .8-.3 1.6-.9 2.3-.2.3-.5.6-.9.8.5.2.9.5 1.2.9.7.7 1 1.6 1 2.6 0 1.4-.5 2.5-1.6 3.5-.9.7-2.3 1.1-3.9 1.1zm-4.9-1h4.9c1.4 0 2.5-.3 3.4-1 .8-.7 1.2-1.6 1.2-2.7 0-.7-.3-1.4-.8-1.8-.5-.6-1.3-.9-2.1-1l-2.9-.3L18 15c.7-.2 1.3-.5 1.7-1 .5-.6.7-1.1.7-1.7 0-.8-.4-1.5-1.1-2-.7-.5-1.8-.8-3.3-.8h-4.6v13zm4.2-1.3h-2.2v-4.7h2.2c.8 0 1.5.2 2 .6.5.4.8 1 .8 1.7 0 .8-.3 1.4-.8 1.8-.5.4-1.2.6-2 .6zm-1.2-1h1.2c.6 0 1.1-.1 1.4-.4.3-.2.4-.7.4-1 0-.4-.1-.7-.4-.9-.3-.3-.9-.4-1.4-.4h-1.2v2.7zm.9-5.1h-1.9v-4.3h1.7c2.4 0 2.8 1.3 2.8 2s-.3 1.3-.8 1.7c-.2.2-.8.6-1.8.6zm-.9-1h.9c.5 0 .9-.1 1.1-.4.3-.2.5-.6.5-.9 0-.3 0-1-1.8-1h-.7v2.3zm1.9 9.4h-5.9v-15h5.6c1.7 0 3 .3 3.9 1 1 .7 1.5 1.7 1.5 2.8 0 .8-.3 1.6-.9 2.3-.2.3-.5.6-.9.8.5.2.9.5 1.2.9.7.7 1 1.6 1 2.6 0 1.4-.5 2.5-1.6 3.5-.9.7-2.3 1.1-3.9 1.1zm-1.9-3.3h1.2c.6 0 1.1-.1 1.4-.4.3-.2.4-.7.4-1 0-.4-.1-.7-.4-.9-.3-.3-.9-.4-1.4-.4h-1.2v2.7zm0-6.1h.9c.5 0 .9-.1 1.1-.4.3-.2.5-.6.5-.9 0-.3 0-1-1.8-1h-.7v2.3z"
        />
      </g>
    </svg>
  ),
  displayName: 'BoldIcon',
});

export default BoldIcon;