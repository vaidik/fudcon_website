// $Id: openid_selector_drupal.js,v 1.3 2011/02/02 08:43:20 agerasika Exp $

openid.drupal_replace_i = -1;
replace_id = null;
for (provider_id in providers_large) {
  if (provider_id != 'facebook') {
    openid.drupal_replace_i++;
    replace_id = provider_id;
  }
}

replace_providers = {};
replace_providers[replace_id] = providers_large[replace_id];
providers_small = $.extend(replace_providers, providers_small);
delete providers_large[replace_id];

providers_large = $.extend({
	drupal : {
	  label: true
	}
  }, providers_large);

openid.init__drupal = openid.init;
openid.init = function(input_id) {
  providers_large.drupal.name = Drupal.settings.openid_selector_drupal.site_name;
  providers_large.drupal.image = Drupal.settings.openid_selector_drupal.favicon;
  if ($('#edit-name-1-wrapper').length > 0) {
    this.username_wrapper_selector = '#edit-name-1-wrapper';
  } else {
    this.username_wrapper_selector = '#edit-name-wrapper';
  }
  if ($('#edit-name-1').length > 0) {
    this.username_selector = '#edit-name-1';
  } else {
    this.username_selector = '#edit-name';
  }
  this.username_html = $(this.username_wrapper_selector).html();
  this.password_html = $('#edit-pass-wrapper').html();
  $(this.username_wrapper_selector + ", #edit-pass-wrapper, li.openid-link, li.user-link").hide();
  $("#edit-openid-identifier-wrapper").css("display", "block");
  $(this.username_selector).val('')[0].id = 'old-edit-name';
  $('#edit-pass').val('')[0].id = 'old-edit-pass';
  //this.intro_text = Drupal.t('Log in with account provider:');
  this.init__drupal(input_id);
}

openid.getBoxHTML__drupal = openid.getBoxHTML;
openid.getBoxHTML = function (box_id, provider, box_size, index) {
  if (box_id == 'drupal') {
    if (box_size == 'small') {
      var style = box_size == 'small' ? '; background-size: 16px 16px;' : '';
	  return '<a title="'+this.image_title.replace('{provider}', provider["name"])+'" href="javascript:openid.signin(\''+ box_id +'\');"' +
        ' style="background: #FFF url(' + provider['image'] + ') no-repeat center center' + style + '" ' + 
        'class="' + box_id + ' openid_' + box_size + '_btn"></a>';    
    } else {
      return '<a title="'+this.image_title.replace('{provider}', provider["name"])+'" href="javascript:openid.signin(\''+ box_id +'\');"' +
        'class="' + box_id + ' openid_' + box_size + '_btn">' + provider['name'] + '</a>';
    }
  }
  index--;
  return this.getBoxHTML__drupal(box_id, provider, box_size, index);
}

openid.useInputBox__drupal = openid.useInputBox;
openid.useInputBox = function(provider) {
  if (provider == providers.drupal) {
    $('#openid_input_area')
      .empty()
      .append(this.username_html + this.password_html + '<input type="submit" style="position: absolute; visibility: hidden;"/>');
    if (!this.initializing || this.form_id != 'user-login-form') {
      $('#edit-name').focus();
    }
  } else {
    return this.useInputBox__drupal(provider);
  }
}

openid.final_submit__drupal = openid.final_submit;
openid.final_submit = function(inner_form) {
  if (this.provider_id == 'drupal') {
    var username = $(this.username_selector).val();
    $('#old-edit-name').val(username);
    var password = $('#edit-pass').val();
    $('#old-edit-pass').val(password);
  }
  this.final_submit__drupal(inner_form);
}

openid.readCookie__drupal = openid.readCookie;
openid.readCookie = function () {
  var result = this.readCookie__drupal();
  if (!result) {
    result = 'drupal';
  }
  return result;
}
