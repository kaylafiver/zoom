import { h } from 'preact';
import * as stylex from '@stylexjs/stylex';
import { button } from '../stylex/button.stylex';

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  items: {
    margin: '0 0 .2rem 0'
  }
});

export default function SideBar() {
  return <div  {...stylex.props(styles.container)}>
    <div {...stylex.props(button.navbar, styles.items)}>
      Home
    </div>
    <div {...stylex.props(button.navbar)}>
      dgergdf
    </div>
  </div>;
}
