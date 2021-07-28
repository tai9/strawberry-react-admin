// project imports

import { datapost } from '../_mockApis/application/users/social-profile/data';

export const initialState = {
    arrPost: datapost
};

//-----------------------|| CUSTOMIZATION REDUCER ||-----------------------//

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_COMMENT': {
            const post = [...state.arrPost];
            var id = 0;
            if (post[action.data.idPost].comment) {
                id = post[action.data.idPost].comment.length;
            }

            const newCmt = {
                id: id,
                contentComment: action.data.dataPost,
                numberOfLike: 0,
                reply: [],
                idpost: action.data.idPost,
                avatar: post[action.data.idPost]
            };
            post[action.data.idPost].comment.unshift(newCmt);
            state.arrPost = post;

            return { ...state };
        }
        case 'POST_REPLY_COMMENT': {
            const post = [...state.arrPost];
            const reply = {
                contentReply: action.data.dataPost,
                numberOfLike: 0
            };
            // if (post[action.data.idpost].comment[action.data.idCmt].reply) {
            //     if (post[action.data.idpost].comment[action.data.idCmt].reply.length > 0) {
            //         idcmt = post[action.data.idpost].comment[action.data.idCmt].length;

            //         post[action.data.idpost].comment[idcmt].reply.push(reply);
            //     }

            //     console.log(post[action.data.idpost].comment[action.data.idCmt].reply.length);
            // } else {
            //     idcmt = 0;
            //     console.log(action.data.idpost);
            //     console.log(post[action.data.idpost].comment);
            //     post[action.data.idpost].comment[idcmt].reply.push(reply);
            // }

            console.log('action.data.idpost');
            console.log(action.data.idpost);
            console.log('action.data.idCmt');
            console.log(action.data.idCmt);
            post[action.data.idpost].comment[action.data.idCmt].reply.push(reply);

            state.arrPost = post;
            return { ...state };
        }
        default:
            return state;
    }
};

export default userReducer;
