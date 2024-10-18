import React, { Component } from 'react';
import UpTextFooter from './uptextfooter/uptextfooter';
import DownFooter from './downfooter/downfooter';
import './footer.css';

class Footer extends Component {
  render() {
    const { organization } = this.props;
    return (
        <footer>
        <div class="imgfooter">
        </div>
        <div class="textfooter">
        <UpTextFooter />
        <DownFooter />
        </div>
    </footer>
    );
  }
}

export default Footer;