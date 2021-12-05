<template>
  <section class="container-main">
    <b-button @click="createPostModal()" variant="success">
      <b-icon icon="camera"></b-icon>
    </b-button>
    <!--
    <section class="container-timeline">

      <post-card
        imgSrc="https://picsum.photos/300/150/?image=41"
        user="username"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntsed do eiusmod tempor incididunt... more "
        likes="100"
        postCategory="Turismo"
      ></post-card>
    </section>
    </section>  -->
      <section v-if="errored">
        <p>Não estamos conseguindo acessar sua timeline no momento!</p>
      </section>

    <div v-else>
      <b-alert
        :show="editModal.eventoCreated"
        dismissible
        fade
        variant="success"
      >Evento salvo com sucesso!</b-alert>
      <b-alert
        :show="editModal.eventoEdited"
        dismissible
        fade
        variant="warning"
      >Evento editado com sucesso!</b-alert>
      <b-alert
        :show="editModal.eventoError"
        dismissible
        fade
        variant="error"
      >Erro com a operação de Evento</b-alert>

      <div v-if="loading">Carregando...</div>

      <b-table v-else striped hover :items="posts" :fields="campos">
        <template v-slot:cell(editar)="linha">
          <b-button v-on:click="editEventoModal(linha.item)">Editar Post</b-button>
          </template>
      </b-table>
    </div>

    <!-- Edit modal -->
    <b-modal
      v-bind:id="editModal.id"
      size="xl"
      v-bind:title="editModal.title"
      v-on:hide="resetEditModal"
      ok-only
      ok-title="Cancelar"
    >
      <PostCard
        @exit="closeModal"
        :evento="editModal.content"
        :callback="editModal.callback"
        :modalTarget="editModal.id"
      ></PostCard>
    </b-modal>
  </div>
</section>
</template>

<script>
// import axios from "axios";
import PostCard from "@/components/PostCard";

export default {
  name: "Timeline",
  components: {
    PostCard
  },
  data() {
    return {
      posts: [],
      editModal: {
        id: "edit-modal",
        title: "Edite o Titulo Post",
        image: "Edite o link da imagem",
        datePublished: "2020-11-02",
        likes: "43",
        profileId: "01",
        callback: "",
        eventoCreated: false,
        eventoEdited: false,
        eventoError: false
      },
      errored: false,
      loading: true
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
          .then(response => {
            //if (response.data.nome === data.editEventoData.nome) {
            console.log("Criado com sucesso!", response.data);
            this.editModal.eventoCreated = true;
            //this.mounted();
            //}
          })
          .catch(error => {
            console.log(error);
            this.editModal.eventoError = true;
          })
          .finally(() => {});
      };

      this.$root.$emit("bv::show::modal", this.editModal.id);
    },

    editEventoModal(evento) {
      //this.editModal.content = JSON.stringify(evento);
      this.editModal.title = 'Edite o post "' + evento.nome + '"';
     

      //Callback para editar o evento via PUT
      this.editModal.callback = (event, data) => {
        this.$http
          .put("/api/post", data.evento_model)
          .then(response => {
            //if (response.data.nome === data.editEventoData.nome) {
            console.log("Editado com sucesso!", response.data);
            this.editModal.eventoEdited = true;
            //}
          })
          .catch(error => {
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
    }
  },
  mounted() {
    //axios
    this.$http
      //.get(url + eventPath)
      .get("/api/posts")
      .then(response => {
        response.data.forEach(item => {
          //Campos do endereço
          //acumulador para retornar os campos do endereço concatenados
          this.posts.push(item);
        });

        let tempCampos = Object.keys(response.data[0]);
        this.campos = tempCampos.slice(1, 6);
        this.campos.push("editar");
      })
      .catch(error => {
        console.log("Error fetching in 'Meusposts' page: ", error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
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
