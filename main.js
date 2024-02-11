
function creatingPage() {
    let postWrap = document.createElement('div');
    let postItem = document.createElement('div')
    let postItemWrap = document.createElement('div');
    let postLink = document.createElement('a');
    let postTitle = document.createElement('h3');
    let postContent = document.createElement('p')
    
    postWrap.classList.add('post-wrap');
    postItem.classList.add('post-item');
    postItemWrap.classList.add('post-item-wrap');
    postLink.classList.add('post-link');
    postTitle.classList.add('post-title');
    postContent.classList.add('post-content');
    
    postTitle.innerHTML = 'My new div';
    postContent.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel arcu purus. Duis egestas purus et ex interdum lobortis. Quisque nec magna viverra, interdum dolor at, congue augue. Quisque sed interdum augue, a lacinia nulla. Sed risus nibh, vestibulum eu nisi eu, imperdiet tempor quam.';
    
    document.body.append(postWrap);
    postWrap.append(postItem);
    postItem.append(postItemWrap);
    postItemWrap.append(postLink);
    postLink.append(postTitle);
    postLink.append(postContent);
}
creatingPage()








