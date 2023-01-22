const cartWrapper = document.querySelector('.cart')

function drowCart(product){
    
    const cart_item_wrapper = document.createElement('div');
    cart_item_wrapper.classList.add('cart_item_wrapper');

    const cart_item = document.createElement('div');
    cart_item.classList.add('cart_item')

    const cart_item_image = document.createElement('img');
    cart_item_image.classList.add('cart_item_image');
    cart_item_image.src = product.img;
    // cart_item_image.src = 'image.jpg';
 
    const cart_item_content = document.createElement('div');
    cart_item_content.classList.add('cart_item_content');

    const cart_item_content_title = document.createElement('div');
    cart_item_content_title.classList.add('art_item_content_title');
    cart_item_content_title.innerHTML = product.title;
    // cart_item_content_title.innerHTML = 'Product 777';

    const cart_price = document.createElement('div');
    cart_price.innerHTML = product.price;
    // cart_price.innerHTML = '1 x 68 $ = 68 $';

    cart_item_content.appendChild(cart_item_content_title);
    cart_item_content.appendChild(cart_price);

    const cart_item_delete = document.createElement('div');
    cart_item_delete.classList.add('cart_item_delete');
    cart_item_delete.innerHTML = 'x';

    cart_item.appendChild(cart_item_image);
    cart_item.appendChild(cart_item_content);
    cart_item.appendChild(cart_item_delete);

    cart_item_wrapper.appendChild(cart_item);

    cartWrapper.appendChild(cart_item_wrapper);
}
function cartAppendFooter(){
    const cart_footer = document.createElement('div');
    cart_footer.classList.add('cart_footer');
    cart_footer.innerHTML = 'Total: 68 $'

    cartWrapper.appendChild(cart_footer);    
}
          
drowCart({
    title:'Product 777',
    price:'1 x 68 $ = 68 $',
    img: 'image.jpg'
          });

drowCart({
            title:'Product 777',
            price:'2 x 68 $ = 136 $' ,
            img: 'image.jpg'
                  });
                
cartAppendFooter();