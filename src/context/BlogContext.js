import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'addpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'editpost':
      return state.map((bp) =>
        bp.id === action.payload.id ? action.payload : bp
      );
    case 'deletepost':
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const addblogpost = (title, content, callback) => {
    dispatch({ type: 'addpost', payload: { title, content } });
    callback();
  };

  const deleteblogpost = (id) => {
    dispatch({ type: 'deletepost', payload: id });
  };

  const editblogpost = (id, title, content, callback) => {
    dispatch({ type: 'editpost', payload: { id, title, content } });
    callback();
  };

  return (
    <BlogContext.Provider
      value={{ state, addblogpost, deleteblogpost, editblogpost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
