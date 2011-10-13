// $Id: openid_selector_comment.js,v 1.3 2011/02/04 16:48:27 agerasika Exp $

function openid_selector_comment() {
  var newW = 590;
  var newH = 390;
  var topX = (document.all ? window.screenLeft : window.screenX);
  var topY = (document.all ? window.screenTop : window.screenY);
  var newX = topX + (window.screen.width - newW) / 2;
  var newY = topY + (window.screen.height - newH) / 2;
  var generator = window.open(window.location.protocol + "//" + window.location.host + Drupal.settings.basePath + 'openid-selector/comment', 'name', 'scrollbars=yes,' + 'width=' + newW + ',height='
	  + newH + ',left=' + newX + ',top=' + newY);
}

Drupal.behaviors.openid_selector_comment = function (context) {
  $('<br/><div style="margin-top: -1em; margin-bottom: 1.5em;"><a title="' + Drupal.t('Fill-in above fields using OpenID')
	+ '" href="javascript:openid_selector_comment();" style="background: #FFF url('
	+ Drupal.settings.basePath + Drupal.settings.openid_selector_comment.img_path
	+ '../images.small/openid.ico.png) no-repeat center center" class="openid openid_small_btn"></a></div>').insertAfter('#comment-form #edit-homepage-wrapper');
};
