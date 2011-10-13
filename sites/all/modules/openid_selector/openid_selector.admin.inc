<?php
// $Id: openid_selector.admin.inc,v 1.3 2011/02/04 16:20:45 agerasika Exp $

/**
 * @file
 * OpenID Selector administration menu items.
 *
 */

function openid_selector_settings() {
  $form['openid_selector_skin'] = array(
    '#type' => 'select',
    '#title' => t('Skin'),
    '#default_value' => variable_get('openid_selector_skin', ''),
    '#options' => openid_selector_skin_options(),
  );
  $form['openid_selector_block_width'] = array(
    '#type' => 'select',
    '#title' => t('Block width'),
    '#description' => t('Number of provider icons to display in one row in user login block'),
    '#default_value' => variable_get('openid_selector_block_width', 5),
    '#options' => array(1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5, 6 => 6, 7 => 7, 8 => 8, 9 => 9, 10 => 10, PHP_INT_MAX => t('Unlimited')),
  );
  $form = system_settings_form($form);
  return $form;
}

function openid_selector_skin_options() {
  $skins[''] = t('(default)');
  $library_path = libraries_get_path('openid-selector');
  if ($handle = opendir($library_path . '/css')) {
    while (FALSE !== ($file = readdir($handle))) {
      if (is_file("$library_path/css/$file") && preg_match('/^openid-([a-z0-9]+)\.css$/', $file, &$skin)) {
        $skins[$skin[1]] = $skin[1];
      }
    }
    closedir($handle);
  }
  return $skins;
}
