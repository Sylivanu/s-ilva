#=============================================#
 

FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/Sylivanu/s-ilva.git /root/smdd
WORKDIR /root/smdd/
RUN rm -rf .git
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































# heroku.yml file data to run Container
# build:
#   docker:
#       web: Silva_Md
# run:
#   web: npm start
 
