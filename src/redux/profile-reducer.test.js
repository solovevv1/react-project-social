import profileReducer, { addPostActionCreator } from "./profile-reducer";


test('new post should be added', () => {
    // test data
    let action = addPostActionCreator('some text')
    let state = {
        postsData: [
            { id: 1, post: 'Hey there!', like: 2 },
            { id: 2, post: 'Hi everyone :)', like: 5 },
            { id: 3, post: 'Just getting started', like: 0 }]
    };
    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.postsData.length).toBe(4);
});