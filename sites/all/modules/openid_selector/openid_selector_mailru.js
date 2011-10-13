// $Id: openid_selector_mailru.js,v 1.2 2011/01/19 01:48:32 agerasika Exp $

providers_small.mailru = {
  name: 'mail.ru',
  url: "javascript: $('#mail_ru_auth_login a').click();"
};

openid.getBoxHTML__mailru = openid.getBoxHTML;
openid.getBoxHTML = function (box_id, provider, box_size, index) {
  if (box_id == 'mailru') {
	  var no_sprite = this.no_sprite;
	  this.no_sprite = true;
	  var result = this.getBoxHTML__mailru(box_id, provider, box_size, index);
	  this.no_sprite = no_sprite;
	  return result;
  }
  return this.getBoxHTML__mailru(box_id, provider, box_size, index);
}

Drupal.behaviors.openid_selector_mailru = function (context) {
  $('#mail_ru_auth_login').hide();
}
