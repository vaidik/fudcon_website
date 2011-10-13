// $Id: openid_selector_twitter.js,v 1.1 2010/10/29 19:53:34 agerasika Exp $

providers_small.twitter = {
  name: 'Twitter',
  url: "javascript: window.location = $('a[href$=\"/twitter/redirect\"]').attr('href');"
};

openid.getBoxHTML__twitter = openid.getBoxHTML;
openid.getBoxHTML = function (box_id, provider, box_size, index) {
  if (box_id == 'twitter') {
	  var no_sprite = this.no_sprite;
	  this.no_sprite = true;
	  var result = this.getBoxHTML__twitter(box_id, provider, box_size, index);
	  this.no_sprite = no_sprite;
	  return result;
  }
  return this.getBoxHTML__twitter(box_id, provider, box_size, index);
}

Drupal.behaviors.openid_selector_twitter = function (context) {
  $('li:has(a[href$="/twitter/redirect"])').hide();
}
