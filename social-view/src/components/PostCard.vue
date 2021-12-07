<template>
  <section class="container-post-card">
    <b-img :src="imgSrc" fluid-grow alt="Fluid-grow image"></b-img>
    <div class="post-category">
      <span>{{ postCategory }}</span>
    </div>
    <div class="post-reactions">
      <b-icon icon="heart" font-scale="2" variant="light"></b-icon>
      <b-icon icon="chat-square" font-scale="2" variant="light"></b-icon>
    </div>
    <div class="post-infos">
      <p>{{ likes + " Likes" }}</p>
      <span class="bold">{{ user + " " }}</span>
      <span>{{ description }}</span>
    </div>
    <div class="post-add-comment">
      <b-form-input
        v-model="comment"
        placeholder="Add comment..."
      ></b-form-input>
      <b-button variant="outline-primary"
        ><b-icon icon="arrow-down-square"></b-icon
      ></b-button>
    </div>
  </section>
</template>

<script>
import "@/assets/css/main.css";
export default {
  name: "PostCard",
  props: {
    title: String,
    description: String,
    imgSrc: String,
    user: String,
    likes: Number,
    commentIds: Array,
    postCategory: String,
  },
};
</script>

<style>
.container-post-card {
  width: 100%;
  padding: 0 18px;
  margin: 6rem 0;
  position: relative;
}
.post-reactions {
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin: 2rem 0;
}

.post-infos {
  text-align: left;
  margin: 0 0 1rem 0;
}
.post-infos span,
p {
  font-size: 1.5rem;
}
.post-add-comment {
  display: flex;
  justify-content: space-between;
}
.post-category {
  background-color: #ffffff;
  border-radius: 50px;
  padding: 0.4rem 0.74rem;
  width: fit-content;
  top: 20px;
  left: 40px;
  position: absolute;
}
.post-category span {
  color: #000000;
  font-size: 10px;
}
</style>
