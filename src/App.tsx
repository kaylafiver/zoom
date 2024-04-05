'use strict';

import { h, render } from 'preact';
import { useState } from 'preact/hooks';

import * as stylex from '@stylexjs/stylex';
import { tokens } from './stylex/tokens.stylex';
import { light, lightTheme, dark, darkTheme, autoTheme } from './stylex/theme.stylex';
import { button } from './stylex/button.stylex';
import SideBar from './components/SideBar';

// import { colors } from '@stylexjs/open-props/lib/colors.stylex';
// import { sizes } from '@stylexjs/open-props/lib/sizes.stylex';
// import { fonts } from '@stylexjs/open-props/lib/fonts.stylex';


const app = stylex.create({
  fontMono: {
    fontFamily: 'Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace',
    fontSize: '1.2rem',
    fontWeight: '400',
  },
  fontSan: {
    fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif',
    fontSize: '1.1rem',
    fontWeight: '400',
  },
  main: {
    color: tokens.colorText,
    padding: '1rem 1rem 1rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    marginRight: 'auto',
  },
  topbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingBottom: '0.5rem',
  },
  apppane: {
    display: 'flex',
    flexDirection: 'row',
  },
  sidebar: {
    minWidth: '15rem',
  },
  content: {
    flexGrow: 1,
    padding: '0 .5rem',
    backgroundColor: 'yellow',
  },

});

function App() {
  let theme = localStorage.getItem("theme");
  if (!theme) {
    theme = 'light';
    localStorage.setItem('theme', theme);
  }
  if (theme !== 'light') {
    document.body.style.backgroundColor = `${dark.bgColor}`;
  } else {
    document.body.style.backgroundColor = `${light.bgColor}`;
  }

  const [isLightTheme, setIsLightTheme] = useState(theme !== 'light' ? false : true);
  return (
    <div {...stylex.props(isLightTheme ? lightTheme : darkTheme, app.fontSan, app.main)}>
      <div {...stylex.props(app.topbar)}>
        <div onClick={() => {
          localStorage.setItem('theme', isLightTheme ? 'dark' : 'light');
          setIsLightTheme(prev => !prev);
        }}>
          {
            isLightTheme ?
              // https://icon-sets.iconify.design/solar/moon-stars-bold-duotone/
              <svg xmlns="http://www.w3.org/2000/svg" {...stylex.props(button.circleSvgIcon)} width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.484.484 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.484.484 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.484.484 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.484.484 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.484.484 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.484.484 0 0 1-.272-.273z" /><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10" opacity="0.5" /></svg>
              :
              // https ://icon-sets.iconify.design/solar/sun-2-bold-duotone/
              <svg xmlns="http://www.w3.org/2000/svg" {...stylex.props(button.circleSvgIcon)} width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0" /><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd" /><path fill="currentColor" d="M3.67 3.716a.75.75 0 0 1 1.059-.048L6.95 5.7a.75.75 0 0 1-1.012 1.107L3.717 4.775a.75.75 0 0 1-.048-1.06m16.663.001a.75.75 0 0 1-.047 1.06l-2.223 2.03A.75.75 0 1 1 17.05 5.7l2.222-2.032a.75.75 0 0 1 1.06.048m-3.306 13.309a.75.75 0 0 1 1.06 0l2.223 2.222a.75.75 0 1 1-1.061 1.06l-2.222-2.222a.75.75 0 0 1 0-1.06m-10.051 0a.75.75 0 0 1 0 1.06l-2.222 2.223a.75.75 0 0 1-1.06-1.06l2.222-2.223a.75.75 0 0 1 1.06 0" opacity="0.5" /></svg>
          }
        </div>
      </div>

      <div {...stylex.props(app.apppane)}>
        <div {...stylex.props(app.sidebar)}>
          <SideBar />
        </div>
        <div {...stylex.props(app.content)}>

          <div>
            Testingddd
          </div>

        </div>
      </div>




    </div >
  );
}

render(<App />, document.getElementById("app")!);
