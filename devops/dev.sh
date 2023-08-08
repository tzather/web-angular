clear
# variables
dockerfile='dev.dockerfile'
container='dev-angular-web-angular'
image='dev/dev-angular-web-angular'

# build the project and copy eh dist folder to devops folder
# npm run build
# cp -r ../dist ./dist

# # stop, remove and rebuild container,
docker stop $container
docker rm $container
docker build --file $dockerfile --tag $image .
docker run --name $container -p 8080:80 --detach $image

# docker exec -it 8ee sh
# https://127.0.0.1:8080
