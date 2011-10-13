<?php
// $Id: openid_selector_drupal.admin.inc,v 1.2 2011/02/04 13:37:20 agerasika Exp $

/**
 * @file
 * OpenID Selector for Drupal administration menu items.
 *
 */

function openid_selector_drupal_settings() {
  $form['openid_selector_site_name'] = array(
    '#type' => 'textfield',
    '#title' => t('Short site name'),
    '#description' => t('The site name that is displayed in user login form'),
    '#default_value' => variable_get('openid_selector_site_name', ''),
  );
  $form = system_settings_form($form);
  return $form;
}
