export const carReducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'CAR_FETCH':
            console.log(action);
            // return Object.assign({}, action.payload);
            return { ...action.payload };
        case 'COMMENT_ADD':
            console.log(action);
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            email: action.userEmail,
                            _id: action.userId
                        }
                    }
                ], likes: [...state.likes]
            }

        case 'COMMENT_DEL':
            return {
                ...state,
                comments: state.comments.filter(x => x._id !== action.payload),
                likes: [...state.likes]
            }
        case 'COMMENT_EDIT':
            console.log(action.payload);
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,

                    }
                ],
                likes: [...state.likes]

            }

        case 'LIKE_ADD':


            return {
                ...state, comments: [
                    ...state.comments,

                ],
                likes: [...state.likes, { ...action.payload }]
            }

        default:
            return state;
    }
};