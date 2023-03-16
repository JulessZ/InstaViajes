FROM  nginx
LABEL maintainer="J. Rai <jraicr@github>"

# Labels
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.name="instaviajes-front"
LABEL org.label-schema.description="Image with Instaviajes frontend APP"

ARG CACHEBUST=1

WORKDIR /app

# Copiamos los contenidos de la aplicación javascript del font ya compilada
#COPY dist/ /app/
COPY InstaViajes_frontend/dist/* /app/
COPY InstaViajes_frontend/dist/assets/ /app/assets/

# Copia el archvode configuración de nginx
COPY dockers/frontend/production_deploy/nginx-config/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443
CMD [ "nginx" ]
