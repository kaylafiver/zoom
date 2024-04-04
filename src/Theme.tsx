'use strict';

import { h, render } from 'preact';
import { useState } from 'preact/hooks';

import * as stylex from '@stylexjs/stylex';
import { sizes } from '@stylexjs/open-props/lib/sizes.stylex';
import { fonts } from '@stylexjs/open-props/lib/fonts.stylex';

import { color } from './stylex/color.stylex';
import { lightTheme, darkTheme, autoTheme } from './stylex/theme.stylex';
import { button } from './stylex/button.stylex';

const st = stylex.create({
  test1: {
    fontSize: 24,
    color: 'white',
    backgroundColor: color.backgroundColor
  },

});

const layout = stylex.create({
  main: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.backgroundColor,
  },
});

function Theme() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <div {...stylex.props(isLightTheme ? lightTheme : darkTheme, layout.main)}>

      <svg onClick={() => setIsLightTheme(prev => !prev)} xmlns="http://www.w3.org/2000/svg" {...stylex.props(button.circleSvgIcon)} width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2" /></svg>

      <svg xmlns="http://www.w3.org/2000/svg" {...stylex.props(button.circleSvgIcon)} width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 3H6v18h12V3zm8 2v14H8V5zm-3 10h-2v2h2zm7-8h2v2h-2zm2 4V9h2v2zm0 2h-2v-2h2zm0 2v-2h2v2zm0 0v2h-2v-2zM2 17h2v-2H2v-2h2v-2H2V9h2V7H2v2H0v2h2v2H0v2h2z" /></svg>

      <div {...stylex.props(isLightTheme ? lightTheme : darkTheme, st.test1)}>Test1</div>
      <button >Test CB</button>
      <div {...stylex.props(autoTheme, st.test1)}>Test2</div>
    </div>
  );
}

render(<Theme />, document.getElementById("theme")!);
