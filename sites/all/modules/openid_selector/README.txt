# $Id: README.txt,v 1.10 2011/01/19 01:48:32 agerasika Exp $

REQUIREMENTS
-------------------
This module depends on libraries module which must be downloaded
and installed separately.

To use this module in Drupal, you will need to download the 
Javascript OpenID Selector v1.3 from
http://code.google.com/p/openid-selector/downloads/list

INSTALLATION
-------------------
Note: this instruction assumes that you install this module in
      sites/all/modules directory (recommended).
   1. Unzip the files in the sites/all/modules directory. It should now
      contain a openid_selector directory.
   2. Download Javascript OpenID Selector v1.3 from 
      http://code.google.com/p/openid-selector/downloads/list. Unzip the
      contents of the openid-selector directory in the
      sites/all/libraries/openid-selector directory.
   4. Enable the module as usual from Drupal's admin pages.

UPGRADING
-------------------
Version 1.5+ of this module requires Javascript OpenID Selector 1.3
When upgrading this module from previous versions to version 1.5 please also 
upgrade Javascript OpenID Selector 

TROUBLESHOOTING
----------------------------
1. If you receive "Page not found" upon trying to login with OpenID read the 
   following article
   http://www.gerixsoft.com/blog/drupal/openid-page-not-found

2. If you receive "Sorry, that is not a valid OpenID. Please ensure you have
   spelled your ID correctly." check the following issue:
   http://drupal.org/node/936208

3. If Drupal core OpenID module is not able to fetch user name and/or email
   from OpenID provider please apply the patch from:
   http://drupal.org/node/946998

NOTE: above issues do not relate to OpenID Selector, these are core OpenID
      module problems. It is reasonable to get core OpenID perfectly working
      first, before enabling OpenID Selector. 

4. If your OpenID Selector does not show buttons w/ account providers you
   must check if all files are extracted correctly.

   The correct directory structure is as follows:
   sites
     all
       libraries
         openid-selector
           css
           images
           js
           demo.html
       modules
         openid_selector
           ...
           openid_selector.module
           ...

MAINTAINER
----------------------------
Andriy Gerasika (http://www.gerixsoft.com/)
