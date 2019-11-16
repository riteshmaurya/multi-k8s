FROM node:alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
#RUN npm run build
#CMD ["ng", "serve", "--host 0.0.0.0"]
CMD ["npm", "start"]

# FROM nginx as runner
# COPY --from=builder /app/dist/client /usr/share/nginx/html
