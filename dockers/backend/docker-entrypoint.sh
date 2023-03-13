#!/bin/sh

# Instala dependencias de composer
composer install

# Comando para que PHP FPM sirva la API de Laravel (recomendado para entornos de producción)
#php-fpm 

# Comando para que Artisan sirva la API de Laravel (Recomendado para entornos de desarrollo)
#php artisan serve --host=0.0.0.0 --port=${BACKEND_LISTENING_PORT}

# Este comando permite ejecutar al mismo tiempo php-fpm y artisan serve (Sólo para propósitos de testeo en entornos de desarrollo)
php-fpm &
php artisan serve --host=0.0.0.0 --port=${BACKEND_LISTENING_PORT}

# Artisan sirve la API de LAravel usando Octane con Swoole (Recomendado para usar en entornos de producción, se puede usar también durante el desarrollo)
#composer require laravel/octane
#php artisan octane:start --host=0.0.0.0 --port=${BACKEND_LISTENING_PORT}