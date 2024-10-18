import React, { Component } from 'react';
import './uptextfooter.css';

class UpTextFooter extends Component {
  render() {
    const { organization } = this.props;
    return (
<div class="uptextfooter">
<div class="contactus">
    <h3 id="svjaz">CONNECT WITH US</h3>
    <div class="textcontactus">
        <p id="chtob">To get in touch, visit our</p>
        <p id="dlya">. For employment</p>
        <p id="tek">current vacancies.</p>
        <a href="https://mail.google.com/mail/u/0/#inbox">VladNeckt@gmail.com</a>
        <a href="tel:+375296081350" id="poz">Call</a>
        <a href="https://github.com/DoniZefironi">github</a>
        <a href="#" id="openkart">Open map</a>
    </div>
</div>
<div class="opening">
    <h3 id="chas">OPENING HOURS</h3>
    <div class="textopening">
        <p id="vtornkib1">Tuesday–Thursday from 16:00 to 23:00</p>
        <p id="pat1">Friday and Saturday from 12:00 to late night</p>
    </div>
</div>
<div class="socials">
    <h3 id="socialen">SOCIALS</h3>
    <p>INSTAGRAM</p>
    <p>FACEBOOK</p>
</div>
</div>
    );
  }
}

export default UpTextFooter;
