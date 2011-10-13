This is the Drupal COD installation files for FUDCon Pune website.

The latest plan and status for the website can be found here:
https://fedoraproject.org/wiki/FUDCon:India_2011_website_devel


How to setup?

 * Create a database using MySQL database dump
   file database_dump/fudconweb_devel3.sql.gz :

   [root@localhost]# mysql -u root 
   mysql> create database fudconweb_devel;
   mysql> -- appropriate grant statement here;
   mysql> Ctrl+D
   [root@localhost]# gzcat database_dump/fudconweb_devel3.sql.gz | mysql -u root fudconweb_devel

 * Copy all the files except database_dump folder to web root,
   for example to /var/www/myfedora.org for Apache
   just the way it is done for any other Drupal installation.

   cp * /var/www/myfedora.org
   rm -r /var/www/myfedora.org/database_dump

 * Create a virtual host entry in Apache configuration file
   /etc/httpd/conf/httpd.conf :

   <VirtualHost *:80>
    ServerAdmin root@localhost
    DocumentRoot /var/www/myfedora.org
    ServerName myfedora.org
    ServerAlias fudcon.myfedora.org *.myfedora.org
    RewriteEngine On
    RewriteOptions inherit
    CustomLog /var/log/httpd/myfedora.log combined
   </VirtualHost>


 * Update MySQL database settings in configuration file
   sites/default/settings.php:

   $db_url = 'mysqli://db_username:db_password@localhost/fudconweb_devel';

 * Make sure that following path is writable by the user runing
   your web server. This would be apache:

   chmod ug+w /var/www/myfedora.org/sites/default/files

 * Now you can login from the web interface:

   http://myfedora.org/


Some handy tips:
 * If needed you can reset admin password in MySQL:

   UPDATE users SET pass = md5('test123') WHERE uid = 1;

 * To create a new datbase dump:
   -- Clear log entry table
   DELETE FROM watchdog;
   ALTER TABLE watchdog AUTO_INCREMENT = 0;
   -- Clear cache tables
   DELETE FROM cache;

   [root@localhost]# mysqldump fudconweb_devel > fudconweb_devel.sql


External modules used:
  libraries-6.x-1.0.tar.gz
  openid-selector-1.3.zip
  openid_selector-6.x-1.5.tar.gz
  zen-6.x-2.1.tar.gz

Patches already applied:
  patches/openid_selector.patch
