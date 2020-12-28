# Stage 0
FROM tiangolo/node-frontend:10 as build-stage

WORKDIR /app

COPY package*.json /app/

RUN yarn install

COPY ./ /app/

RUN yarn run build


# Stage 1
FROM nginx:1.15

COPY --from=build-stage /app/build/ /usr/share/nginx/html

COPY --from=build-stage /app/build/ /usr/share/nginx/html
