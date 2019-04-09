export const state = () => ({
  posts: [],
  categories: ["Technology", "Education"]
});

export const mutations = {
  addPosts(state, postsPayload) {
    state.posts = postsPayload;
  }
};

export const actions = {
  addPosts({ commit }, postsPayload) {
    commit("addPosts", postsPayload);
  }
};

export const getters = {
  getPosts(state) {
    return state.posts;
  },
  categories(state) {
    return state.categories;
  },
  postsByCategory(state) {
    console.log("what is going on?");
    return category => {
      let posts = [];
      state.posts.forEach(post => {
        post.attributes.category === category
          ? posts.push(post.attributes)
          : "";
      });
      return posts;
    };
    //
  },
  postBySlug(state) {
    return slug => {
      let index = state.posts.findIndex(post => post.attributes.slug === slug);
      if (index > -1) {
        return state.posts[index];
      } else return;
    };
  }
};
