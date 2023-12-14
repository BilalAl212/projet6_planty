<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}


define('AUTH_KEY',         'WC2MpXJA058CIvunEQXYXS0T0Bk5U/X3MvmGdyXaLAGvI6iLYuvd/PNZDNjGF62Mgjn4WVdRthbIf2oOj4ANKw==');
define('SECURE_AUTH_KEY',  '0+4YopfTv2Z3ntrFwYq2r8YFEwC2aYuTwObqk+na5CNq3xxaQebbLPTiQ1whIsUNdq4Lp71BL3OrpRY9kG0hWw==');
define('LOGGED_IN_KEY',    'fO95yaV9xdy1rFrz+QcvJ8bvixuY66H/K4TYlJBbUChs4i7065pQEwfgiI9jWWbGmcfXH/kVBnf7Gi9DWsnM/Q==');
define('NONCE_KEY',        'QBpzSYFaK41ua6Vbfcocba0p1fJjaKlJhvu5ovZEYlAewEERhF4WMZoeuO6ROt6oT/M0w+nAXWO16xBpRn9X6w==');
define('AUTH_SALT',        '0lZBVC003uUL8G/DCoWJfkITXJyeZVHfO08h6hqM0l7zHZ1FAIEt0P9D+uhmw+Af172GoDZuiemewme7i5bbEg==');
define('SECURE_AUTH_SALT', 'LRUlioCYjaQ12T+QoNCKjuphr7XO7USUKAL1lmIIyENNK85Kv+4LPjbwZGC2BGV9B9avbbjvXU+C95FKoblx1Q==');
define('LOGGED_IN_SALT',   'WIdgE1EFNtJuSWX1FR0iv9VGRagsd/TUBqQLvWEs8wyx7vlPpVwpq5OPEtHPr1NyyFFBjiLKJDl5Q6BNYNqe4Q==');
define('NONCE_SALT',       'QM6mHn8Nphe+x9GmnBeYr53WngHoW23LhV9bYSs/r7GTCute51+BHZUybvCIlgBmESuoewAL/6gAozi6VBuADA==');
define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
