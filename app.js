const firstPost = {
    id: 1,
    type: 'image',
    url: 'http://placekitten.com/300/300',
    text: 'Это пост с картинкой',
    likes: 10,
}

const secondPost = {
    id: 2,
    type: 'video',
    url: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    text: 'Это пост с видео',
    likes: 20,
}

const thirdPost = {
    id: 3,
    type: 'audio',
    url: '',
    text: 'Это пост с аудио',
    likes: 100,
}

const firstPostRoot = document.getElementById('first-post');
const secondPostRoot = document.getElementById('second-post');
const thirdPostRoot = document.getElementById('third-post');

const firstPostEl = fillElement(firstPost);
firstPostRoot.appendChild(firstPostEl);

const secondPostEl = fillElement(secondPost);
secondPostRoot.appendChild(secondPostEl);

const thirdPostEl = fillElement(thirdPost);
thirdPostRoot.appendChild(thirdPostEl);

function fillElement(content) {
    const elem = document.createElement('div');
    elem.className = 'card';

    let cardMediaEl
    if (content.type === 'image') {
        cardMediaEl = document.createElement('img');
    } else if (content.type === 'video') {
        cardMediaEl = document.createElement('video');
        cardMediaEl.controls = true;
    } else if (content.type === 'audio') {
        cardMediaEl = document.createElement('audio');
        cardMediaEl.controls = true;
    }
    cardMediaEl.className = 'card-img-top';
    cardMediaEl.src = content.url;
    elem.appendChild(cardMediaEl);
    
    const cardBodyEl = document.createElement('div');
    cardBodyEl.className = 'card-body';
    elem.appendChild(cardBodyEl);

    const cardTextEl = document.createElement('p');
    cardTextEl.className = 'card-text';
    cardTextEl.textContent = content.text;
    cardBodyEl.appendChild(cardTextEl);

    const cardLikeButtonEl = document.createElement('button');
    cardLikeButtonEl.className = 'btn btn-primary';
    cardLikeButtonEl.textContent = '❤ ' + content.likes;
    cardLikeButtonEl.onclick = function() {
        content.likes = content.likes + 1;
        cardLikeButtonEl.textContent = '❤ ' + content.likes;
        cardDislikeButtonEl.textContent = '👎';
    }
    cardBodyEl.appendChild(cardLikeButtonEl);

    const cardDislikeButtonEl = document.createElement('button');
    cardDislikeButtonEl.className = 'btn btn-primary';
    cardDislikeButtonEl.textContent = '👎';
    cardDislikeButtonEl.onclick = function() {
        content.likes = content.likes - 1;
        cardDislikeButtonEl.textContent = '👎';
        cardLikeButtonEl.textContent = '❤ ' + content.likes;
    }
    cardBodyEl.appendChild(cardDislikeButtonEl);

    return elem;
}