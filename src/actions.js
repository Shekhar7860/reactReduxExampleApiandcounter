
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const receivedPosts = json => ({
  type: RECEIVE_POSTS,
  json: json.data.children,
});


export function callAPI() {
  console.log('jjhsjjsjs')
  return function (dispatch) {
    console.log('myidea')
    dispatch(requestPosts());
    return fetch(`https://www.reddit.com/r/dogs.json`)
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        console.log(json)
        dispatch(receivedPosts(json));
      },
    );
  };
}