<template>
  <section class="container-main">
    <section class="container-timeline">
      <post-card
        imgSrc="https://picsum.photos/300/150/?image=41"
        user="username"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntsed do eiusmod tempor incididunt... more "
        likes="100"
        postCategory="Turismo"
      ></post-card>
      <post-card
        imgSrc="https://picsum.photos/300/150/?image=41"
        user="username"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntsed do eiusmod tempor incididunt... more "
        likes="100"
        postCategory="Paisagem"
      ></post-card>
      <post-card
        imgSrc="https://picsum.photos/300/150/?image=41"
        user="username"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntsed do eiusmod tempor incididunt... more "
        likes="100"
        postCategory="Turismo"
      ></post-card>
    </section>
  </section>
</template>

<script>
import PostCard from "../components/PostCard";

export default {
  name: "Timeline",
  components: { PostCard },
};
</script>

<style>
.container-timeline {
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 2%;
}
</style>
