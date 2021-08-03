# Udagram Image Filtering Microservice

Github repo: https://github.com/zjg/udacity-cloud-developer/tree/master/course-02/project/image-filter-starter-code
Deployment URL: http://udagram-image-filter-dev-dev.us-west-2.elasticbeanstalk.com/

# Failing images

It seems the Jimp can't read some image URLs.
See here: https://github.com/oliver-moran/jimp/issues/775

The following URLs were not working for me:
    * https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg
    * https://commons.wikimedia.org/wiki/File:Vincent_Van_Gogh_-_Corn_Harvest_in_Provence_-_Google_Art_Project.jpg

The following URL did work:
    * https://s-media-cache-ak0.pinimg.com/736x/c9/8f/e1/c98fe17dc7de72bb29c34a0c79ef5762.jpg
