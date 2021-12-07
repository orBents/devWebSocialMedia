<template>
  <section class="container-main">
    <h1>Publicar</h1>
    <Menu></Menu>
    <publish-post-form></publish-post-form>
  </section>
</template>

<script>
import Menu from "@/components/Menu.vue";
import PublishPostForm from "../components/PublishPostForm";

export default {
  name: "Publicar",
  components: {
    Menu,
    PublishPostForm
  },
  data() {
    return {
      posts: [],
      editModal: {
        id: "edit-modal",
        title: "Edite o Titulo Post",
        image: "link da imagem",
        datePublished: "2020-11-02",
        likes: "43",
        profileId: "5",
        groupId: "",
        callback: "",
        eventoCreated: false,
        eventoEdited: false,
        eventoError: false,
      },
      errored: false,
      loading: true,
    };
  },
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
.container-post-card {
  width: 100%;
  padding: 0 18px;
  margin: 6rem 0;
  position: relative;
}

.icon-post {
  border: 1px solid grey;
  background: white;
}
img {
  width: 450px;
}

.post-infos p {
  font-size: 20px;
}

.post-infos span {
  line-height: 2.5;
}
.card-body {
  border: 1px solid rgba(0, 0, 0, 0.4);
}
.post-reactions {
  display: flex;
}
.post-reactions b-icon {
  height: 16px;
}
li {
  list-style-type: none;
}
.mb-2 {
  background-color: aquamarine;
}
</style>
