<template>
  <!--
  <section class="container-post-card">
    <b-img :src="image" fluid-grow alt="Fluid-grow image"></b-img>
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
  -->
  <section class="container-post-card">
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
  name: "PostCard",
  props: {
    evento: {
      title: String,
      image: String,
      datePublished: String,
      likes: Number,
    },
    modalTarget: String,
    callback: Function,
  },
  data() {
    return {
      editPostData: {
        post_model: {
          title: "title",
          image: "",
          //endereco: "" Ainda não envia!
        },
      },
    };
  },
  mounted() {
    if (this.evento) {
      this.editPostData.post_model.title = this.evento.title;
      this.editPostData.post_model.image = this.evento.image;
      this.editPostData.post_model.datePublished = new Date();
      this.editPostData.post_model.likes = this.evento.likes;
    }
    //this.post_model.endereco = Object.assign({}, this.evento.endereco);
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();

      this.callback(evt, this.editPostData);
      this.$emit("exit", true);

      // const url = "https://1d92fc4d-d759-40d0-9b59-369a1c08a054.mock.pstmn.io/";
      // const eventPath = "eventoacademico";

      // alert("Enviando..." + JSON.stringify(this.post_model));
      // axios
      //   .put(url + eventPath, this.post_model)
      //   .then(response => {
      //     alert("Evento alterado: " + response.data);
      //     this.$emit("exit", true);
      //   })
      //   .catch(error => {
      //     alert(error);
      //   });
    },
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
