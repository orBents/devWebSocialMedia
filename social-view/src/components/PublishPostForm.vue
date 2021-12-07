<template>

  <section class="container-publish">
    <div>
      <b-form @submit="onSubmit">
        <b-form-group label="post" label-for="title">
          <b-form-input
            id="title"
            v-model="editPostData.post_model.title"
            placeholder="Insira o Título"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="post" label-for="image">
          <b-form-input
            id="image"
            v-model="editPostData.post_model.image"
            placeholder="insira o link da imagem"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Postar</b-button>
      </b-form>
    </div>
  </section>
</template>

<script>
import "@/assets/css/main.css";
export default {
  name: "PublishPostForm",
};
</script>

<style>
.container-publish{
  width: 100%;
  height: 100vh;
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