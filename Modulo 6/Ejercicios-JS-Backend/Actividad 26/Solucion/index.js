let pages = {
  'home' : 
  '<article id="block1" class="module-block"> <h2>2nd Level Heading</h2> <img class="right" src="http://placehold.it/150" alt="" /> <p> Cupcake ipsum dolor. Sit amet sweet roll icing cupcake ice cream sugar plum. Danish I love biscuit carrot cake tart jelly beans candy. Chupa chups chocolate bar I love pie ice cream brownie gummi bears. Soufflé cookie I love gummi bears faworki sweet sweet tart croissant. Muffin bonbon danish wafer candy macaroon I love dessert. Muffin pudding danish chupa chups. Halvah lollipop applicake icing. Brownie I love cupcake. I love gingerbread cheesecake gummi bears powder candy toffee icing. Pastry jelly beans candy canes dragée croissant I love halvah jujubes. Cotton candy icing wafer caramels applicake.</p> <ul class="social"> <li><a href="#">Link 1</a></li> <li><a href="#">Link 2</a></li> <li><a href="#">Link 3</a></li></ul> </article>'
};

function getPageContent(page){
    let contentToReturn;
    switch(page){
        case 'home':
            contentToReturn = pages.home;
            break;
        case 'aboutus':
            contentToReturn = pages.aboutus;
            break;
        case 'services':
            contentToReturn = pages.services;
            break;
        case 'contact':
            contentToReturn = pages.contact;
            break;
        default:
            contentToReturn = pages.home;
            break;				
    }
    document.getElementById('contenido').innerHTML = contentToReturn; 
}