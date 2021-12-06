<template>
  <section class="container-main">
    <!--
    <b-button @click="createPostModal()" variant="success" class="icon-post">
      <b-icon icon="camera"></b-icon>
    </b-button>
    -->
    <section v-if="errored">
      <p>Não estamos conseguindo acessar sua timeline no momento!</p>
    </section>

    <div v-else>
      <b-alert
        :show="editModal.eventoCreated"
        dismissible
        fade
        variant="success"
        >Evento salvo com sucesso!</b-alert
      >
      <b-alert :show="editModal.eventoEdited" dismissible fade variant="warning"
        >Evento editado com sucesso!</b-alert
      >
      <b-alert :show="editModal.eventoError" dismissible fade variant="error"
        >Erro com a operação de Evento</b-alert
      >
      <div v-if="loading">Carregando...</div>

      <section class="container-post-card">
        <ul>
          <li v-for="item in posts" :key="item.userId">
            <div class="container-post-card">
              <p>{{ item.title }}</p>
              <img v-bind:src="item.image" style="max-width: 550px;">
              <p>{{item.likes}} likes</p>
              <p>data de publicação: {{ item.datePublished }}</p>
              <hr style="color: white;" />
            </div>
          </li>
        </ul>
      </section>
      <!--<PostCard></PostCard> -->
    </div>
  </section>
</template>

<script>
//import PostCard from "@/components/PostCard";
// import axios from "axios";

export default {
  name: "Timeline",
  /*components: {
    PostCard
  },*/
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
  methods: {
    imprime(id) {
      console.log(id);
    },
    createPostModal() {
      this.editModal.title = "Crie um novo Post";
      //Callback para enviar o evento via POST
      this.editModal.callback = (event, data) => {
        this.$http
          .post("/api/post", data.evento_model)
          .then((response) => {
            //if (response.data.nome === data.editEventoData.nome) {
            console.log("Criado com sucesso!", response.data);
          })
          .catch((error) => {
            console.log(error);
            this.editModal.eventoError = true;
          })
          .finally(() => {});
      };
      this.editModal.eventoCreated = true;
      this.$root.$emit("bv::show::modal", this.editModal.id);
    },

    editEventoModal(evento) {
      //this.editModal.content = JSON.stringify(evento);
      this.editModal.title = 'Edite o post "' + evento.nome + '"';
      //Callback para editar o evento via PUT
      this.editModal.callback = (event, data) => {
        this.$http
          .put("/api/post", data.evento_model)
          .then((response) => {
            //if (response.data.nome === data.editEventoData.nome) {
            console.log("Editado com sucesso!", response.data);
            this.editModal.eventoEdited = true;
            //}
          })
          .catch((error) => {
            console.log(error);
            this.editModal.eventoError = true;
          })
          .finally(() => {});
      };
      this.$root.$emit("bv::show::modal", this.editModal.id);
    },

    resetEditModal() {
      this.editModal.eventoCreated = false;
      this.editModal.eventoEdited = false;
      this.editModal.callback = null;
      this.editModal.eventoError = false;
    },
    closeModal() {
      this.$bvModal.hide(this.editModal.id);
    },
  },
  mounted() {
    //axios
    this.$http
      //.get(url + eventPath)
      .get("/api/posts")
      .then((response) => {
        console.log(response);

        response.data.posts.forEach((item) => {
          this.posts.push(item);
          console.log("teste" + item);
        });
      })
      .catch((error) => {
        console.log("Error fetching in 'Meusposts' page: ", error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
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
</style>
