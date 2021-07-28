import avatarPost1 from '../../../../assets/images/Application/User/SocialProfile/img-user.41a8c066.png';

import avatarPost2 from '../../../../assets/images/Application/User/SocialProfile/download.png';
import imagePost2 from '../../../../assets/images/Application/User/SocialProfile/img-post1.png';
import avatarCmt1Post2 from '../../../../assets/images/Application/User/SocialProfile/download1.png';
import avatarCmt2Post2 from '../../../../assets/images/Application/User/SocialProfile/download2.png';
import avatarCmt3Post2 from '../../../../assets/images/Application/User/SocialProfile/download3.png';

import avatarPost3 from '../../../../assets/images/Application/User/SocialProfile/download4.png';
import imagePost3 from '../../../../assets/images/Application/User/SocialProfile/img-profile2.071c9e98.jpg';

export const datapost = [
    {
        id: 0,
        avatar: avatarPost1,
        contentPost:
            'Commodo amet veniam nostrud mollit quis sint qui nulla elit esse excepteur ullamco esse magna. Nisi duis aute est in mollit irure enim tempor in',
        imagePost: [],
        numberOfLike: 0,
        comment: []
    },
    {
        id: 1,
        avatar: avatarPost2,
        contentPost:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. There are many variations of passages.',
        imagePost: [imagePost2],
        numberOfLike: 102,
        comment: [
            {
                id: 1,
                imageCmt: avatarCmt1Post2,
                contentComment: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
                numberOfLike: 55,
                idpost: 1,
                reply: []
            },
            {
                id: 2,
                imageCmt: avatarCmt2Post2,
                contentComment:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.There are many variations of passages.',
                numberOfLike: 0,
                idpost: 1,
                reply: [
                    {
                        imageCmt: avatarCmt3Post2,
                        contentReply:
                            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.There are many variations of passages.',
                        numberOfLike: 10
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        avatar: avatarPost3,
        contentPost: 'It is a long established fact that a reader will be distracted by the readable content of a page',
        imagePost: [imagePost2, imagePost3],
        numberOfLike: 150,
        comment: [
            {
                id: 1,
                imageCmt: avatarCmt1Post2,
                contentComment:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                numberOfLike: 65,
                idpost: 2,
                reply: []
            }
        ]
    }
];
