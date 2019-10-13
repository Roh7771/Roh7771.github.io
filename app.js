const firstPost = {
    id: 1,
    type: 'image',
    url: 'http://placekitten.com/300/300',
    text: 'Это пост с картинкой',
    likes: 10,
    dislikes: 0,
}

const secondPost = {
    id: 2,
    type: 'video',
    url: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    text: 'Это пост с видео',
    likes: 20,
    dislikes: 0,
}

const thirdPost = {
    id: 3,
    type: 'audio',
    url: '',
    text: 'Это пост с аудио',
    likes: 100,
    dislikes: 0,
}

const firstPostRootEl = document.getElementById('first-post');
const secondPostRootEL = document.getElementById('second-post');
const thirdPostRootEL = document.getElementById('third-post');

function createPost(content) {
    const postEl = document.createElement('div');
    postEl.className = 'card';

    let cardMediaEl
    if (content.type === 'image') {
        cardMediaEl = document.createElement('img');
        cardMediaEl.className = 'card-img-top';
        cardMediaEl.src = content.url;
        postEl.appendChild(cardMediaEl);
    } else if (content.type === 'video') {
        cardMediaEl = document.createElement('div');
        cardMediaEl.className = 'card-img-top embed-responsive embed-responsive-16by9';
        videoEl = document.createElement('video');
        videoEl.src = content.url;
        videoEl.poster = content.poster;
        videoEl.controls = true;
        cardMediaEl.appendChild(videoEl);
        postEl.appendChild(cardMediaEl);
    } else if (content.type === 'audio') {
        cardMediaEl = document.createElement('audio');
        cardMediaEl.controls = true;
        cardMediaEl.className = 'card-img-top';
        cardMediaEl.src = content.url;
        postEl.appendChild(cardMediaEl);
    }

    const cardBodyEl = document.createElement('div');
    cardBodyEl.className = 'card-body';
    postEl.appendChild(cardBodyEl);

    const cardTextEl = document.createElement('p');
    cardTextEl.className = 'card-text';
    cardTextEl.textContent = content.text;
    cardBodyEl.appendChild(cardTextEl);

    const cardLikeButtonEl = document.createElement('button');
    cardLikeButtonEl.className = 'btn btn-primary';
    cardLikeButtonEl.style.marginRight = '5px';
    cardLikeButtonEl.textContent = '❤ ' + content.likes;
    cardLikeButtonEl.onclick = function () {
        content.likes = content.likes + 1;
        cardLikeButtonEl.textContent = '❤ ' + content.likes;
    }
    cardBodyEl.appendChild(cardLikeButtonEl);

    const cardDislikeButtonEl = document.createElement('button');
    cardDislikeButtonEl.className = 'btn btn-primary';
    cardDislikeButtonEl.textContent = '👎 ' + content.dislikes;
    cardDislikeButtonEl.onclick = function () {
        content.dislikes = content.dislikes + 1;
        cardDislikeButtonEl.textContent = '👎 ' + content.dislikes;
    }
    cardBodyEl.appendChild(cardDislikeButtonEl);

    return postEl;
}

const firstPostEl = createPost(firstPost);
firstPostRootEl.appendChild(firstPostEl);

const secondPostEl = createPost(secondPost);
secondPostRootEL.appendChild(secondPostEl);

const thirdPostEl = createPost(thirdPost);
thirdPostRootEL.appendChild(thirdPostEl);