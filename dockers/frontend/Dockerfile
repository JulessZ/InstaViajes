FROM node:current-alpine
LABEL maintainer="J. Rai <jraicr@github>"

# Labels
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.name="node-alpine-envsubst"
LABEL org.label-schema.description="Image from node:current-alpine with envsubst added"

# Instala envsubst sobre la imagen de docker actual como una nueva capa
RUN apk --no-cache add gettext libintl