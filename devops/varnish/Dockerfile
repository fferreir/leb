# syntax=docker/dockerfile:1
FROM varnish:7.6

LABEL maintainer="Fernando Ferreira <fernandoferreira@usp.br>" \
      org.label-schema.name="leb-varnish" \
      org.label-schema.description="LEB Varnish image." \
      org.label-schema.vendor="Fernando Ferreira"

COPY etc/varnish.vcl /etc/varnish/default.vcl
