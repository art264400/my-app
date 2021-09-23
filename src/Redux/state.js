import { rerenderEnireTree } from "../render";

let dialogsData = [{ id: 1, name: 'Dimych' }, { id: 2, name: 'Arthur' }, { id: 3, name: 'Игорь' }, { id: 4, name: 'Вероника' }, { id: 5, name: 'Рулсан' }];
let messagesData = [{ content: 'Привет, как дела'}, { content: 'Что делаешь'}, { content: 'займи 5к'}, { content: 'как там'}];
let postsData = [{ message: "1 пост", likeCount: 10 }, { message: "2 пост ", likeCount: 20 }, { message: "3 пост", likeCount: 30 }, { message: "gfds", likeCount: 12312410 }];
let sitebarDate=[{imgUrl:'https://c.pxhere.com/photos/46/3a/people_man_famous_portrait_todd_carey-1386940.jpg!d'},{imgUrl:'https://w-dog.ru/wallpapers/14/16/442445644050577/nastroeniya-devushka-zhenshhina-devochka-ulybka-radost-pozitiv-smex-listik-listochek-listya-zheltyj-osen-razmytie-ostavte-fon-oboi-shirokoformatnye-polnoekrannye-shirokoekrannye.jpg'},{imgUrl:'https://get.pxhere.com/photo/person-people-girl-woman-photography-portrait-young-youth-student-healthy-facial-expression-smiling-smile-teenager-caucasian-beauty-teeth-teen-attractive-emotion-photo-shoot-brown-hair-portrait-photography-1391382.jpg'},{imgUrl:'https://media.sketchfab.com/avatars/daa84b628dbd4f2fa27a3609af9926a8/3baf4e8d38f9405190854b4481766d23.jpg'},{imgUrl:'https://get.wallhere.com/photo/face-black-model-portrait-photography-actor-hair-nose-Person-skin-head-Tobey-Maguire-beauty-smile-eye-man-guy-male-hairstyle-portrait-photography-photo-shoot-brown-hair-facial-expression-close-up-717923.jpg'},{imgUrl:'https://i09.fotocdn.net/s122/06d8011c57c17feb/user_xl/2793804785.jpg'},]
let state ={
    profilePage: {
        postsData: postsData
    },
    dialogsPage: {
        messagesData : messagesData,
        dialogsData : dialogsData
    },
    newPage:{

    },
    musicPage:{

    },
    sitebarPage:{
        sitebarDate
    }
}

export let addPost = (postMessage) => {
    debugger
    let newPost = {
        likeCount: 5,
        message: postMessage
    }
    state.profilePage.postsData.push(newPost);
    rerenderEnireTree(state);
}

export default state;